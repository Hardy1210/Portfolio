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
  if (accessToken && expiryTime && Date.now() < expiryTime) {
    return NextResponse.json({ access_token: accessToken })
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN! // Debes obtenerlo al autorizar tu app.

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to refresh token' },
      { status: 500 },
    )
  }

  const data = await response.json()
  accessToken = data.access_token
  expiryTime = Date.now() + data.expires_in * 1000

  return NextResponse.json({ access_token: accessToken })
}
