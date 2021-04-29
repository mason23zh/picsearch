import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //map props(images obj) to a new array, display the url
  //put them into a new array 'img'
  const img = props.images.map((image) => {
    //adding key to the rooting element
    return <ImageCard key={image.id} image={image} />;
  });

  //render img
  return <div className="image-list">{img}</div>;
};

export default ImageList;
