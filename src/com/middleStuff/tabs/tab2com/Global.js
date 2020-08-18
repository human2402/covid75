import React from 'react'

const Global = (prop) => {


	//VARS
	let mainTrans = '-100'
	if (prop.isOpen) mainTrans = '0'

	return (
		<div style = {{ transform: `translateY(${mainTrans}%)`, transition: 'transform 0.4s ease',
			height:'30vh', width: '100%', backgroundColor:'purple'}}>

		</div>
	)
}

export default Global