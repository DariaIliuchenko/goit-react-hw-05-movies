import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("../pages/Cast/Cast"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage/> } >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
    
};
