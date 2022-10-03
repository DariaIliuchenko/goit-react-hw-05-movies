import { useState, useEffect } from 'react';
import { fetchGetTrendMovies } from '../../servises/api';
import { Link, Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation()

  useEffect(() => {
    fetchGetTrendMovies().then(({ results }) => setMovies(results));
  }, []);
    


    return (
      
    <>
    <h1>Trending today</h1>
    <ul>
      {movies.map(({ title, id}) => <li key={id}>
          <Link to={`movies/${id}`} state={{from: location}}>{title}</Link>
        </li>)}
    </ul>
    <Outlet/>
    </>
  );
};

export default HomePage