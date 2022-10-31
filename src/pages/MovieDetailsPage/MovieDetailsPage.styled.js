import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const FilmDetail = styled.div`
  display: flex;
  margin-bottom: 30px;
  background: rgba(32,51,54,1);
`;

export const FilmInfo = styled.div`
  margin-left: 20px;
  padding: 0 10px;
  color: #fff;
`;

export const H1 = styled.h2`
  margin-bottom: 20px;
  color: red;
  
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  
  
`;

export const Text = styled.p`
  margin-bottom: 20px;
  max-width: 500px;
`;

export const Genre = styled.li`
  display: flex;
  margin-bottom: 3px;
`;

export const NavLinkAI = styled(NavLink)`
  display: flex;
  margin-bottom: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: red;
  }
`;

export const AddInfo = styled.div`
  margin-bottom: 10px;
  color: #fff;
  background: rgba(32,51,54,1);
  
`;

export const GoBack = styled.button`
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  height: 25px;
  color: #000;
  font-weight: 500;
`;

export const Container = styled.div`
  padding-left: 50px;
  padding-top: 20px;
  background: rgba(32,51,54,1);
  
`;