import React, { useState, useEffect } from 'react'

import TabInfo from './tabs/TabInfo'

import Tab0 from './tabs/Tab0'
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'

const Middle = (props) => {

	const [isShown, setShown] = useState (false)
	const [fetchError, setFetchError] = useState ('')
	const [globalLocalData, setGlobalLocalData] = useState ([])

	const [tabElement, setTabElement] = useState (<Tab0 setShown = {setShown} setFetchError = {setFetchError}/>)

	const [mainTab, setMainTab] = useState ('0')


	// SWITCH HANDLER
	useEffect (() => {
		if (!props.isVirgin) {
		switchHandler ()
	}}, [props.showTab])

	const sleep = (ms) => {
		return new Promise (resolve => setTimeout (resolve, ms))
	}

	async function switchHandler () {
		setShown (false)
		await sleep (400)
			setMainTab (props.showTab)
		await sleep (100)
		setShown (true)
	}

	// vars
	let mainTrans = '-100%'
	if (isShown) mainTrans = '0%'

	return (
		<div
			style = {{height: '79.61vh', position: 'fixed', top: '12.39vh', width: '100%'}}
		>	
			<div 
           	 	style = {{height: '100%', transform: `translateX(${mainTrans})`, transition: 'transform 0.4s ease-out', display: 'flex'}}
        	>	
				<TabInfo 
					tab = {mainTab}
				/>
			 	<Tab0 
			 		tab = {mainTab} 
			 		setShown = {setShown} 
			 		setFetchError = {setFetchError}
			 		setGlobal = {setGlobalLocalData}
			 	/>
			 	<Tab1 tab = {mainTab} />
			 	<Tab2
			 		tab = {mainTab} 
			 		localData = {globalLocalData}
			 	/>
			</div>
		</div>
	)
}

export default Middle