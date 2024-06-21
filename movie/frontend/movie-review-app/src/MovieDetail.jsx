import React, { useState, useEffect } from 'react';
import { getMovie, deleteMovie, getReviews, addReview } from './api';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    loadMovie();
    loadReviews();
  }, [id]);

  const loadMovie = async () => {
    try {
      const response = await getMovie(id);
      setMovie(response.data);
    } catch (error) {
      console.error('영화 로딩 오류', error);
    }
  };

  const loadReviews = async () => {
    try {
      const response = await getReviews(id);
      setReviews(response.data || []);
    } catch (error) {
      console.error('리뷰 로딩 오류', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      navigate('/');
    } catch (error) {
      console.error('영화 삭제 오류', error);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!reviewText || reviewRating < 1 || reviewRating > 5) {
      return;
    }
    const newReview = { comment: reviewText, movieID: parseInt(id), score: parseInt(reviewRating) };
    try {
      await addReview(newReview);
      setReviewText('');
      setReviewRating(1);
      loadReviews();  // 새 리뷰를 로드하여 표시
    } catch (error) {
      console.error('리뷰 추가 오류', error);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <h1>{movie.title}</h1>
      <p>장르: {movie.genre}</p>
      <p>상영 여부: {movie.isShowing ? '상영 중' : '상영 종료'}</p>
      <p>개봉일: {new Date(movie.releasedAt).toLocaleDateString()}</p>
      <p>사영 종료: {new Date(movie.endAt).toLocaleDateString()}</p>
      <div className="actions">
        <button onClick={() => navigate(`/edit-movie/${movie.id}`)} className="edit-button">수정</button>
        <button onClick={handleDelete} className="delete-button">삭제</button>
      </div>
      <div className="reviews-section">
        <h2>리뷰</h2>
        <form onSubmit={handleAddReview} className="review-form">
          <div className="form-group">
            <label>리뷰:</label>
            <input type="text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
          </div>
          <div className="form-group">
            <label>평가 점수:</label>
            <input type="number" value={reviewRating} onChange={(e) => setReviewRating(e.target.value)} min="1" max="5" />
          </div>
          <button type="submit" className="submit-button">Add Review</button>
        </form>
        {reviews.length > 0 ? (
          <ul className="reviews-list">
            {reviews.map((review) => (
              <li key={review.id} className="review-card">
                <div className="review-comment">{review.comment}</div>
                <div className="review-rating">{review.score} stars</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>영화 리뷰가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
