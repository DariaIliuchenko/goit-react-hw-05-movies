import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  list-style: none;
  padding-left:0;  
  justify-content: center;  
  background: rgba(32,51,54,1);

`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding: 6px;
  flex-grow: 1;
`;

export const ItemLink = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  width: 100%;
  height: 100%;
  transition: text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
`;

export const Item = styled.li`
  display: flex;
  width: 300px;
  text-align: center;
  border: 1px solid #000;
  border-radius: 0px 0px 4px 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.04);
    box-shadow: 0px 2px 27px -7px rgba(252,252,252,1);
    
  }
`;
