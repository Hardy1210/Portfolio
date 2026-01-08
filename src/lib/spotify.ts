//Este archivo contiene una función que interactúa con la API de Spotify para obtener información
//detallada sobre la canción que un usuario está reproduciendo actualmente en su cuenta.
type SpotifyArtist = { name: string }
type SpotifyImage = { url: string }
type SpotifyAlbum = { name: string; images: SpotifyImage[] }
type SpotifyItem = {
  name: string
  album: SpotifyAlbum
  artists: SpotifyArtist[]
}

type SpotifyCurrentlyPlaying = { is_playing: boolean; item: SpotifyItem | null }

export type CurrentlyPlayingResult =
  | { isPlaying: false; error?: 'TOKEN_EXPIRED' | 'FORBIDDEN_OR_MISSING_SCOPE' }
  | {
      isPlaying: true
      title: string
      artist: string
      album: string
      albumImageUrl: string
    }

export const getCurrentlyPlaying = async (
  userToken: string,
): Promise<CurrentlyPlayingResult> => {
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: { Authorization: `Bearer ${userToken}` },
      cache: 'no-store',
    },
  )

  if (response.status === 204) return { isPlaying: false }
  if (response.status === 401)
    return { isPlaying: false, error: 'TOKEN_EXPIRED' }
  if (response.status === 403)
    return { isPlaying: false, error: 'FORBIDDEN_OR_MISSING_SCOPE' }

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Spotify error ${response.status}: ${text}`)
  }

  const data = (await response.json()) as SpotifyCurrentlyPlaying

  if (!data.item || !data.is_playing) return { isPlaying: false }

  return {
    isPlaying: true,
    title: data.item.name,
    artist: data.item.artists.map((a) => a.name).join(', '),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images?.[0]?.url ?? '',
  }
}

{
  /**este codigo funciona
  export const getCurrentlyPlaying = async (userToken: string) => {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
    )
  
    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false } // Si no hay música en reproducción
    }
  
    if (!response.ok) {
      throw new Error(
        `Error fetching currently playing track: ${response.statusText}`,
      )
    }
  
    const data = await response.json()
  
    if (!data.item || !data.is_playing) {
      return { isPlaying: false } // Si no hay datos válidos
    }
  
    const { name: title, album, artists } = data.item
  
    return {
      isPlaying: true,
      title: title || 'Unknown Track',
      artist: artists.map((artist: any) => artist.name).join(', '),
      album: album.name || 'Unknown Album',
      albumImageUrl: album.images?.[0]?.url || '',
    }
  }
  
   */
}
