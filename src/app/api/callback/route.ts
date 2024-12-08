import { NextResponse } from 'next/server'

const clientId = process.env.SPOTIFY_CLIENT_ID!
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
const redirectUri = process.env.SPOTIFY_REDIRECT_URI!

export async function GET(req: Request) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')

  if (!code) {
    return NextResponse.json(
      { error: 'Authorization code missing' },
      { status: 400 },
    )
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    }),
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to exchange token' },
      { status: 500 },
    )
  }

  const data = await response.json()

  // Aquí obtendrás el refresh_token y el access_token
  return NextResponse.json(data) // Devuelve los tokens al navegador (solo para pruebas).
}
