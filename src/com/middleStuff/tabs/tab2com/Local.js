import React, {useState, useEffect} from 'react'

const Local = (props) => {

	const [totalInfected, setTotalInfected] = useState ('927745')
	const [mskInfected, setMskInfected] = useState ('320000')
	const [lessInfected, setLessInfected] = useState (['Чукотский округ', 170])

	//BACK END STUFF
	useEffect (() => {
		backEnd()
	}, [props.data])

	useEffect (() => {
		//consStuff ()
	}, [lessInfected])


	const backEnd = () => {
		const data = props.data
		setTotalInfected (data.infected)
		if (data.infectedByRegion === undefined) console.error ('lol')
		if (data.infectedByRegion !== undefined) {
			// calc msk
			let regions = data.infectedByRegion
			setMskInfected (regions[75].infected + regions[83].infected)
			// calc less
				let numArray = []
				regions.map (item => numArray.push(item.infected))
				//calc the less
				let supaMin = Math.min (...numArray)
				// calc its index
				let winIndex
				numArray.map ((item,index) => {
					if (supaMin === item) winIndex = index
				})
				// find region
				let winRegion
				regions.map ((item, index) => {
					if (index === winIndex) winRegion = item.region
				})
				setLessInfected ([winRegion, supaMin])
			
		}
	}

	const consStuff = () => {
		console.log (`total infected in Russia: ${totalInfected}`)
		console.log (`infected in Moscow and oblast: ${mskInfected}`)
		console.log (`the less infected region is ${lessInfected[0]} with total ${lessInfected[1]} of cases`)
	}

	//VARS
	let localTarns = '-110'
	if (props.isOpen) localTarns = '0'


	//STYLES
	const topPS = {
		fontSize: '3vh', margin: '3vh 0 0 0', fontWeight: '400'
	}
	const topSpanS = {fontWeight: '500'}
	const middlePS = {margin: '1vh 0 0 0 ', fontSize: '2vh', fontWeight: '400'}
	const bottomPS = {margin: '1.5vh 0 0 0', fontSize: '4vh', backgroundColor: '#b7b7b7', padding: '0 5%', borderRadius: '10px'}
	const bottomDivS = {display: 'flex', justifyContent: 'flex-end'}

	return (
		<div style = {{margin: 'auto', width: '77%', transform: `translateY(${localTarns}%)`, transition: 'transform 0.4s ease'}}>
			<p style = {{...topPS, margin: 0}}>
				<span style = {topSpanS}>Всего</span> зараженных:
			</p>
			<div style = {bottomDivS}>
				<p style = {bottomPS}>
					{totalInfected} чел.
				</p>
			</div>

			<p style = {topPS}>
				<span style = {topSpanS}>МСК</span> и обл.:
			</p>
			<div style = {bottomDivS}>
				<p style = {bottomPS}>
					{mskInfected} чел.
				</p>
			</div>

			<p style = {topPS}>
				<span style = {topSpanS}>Меньше</span> зараженных в
			</p>
			<p style = {middlePS}>
				- {lessInfected[0]}
			</p>
			<div style = {bottomDivS}>
				<p style = {bottomPS}>
					{lessInfected[1]} чел.
				</p>
			</div>



		</div>
	)
}

export default Local