import axios from "axios";
import UnsplashAuth from "../unsplashAuth";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: UnsplashAuth.getAuthClientID(),
  },
});
