import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";

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
        >
          <Route
            path="movie-reviews"
            element={<MovieReviews></MovieReviews>}
          ></Route>
          <Route path="movie-cast" element={<MovieCast></MovieCast>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// Додай асинхронне завантаження JS-коду для маршрутів застосунку,
// використовуючи React.lazy та Suspense.
