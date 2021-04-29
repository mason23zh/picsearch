import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import UnsplashAuth from "../unsplashAuth";

class App extends React.Component {
  async onSearchSubmit(term) {
    //HTTP Request with Axios
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: UnsplashAuth.getAuthClientID(),
      },
    });

    console.log(res);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitSearch={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
