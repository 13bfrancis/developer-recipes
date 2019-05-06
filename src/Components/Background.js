import React from 'react';
import styled from 'styled-components';

import background from '../Images/background.jpg';

const Background = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  z-index: -5;
`;

export default ({ setIsLoading }) => (
  <Background onLoad={setIsLoading(false)} src={background} alt="Background" />
);
