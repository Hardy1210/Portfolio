import Image from 'next/image'
import useSWR from 'swr'
import { SpotifyIcon } from '../icons/SpotifyIcon'

type CurrentlyPlaying = {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
}

export default function SpotifyNowPlaying() {
  // Define el fetcher para SWR
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
      },
    }).then((res) => res.json())

  // Usa SWR para obtener los datos y refrescar automáticamente cada 20 segundos
  const { data: currentlyPlaying, error } = useSWR<CurrentlyPlaying>(
    '/api/currently-playing',
    fetcher,
    {
      refreshInterval: 20000, // Actualiza cada 20 segundos
    },
  )

  // Debug: Verifica los datos que llegan desde la API
  console.log('Data from API:', currentlyPlaying)

  // Manejo de errores
  if (error) {
    console.error('Error fetching currently playing track:', error)
    return <p>Error al cargar la música actual.</p>
  }

  // Si no hay datos o no se está reproduciendo música
  if (!currentlyPlaying || !currentlyPlaying.isPlaying) {
    return <p>No estoy escuchando música en este momento !.</p>
  }

  // Renderizar la información de la canción
  return (
    <div className="relative p-1 gap-3 flex flew-row items-end overflow-hidden  w-60 h-28 bg-[#171717] rounded-lg">
      <Image
        src={currentlyPlaying.albumImageUrl || '/fallback-image.png'}
        alt={currentlyPlaying.album || 'Álbum desconocido'}
        width={160}
        height={160}
        className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto"
      />
      <Image
        src={currentlyPlaying.albumImageUrl || '/fallback-image.png'}
        alt={currentlyPlaying.album || 'Álbum desconocido'}
        width={170}
        height={170}
        className="absolute -top-3 blur-2xl -left-12 rounded-full animate-spin w-auto"
      />
      <SpotifyIcon
        width={40}
        className="z-10 m-0 text-[#FFFF] dark:text-[#00DA5A]"
      />
      <div className="flex flex-col z-10 bottom-1 right-2 text-neutral-50">
        <p
          className="font-bold text-sm"
          style={{
            textShadow:
              '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
          }}
        >
          {currentlyPlaying.title}
        </p>
        <p
          className="text-xs"
          style={{
            textShadow:
              '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
          }}
        >
          {currentlyPlaying.artist} - {currentlyPlaying.album}
        </p>
      </div>
    </div>
  )
}
