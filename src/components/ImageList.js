import React from "react";

const ImageList = (props) => {
  //map props(images obj) to a new array, display the url
  //put them into a new array 'img'
  const img = props.images.map((image) => {
    console.log(image.id);
    return (
      <div key={image.id}>
        <img src={image.urls.regular} />
      </div>
    );
  });

  //render img
  return <div>{img}</div>;
};

export default ImageList;
