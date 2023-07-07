import styled from 'styled-components';

export const ContactsList = styled.ul`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    width: 400px;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  button {
    display: block;
    padding: 4px 15px;
    font-size: 14px;
    background-color: #f7f7f8;

    border: 1px solid #9191b4;
    border-radius: 5px;
  }
`;