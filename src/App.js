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

  //STYLES
  const mainDivStyle = {
    transform: `translateY(0)`,
    transition: 'transform 0.5s ease',
    height: '100vh',
    overflow: 'hidden'
  }
  

  return (
    <div className="App"> 
      <div className = 'appInside'>
        <div style = {mainDivStyle}>
          <Header 
            setTab = {setTab}
            showTab = {showTab}            
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
      <div 
          style = {{borderRadius: '20px' ,margin: 'auto' ,boxShadow: '7px 7px 10px 0 rgba(0, 0, 0, 0.3), -7px -7px 10px 0 rgba(255, 255, 255, 1)'}}
          className = 'warner'
        >
          <h2 style = {{margin: '10vh', lineHeight: 1.3, fontWeight: '400'}}>Разрешение экрана не поддерживается.<br/>
            Попробуйте открыть сайт на большем устройстве. <br/>
            Или, если телефон повернут гаризотально, поверните его вертикально
          </h2>
        </div>
    </div>
  );
}

export default App;
