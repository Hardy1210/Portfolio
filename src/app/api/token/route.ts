{
  /**
Propósito en Resumen:
Verifica si un token de acceso ya almacenado sigue siendo válido.
Si el token no es válido o ha expirado, realiza una solicitud a Spotify para obtener un nuevo token utilizando un refresh token.
Devuelve el token de acceso actualizado en formato JSON.
Usos Comunes:
Es útil para mantener la autenticación activa en integraciones con la API de Spotify sin necesidad de solicitar repetidamente autorización del usuario. */
}
// app/api/token/route.ts
import { NextResponse } from 'next/server'

// Variables globales. OJO: en Vercel, pueden perderse si la función se "apaga".
let accessToken: string | null = null
let expiryTime: number | null = null

export async function GET() {
  try {
    console.log('Estado actual del token en memoria:', {
      accessToken,
      expiryTime,
      currentTime: Date.now(),
    })

    // 1. Verificar si el token sigue siendo válido
    if (accessToken && expiryTime && Date.now() < expiryTime) {
      console.log('Token válido, devolviendo el existente.')
      return NextResponse.json({ access_token: accessToken })
    }

    // 2. Credenciales de Spotify
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error('Faltan variables de entorno de Spotify')
    }

    // 3. Solicitar un nuevo token a Spotify
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
      // Deshabilita caché (opcional, por buena práctica)
      next: { revalidate: 0 },
    })

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

    // 4. Procesar la respuesta
    const data = await response.json()
    if (!data.access_token || !data.expires_in) {
      throw new Error('La respuesta del token no contiene datos válidos')
    }

    // 5. Guardar el nuevo token y el tiempo de expiración
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
