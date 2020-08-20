import React, {useState, useEffect} from 'react'

import MiniHeader from './tab2com/MiniHeader'

import {ReactComponent as Trangle} from '../../icons/triangle.svg'

import Global from './tab2com/Global'
import Local from './tab2com/Local.js'

const Tab2 = (props) => {

	const [isLocalOpen, setLocalOpen] = useState (false)
	const [isGlobalOpen, setGlobalOpen] = useState (false)
	
	useEffect (() => {
		setLocalOpen (false)
		setGlobalOpen (false)
	}, [props.tab])

    //HANDLERS
	const handleLocal = () => {
		setLocalOpen (prevLocalOpen => !prevLocalOpen)
	}
	const handleGlobal = () => {
		setGlobalOpen (prevGlobalOpen => !prevGlobalOpen)
	}

    //VARS
    let mainDisplay = 'none'
    if (props.tab === '2') mainDisplay = 'block'

	let localTriangTrans = '0'
	let localDivHeight = '0%'
	if (isLocalOpen) {
		localTriangTrans = '90'
		localDivHeight = '100%'
	}

	let globalTriangTrans = '0'
	let globalDivHeight = '0'
	if (isGlobalOpen) {
		globalTriangTrans = '90'
		globalDivHeight = '100%'
	}

	let ofScroll = 'hidden' 
	if (isGlobalOpen | isLocalOpen) {
		ofScroll = 'scroll'
	}
	
    // STYLES
	const dropDivS = {
		margin: '0.5vh 0 3vh 0'
		
	}
	const dropTopS ={
		padding: '5% 10.5%',
		display: 'flex',
		cursor: 'pointer'
	}

	const triangleS = {
		height: '100%',
		
		transition: 'transform 0.3s ease'
	}
	const topPS = {
		margin: '0',
		fontSize: '4vh',
		fontWeight: '400'
	}


	return (
		<div
			style = {{
				display: mainDisplay,
				height: '97%', width: '95%', margin: '0 auto', backgroundColor: '#e5e5e5',
				borderRadius: '33px', boxShadow: '-7px -7px 24px rgba(255,255,255,1), 7px 7px 24px rgba(0,0,0,0.2)',
				overflow: 'hidden', overflowY: ofScroll
			}}
		>

			<MiniHeader tab = {props.tab}/>
			<div style = {dropDivS}>
				<div style = {dropTopS} onClick = {handleGlobal} className = 'noSelect'>
					<div style = {{width: '15%'}}>
						<Trangle style = {{...triangleS, transform: `rotate(${globalTriangTrans}deg)`}}/>
					</div>
					<p style = {topPS}>В Мире</p>
				</div>
				<div style = {{overflow: 'hidden', height: globalDivHeight}}>
					<Global
						isOpen = {isGlobalOpen} 
				 		localData = {props.localData} 
					/>
				</div>

				<div style = {{height: '3px', width: '77%', margin: '0 auto', backgroundColor: '#b7b7b7', borderRadius: '100px'}} />

				<div style = {dropTopS} onClick = {handleLocal} className = 'noSelect'>
					<div style = {{width: '15%'}}>
						<Trangle style = {{...triangleS, transform: `rotate(${localTriangTrans}deg)`}}/>
					</div>
					<p style = {topPS}>В России</p>
				</div>
				<div style = {{overflow: 'hidden', height: localDivHeight}}>
					<Local
						isOpen = {isLocalOpen} 
				 		data = {props.localData} 
					/>
				</div>
			</div>


		</div>
	)
}

export default Tab2