import { StyledNavLink, List, Item } from './Navigation.styled';
export const Navigation = () => {
  return (
    <header>
      <List>
        <Item>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="movies">Search</StyledNavLink>
        </Item>
      </List>
    </header>
  );
};
