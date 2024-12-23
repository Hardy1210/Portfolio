{
  /**
Propósito en Resumen:
Verifica si un token de acceso ya almacenado sigue siendo válido.
Si el token no es válido o ha expirado, realiza una solicitud a Spotify para obtener un nuevo token utilizando un refresh token.
Devuelve el token de acceso actualizado en formato JSON.
Usos Comunes:
Es útil para mantener la autenticación activa en integraciones con la API de Spotify sin necesidad de solicitar repetidamente autorización del usuario. */
}
import { NextResponse } from 'next/server'

let accessToken: string | null = null
let expiryTime: number | null = null

export async function GET() {
  try {
    // Log del estado actual del token
    console.log('Estado actual del token:', {
      accessToken,
      expiryTime,
      currentTime: Date.now(),
    })

    // Verificar si el token aún es válido
    if (accessToken && expiryTime && Date.now() < expiryTime) {
      console.log('Token válido, devolviendo el existente.')
      return NextResponse.json({ access_token: accessToken })
    }

    // Configurar credenciales de Spotify
    const clientId = process.env.SPOTIFY_CLIENT_ID!
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!

    // Solicitar un nuevo token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`,
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    })

    // Manejar errores de la solicitud
    if (!response.ok) {
      console.error(
        'Error al solicitar el token:',
        response.status,
        await response.text(),
      )
      return NextResponse.json(
        { error: 'Failed to refresh token' },
        { status: response.status },
      )
    }

    // Procesar la respuesta del token
    const data = await response.json()
    //console.log('Respuesta del token:', data)

    // Guardar el nuevo token y el tiempo de expiración
    accessToken = data.access_token
    expiryTime = Date.now() + data.expires_in * 1000

    console.log('Nuevo token obtenido:', {
      accessToken,
      expiresIn: data.expires_in,
      expiryTime,
    })

    return NextResponse.json({ access_token: accessToken })
  } catch (error) {
    console.error('Error al manejar la solicitud del token:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
