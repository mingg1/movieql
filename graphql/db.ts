import axios from 'axios';

const BASE_URL = 'https://yts.torrentbay.to/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit: number, rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: { limit, minimum_rating: rating },
  });
  return movies;
};

export const getMovie = async (id: string) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, { params: { movie_id: id } });
  return movie;
};

export const getSuggestions = async (id: string) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, { params: { movie_id: id } });
  return movies;
};
