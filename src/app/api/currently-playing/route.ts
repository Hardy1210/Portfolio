//Este código define un endpoint en Next.js para obtener información en tiempo real
//sobre la canción que estás escuchando actualmente en Spotify. Es una parte clave
//de tu flujo de integración para mostrar esta información en tu portafolio.
export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const origin = new URL(request.url).origin

    // 1) Token desde TU endpoint (mismo origen: local o prod)
    const tokenResponse = await fetch(`${origin}/api/token`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-store' },
    })

    if (!tokenResponse.ok) {
      const txt = await tokenResponse.text()
      return NextResponse.json(
        { isPlaying: false, error: 'FAILED_TO_GET_TOKEN', details: txt },
        { status: 500 },
      )
    }

    const { access_token } = await tokenResponse.json()

    if (!access_token) {
      return NextResponse.json(
        { isPlaying: false, error: 'MISSING_ACCESS_TOKEN' },
        { status: 500 },
      )
    }

    // 2) Endpoint correcto de Spotify
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${access_token}` },
        cache: 'no-store',
      },
    )

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false })
    }

    if (response.status === 401) {
      const text = await response.text()
      return NextResponse.json(
        { isPlaying: false, error: 'TOKEN_EXPIRED', details: text },
        { status: 401 },
      )
    }

    if (!response.ok) {
      const text = await response.text()
      return NextResponse.json(
        {
          isPlaying: false,
          error: `SPOTIFY_${response.status}`,
          details: text,
        },
        { status: response.status },
      )
    }

    const data = await response.json()

    if (!data?.is_playing || !data?.item) {
      return NextResponse.json({ isPlaying: false })
    }

    return NextResponse.json({
      isPlaying: true,
      title: data.item.name,
      artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images?.[0]?.url || null,
      songUrl: data.item.external_urls?.spotify || null,
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { isPlaying: false, error: 'SERVER_ERROR' },
      { status: 500 },
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
