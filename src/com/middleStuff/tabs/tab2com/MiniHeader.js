import React, {useState, useEffect} from 'react'

import {ReactComponent as MicroIcon} from '../../../icons/modIcons/virus.svg'

const MiniHeader = (prop) => {

	const [cowHeight, setCovHeight] = useState ()

	useEffect (() => {
		const covDiv = document.querySelector('.cov19')
		const covHeight = covDiv.clientHeight
		setCovHeight (covHeight+'px')
	}, [prop.tab])

	return (
		<div>
			<div style = {{height: '3vh'}} />
			<div className = 'cov19' style = {{padding: '0 12% 0 11.5%', display: 'flex', justifyContent: 'space-between'}}>
				
				<p  style = {{lineHeight: cowHeight, fontSize: '4vh', color: '#8e0000', fontWeight: '600', margin: '0'}}>
					Covid-19
				</p>

				<MicroIcon style = {{height: '100%', width: '20%'}}/>
			</div>
		</div>
	)
}

export default MiniHeader