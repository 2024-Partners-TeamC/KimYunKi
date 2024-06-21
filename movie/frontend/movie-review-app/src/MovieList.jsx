import React, { useState, useEffect } from 'react';
import { getMovies, deleteMovie } from './api';
import { Link, useNavigate } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [showing, setShowing] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await getMovies();
      setMovies(response.data);
    } catch (error) {
      console.error('로딩 오류', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      loadMovies();
    } catch (error) {
      console.error('삭제 오류', error);
    }
  };

  const filteredMovies = movies.filter(movie => {
    const isGenreMatch = genre ? movie.genre === genre : true;
    const isShowingMatch = showing === 'now' ? new Date(movie.endAt) > new Date() : showing === 'past' ? new Date(movie.endAt) <= new Date() : true;
    return isGenreMatch && isShowingMatch;
  });

  return (
    <div className="movie-list-container">
      <h1>영화 리스트</h1>
      <div className="filters">
        <div className="filter-group">
          <label>장르:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">전체</option>
            <option value="Thriller">스릴러</option>
            <option value="Romance">로멘스</option>
            <option value="Comic">코미디</option>
            <option value="Action">액션</option>
          </select>
        </div>
        <div className="filter-group">
          <label>상영 정보:</label>
          <select value={showing} onChange={(e) => setShowing(e.target.value)}>
            <option value="">전부</option>
            <option value="now">상영 중</option>
            <option value="past">상영 종료</option>
          </select>
        </div>
      </div>
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <Link to={`/movies/${movie.id}`} className="movie-title">{movie.title}</Link>
            <div className="movie-actions">
              <button onClick={() => navigate(`/edit-movie/${movie.id}`)}>수정</button>
              <button onClick={() => handleDelete(movie.id)}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/add-movie')} className="add-movie-button">영화 추가</button>
    </div>
  );
};

export default MovieList;
