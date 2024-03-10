import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [params, setParams] = useSearchParams();

  const inputMovieValue = params.get("movieValue") ?? "";

  // console.log(params);

  function changeSearchValue(newValue) {
    params.set("movieValue", newValue);
    setParams(params);
    console.log(newValue);
  }

  useEffect(() => {
    async function getMovieByQuery() {
      try {
        const data = await getMovie(searchQuery);

        setMovie(data.results);
      } catch (e) {
        console.error(e);
      }
    }

    if (searchQuery !== "") {
      getMovieByQuery();
    }
  }, [searchQuery]);

  function handleSubmit(values, actions) {
    const query = values.searchInput;

    setSearchQuery(query);
    changeSearchValue(query);
  }

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          searchInput: inputMovieValue,
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            name="searchInput"
            autoFocus
            placeholder="Search movies..."
          ></Field>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>

      <MovieList movies={movie}></MovieList>
    </div>
  );
}
