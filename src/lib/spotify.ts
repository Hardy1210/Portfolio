//Este archivo contiene una función que interactúa con la API de Spotify para obtener información
//detallada sobre la canción que un usuario está reproduciendo actualmente en su cuenta.
interface SpotifyArtist {
  name: string
}

interface SpotifyAlbum {
  name: string
  images: { url: string }[]
}

interface SpotifyItem {
  name: string
  album: SpotifyAlbum
  artists: SpotifyArtist[]
}

interface SpotifyCurrentlyPlaying {
  is_playing: boolean
  item: SpotifyItem | null
}
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

  const data: SpotifyCurrentlyPlaying = await response.json()

  if (!data.item || !data.is_playing) {
    return { isPlaying: false } // Si no hay datos válidos
  }

  const { name: title, album, artists } = data.item

  return {
    isPlaying: true,
    title: title || 'Unknown Track',
    artist: artists.map((artist: SpotifyArtist) => artist.name).join(', '),
    album: album.name || 'Unknown Album',
    albumImageUrl: album.images?.[0]?.url || '',
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
