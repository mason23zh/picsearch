import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import VideoSearchBarHook from "./VideoSearchBarHook";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import WikiSearch from "./WikiSearch";
import unsplash from "../api/unsplash";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [images, setImages] = useState([]);
  const [totalImages, setTotlaImages] = useState(0);
  const [videos, search] = useVideos("F1");

  const onImageSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(res.data.results);
    setTotlaImages(res.data.total);
  };

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

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
        <VideoSearchBarHook onVideoFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelect={(video) => {
                  setSelectedVideo(video);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
