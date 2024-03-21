const clientId = "6d480eb7bc7b4dc5b7e84d52c1432982";
const redirectUrl = "http://localhost:3000/";
let accessToken;

//selecting page elements

// async function
const Spotify = {
  getAccessToken() {
    try {
      if (accessToken) {
        return accessToken;
      }

      //check if access token  is in url
      const queryString = window.location.hash;
      const urlParams = new URLSearchParams(queryString);

      const access_token = urlParams.get("#access_token");
      const token_type = urlParams.get("token_type");
      const expires_in = urlParams.get("expires_in");

      if (access_token) {
        //Set accessToken to the value in the hash(access_token)
        accessToken = access_token;
        //timer is used to clear the access token if it has expired
        setTimeout(() => {
          accessToken = undefined;
          window.location.hash = "";
        }, expires_in * 1000);
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
    }
  },
};

export default Spotify;
