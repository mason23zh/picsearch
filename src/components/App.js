import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  //Use Arrow function to bind 'this' to callback function
  //in order to avoid the 'undefined' issue
  onSearchSubmit = async (term) => {
    //HTTP Request with Axios
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitSearch={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
