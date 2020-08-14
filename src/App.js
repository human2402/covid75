import React , {useState}from 'react';

import Header from './com/header/Header'
import Middle from './com/middleStuff/Middle'
import Bottom from './com/bottom/Bottom'

function App() {
  const [infoOpen, setInfoOpen] = useState (false)

  const [isVirgin, setVirginity] = useState (true)
  const [showTab, setShowTab] = useState ('0')


  //HANDLERS
  function setTab (value) {
    if (isVirgin) (setVirginity (false))
    setShowTab (value)
  }

  function handleInfo () {
    if (infoOpen) setInfoOpen (false)
    if (!infoOpen) setInfoOpen (true)
  }

  //VARS
  let mainTransform = '0'
  let topDivTop = '-20vh' 
  if (infoOpen) {
    mainTransform = '20%'
    topDivTop = '0'
  }

  //STYLES
  const mainDivStyle = {
    transform: `translateY(${mainTransform})`,
    transition: 'transform 0.5s ease',
    height: '100vh',
    overflow: 'hidden'
  }

  return (
    <div className="App"
    > 
      <div style = {mainDivStyle}>
        <Header 
          infoOpen = {infoOpen}
          handleInfo = {handleInfo}
        />

        <Middle
          showTab = {showTab}
          isVirgin = {isVirgin}
        />
      
        <Bottom 
          setTab = {setTab}
          showTab = {showTab}
        />
      </div>
    </div>
  );
}

export default App;
