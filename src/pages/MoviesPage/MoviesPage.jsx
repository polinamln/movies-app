import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getMovieByQuery() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovie(searchQuery, page);

        setTotalPages(data.total_pages);

        setMovie((prevMovies) => {
          return [...prevMovies, ...data.results];
        });

        if (data.results.length === 0) {
          setSearchQuery("");
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (searchQuery !== "") {
      getMovieByQuery();
    }
  }, [searchQuery, page]);

  function handleSubmit(values, actions) {
    const query = values.searchInput;

    setMovie([]);
    setSearchQuery(query);
    changeSearchValue(query);
  }

  function changeSearchValue(newValue) {
    params.set("movieValue", newValue);
    setParams(params);
  }

  const inputMovieValue = params.get("movieValue") ?? "";

  console.log(params);

  return (
    <div className={css.container}>
      <SearchInput
        handleSubmit={handleSubmit}
        inputMovieValue={inputMovieValue}
      ></SearchInput>

      {loading && <h3 className={css.load}>Loading...</h3>}

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
    </div>
  );
}
