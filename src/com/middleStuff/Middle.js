import React, { useState, useEffect } from 'react'

import Tab0 from './tabs/Tab0'

const Middle = (props) => {

	const [isShown, setShown] = useState (false)
	const [fetchError, setFetchError] = useState ('')

	// vars
	let mainTrans = '0%'
	if (!isShown) mainTrans = '-100%'

	return (
		<div
			style = {{height: '79.61vh', position: 'fixed', top: '12.39vh', width: '100%'}}
		>	
			<div 
           	 	style = {{height: '100%', transform: `translateX(${mainTrans})`, transition: 'transform 0.5s ease-out'}}
        	>	

				<Tab0 setShown = {setShown} setFetchError = {setFetchError}/>
				
				
				{fetchError !== '' && '<h5>{fetchError}</h5>'}
			</div>
			<button onClick = {() => setShown (prevShown => !prevShown)}>opa</button>
		</div>
	)
}

export default Middle