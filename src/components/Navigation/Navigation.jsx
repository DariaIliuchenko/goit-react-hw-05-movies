import { StyledNavLink, List } from './Navigation.styled';
export const Navigation = () => {
  return (
    <header>
      <List>
        <li>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </li>
      </List>
    </header>
  );
};
