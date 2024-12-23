//Este código define un endpoint en Next.js para obtener información en tiempo real
//sobre la canción que estás escuchando actualmente en Spotify. Es una parte clave
//de tu flujo de integración para mostrar esta información en tu portafolio.
//export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

const SPOTIFY_API_URL = process.env.SPOTIFY_API_URL!

export async function GET() {
  // Manejo para el entorno de build lo puedes quitar si hay conflicos en produccion
  //es solo para que en npm run build no cause problemas
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PHASE === 'phase-production-build'
  ) {
    return NextResponse.json({
      isPlaying: false,
      title: 'Build mode - no live data',
      artist: 'N/A',
      album: 'N/A',
      albumImageUrl: '',
    })
  }
  /////////////////////////

  //No olvides cambiar esto en produccion poniendo el verdadero link del portfolio

  const tokenResponse = await fetch('https://www.hardylino.com/api/token', {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, private', // Deshabilitar caché en la solicitud al endpoint de token
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
    title: data.item.name as string,
    artist: (data.item.artists as { name: string }[])
      .map((artist) => artist.name)
      .join(', '),
    album: data.item.album.name as string,
    albumImageUrl: data.item.album.images?.[0]?.url as string,
  }

  return new NextResponse(JSON.stringify(currentlyPlaying), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, private', // Deshabilitar caché en el backend
    },
  })
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
