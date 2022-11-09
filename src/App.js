import React, { useState } from "react";
import "./App.css";
import search from "./assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a21b179c";
const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchTerm) => {
    const response = await fetch(API_URL + "&s=" + searchTerm);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app">
      <h1>movie movie movie</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <img
          src={search}
          alt="simple search icon"
          onClick={() => {
            searchTerm && searchMovies(searchTerm);
          }}
        />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
