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
        setCurrentlyPlaying(data)
      } catch (error) {
        console.error('Error fetching currently playing track:', error)
      }
    }

    fetchCurrentlyPlaying()
    const interval = setInterval(fetchCurrentlyPlaying, 20000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {currentlyPlaying && currentlyPlaying.isPlaying ? (
        <div className="relative p-1 gap-3 flex flew-row items-end overflow-hidden  w-60 h-28 bg-[#171717] rounded-lg">
          <Image //primera imagen que se muestra
            src={currentlyPlaying.albumImageUrl || '/fallback-image.png'} // URL de respaldo
            alt={currentlyPlaying.album || 'Unknown album'}
            width={160} // Tamaño de la imagen
            height={160}
            className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto" // Clases adicionales
          />
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
      ) : (
        <div className="relative p-1 gap-3 flex flew-row items-end overflow-hidden  w-60 h-28 bg-[#171717] rounded-lg">
          <Image //primera imagen que se muestra
            src="/images/music_album/cat-sleeping.webp" // URL de respaldo
            alt="Unknown album"
            width={160} // Tamaño de la imagen
            height={160}
            className="absolute z-10 border-2 border-neutral-300 left-0 top-0 opacity-85 rounded-full animate-spin w-auto" // Clases adicionales
          />
          <Image //segunda imagen que tiene blur y va atras de la principal
            src="/images/music_album/cat-sleeping.webp" // URL de respaldo
            alt="Unknown album"
            width={170} // Tamaño de la imagen
            height={170}
            className="absolute -top-3 blur-2xl -left-12  rounded-full animate-spin w-auto" // Clases adicionales
          />
          <p
            className="text-xs text-neutral-50 z-10"
            style={{
              textShadow:
                '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
            }}
          >
            I&apos;m not listening to music right now!
          </p>
        </div>
      )}
    </>
  )
}
