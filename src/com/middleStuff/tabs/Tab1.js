import React from 'react'

const Tab1 = (props) => {

	let mainDisplay = 'none'
	if (props.tab === '1') mainDisplay = 'block'

	return (
		<div
			style = {{
				position: 'relative', display: mainDisplay,
				height: '97%', width: '95%', margin: '0 auto', backgroundColor: '#e5e5e5',
				borderRadius: '33px', boxShadow: '-7px -7px 24px rgba(255,255,255,1), 7px 7px 24px rgba(0,0,0,0.2)'
		}}
		>
		 <h1 style = {{padding: 0, margin: 0}}>
		 	tab 1
		 </h1>
		</div> 
	)
}

export default Tab1