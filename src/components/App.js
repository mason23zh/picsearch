import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import VideoSearchBar from "./VideoSearchBar";
import unsplash from "../api/unsplash";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    images: [],
    totalImageFound: null,
    videoList: [],
    selectedVideo: null,
  };

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
  onVideoTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videoList: res.data.items });
  };

  render() {
    console.log(this.state.videoList);
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
        </div>
      </div>
    );
  }
}

export default App;
