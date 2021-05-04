import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const ImageContent = (props) => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onImageSearchSubmit={this.onImageSearchSubmit} />
      <ImageList images={props.images} />
    </div>
  );
};

export default ImageContent;
