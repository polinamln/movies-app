import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleClick = () => {
    setPage(page + 1);
  };

  function handleSubmit(values) {
    const query = values.searchInput;

    setMovie([]);
    params.set("movieValue", query);
    setParams(params);
  }

  useEffect(() => {
    async function getMovieByQuery() {
      try {
        if (params.size === 0) {
          return;
        }

        setLoading(true);
        setError(false);
        const queryParams = params.get("movieValue");

        const data = await getMovie(queryParams, page);

        setTotalPages(data.total_pages);

        setMovie((prevMovies) => {
          return [...prevMovies, ...data.results];
        });

        if (data.results.length === 0) {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (params !== "") {
      getMovieByQuery();
    }
  }, [params, page, setParams]);

  const inputMovieValue = params.get("movieValue") ?? "";

  function scrollTo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={css.container}>
      <SearchInput
        handleSubmit={handleSubmit}
        inputMovieValue={inputMovieValue}
      ></SearchInput>

      {loading && <h3 className={css.load}>Loading...</h3>}
      {!loading && !error && movie.length === 0 && (
        <h3 className={css.noMoviesText}>No movies found. Start searching!</h3>
      )}

      {error && (
        <h2 className={css.noMoviesText}>
          We didn`t find anything matching your request
        </h2>
      )}

      <MovieList movies={movie}></MovieList>
      {movie.length > 0 && page < totalPages && (
        <button className={css.btnLoad} onClick={handleClick}>
          Load more
        </button>
      )}

      <button onClick={scrollTo} className={css.btnScroll}>
        <IoIosArrowUp className={css.btnArrow} />
      </button>
    </div>
  );
}
