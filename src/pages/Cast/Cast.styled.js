import styled from 'styled-components';

export const Casts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  background: rgba(32,51,54,1);
  margin-bottom: 30px;
  align-items: baseline;
  padding-left: 0;
`;

export const Item = styled.li`
  margin: 10px;
  width: 140px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: space-around;
  color: #fff;
  
`;

export const Actor = styled.b`
  margin-bottom: 10px;
  margin-top: 10px;
  color: red;
  
  
`;

