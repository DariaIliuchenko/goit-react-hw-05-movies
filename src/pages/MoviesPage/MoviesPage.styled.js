import styled from "styled-components";
import { Link } from 'react-router-dom';
export const Input = styled.input`
  height: 40px;
  width: 350px;
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
  padding-left: 50px;
  background: transparent;
  

  font-size: 16px;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 438px;
  display: flex;
  padding: 10px;
  border: none;
  border-right: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  background-color: #203336;
  
`;
export const Form = styled.form`
  position: relative;
  justify-content: center;
  display: flex;
  
  
  
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding-left:0;
  justify-content: center;
  margin-top: 80px;
  
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
  width: 200px;
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

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  flex-grow: 1;
`;