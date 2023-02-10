import axios from "axios";

export const ApiInstance = axios.create({
    baseURL: "https://api.spotify.com/v1",
})