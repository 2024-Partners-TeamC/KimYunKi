import React, { useState, useEffect } from 'react';
import { addMovie, updateMovie, getMovie } from './api';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MovieForm.css';

const MovieForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadMovie();
    }
  }, [id]);

  const loadMovie = async () => {
    try {
      const response = await getMovie(id);
      const movie = response.data;
      setTitle(movie.title);
      setRating(movie.rating || '');
      setGenre(movie.genre);
      setReleaseDate(new Date(movie.releasedAt));
      setEndDate(new Date(movie.endAt));
    } catch (error) {
      console.error('영화 로딩 에러', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !rating || !genre || !releaseDate || !endDate) {
      setError('페이지 정보를 모두 채워 주세요');
      return;
    }
    const movieData = { title, rating, genre, releasedAt: releaseDate, endAt: endDate };

    try {
      if (id) {
        await updateMovie(id, movieData);
      } else {
        await addMovie(movieData);
      }
      navigate('/');
    } catch (error) {
      console.error('저장 오류', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label>제목:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>평가:</label>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <div className="form-group">
        <label>장르:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">장르 선택</option>
          <option value="Thriller">스릴러</option>
          <option value="Romance">로멘스</option>
          <option value="Comic">코미디</option>
          <option value="Action">액션</option>
        </select>
      </div>
      <div className="form-group">
        <label>개봉일:</label>
        <DatePicker selected={releaseDate} onChange={(date) => setReleaseDate(date)} />
      </div>
      <div className="form-group">
        <label>상영 종료일:</label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <button type="submit" className="submit-button">저장</button>
    </form>
  );
};

export default MovieForm;
