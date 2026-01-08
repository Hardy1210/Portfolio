//Este código define un endpoint en Next.js para obtener información en tiempo real
//sobre la canción que estás escuchando actualmente en Spotify. Es una parte clave
//de tu flujo de integración para mostrar esta información en tu portafolio.
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type SpotifyArtist = { name: string }
type SpotifyImage = { url: string }
type SpotifyAlbum = { name: string; images: SpotifyImage[] }
type SpotifyItem = {
  name: string
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  external_urls?: { spotify?: string }
}

type SpotifyCurrentlyPlayingResponse = {
  is_playing: boolean
  item: SpotifyItem | null
}

type TokenResponse = {
  access_token: string
  expires_in: number
}

function getOrigin(request: Request): string {
  const proto = request.headers.get('x-forwarded-proto') ?? 'https'
  const host =
    request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  if (!host) throw new Error('Missing host header')
  return `${proto}://${host}`
}

export async function GET(request: Request) {
  try {
    const origin = getOrigin(request)

    // 1) token desde tu backend (prod/local mismo)
    const tokenRes = await fetch(`${origin}/api/token`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-store' },
    })

    const tokenText = await tokenRes.text()

    if (!tokenRes.ok) {
      return NextResponse.json(
        { isPlaying: false, error: 'FAILED_TO_GET_TOKEN', details: tokenText },
        { status: 500, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const tokenData = JSON.parse(tokenText) as TokenResponse
    if (!tokenData.access_token) {
      return NextResponse.json(
        { isPlaying: false, error: 'MISSING_ACCESS_TOKEN' },
        { status: 500, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    // 2) llamada a Spotify
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
        cache: 'no-store',
      },
    )

    if (res.status === 204) {
      return NextResponse.json(
        { isPlaying: false },
        { headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const text = await res.text()

    if (res.status === 401) {
      return NextResponse.json(
        { isPlaying: false, error: 'TOKEN_EXPIRED', details: text },
        { status: 401, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    if (!res.ok) {
      return NextResponse.json(
        { isPlaying: false, error: `SPOTIFY_${res.status}`, details: text },
        { status: res.status, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const data = JSON.parse(text) as SpotifyCurrentlyPlayingResponse

    if (!data.is_playing || !data.item) {
      return NextResponse.json(
        { isPlaying: false },
        { headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const songUrl = data.item.external_urls?.spotify ?? null
    const albumImageUrl = data.item.album.images?.[0]?.url ?? null

    return NextResponse.json(
      {
        isPlaying: true,
        title: data.item.name,
        artist: data.item.artists.map((a) => a.name).join(', '),
        album: data.item.album.name,
        albumImageUrl,
        songUrl,
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' } },
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { isPlaying: false, error: 'SERVER_ERROR', details: message },
      { status: 500, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}

{
  /**este codigo funcion
  import { NextResponse } from 'next/server'

const SPOTIFY_API_URL = 'https://api.spotify.com/v1/me/player'

export async function GET() {
  const tokenResponse = await fetch('http://localhost:3000/api/token', {
    headers: {
      'Cache-Control': 'no-store', // Deshabilitar caché en la solicitud al endpoint de token
    },
  })

  const tokenData = await tokenResponse.json()

  if (!tokenData.access_token) {
    return NextResponse.json(
      { error: 'Missing Spotify Access Token' },
      { status: 500 },
    )
  }

  const accessToken = tokenData.access_token

  const response = await fetch(SPOTIFY_API_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Cache-Control': 'no-store', // Deshabilitar caché en la solicitud a Spotify
    },
  })

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }

  const data = await response.json()

  if (!data || !data.is_playing) {
    return NextResponse.json({ isPlaying: false })
  }

  const currentlyPlaying = {
    isPlaying: true,
    title: data.item.name,
    artist: data.item.artists.map((artist: any) => artist.name).join(', '),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images[0]?.url,
  }

  return new NextResponse(JSON.stringify(currentlyPlaying), {
    headers: {
      'Cache-Control': 'no-store', // Deshabilitar caché en el backend
    },
  })
}
  */
}
