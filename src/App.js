import React, { useState } from "react";
import "./App.css";
import search from "./assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a21b179c";
const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (searchTerm) => {
    if (searchTerm && searchTerm.length > 0) {
      const response = await fetch(API_URL + "&s=" + searchTerm);
      const data = await response.json();

      setMovies(data.Search);
    }
  };
  const [searchTerm, setSearchTerm] = useState();
  return (
    <div className="app">
      <h1>Bestest movie searcher</h1>

      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies(searchTerm);
          }}
        >
          <input
            type="text"
            placeholder="Search for movies..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit">
            <img src={search} alt="simple search icon" />
          </button>
        </form>
      </div>

      <div className="container">
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default App;
