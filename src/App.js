import React from 'react';

import LocalDataElement from './com/localData/LocalDataElement'

function App() {
  return (
    <div className="App">
      <header
        style = {{
          height: '10vh',margin: '10%',border: '2px gray solid',borderRadius: '25px',display: 'flex',justifyContent: 'space-around'
        }}
      >
        <h1
          style = {{
            lineHeight: '10vh', margin: 0
          }}
        >
          covid75
        </h1>
      </header>
    
          <LocalDataElement />
          
    </div>
  );
}

export default App;
