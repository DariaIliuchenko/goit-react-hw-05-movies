import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useFetchCast } from '../../hooks/useFetchCast';
import { Casts, Item, Actor } from './Cast.styled';
import avatar from "../../assets/img/avatar.jpg"
const Cast = () => {
  const cast = useFetchCast();

  return (
    <Section>
      <Container>
      {cast && (
        <>
          <Casts>
            {cast.cast.map(({ id, name, character, profile_path }) => {
              return (
                <Item key={id}>
                  {profile_path ? (
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`}  alt={name}/>
                  ) : (<img src={avatar} alt="avatar" width="140" height="210" />)}
                  <Actor>{name}</Actor>
                  <p>{character}</p>
                </Item>
              );
            })}
          </Casts>
        </>
      )}
    </Container>
    </Section>
  );
};

export default Cast