const clientId = "6d480eb7bc7b4dc5b7e84d52c1432982";
const redirectUrl = "http://localhost:3000/";
let accessToken;

const Spotify = {
  clearAccessToken() {
    accessToken = undefined;
    window.location.hash = "";
  },
  getAccessToken() {
    try {
      if (accessToken) {
        return accessToken;
      }

      //check if access token  is in url
      const queryString = window.location.hash;
      const urlParams = new URLSearchParams(queryString);

      const access_token = urlParams.get("#access_token");
      // const token_type = urlParams.get("token_type");
      const expires_in = urlParams.get("expires_in");

      if (access_token) {
        //Set accessToken to the value in the hash(access_token)
        accessToken = access_token;
        //timer is used to clear the access token if it has expired
        setTimeout(() => {
          this.clearAccessToken();
        }, expires_in * 1000);

        return accessToken;
      } else {
        //Get access token
        let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(clientId);
        url += "&scope=playlist-modify-public";
        url += "&redirect_uri=" + encodeURIComponent(redirectUrl);

        window.location = url;
      }
    } catch (error) {
      console.error(error);
      this.clearAccessToken();
    }
  },

  // term is the text that is being searched for
  async search(term) {
    try {
      const token = this.getAccessToken();
      const searchUri = `https://api.spotify.com/v1/search?q=${term}&type=track`;

      const searchResponse = await fetch(searchUri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!searchResponse.ok) {
        throw new Error("Spotify search failed!");
      }

      const searchJson = await searchResponse.json();

      const tracks = searchJson.tracks.items.map((item) => {
        return {
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          album: item.album.name,
          uri: item.uri,
        };
      });
      return tracks;
    } catch (error) {
      console.log(error);
      this.clearAccessToken();
    }
  },

  async savePlaylist(name, uriArray) {
    try {
      if (!name || uriArray.length < 1) {
        alert("Cannot save playlist!");
        return;
      }

      const token = this.getAccessToken();
      const headers = { Authorization: `Bearer ${token}` };

      const profileResponse = await fetch("https://api.spotify.com/v1/me", {
        headers: headers,
      });

      const profileJson = await profileResponse.json();

      const userId = profileJson.id;
      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        }
      );

      const createPlaylistJson = await createPlaylistResponse.json();

      const playlistId = createPlaylistJson.id;

      const addTracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ uris: uriArray }),
        }
      );

      const addTracksJson = await addTracksResponse.json();

      alert("Playlist Saved!");
      return addTracksJson;
    } catch (error) {
      console.log(error);
      this.clearAccessToken();
    }
  },
};

export default Spotify;
