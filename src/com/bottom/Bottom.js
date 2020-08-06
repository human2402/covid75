import React, { useEffect, useState } from 'react'

import {ReactComponent as Home} from '../icons/home.svg'
import {ReactComponent as Book} from '../icons/book.svg'
import {ReactComponent as MapI} from '../icons/map.svg'
import {ReactComponent as Stat} from '../icons/stat.svg'

const Bottom = (props) => {

	const [iconProps, setIconProps] = useState ([])
	const [opa, setOpa] = useState (true)

	//handle size
	useEffect (() => {
		handleSize ()
		colorHandler ()
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
	useEffect (() => {
		colorHandler()
	}, [props.showTab])

	let iconFill = ['#000000', '#000000','#000000','#000000']

	const colorHandler = () => {
		let choosenTab = props.showTab
		choosenTab = parseInt(choosenTab)
		iconFill[choosenTab] = '#9b3f3f'
		console.log (iconFill)
	}


	// styles
	const spanStyle = {height: "100%", width: '25%', display: 'flex', justifyContent: 'space-around'}

	const iconStyle = {height: iconProps[0], marginTop: iconProps[1]}

	return (
		<div style = {{height: '8vh', position: 'fixed', top: '92vh', width: '90%', marginLeft: '5%'}}>
			<div
				className = 'bottomDiv'
				style = {{height: "100%", width: '100%', backgroundColor: '#e0e0e0', borderRadius: '20px 20px 0 0', boxShadow: 'rgba(0, 0, 0, 0.2) 3px 3px 10px 0px, rgba(255, 255, 255, 0.8) -3px -3px 10px 0px'}}
			>
				<div style = {{display: 'flex', justifyContent: 'space-between', padding: '0 6%'}} >

					<span
						style = {spanStyle}
						onClick = {handleTab}
						name = '0'
					>
						<Home style = {{...iconStyle, fill: iconFill[0]}} name = '0'/>
					</span>

					<span
						style = {spanStyle}
						onClick = {handleTab}
						name = '1'
					>
						<Book style = {{...iconStyle, fill: iconFill[1]}} name = '1'/>
					</span>

					<span
						style = {spanStyle}
						onClick = {handleTab}
						name = '2'
					>
						<MapI style = {{...iconStyle, fill: iconFill[2]}} name = '2'/>
					</span>

					<span
						style = {spanStyle}
						onClick = {handleTab}
						name = '3'
					>
						<Stat style = {{...iconStyle, fill: iconFill[3]}} name = '3'/>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Bottom