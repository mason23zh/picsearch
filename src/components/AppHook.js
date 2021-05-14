import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
//import VideoSearchBar from "./VideoSearchBar";
import VideoSearchBarHook from "./VideoSearchBarHook";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import WikiSearch from "./WikiSearch";
import unsplash from "../api/unsplash";
import youtube from "../api/youtube";

const AppHook = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [images, setImages] = useState([]);
  const [totalImages, setTotlaImages] = useState(0);

  useEffect(() => {
    onVideoTermSubmit("F1");
  }, []);

  const onImageSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(res.data.results);
    setTotlaImages(res.data.total);
  };

  //Youtube API call
  const onVideoTermSubmit = async (videoTerm) => {
    const res = await youtube.get("/search", {
      params: {
        q: videoTerm,
      },
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    console.log("FROM app", video);
    setSelectedVideo(video);
  };

  return (
    <div>
      <WikiSearch />
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onImageSearchSubmit={onImageSearchSubmit} />
        <ImageList images={images} />

        <p>
          Display: {images.length} images <br />
          Total Images Found: {totalImages}
        </p>
      </div>

      <div className="ui container" style={{ marginTop: "10px" }}>
        <VideoSearchBarHook onVideoFormSubmit={onVideoTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHook;
