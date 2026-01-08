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

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type SpotifyRefreshTokenSuccess = {
  access_token: string
  token_type: 'Bearer'
  scope?: string
  expires_in: number
}

type SpotifyTokenError = {
  error: string
  error_description?: string
}

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing env var: ${name}`)
  return value
}

export async function GET() {
  try {
    const clientId = getEnv('SPOTIFY_CLIENT_ID')
    const clientSecret = getEnv('SPOTIFY_CLIENT_SECRET')
    const refreshToken = getEnv('SPOTIFY_REFRESH_TOKEN')

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basic}`,
        'Cache-Control': 'no-store',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      cache: 'no-store',
    })

    const text = await res.text()

    if (!res.ok) {
      // Spotify devuelve JSON de error, pero a veces viene como string.
      let parsed: SpotifyTokenError | { raw: string }
      try {
        parsed = JSON.parse(text) as SpotifyTokenError
      } catch {
        parsed = { raw: text }
      }

      return NextResponse.json(
        { error: 'FAILED_TO_REFRESH', status: res.status, details: parsed },
        {
          status: 500,
          headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' },
        },
      )
    }

    const data = JSON.parse(text) as SpotifyRefreshTokenSuccess

    if (!data.access_token || !data.expires_in) {
      return NextResponse.json(
        { error: 'INVALID_TOKEN_RESPONSE', details: data },
        {
          status: 500,
          headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' },
        },
      )
    }

    return NextResponse.json(
      { access_token: data.access_token, expires_in: data.expires_in },
      { headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' } },
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { error: 'TOKEN_ROUTE_ERROR', details: message },
      { status: 500, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
