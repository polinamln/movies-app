import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//~ ------ components ------
import Navigation from "./components/Navigation/Navigation";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";

//~ ------ pages ------
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div>
      <Navigation></Navigation>

      <Suspense fallback={<h3 className="load">Loading...</h3>}>
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
      </Suspense>
    </div>
  );
}

export default App;
