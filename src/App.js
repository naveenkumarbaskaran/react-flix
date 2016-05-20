import React, { Component } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], query: '' };
  }

  componentDidMount() {
    this.fetchPopular();
  }

  fetchPopular() {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results }));
  }

  searchMovies(query) {
    if (!query) return this.fetchPopular();
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results, query }));
  }

  render() {
    return (
      <div className="app">
        <header><h1>react-flix</h1></header>
        <SearchBar onSearch={(q) => this.searchMovies(q)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
