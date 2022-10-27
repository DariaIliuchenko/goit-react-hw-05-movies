import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 12px;
color: #000000;
font-weight: 500;

&.active {
    color: red;
}
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  background: rgb(255,245,246);
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
`;