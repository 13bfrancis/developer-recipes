import React, { useState } from 'react';

import Background from './Components/Background';
import LinkButton from './UI/LinkButton';

import { useScreenSize } from './Hooks/useScreenSize';

function App() {
  const screenWidth = useScreenSize();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading && <h1>Loading</h1>}
      <Background setIsLoading={setIsLoading} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1
          style={{
            flexGrow: 1,
            marginLeft: '10px',
            color: 'white',
            width: '15rem',
            fontFamily: "'Rubik Mono One'",
            fontSize: '30px',
            textShadow: '1px 1px 3px black'
          }}
        >
          Developer <br /> Recipes <i className="fas fa-utensils" />
        </h1>
        {screenWidth > 650 ? (
          <>
            <LinkButton>Sign In</LinkButton>
            <LinkButton>Sign Up</LinkButton>
          </>
        ) : (
          <i
            className="fas fa-bars"
            style={{
              color: 'white',
              fontSize: '2.5rem',
              marginRight: '1rem',
              cursor: 'pointer'
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
