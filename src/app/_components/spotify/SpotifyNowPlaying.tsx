import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SpotifyIcon } from '../icons/SpotifyIcon'

type CurrentlyPlaying = {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  artistUrl?: string
  songUrl?: string
}

export default function SpotifyNowPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<CurrentlyPlaying | null>(null)
  const [lastPlayed, setLastPlayed] = useState<CurrentlyPlaying | null>(null)

  useEffect(() => {
    // Cargar la última canción reproducida desde sessionStorage al iniciar
    const savedLastPlayed = sessionStorage.getItem('lastPlayed')
    if (savedLastPlayed) {
      setLastPlayed(JSON.parse(savedLastPlayed))
    }

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

        if (isMounted) {
          if (data.isPlaying) {
            // Actualizamos la canción actual y guardamos en sessionStorage
            setCurrentlyPlaying(data)
            setLastPlayed(data)
            sessionStorage.setItem('lastPlayed', JSON.stringify(data))
          } else {
            // Si no hay canción en reproducción, usamos la última reproducida
            setCurrentlyPlaying(null)
          }
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

  const renderTrackInfo = (track: CurrentlyPlaying, isPlaying: boolean) => {
    const songUrl =
      track.songUrl ||
      `https://open.spotify.com/search/${encodeURIComponent(track.title || '')}`
    const artistUrl =
      track.artistUrl ||
      `https://open.spotify.com/search/${encodeURIComponent(track.artist || '')}`

    return (
      <div className="relative p-1 flex flex-row items-end overflow-hidden w-60 h-28 bg-[#171717] rounded-lg">
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
          <Image
            src={track.albumImageUrl || '/images/music_album/cat-sleeping.webp'}
            alt={track.album || 'Unknown album'}
            width={160}
            height={160}
            className={`absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full ${
              isPlaying ? 'animate-spin' : ''
            } w-auto`}
          />
        </a>
        <Image
          src={track.albumImageUrl || '/images/music_album/cat-sleeping.webp'}
          alt={track.album || 'Unknown album'}
          width={170}
          height={170}
          className={`absolute -top-3 blur-2xl -left-12 rounded-full ${
            isPlaying ? 'animate-spin' : ''
          } w-auto`}
        />
        <SpotifyIcon
          width={40}
          className="z-10 mr-2 text-[#FFFF] dark:text-[#00DA5A]"
        />
        <div className="flex flex-col z-10 text-neutral-50">
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
            {track.title || 'Unknown Title'}
          </a>
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
            {track.artist || 'Unknown Artist'} -{' '}
            {track.album || 'Unknown Album'}
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      {currentlyPlaying && currentlyPlaying.isPlaying ? (
        renderTrackInfo(currentlyPlaying, true)
      ) : lastPlayed ? (
        renderTrackInfo(lastPlayed, false)
      ) : (
        <div className="relative p-1 gap-3 flex flex-row items-end overflow-hidden w-60 h-28 bg-[#171717] rounded-lg">
          <Image
            src={'/images/music_album/cat-sleeping.webp'}
            alt="Last played album"
            width={160}
            height={160}
            className="absolute z-10 border-2 border-neutral-300 -left-28 top-0 opacity-85 rounded-full animate-spin w-auto"
          />
          <Image
            src={'/images/music_album/cat-sleeping.webp'}
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
            <p
              className="font-bold text-sm"
              style={{
                textShadow:
                  '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
              }}
            >
              Dernière chanson écoutée indisponible.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
