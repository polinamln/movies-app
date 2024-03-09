import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getMovieByQuery() {
      try {
        const data = await getMovie(searchQuery);

        setMovie(data.results);
      } catch (e) {
        console.error(e);
      }
    }
    getMovieByQuery("");
  }, [searchQuery]);

  function handleSubmit(values, actions) {
    const query = values.searchInput;

    actions.resetForm();

    setSearchQuery(query);
  }

  console.log(movie);

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          searchInput: "",
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
            Search film
          </button>
        </Form>
      </Formik>

      <MovieList movies={movie}></MovieList>
    </div>
  );
}
