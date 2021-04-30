import React from "react";

class VideoSearchBar extends React.Component {
  state = { videoSearchItem: "" };

  onInputChange = (e) => {
    this.setState({ videoSearchItem: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onVideoFormSubmit(this.state.videoSearchItem);
  };

  render() {
    return (
      <div className="video-search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.videoSearchItem}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default VideoSearchBar;
