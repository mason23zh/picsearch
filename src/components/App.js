import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [], totalImageFound: null };
  //Use Arrow function to bind 'this' to callback function
  //in order to avoid the 'undefined' issue
  onSearchSubmit = async (term) => {
    //HTTP Request with Axios
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({
      images: res.data.results,
      totalImageFound: res.data.total,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitSearch={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <p>
          Display: {this.state.images.length} images <br />
          Total Images Found: {this.state.totalImageFound}
        </p>
      </div>
    );
  }
}

export default App;
