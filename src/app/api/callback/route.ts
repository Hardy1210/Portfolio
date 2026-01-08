import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type SpotifyAuthCodeSuccess = {
  access_token: string
  token_type: 'Bearer'
  scope: string
  expires_in: number
  refresh_token?: string
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

export async function GET(req: Request) {
  try {
    const clientId = getEnv('SPOTIFY_CLIENT_ID')
    const clientSecret = getEnv('SPOTIFY_CLIENT_SECRET')
    const redirectUri = getEnv('SPOTIFY_REDIRECT_URI')

    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code missing' },
        { status: 400 },
      )
    }

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basic}`,
        'Cache-Control': 'no-store',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
      cache: 'no-store',
    })

    const text = await res.text()

    if (!res.ok) {
      let parsed: SpotifyTokenError | { raw: string }
      try {
        parsed = JSON.parse(text) as SpotifyTokenError
      } catch {
        parsed = { raw: text }
      }

      return NextResponse.json(
        { error: 'Failed to exchange token', details: parsed },
        { status: 500, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const data = JSON.parse(text) as SpotifyAuthCodeSuccess

    // ⚠️ Solo para debug: aquí sale refresh_token (si Spotify lo entrega).
    // Luego copia refresh_token a SPOTIFY_REFRESH_TOKEN y NO uses esta ruta públicamente.
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { error: 'CALLBACK_ERROR', details: message },
      { status: 500, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
