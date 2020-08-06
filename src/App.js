import React , {useState}from 'react';

import Header from './com/header/Header'
import Middle from './com/middleStuff/Middle'
import Bottom from './com/bottom/Bottom'

function App() {
  const [showTab, setShowTab] = useState ('0')

  function setTab (value) {
    setShowTab (value)
  }

console.log (showTab)
  return (
    <div className="App"
    >
      
      <Header />

      <Middle
        showTab = {showTab}
      />
    
      <Bottom 
        setTab = {setTab}
        showTab = {showTab}
      />
          
    </div>
  );
}

export default App;
