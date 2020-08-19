
import React, {useState, useEffect} from 'react'

const Global = (prop) => {	

	const [upadteDate, setUpdateDate] = useState ()
	const [totalInfected, setTotalInfected] = useState ()
	const [minCountry, setMinCountry] = useState ([])
	const [maxCountry, setMaxCountry] = useState ([])

	//BACK END STUFF
	useEffect (() => backEnd(), [])

	useEffect (() => consoling(), [maxCountry])

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
        let result = `${day}.${month}.${date.getFullYear()}`

		return result
	}

	const calcMore = async (countries, pos) => {
		let numArray = []
		countries.map ((item, index) => {
			let num = item.TotalConfirmed
			if (numArray.indexOf(num) === -1 | index === 0) numArray.push (num)
		} )
		let minNum
		if (pos === 'min') minNum = Math.min (...numArray)
		if (pos === 'max') minNum =	Math.max (...numArray)
		let winIndex = numArray.indexOf (minNum)
		let winCountry
		countries.map ((item, index) => {
			if (index === winIndex) winCountry = item
		})

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
	let mainTrans = '-100'
	if (prop.isOpen) mainTrans = '0'

	return (
		<div style = {{ transform: `translateY(${mainTrans}%)`, transition: 'transform 0.4s ease',
			height:'30vh', width: '100%', backgroundColor:'purple'}}>

		</div>
	)
}

export default Global