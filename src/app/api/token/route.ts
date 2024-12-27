{
  /**
Propósito en Resumen:
Verifica si un token de acceso ya almacenado sigue siendo válido.
Si el token no es válido o ha expirado, realiza una solicitud a Spotify para obtener un nuevo token utilizando un refresh token.
Devuelve el token de acceso actualizado en formato JSON.
Usos Comunes:
Es útil para mantener la autenticación activa en integraciones con la API de Spotify sin necesidad de solicitar repetidamente autorización del usuario. */
}
/**
 * app/api/token/route.ts
 * Solicita un nuevo token SIEMPRE, sin guardar nada en memoria.
 */
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 1. Credenciales de Spotify
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error('Faltan variables de entorno de Spotify')
    }
    {
      /*SPOTIFY_TOKEN_URL=https://accounts.spotify.com/api/token */
    }
    // 2. Solicitar un nuevo token a Spotify
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
      //vamos a quitar esto pra hacer la prueba de una hora
      next: { revalidate: 0 },
    })
    //console.log(response)
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error al solicitar el token:', response.status, errorText)
      return NextResponse.json(
        { error: 'Failed to refresh token' },
        { status: response.status },
      )
    }

    // 3. Procesar la respuesta
    const data = await response.json()
    if (!data.access_token || !data.expires_in) {
      throw new Error('La respuesta del token no contiene datos válidos')
    }

    // 4. Retornar SIEMPRE un nuevo token
    return NextResponse.json({ access_token: data.access_token })
  } catch (error) {
    console.error('Error al manejar la solicitud del token:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
