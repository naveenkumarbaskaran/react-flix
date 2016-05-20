import React from 'react';

const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      src={movie.poster_path ? `${IMG_BASE}${movie.poster_path}` : '/placeholder.png'}
      alt={movie.title}
    />
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <span className="rating">{movie.vote_average}/10</span>
      <p>{movie.overview && movie.overview.substring(0, 120)}...</p>
    </div>
  </div>
);

export default MovieCard;
