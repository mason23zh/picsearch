import { useState, useEffect } from "react";
import youtube from "../api/youtube";

// eslint-disable-next-line no-unused-vars
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
