import MovieList from "../../components/MovieList/MovieList";
import { trendingMovies } from "../../api";
import { useEffect, useState } from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);
  return (
    <div className={css.component}>
      <h1 className={css.title}>
        <span className={css.titleSpan}>T</span>rending today
      </h1>
      <MovieList movies={movies}></MovieList>
    </div>
  );
}
