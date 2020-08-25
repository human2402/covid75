
import React, {useState, useEffect} from 'react'

const Global = (prop) => {	

	const [upadteDate, setUpdateDate] = useState ()
	const [totalInfected, setTotalInfected] = useState ()
	const [minCountry, setMinCountry] = useState ([])
	const [maxCountry, setMaxCountry] = useState ([])

	//BACK END STUFF
	useEffect (() => backEnd(), [])

	useEffect (() => {
	//	consoling()
		checker()
	}, [maxCountry])

	const checker = () => {
		if (minCountry[0] === undefined) {
			backEnd ()
		}
	}

	const backEnd = () => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		}
		fetch('https://api.covid19api.com/summary', requestOptions)
			.then (response => response.json())
			.then (result => {
				resulting (result)
			})
			.catch(error => console.error (error))
	}

	const resulting = (data) => {
		let coolTime = formatTime (data.Date)
		setUpdateDate (coolTime)
		setTotalInfected (data.Global.TotalConfirmed)
		calcMore (data.Countries, 'min')
		calcMore (data.Countries, 'max')
	}

	const formatTime = (time) => {
		let sliced = time.slice(0, 10)
		let date = new Date (sliced)
		let day =  date.getDate ()
            if (day < 10) day = '0' + day
        let month = date.getMonth () + 1
            if (month < 10) month = '0' + month
        let result = `${day}.${month}`

		return result
	}

	const calcMore = async (countries, pos) => {
		console.log (countries)

		let numArray = []
		countries.map ((item, index) => {
			let num = item.TotalConfirmed
			if (numArray.indexOf(num) === -1 | index === 0) numArray.push (num)
		} )
		let minNum
		if (pos === 'min') minNum = Math.min (...numArray)
		if (pos === 'max') minNum =	Math.max (...numArray)
		
		let winCountry
		countries.map ((item, index) => {
			if (item.TotalConfirmed === minNum) winCountry = item
		})
		//let winIndex = numArray.indexOf (minNum)
		//let winCountry
		//countries.map ((item, index) => {
		//	console.log (`index ${index}`)
		//	if (index === winIndex) winCountry = item
		//})

		console.log (winCountry)

		let shorter = await toShort(winCountry.CountryCode)

		const finalArray = [shorter, winCountry.TotalConfirmed ,winCountry.CountryCode]

		if (pos === 'min') setMinCountry (finalArray)
		if (pos === 'max') setMaxCountry (finalArray)

	}

	const toShort = async (code) => {
		let finalResult = 1
		var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country";
		var token = "64338c022bb3d954343cf4b5375960258a5d2524";
		var query = code;

		var options = {
		    method: "POST",
		    mode: "cors",
		    headers: {
		        "Content-Type": "application/json",
		        "Accept": "application/json",
		        "Authorization": "Token " + token
		    },
		    body: JSON.stringify({query: query})
		}

		await fetch(url, options)
		.then(response => response.json())
		.then(result => {
			finalResult = result.suggestions[0].data.name_short
			//console.log (finalResult)
			return finalResult
		})
		.catch(error => console.log("error", error))

		return finalResult
	}

	const consoling = () => {
		if (maxCountry !== undefined) {
			console.log (`Updated on ${upadteDate}`)
			console.log (`Total infected: ${totalInfected}`)
			console.log (`The less infected country is ${minCountry[0]} (${minCountry[2]}) with total ${minCountry[1]} confirmed cases`)
			console.log (`The most infeceted country is ${maxCountry[0]} (${maxCountry[2]}) with total ${maxCountry[1]} confirmed cases`)
		}
	}

	//VARS
	let mainTrans = '-110'
	if (prop.isOpen) mainTrans = '0'

	//STYLES
	const upperPS = {
		margin: '3vh 0 0 0', fontSize: '3vh', fontWeight: '400'
	}
	
	const imgContainerS = {
		width: '20%',
		margin: '0 0 0 5%',
		display: 'grid',
		placeItems: 'center'
	}
	const imgS = {
		width: '100%'
	}
	const infoContainerS = {
		margin: '0 5%', width: '70%'
	}
	const countryNamePS = {
		fontSize: '3.2vh', fontWeight: '400', margin: '1vh 0 0 0', lineHeight: '1.2', fontWeight: '300'
	}
	const numPS = {
		fontSize: '3.5vh', margin: '0.7vh 0 2vh 0', lineHeight: 1
	}
	const chS = {
		fontWeight: '300'
	}

	return (
		<div style = {{width: '77%', margin: '0 auto' ,transform: `translateY(${mainTrans}%)`, transition: 'transform 0.4s ease'}}>
			<div>
				<p style = {{...upperPS, margin: '0'}}>
					Всего заражено:
				</p>
				<div style = {{display: 'flex', justifyContent: 'flex-end'}}>
					<p style = {{margin: '1vh 0 0 0', fontSize: '3.4vh', backgroundColor: '#b7b7b7', padding: '0 5%', borderRadius: '10px'}}> 
						{totalInfected} ч.
					</p>
				</div>
			</div>
			<div style = {{color: '#ffffff'}}>
				<div style = {{marginTop: '2.5vh' ,borderRadius: '20px 20px 0 0' ,width: '100%', backgroundColor: '#a73b3b', display: 'flex'}}>
					<div style = {imgContainerS}>
						<img style = {imgS} src = {`https://www.countryflags.io/${maxCountry[2]}/shiny/64.png`} />
					</div>
					<div style = {infoContainerS}>  
						<p style = {countryNamePS}>
							{maxCountry[0]}
						</p>
						<p style = {numPS}> 
							{maxCountry[1]} <span style = {chS}>ч.</span>
						</p>
					</div>
				</div>
				<div style = {{borderRadius: '0 0 20px 20px' ,width: '100%', backgroundColor: '#519c37', display: 'flex'}}>
					<div style = {imgContainerS}>
						<img style = {imgS} src = {`https://www.countryflags.io/${minCountry[2]}/shiny/64.png`} />
					</div>
					<div style = {infoContainerS}>  
						<p style = {countryNamePS}>
							{minCountry[0]}
						</p>
						<p style = {numPS}> 
							{minCountry[1]} <span style = {chS}>ч.</span>
						</p>
					</div>
				</div>
				<div style = {{display: 'flex', justifyContent: 'flex-end'}}>
					<p style = {{fontSize: '2vh', color: '#000', margin: '0.5vh 5% 0.7vh 0'}}> 
						<span style = {chS}> Обновлено</span> {upadteDate}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Global