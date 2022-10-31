import Container from 'components/Container/Container';
import { useFetchReviews } from '../../hooks/useFetchReviews';
import { Item, H3, P } from './Reviews.styled';
import Section from 'components/Section/Section';
const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <Section>
      <Container>
        {reviews && (
          <>
            {reviews.results.length > 0 ? (
              <div>
                {reviews.results.map(({ id, author, content }) => {
                  return (
                    <Item key={id}>
                      <H3>{author}:</H3>
                      <P>"{content}"</P>
                    </Item>
                  );
                })}
              </div>
            ) : (
              <P>We don't have any reviews for this movie</P>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default Reviews;
