import React, { useEffect, useState } from 'react'

import {ReactComponent as Home} from '../icons/home.svg'
import {ReactComponent as Book} from '../icons/book.svg'
import {ReactComponent as MapI} from '../icons/map.svg'
import {ReactComponent as Stat} from '../icons/stat.svg'

const Bottom = (props) => {

	const [iconProps, setIconProps] = useState ([])

	//handle size
	useEffect (() => {
		handleSize ()
	}, [])

	const handleSize = () => {
		const bottomDiv = document.querySelector('.bottomDiv')
		const bottomHeight = bottomDiv.clientHeight
		const bottomWidth = bottomDiv.clientWidth/4
		let prioritySize = bottomHeight
		if (bottomWidth < bottomHeight) prioritySize = bottomWidth
		// calc size
		const iconSize = prioritySize/6 * 3
		// calc margin
		const iconMargin = (bottomHeight/2) - (iconSize/2)
		setIconProps([iconSize, iconMargin]) 
	}

	// handlers
	const handleTab = (event) => {
			if (event.target.attributes.name.value !== undefined) {
			props.setTab (event.target.attributes.name.value )
		}
	}

	// color handler
	let color0 = "#000000"
	if (props.showTab === '0') color0 = '#9b3f3f'
	let color1 = "#000000"
	if (props.showTab === '1') color1 = '#9b3f3f'
	let color2 = "#000000"
	if (props.showTab === '2') color2 = '#9b3f3f'
	let color3 = "#000000"
	if (props.showTab === '3') color3 = '#9b3f3f'


	// styles
	const spanStyle = {height: "100%", width: '33.33%', display: 'flex', justifyContent: 'space-around', cursor:'pointer', backgroundColor: 'transparent'}

	const iconStyle = {height: iconProps[0], width: iconProps[0], marginTop: iconProps[1], transition: 'fill 0.5s ease, stroke 0.5s ease'}

	return (
		<div style = {{height: '8vh', position: 'fixed', top: '92vh', width: '90%', marginLeft: '5%'}}>
			<div
				className = 'bottomDiv'
				style = {{height: "100%", width: '100%', backgroundColor: '#e0e0e0', borderRadius: '20px 20px 0 0', boxShadow: 'rgba(0, 0, 0, 0.2) 3px 3px 10px 0px, rgba(255, 255, 255, 1) -5px -5px 10px 0px'}}
			>
				<div style = {{height: '100%' ,display: 'flex', justifyContent: 'space-between', padding: '0 7%'}} >

					<span
						className = 'noSelect'
						style = {spanStyle}
						onClick = {handleTab}
						name = '0'
					>
						<Home style = {{...iconStyle, fill: color0, stroke: color0}} name = '0'/>
					</span>

					<span
						className = 'noSelect'
						style = {spanStyle}
						onClick = {handleTab}
						name = '1'
					>
						<Book style = {{...iconStyle, fill: color1, stroke: color1}} name = '1'/>
					</span>

					<span
						className = 'noSelect'
						style = {spanStyle}
						onClick = {handleTab}
						name = '2'
					>
						<Stat style = {{...iconStyle, fill: color2, stroke: color2}} name = '2'/>
					</span>

					

				</div>
			</div>
		</div>
	)
}

export default Bottom


//<span
//						className = 'noSelect'
//						style = {spanStyle}
//						onClick = {handleTab}
//						name = '3'
//					>
//						<MapI style = {{...iconStyle, fill: color3, stroke: color3}} name = '3'/>
//					</span>