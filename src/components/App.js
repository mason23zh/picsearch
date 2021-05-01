import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import VideoSearchBar from "./VideoSearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import unsplash from "../api/unsplash";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    images: [],
    totalImageFound: null,
    videoList: [],
    selectedVideo: null,
  };

  componentDidMount() {
    //Default video search
    this.onVideoTermSubmit("F1");
  }

  //Use Arrow function to bind 'this' to callback function
  //in order to avoid the 'undefined' issue
  onImageSearchSubmit = async (term) => {
    //HTTP Request with Axios
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({
      images: res.data.results,
      totalImageFound: res.data.total,
    });
  };

  //Youtube API call
  onVideoTermSubmit = async (videoTerm) => {
    const res = await youtube.get("/search", {
      params: {
        q: videoTerm,
      },
    });
    this.setState({
      videoList: res.data.items,
      selectedVideo: res.data.items[0], //set default video
    });
  };

  onVideoSelect = (video) => {
    console.log("FROM app", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onImageSearchSubmit={this.onImageSearchSubmit} />
          <ImageList images={this.state.images} />
          <p>
            Display: {this.state.images.length} images <br />
            Total Images Found: {this.state.totalImageFound}
          </p>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <VideoSearchBar onVideoFormSubmit={this.onVideoTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videoList}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
