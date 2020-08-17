import React from 'react'

import Local from './tab3com/Local.js'

const Tab2 = (props) => {
	
	let mainDisplay = 'none'
    if (props.tab === '2') mainDisplay = 'block'

	return (
		<div
			style = {{
				display: mainDisplay,
				height: '97%', width: '95%', margin: '0 auto', backgroundColor: '#e5e5e5',
				borderRadius: '33px', boxShadow: '-7px -7px 24px rgba(255,255,255,1), 7px 7px 24px rgba(0,0,0,0.2)',
				overflow: 'hidden'
			}}
		>
			<Local
			 	data = {props.localData} 
			/>
		</div>
	)
}

export default Tab2