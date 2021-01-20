import React, {useState, useEffect} from 'react'

import {ReactComponent as WarningIcon} from '../../icons/modIcons/warning.svg'

import {ReactComponent as WashHands} from '../../icons/modIcons/wash-hands.svg'
import {ReactComponent as WaterDropIcon} from '../../icons/info/water.svg'

import {ReactComponent as StayAway} from '../../icons/modIcons/stay-away.svg'
import {ReactComponent as SpaceIcon} from '../../icons/info/space.svg'

import {ReactComponent as StayHome} from '../../icons/modIcons/stay-home.svg'
import {ReactComponent as HomeIcon} from '../../icons/info/shome.svg'

import {ReactComponent as WearMask} from '../../icons/modIcons/wear-mask.svg'
import {ReactComponent as MaskIcon} from '../../icons/info/mask.svg'

const Tab1 = (props) => {

	const [headerProps, setHeaderProps] = useState ([])
	const [warnigProps, setWarningProps] = useState ([])

	//CALC SIZES
	useEffect (() => calcSizes (), [props.tab])
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
			//text margin
			const warnMargin = (( warningDivHeight / 100 ) * 30)/2
			//icon margin
			const warnIconMargin = ((warningDivHeight/100)*60)/2

		setWarningProps ([warnLineHeight, warnFontSize, warnMargin, warnIconMargin])
	}

	let mainDisplay = 'none'
	if (props.tab === '1') mainDisplay = 'block'

	//STYELS
	const liS = {
		backgroundColor: '#d8d8d8',
		borderRadius: '21px',
		marginTop: '4vh',
		boxShadow: '-4px -4px 10px rgba(255,255,255,1), 4px 4px 10px rgba(0,0,0,0.2)'
	}
	const liDivS = {
		height: "90%",
		width: '90%',
		margin: 'auto'
	}
	const liDumbDivS ={
		height: '2.5vh'
	}
	const liMiddleDumbDivS = {
		height: '0.8vh'
	}
	const liPS = {
		borderRadius: '12px',
		fontSize: '3vh',
		width: '70%',
		padding: '4% 0 4% 8%',
		backgroundColor: '#e5e5e5',
		margin: '0 0 0 3%'
	}
	const liIconDivS = {
		margin: '0 8%'
	}
	const liIconS = {
		height: '7vh'
	}
	const liTextDivS = {
		position: 'relative',
		
	}
	const liTextS = {
		position: 'relative',
		top: 0,
		fontSize: '2vh',
		margin: '0 5%',
		zIndex: '3',
		width: '80%'
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
			className = 'noScrollBar'
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
		 		<p style = {{fontSize: warnigProps[1]+'px', lineHeight: warnigProps[0]+'px', height: '70%', paddingTop: warnigProps[2], margin: 0,width: '60%'}}>
		 			При <span style = {{fontWeight: '600'}} >боли в горле, <br />заложенности носа,<br /> чихании </span> следует обратиться в врачу!
		 		</p>
		 		<div style = {{width: '21%'}}>
		 			<WarningIcon style = {{width: '80%', marginTop: warnigProps[3]}}/> 
		 		</div>


		 	</div>

		 	<div style = {{width: '80%', height: '100%', margin: '0 auto'}} > 

		 		<ul style = {{listStyle: 'none', padding: '0', margin: '4vh 0 5vh 0'}}>
		 			<li style = {liS}>
		 				<div style = {liDivS}>
		 					<div style = {liDumbDivS} />
		 					<p style = {liPS}>
		 						Мойте руки
		 					</p>
		 					<div style = {liMiddleDumbDivS} />
		 					<div style = {liIconDivS}>
		 						<WashHands style = {liIconS}/>
		 					</div>
		 					<div style = {liMiddleDumbDivS} />
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
		 		
			 		<li style = {liS}>
			 				<div style = {liDivS}>
			 					<div style = {liDumbDivS} />
			 					<p style = {liPS}>
			 						Соблюдайте дистанцию
			 					</p>
			 					<div style = {liMiddleDumbDivS} />
			 					<div style = {liIconDivS}>
			 						<StayAway style = {liIconS}/>
			 					</div>
			 					<div style = {liMiddleDumbDivS} />
			 					<div style = {liTextDivS}> 
			 						
			 					
				 					<p style = {liTextS}>
				 						Необходимо соблюдать расстояние не менее 1,5 метра друг от друга. Старайтесь не трогать руками глаза, нос или рот	
				 					</p>
			 						<div style = {liTextIconDivS} >
			 							<SpaceIcon style = {{ right: '14%',width: '15vh',position: 'relative', transform: 'rotate(45deg)', bottom: 0,height: '12vh', width: '12vh', opacity: '0.04'}} />
			 						</div>

			 					</div>
			 					<div style = {liDumbDivS} />
			 				</div>
			 			</li>
		 		
		 				<li style = {liS}>
		 				<div style = {liDivS}>
		 					<div style = {liDumbDivS} />
		 					<p style = {liPS}>
		 						Оставайтесь дома
		 					</p>
		 					<div style = {liMiddleDumbDivS} />
		 					<div style = {liIconDivS}>
		 						<StayHome style = {liIconS}/>
		 					</div>
		 					<div style = {liMiddleDumbDivS} />
		 					<div style = {liTextDivS}> 
		 						
		 					
			 					<p style = {liTextS}>
			 						При возожности, оставайтесь дома. Если необходимо выйти - слудет избегать общественного транспорта и прочих мест скоплений людей
			 					</p>
		 						<div style = {liTextIconDivS} >
		 							<HomeIcon style = {{ height: '100%', width: '47%', opacity: '0.04'}} />
		 						</div>

		 						</div>
		 						<div style = {liDumbDivS} />
		 					</div>
		 				</li>
		 		
		 				<li style = {liS}>
		 				<div style = {liDivS}>
		 					<div style = {liDumbDivS} />
		 					<p style = {liPS}>
		 						Носите маску
		 					</p>
		 					<div style = {liMiddleDumbDivS} />
		 					<div style = {liIconDivS}>
		 						<WearMask style = {liIconS}/>
		 					</div>
		 					<div style = {liMiddleDumbDivS} />
		 					<div style = {liTextDivS}> 
		 						
		 					
			 					<p style = {liTextS}>
			 						Использование <span style = {{fontWeight: '600'}}>медицинской маски</span> предотвращает попадение капел распираторных выделений, которые могут содержать вирусы 
			 					</p>
		 						<div style = {liTextIconDivS} >
		 							<MaskIcon style = {{ height: '18vh',position: 'relative', bottom: '-13%' ,width: '50%', opacity: '0.04'}} />
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