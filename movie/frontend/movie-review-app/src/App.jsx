import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import MovieForm from './MovieForm';
import Layout from './Layout';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/add-movie" element={<MovieForm />} />
          <Route path="/edit-movie/:id" element={<MovieForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
