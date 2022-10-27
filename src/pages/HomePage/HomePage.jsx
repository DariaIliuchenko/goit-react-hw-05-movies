import { useState, useEffect } from 'react';
import { fetchGetTrendMovies } from '../../servises/api';
import { useLocation } from 'react-router-dom';
import { Item, List, Title, ItemLink } from './HomePage.styled';
import { IMAGE_URL } from '../../servises/api';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchGetTrendMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <Section>
      <Container title="Trending today">
      
      <List>
        {movies.map(({ title, id, poster_path }) => (
          <Item key={id}>
            <ItemLink to={`movies/${id}`} state={{ from: location }}>
              {poster_path && (
                <img src={IMAGE_URL + 'w200' + poster_path} alt={title} />
              )}
              <Title>{title}</Title>
            </ItemLink>
          </Item>
        ))}
      </List>
      
    </Container>
    </Section>
  );
};

export default HomePage;
