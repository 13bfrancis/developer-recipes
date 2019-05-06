import styled from 'styled-components';

const LinkButton = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  font-family: 'Roboto';
  font-size: 35px;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: transform 0.25s linear;
  margin: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

export default LinkButton;
