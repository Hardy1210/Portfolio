import Image from 'next/image' // Importa el componente de Next.js
import { useEffect, useState } from 'react'
import { SpotifyIcon } from '../icons/SpotifyIcon'

type CurrentlyPlaying = {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  artistUrl?: string
  songUrl?: string // URL de la canción
}

export default function SpotifyNowPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<CurrentlyPlaying | null>(null)
  const [lastPlayed, setLastPlayed] = useState<CurrentlyPlaying | null>(null) // Información de la última canción reproducida
  useEffect(() => {
    let isMounted = true

    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch(
          `/api/currently-playing?timestamp=${Date.now()}`,
          {
            headers: {
              'Cache-Control': 'no-store, no-cache, must-revalidate, private',
            },
          },
        )
        if (!response.ok) throw new Error('API request failed')
        const data = await response.json()
        //console.log()
        if (isMounted) setCurrentlyPlaying(data)
        if (data.isPlaying || data.title) {
          setLastPlayed(data) // Guardar el objeto completo
        }
      } catch (error) {
        console.error('Error fetching currently playing track:', error)
      }
    }

    fetchCurrentlyPlaying()
    const interval = setInterval(fetchCurrentlyPlaying, 20000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])
  // Construir las URLs dinámicamente
  const songUrl = currentlyPlaying?.title
    ? `https://open.spotify.com/search/${encodeURIComponent(currentlyPlaying.title)}`
    : null

  const artistUrl = currentlyPlaying?.artist
    ? `https://open.spotify.com/search/${encodeURIComponent(currentlyPlaying.artist)}`
    : null

  const lastPlayedSongUrl = lastPlayed?.title
    ? `https://open.spotify.com/search/${encodeURIComponent(lastPlayed.title)}`
    : null

  const lastPlayedArtistUrl = lastPlayed?.artist
    ? `https://open.spotify.com/search/${encodeURIComponent(lastPlayed.artist)}`
    : null
  return (
    <>
      {currentlyPlaying && currentlyPlaying.isPlaying ? (
        <div className="relative p-1 gap-3 flex flew-row items-end overflow-hidden  w-60 h-28 bg-[#171717] rounded-lg">
          {songUrl && (
            <a
              href={songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10"
            >
              <Image //primera imagen que se muestra
                src={currentlyPlaying.albumImageUrl || '/fallback-image.png'} // URL de respaldo
                alt={currentlyPlaying.album || 'Unknown album'}
                width={160} // Tamaño de la imagen
                height={160}
                className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto" // Clases adicionales
              />
            </a>
          )}
          <Image //segunda imagen que tiene blur y va atras de la principal
            src={currentlyPlaying.albumImageUrl || '/fallback-image.png'} // URL de respaldo
            alt={currentlyPlaying.album || 'Unknown album'}
            width={170} // Tamaño de la imagen
            height={170}
            className="absolute -top-3 blur-2xl -left-12  rounded-full animate-spin w-auto" // Clases adicionales
          />
          <SpotifyIcon
            width={40}
            className="z-10 m-0 text-[#FFFF] dark:text-[#00DA5A] "
          />
          <div className=" flex flex-col   z-10 bottom-1 right-2  text-neutral-50">
            {songUrl && (
              <a
                href={songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm hover:underline hover:text-[#00DA5A]"
                style={{
                  textShadow:
                    '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
                }}
              >
                {currentlyPlaying.title}
              </a>
            )}
            {artistUrl && (
              <a
                href={artistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline hover:text-[#00DA5A]"
                style={{
                  textShadow:
                    '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
                }}
              >
                {currentlyPlaying.artist} - {currentlyPlaying.album}
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="relative p-1 gap-3 flex flex-row items-end overflow-hidden w-60 h-28 bg-[#171717] rounded-lg">
          {lastPlayedSongUrl && (
            <a
              href={lastPlayedSongUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={
                  lastPlayed?.albumImageUrl ||
                  '/images/music_album/cat-sleeping.webp'
                }
                alt="Last played album"
                width={160}
                height={160}
                className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto"
              />
            </a>
          )}
          <Image
            src={
              lastPlayed?.albumImageUrl ||
              '/images/music_album/cat-sleeping.webp'
            }
            alt="Last played album"
            width={170}
            height={170}
            className="absolute -top-3 blur-2xl -left-12  rounded-full animate-spin w-auto"
          />
          <SpotifyIcon
            width={40}
            className="z-10 m-0 text-[#FFFF] dark:text-[#00DA5A] "
          />
          <div className="flex flex-col z-10 bottom-1 right-2 text-neutral-50">
            {lastPlayedSongUrl && (
              <a
                href={lastPlayedSongUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm hover:underline hover:text-[#00DA5A]"
                style={{
                  textShadow:
                    '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
                }}
              >
                {lastPlayed?.title || 'Last Played Song'}
              </a>
            )}
            {lastPlayedArtistUrl && (
              <a
                href={lastPlayedArtistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline hover:text-[#00DA5A]"
                style={{
                  textShadow:
                    '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
                }}
              >
                {lastPlayed?.artist || 'Unknown Artist'} -{' '}
                {lastPlayed?.album || 'Unknown Album'}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
