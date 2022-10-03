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

export const Title = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid #ececec;
  margin-bottom: 30px;
  margin-top: 10px;
  padding-bottom: 20px;
`;