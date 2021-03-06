const clientId = '98bbb926c5524182bb0cc052854a8609';
const redirectUri = 'https://localhost:3000/';
let accessToken;

const Spotify = {
  getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
      else {
        let tokenMatch = window.location.href.match('/access_token=([^&]*)/');
        const expiresInMatch = window.location.href.match('/expires_in=([^&]*)/');
        if (tokenMatch && expiresInMatch) {
          tokenMatch = tokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken;
        }
        else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }
      }
    },

  search(term) {
    return (
      fetch(`https://api.spotify.com/v1/search?type=TRACK&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }))
        }
        else {
          return []
        }
      })
    )}
  }

export default Spotify;
