import axios from "axios";
const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "fa743197a56842809b5dd56cdf5d7787";
const redirectUri = encodeURIComponent("http://localhost:3000");
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})

export const setClientToken = (token) => {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}