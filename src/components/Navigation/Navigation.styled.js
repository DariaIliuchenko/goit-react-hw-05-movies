import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: red;
  }
`;

export const List = styled.ul`
  background: rgba(32, 51, 54, 1);
  display: flex;
  list-style: none;
  
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
export const Item = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.07);
    /* box-shadow: 0px 2px 27px -7px rgba(252,252,252,1); */
`;
