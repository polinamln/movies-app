import { Link } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.li} key={movie.id}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          ></img>
          <Link className={css.item} to={`/movie_details_page/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
