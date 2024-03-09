import MovieList from "../../components/MovieList/MovieList";
import { trendingMovies } from "../../api";
import { useEffect, useState } from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div className={css.component}>
      <h1 className={css.title}>
        <span className={css.titleSpan}>T</span>rending today
      </h1>
      {loading && <h3 className={css.load}>Loading...</h3>}
      <MovieList movies={movies}></MovieList>
    </div>
  );
}
