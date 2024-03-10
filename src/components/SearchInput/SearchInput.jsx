import { Field, Formik, Form } from "formik";
import css from "./SearchInput.module.css";

export default function SearchInput({ handleSubmit, inputMovieValue }) {
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
            placeholder="Search movies..."
          ></Field>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
