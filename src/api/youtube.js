import axios from "axios";

const KEY = "AIzaSyDbA6WUJMRbUzBEB9PnzmyTvioWK2jm6Uo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
