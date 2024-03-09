import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function trendingMovies() {
  const response = await axios.get("trending/movie/day?language=en-US", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM5ODVmNDliMjVhNDdkZWUzYzUwOGI0MDY4ZGE4NyIsInN1YiI6IjY1ZWIzYjJkNWFiYTMyMDE4NjczNzM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fz3LQj9RAfC21npttrPIyK9-1bKdMmnngZk19U_oCg",
    },
    params: {},
  });

  return response.data.results;
}

export async function movieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM5ODVmNDliMjVhNDdkZWUzYzUwOGI0MDY4ZGE4NyIsInN1YiI6IjY1ZWIzYjJkNWFiYTMyMDE4NjczNzM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fz3LQj9RAfC21npttrPIyK9-1bKdMmnngZk19U_oCg",
    },
    params: {},
  });

  return response.data;

  // console.log(response.data);
}

export async function movieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM5ODVmNDliMjVhNDdkZWUzYzUwOGI0MDY4ZGE4NyIsInN1YiI6IjY1ZWIzYjJkNWFiYTMyMDE4NjczNzM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fz3LQj9RAfC21npttrPIyK9-1bKdMmnngZk19U_oCg",
    },
    params: {},
  });

  return response.data;

  // console.log(response.data);
}

export async function getMovie(query) {
  const response = await axios.get("search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM5ODVmNDliMjVhNDdkZWUzYzUwOGI0MDY4ZGE4NyIsInN1YiI6IjY1ZWIzYjJkNWFiYTMyMDE4NjczNzM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fz3LQj9RAfC21npttrPIyK9-1bKdMmnngZk19U_oCg",
    },
    params: {
      query: query,
      page: 1,
    },
  });

  return response.data;
}
