import React, {useState, useEffect} from 'react'

import {ReactComponent as WaterDropIcon} from '../../icons/info/water.svg'

const Tab1 = (props) => {

	const [headerProps, setHeaderProps] = useState ([])
	const [warnigProps, setWarningProps] = useState ([])

	//CALC SIZES
	useEffect (() => calcSizes (), [])

	const calcSizes = () => {
		//calc header
		const headerHeight = document.querySelector('.headerDiv').clientHeight
		//font size
		const headerFontSize = headerHeight / 4.1
		setHeaderProps ([headerHeight,headerFontSize])
		//calc Warning
		const warningDivHeight = document.querySelector ('.warningDiv').clientHeight
			//line height
			const warnLineHeight = warningDivHeight / 6
			//font size
			const warnFontSize = warningDivHeight / 7.5
			console.log (warnFontSize)

		setWarningProps ([warnLineHeight, warnFontSize])
	}

	let mainDisplay = 'none'
	if (props.tab === '1') mainDisplay = 'block'

	//STYELS
	const liS = {
		backgroundColor: '#d8d8d8',
		borderRadius: '21px'
	}
	const liDivS = {
		height: "90%",
		width: '90%',
		margin: 'auto'
	}
	const liDumbDivS ={
		height: '2.5vh'
	}
	const liPS = {
		borderRadius: '12px',
		fontSize: '3vh',
		width: '80%',
		padding: '5% 0 5% 10%',
		backgroundColor: '#e5e5e5',
		margin: '0 0 0 5%'
	}
	const liIconDivS = {

	}
	const liTextDivS = {
		position: 'relative',
		
	}
	const liTextS = {
		position: 'relative',
		top: 0,
		fontSize: '2vh',
		margin: '0 5%',
		zIndex: '3'
	}
	const liTextIconDivS = {
		height: '100%',
		width: '100%',
		zIndex: '1',
		top: 0,
		position: 'absolute',
		marginRight: '3%',
		display: 'flex',
		justifyContent: 'flex-end'
	}

	return (
		<div
			style = {{
				position: 'relative', display: mainDisplay,
				height: '97%', width: '95%', margin: '0 auto', backgroundColor: '#e5e5e5',
				borderRadius: '33px', boxShadow: '-7px -7px 24px rgba(255,255,255,1), 7px 7px 24px rgba(0,0,0,0.2)',
				overflow: 'hidden', overflowY: 'scroll'
		}}
		>
		 	<div
		 		className = 'headerDiv'
		 		style = {{height: '11.39vh', width: '100%', backgroundColor: 'rgb(255, 123, 123)', borderRadius: '33px'}}
		 	>
		 		<p style = {{fontSize: headerProps[1], lineHeight:headerProps[0]/2.9+'px', padding: '3% 8% 0 10%', fontWeight: '400', margin: 0}}>
		 			Рекомендации по профилактике <span style = {{fontWeight: '500'}} >COVID19 </span>
		 		</p>
		 	</div>

		 	<div 
		 		className = 'warningDiv'
		 		style = {{width: '90%', height: '18vh', margin: '4vh 10% 0 0', display: 'flex', justifyContent: 'space-between'}}
		 	>
		 		
		 		<div style = {{width: '5%',height: '100%' , backgroundColor: '#ff3333', borderRadius: '0 33px 33px 0'}}/>
		 		<p style = {{fontSize: warnigProps[1]+'px', lineHeight: warnigProps[0]+'px', height: '70%', paddingTop: '6%', margin: 0,width: '60%'}}>
		 			При <span style = {{fontWeight: '600'}} >боли в горле, <br />заложенности носа,<br /> чихании </span> следует обратиться в врачу!
		 		</p>


		 	</div>

		 	<div style = {{width: '80%', height: '100%', margin: '0 auto'}} > 

		 		<ul style = {{listStyle: 'none', padding: '0', marginTop: '4vh'}}>
		 			<li style = {liS}>
		 				<div style = {liDivS}>
		 					<div style = {liDumbDivS} />
		 					<p style = {liPS}>
		 						Мойте руки
		 					</p>
		 					<div style = {liDumbDivS} />
		 					<div style = {liIconDivS}>

		 					</div>
		 					<div style = {liTextDivS}> 
		 						
		 					
			 					<p style = {liTextS}>
			 						Чистите и дезинфицируте поверхности, используя моющие средства. Пользуйтесь спиртосодержащими саолфетками
			 					</p>
		 						<div style = {liTextIconDivS} >
		 							<WaterDropIcon style = {{ height: '100%', width: '47%', opacity: '0.04'}} />
		 						</div>

		 					</div>
		 					<div style = {liDumbDivS} />
		 				</div>
		 			</li>
		 		



		 		</ul>

		 	</div>
		</div> 
	)
}

export default Tab1