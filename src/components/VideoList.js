import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedVideoList = props.videos.map((v) => {
    return (
      <div key={v.id.videoId}>
        <VideoItem onVideoSelect={props.onVideoSelect} video={v} />
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedVideoList}</div>;
};

export default VideoList;
