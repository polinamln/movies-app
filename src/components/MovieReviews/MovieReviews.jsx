import { useEffect, useState } from "react";
import { movieReviews } from "../../api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

export default function MovieRewiews() {
  const [movieReview, setMovieReview] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieRewiew() {
      try {
        setLoading(true);
        const data = await movieReviews(movieId);
        setMovieReview(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieRewiew();
  }, [movieId]);

  console.log(movieReview);

  return (
    <div>
      {loading && <h3 className={css.load}>Loading...</h3>}

      {movieReview.length === 0 ? (
        <p className={css.noReviews}>No reviews available</p>
      ) : (
        <ul className={css.list}>
          {movieReview.map((review) => (
            <li className={css.item} key={review.id}>
              <h2 className={css.name}>{review && review.author}</h2>
              <p className={css.p}>{review && review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
