import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.li} key={movie.id}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          ></img>
          <Link
            state={location}
            className={css.item}
            to={`/movie_details_page/${movie.id}`}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// отызы справа сбоку
