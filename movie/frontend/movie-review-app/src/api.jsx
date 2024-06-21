import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';  // Replace with your actual API URL

export const getMovies = () => axios.get(`${API_URL}/movies`);
export const getMovie = (id) => axios.get(`${API_URL}/movies/${id}`);
export const addMovie = (movie) => axios.post(`${API_URL}/movies`, movie);
export const updateMovie = (id, movie) => axios.put(`${API_URL}/movies/${id}`, movie);
export const deleteMovie = (id) => axios.delete(`${API_URL}/movies/${id}`);

export const getReviews = (movieId, scoreCap = 1) => axios.get(`${API_URL}/reviews`, { params: { movieId, scoreCap } });
export const addReview = (review) => axios.post(`${API_URL}/reviews`, review);