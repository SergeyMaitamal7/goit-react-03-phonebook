import styled from 'styled-components';

export const List = styled.ul`
  max-width: 480px;
  padding: 0;
  margin: 0;
  padding-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: violet;
  cursor: pointer;
`;
