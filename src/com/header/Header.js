
import React, { useState, useEffect } from 'react'

import {ReactComponent as InfoLogo} from '../icons/info.svg'

const Header = () => {

	const [divPos, setDivPos] = useState ()
	const [logoFontSize, setLogoFontSize] = useState ()
	const [logoTopMargin, setLogoTopMargin] = useState ()
	const [logoLineMargin, setLogoLineMargin] = useState ()
	const [iconProps, setIconProps] = useState ([])

	// HANDLE SIZES
	useEffect (() => {
		handleSize ()
	}, [])
	useEffect (() => {
		handleSize ()
	}, [window])

	const handleSize = () => {
		const headHeight = document.querySelector('header').clientHeight
		// calc mainDivPos
		const headerDivHeight = document.querySelector('.headerDiv').clientHeight
		const cDivPos = (headerDivHeight/2) - (headHeight/2)
		setDivPos (cDivPos)
		// calc logoFSize
		const cLogoFontSize = headHeight / 2.166
		setLogoFontSize (cLogoFontSize+'px')
		// calc logoTopMargin
		const cLogoTopMargin = (headHeight/2) - (((headHeight/100)*55)/2)
		setLogoTopMargin (cLogoTopMargin)
		// calc logoLineMargin
		const cLogoLineMargin = cLogoTopMargin - ((cLogoTopMargin/100)*10)
		setLogoLineMargin (cLogoLineMargin)
		// calc icon
			// calc size
			const iconSize = headHeight/5 * 3
			// calc padding
			const iconPadding = (headHeight/2) - (iconSize/2)
		setIconProps ([iconSize, iconPadding])
	}

	return (
		<div className = 'headerDiv' style = {{height: '12.39vh', width: '100%', position: 'fixed'}}>
			<header
				style = {{height: '8.135vh', width: '90%', margin: '0 auto', top: divPos, backgroundColor: '#e0e0e0', position: 'relative',
					boxShadow: '3px 3px 10px 0 rgba(0, 0, 0, 0.2), -3px -3px 10px 0 rgba(255, 255, 255, 0.8)', borderRadius: '20px'
				}}
			>
				<div
					style = {{margin: '0 10%', display: 'flex', jusifyContent: 'space-between'}}
				>
					<div
						style  = {{margin: '0 0 0 0', height: '100%', }}
					>
						<div 
							style = {{top: logoLineMargin, height: '5px', width: '30%', backgroundColor: '#b84646', borderRadius: '100px', position: 'absolute'}}
						/>
						<h1 className = 'logoH1' style = {{position: 'fixed', fontFamily: 'Poppins, Roboto', fontWeight: 'regular', padding: 0, margin: 0, marginTop: logoTopMargin, fontSize: logoFontSize}}>Covid75</h1>
					</div>
					<div style = {{flex: 1}}/>
					<span
						style = {{height: iconProps[0], padding: `${iconProps[1]}px 0`}}
					><InfoLogo style = {{height: '100%', fill: '#787878'}}/> </span>
				</div>
			</header>
		</div>
	)
}

export default Header