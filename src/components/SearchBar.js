import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Array function will bind 'this' to the instance of the SearchBar class
  onFormSubmit = (event) => {
    event.preventDefault();
    //reference props in class based component as 'this.props'
    this.props.onSubmitSearch(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
