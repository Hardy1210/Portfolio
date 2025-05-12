//Este código define un endpoint en Next.js para obtener información en tiempo real
//sobre la canción que estás escuchando actualmente en Spotify. Es una parte clave
//de tu flujo de integración para mostrar esta información en tu portafolio.
export const dynamic = 'force-dynamic' // Fuerza la regeneración en cada solicitud
import { NextResponse } from 'next/server'

//const SPOTIFY_API_URL = process.env.SPOTIFY_API_URL!
{
  /*SPOTIFY_API_URL=https://api.spotify.com/v1/me/player */
}
export async function GET() {
  try {
    // Obtener token válido desde el endpoint /api/token
    const tokenResponse = await fetch('/api/token', {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
      },
    })
    if (!tokenResponse.ok) {
      throw new Error(`Failed to get token: ${await tokenResponse.text()}`)
    }
    //console.log(tokenResponse)
    const tokenData = await tokenResponse.json()
    //console.log(tokenData)
    if (!tokenData.access_token) {
      console.error('No se recibió un token de acceso válido!.')
      return NextResponse.json(
        { error: 'Missing Spotify Access Token' },
        { status: 500 },
      )
    }

    const accessToken = tokenData.access_token
    //console.log(accessToken)
    // Solicitar la canción actual actualmente token no es validoo
    const SPOTIFY_API_URL =
      process.env.SPOTIFY_API_URL || 'https://api.spotify.com/v1/me/player'
    const response = await fetch(`${SPOTIFY_API_URL}?timestamp=${Date.now()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
        Pragma: 'no-cache',
      },
    })
    //console.log(response)
    //mensaje sale envercel tambien
    if (!response.ok || response.status === 204) {
      console.error(
        'Error al obtener datos de Spotify:',
        response.status,
        await response.text(),
      )
      return NextResponse.json({ isPlaying: false })
    }

    const data = await response.json()
    //console.log(data)
    if (!data || !data.is_playing) {
      return NextResponse.json({ isPlaying: false })
    }

    return NextResponse.json({
      isPlaying: true,
      title: data.item.name,
      artist: data.item.artists
        .map((artist: { name: string }) => artist.name)
        .join(', '),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images[0]?.url || null,
    })
  } catch (error) {
    console.error('Error en /api/currently-playing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from Spotify!' },
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
