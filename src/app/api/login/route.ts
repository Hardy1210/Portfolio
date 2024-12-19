//Genera una URL de autenticación de Spotify con los
// permisos (scopes) necesarios para la aplicación
const clientId = process.env.SPOTIFY_CLIENT_ID!
const redirectUri = process.env.SPOTIFY_REDIRECT_URI!

export function GET() {
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state',
  ].join(' ')

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes,
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`

  return new Response(null, {
    status: 302,
    headers: { Location: spotifyAuthUrl },
  })
}
