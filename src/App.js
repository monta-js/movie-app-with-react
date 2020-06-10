import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { moviesData } from "./Components/moviesData";
import Search from "./Components/SearchMovie/Search";
import MoviesList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";

import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      name: name,
      rating: rating,
      image: image,
      date: date,
      description: description
    };
    return setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse row justify-content-between" id="navbarSupportedContent">
  <AddMovie
        addMovie={addMovie}
        setName={setName}
        setRating={setRating}
        setImage={setImage}
        setDate={setDate}
        setDescription={setDescription}
      />
    <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
  </div>
</nav>
      <MoviesList
        moviesData={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
    </div>
  );
}

export default App;
