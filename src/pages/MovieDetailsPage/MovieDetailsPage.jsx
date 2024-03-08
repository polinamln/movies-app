import { useEffect, useState } from "react";
import { movieDetails } from "../../api";
import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetail() {
      try {
        setLoading(true);
        const data = await movieDetails(movieId);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetail();
  }, [movieId]);

  if (!movieDetail) {
    return <h3>Loading...</h3>;
  }
  console.log(movieDetail);

  return (
    <div className={css.container}>
      <div className={css.section}>
        {loading && <h3>Loading...</h3>}
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className={css.img}
        />
        <div>
          <h3 className={css.title}>{movieDetail.title}</h3>
          <p className={css.date}>{movieDetail.release_date}</p>
          <p className={css.tagline}>{movieDetail.tagline}</p>
          <h4 className={css.genres}>Genres</h4>
          <ul className={css.genresList}>
            {movieDetail.genres.map((genre) => {
              return (
                <li className={css.genre} key={movieDetail.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className={css.overview}>{movieDetail.overview}</p>
    </div>
  );
}
