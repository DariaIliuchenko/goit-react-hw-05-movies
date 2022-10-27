import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Button, Form, List, Item, ItemLink, Title} from "./MoviesPage.styled"
import { fetchSearchMovieByWord } from '../../servises/api';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { BsSearch } from 'react-icons/bs';
import { IMAGE_URL } from '../../servises/api';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('search');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements[0].value;
    setSearchParams({ search: query });
    form.reset();
  };

  useEffect(() => {
    if (!querySearch) return;
    fetchSearchMovieByWord(querySearch).then(setSearchMovie);
  }, [querySearch]);

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="text"
            name="query"
            placeholder="Search movie"
            autoComplete="off" />
          <Button type="submit"><BsSearch size="24" color="red" /></Button>
        </Form>
        <List>
          {searchMovie &&
            searchMovie.map(({ id, title, poster_path }) => (
              
              <Item key={id}>
                <ItemLink to={`/movies/${id}`} state={{ from: location }}>
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
export default MoviesPage;
