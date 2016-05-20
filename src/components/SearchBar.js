import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.text);
  }

  render() {
    return (
      <form className="search-bar" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search movies..."
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
