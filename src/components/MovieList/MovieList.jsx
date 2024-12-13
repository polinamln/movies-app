import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  console.log(location.current);

  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li className={css.li} key={movie.id}>
            {movie.poster_path === null ? (
              <div className={css.noPhoto}>
                <p className={css.noPhotoText}>No photo available</p>
              </div>
            ) : (
              <Link
                state={location}
                className={css.item}
                to={`/movies/${movie.id}`}
              >
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                ></img>
                {movie.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
