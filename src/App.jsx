import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies_page" element={<MoviesPage />}></Route>
        <Route
          path="/movie_details_page/:movieId"
          element={<MovieDetailsPage></MovieDetailsPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
