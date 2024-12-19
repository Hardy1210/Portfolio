import Image from 'next/image' // Importa el componente de Next.js
import { useEffect, useState } from 'react'
import { SpotifyIcon } from '../icons/SpotifyIcon'

type CurrentlyPlaying = {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
}

export default function SpotifyNowPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<CurrentlyPlaying | null>(null)

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch('/api/currently-playing', {
          headers: { 'Cache-Control': 'no-store' }, // Evita caché del navegador
        })
        const data = await response.json()
        setCurrentlyPlaying(data)
        //console.log('Current song:', data)
      } catch (error) {
        //console.error('Error fetching currently playing track:', error)
      }
    }

    fetchCurrentlyPlaying()

    // Configura el intervalo para actualizar cada 10 segundos
    const interval = setInterval(fetchCurrentlyPlaying, 20000)
    return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
  }, [])

  if (!currentlyPlaying || !currentlyPlaying.isPlaying) {
    return <p>No estoy escuchando música en este momento.</p>
  }

  return (
    <div className="relative p-1 gap-3 flex flew-row items-end overflow-hidden  w-60 h-28 bg-[#171717] rounded-lg">
      <Image //primera imagen que se muestra
        src={currentlyPlaying.albumImageUrl || '/fallback-image.png'} // URL de respaldo
        alt={currentlyPlaying.album || 'Álbum desconocido'}
        width={160} // Tamaño de la imagen
        height={160}
        className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto" // Clases adicionales
      />
      <Image //segunda imagen que tiene blur y va atras de la principal
        src={currentlyPlaying.albumImageUrl || '/fallback-image.png'} // URL de respaldo
        alt={currentlyPlaying.album || 'Álbum desconocido'}
        width={170} // Tamaño de la imagen
        height={170}
        className="absolute -top-3 blur-2xl -left-12  rounded-full animate-spin w-auto" // Clases adicionales
      />
      <SpotifyIcon
        width={40}
        className="z-10 m-0 text-[#FFFF] dark:text-[#00DA5A] "
      />
      <div className=" flex flex-col   z-10 bottom-1 right-2  text-neutral-50">
        <p
          className="font-bold text-sm "
          style={{
            textShadow:
              '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
          }}
        >
          {currentlyPlaying.title}
        </p>
        <p
          className="text-xs "
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
