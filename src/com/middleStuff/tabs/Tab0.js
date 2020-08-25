import React, { useState, useEffect } from 'react'

import {ReactComponent as ZabIcon} from '../../icons/SVG/zab.svg'

const Tab0 = (props) => {

    const [isLoaded, setLoaded] = useState (false)
    const [localData, setLocalData] = useState ([])
    const [updateTime, setUpdateTime] = useState ()

    const [updatePSize, setUpdatePSize] = useState ()
    const [zabProps, setZabProps] = useState ([])
    const [infoLiSize,setInfoLiSize] = useState ([])
    const [infoMeter, setInfoMeter] = useState ([])
    
    useEffect (() => {
        fetchLocalData ()
        calcSizes ()
    }, [])

    // FETCH DATA
    const fetchLocalData = async () => {
        fetch ('https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true')
        .then (response => response.json())
        .then (result => {
            props.setShown (true)
            setLoaded (true)
            props.setGlobal (result)
           // console.log (result.infectedByRegion[50])
            setLocalData ([result.infectedByRegion[50].infected, result.infectedByRegion[50].recovered, result.infectedByRegion[50].deceased])
            setUpdateTime (result.lastUpdatedAtSource.toString().slice (0, -14))
          //  calcMeter (result.infectedByRegion[50])
        })
        .catch (error => {
            setLoaded (false)
            props.setFetchError (error)
            console.error (error)
        })
    }

    const calcMeter = (result) => {
        const onePercent = (result.infected + result.recovered + result.deceased) /100
        const perInfected = result.infected / onePercent
        const perRecovered = result.recovered / onePercent
        const perDeceased = result.deceased / onePercent
        setInfoMeter ([perInfected+'%', perRecovered+'%', perDeceased+'%'])
    }

    // CALC SIZES
    const calcSizes = () => {
        //calc update time
        const cUpPSize = (document.querySelector('.updateDiv').clientHeight / 2.3)
        setUpdatePSize (cUpPSize+'px')
        // calc zab title
        const zabTitleHeight = (document.querySelector('.zabTitle').clientHeight)
        const zabDiv = document.querySelector('.zabDiv')
        const zabTop = (zabTitleHeight/2) - (zabDiv.clientHeight/3) + 2
        const zabFont = (zabTitleHeight/3)
        const zabWidth = zabDiv.clientWidth+'px'
        setZabProps ([zabTop+'px', zabFont+'px', zabTitleHeight*0.7+'px', zabWidth])
        // calc info li
        const infoLiHeight = document.querySelector('.infoLiDiv').clientHeight
        const infoLiFont = infoLiHeight / 2.9
        setInfoLiSize ([infoLiHeight+'px',infoLiFont + 'px'])
    }

    // VAR ELEMENTS
    let updateDownload = null
    if (isLoaded) {
        let date = new Date (updateTime)
        let day =  date.getDate ()
            if (day < 10) day = '0' + day
        let month = date.getMonth () + 1
            if (month < 10) month = '0' + month
        updateDownload = `${day}.${month}.${date.getFullYear()}`
    }



    const infoBorder = {height: '2px', width: '100%', backgroundColor: '#c4c4c4'}
    const infoLi = {height: '99%', width: '90%', display: 'flex', justifyContent: 'space-between', padding: '0 5%' }
    const statusP = {fontSize: infoLiSize[1], lineHeight: infoLiSize[0], margin: 0}
    const statusNum = {fontWeight: 'bold'}
    const chS = {fontWeight: '400'}

    let mainDisplay = 'none'
    if (props.tab === '0') mainDisplay = 'block'

    return (
        <div style = {{height: '100%', width: '100%', display: mainDisplay}}>
            <div style = {{height: '95%', borderRadius: '30px', width: '95%', margin: 'auto ', background: 'linear-gradient(143deg, #ff6969 6%, #cd3d3d 50%, #a81c1c 93%)',
                    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3), -4px -4px 10px rgba(255, 255, 255, 1)'}}
            >
                
                <div className = 'zabTitle' style = {{height: '10%'}} >
                    <div className = 'zabDiv' style = {{height: '70%',position: 'relative', top: zabProps[0], backgroundColor: '#ffffff', marginLeft: '7.5%', padding: '0 5%', display: 'inline-block', borderRadius: '20px'}}>
                        <p style = {{fontSize: zabProps[1], margin: 0, lineHeight: zabProps[2], fontWeight: '400'}}>
                            <span style = {{color: 'rgb(100, 5, 5)'}} >
                                Covid19 </span>
                            в Забайкалье:
                        </p>
                    </div>
                </div>

                <div style = {{height: '49%', display: 'flex', justifyContent: 'space-around'}} >
                    <ZabIcon style = {{height: '100%', width: '60%'}} />
                </div>

                <div style = {{height: '41%', }} >
                    <div style = {{backgroundColor: '#ffffff', height: '90%', width: '85%', margin: '0 auto', borderRadius: '20px'}}>
                        <div style = {{height: '90%', width: '90%', margin: '0 5%', position: 'relative', top: '5%', display: 'flex', justifyContent: 'space-between'}}>
                            
                            <div style = {{width: '90%', height: '100%'}} >
                                <div style = {{width: '100%', height: '33.33%'}} >
                                    <div style = {infoLi} >
                                        <p style = {statusP}>Заражено:</p>
                                        <p style = {{...statusP, ...statusNum, color: '#2e0000'}} >{localData[0]}<span style = {chS}>ч.</span></p>
                                    </div>
                                </div>
                                <div className = 'infoLiDiv' style = {{width: '100%', height: '33.33%'}} >
                                    <div style = {infoBorder} />
                                    <div style = {infoLi} >
                                        <p style = {statusP}>{'Выздоров.'}:</p>
                                        <p style = {{...statusP, ...statusNum, color: '#012b00'}} >{localData[1]}<span style = {chS}>ч.</span></p>
                                    </div>
                                </div>
                                <div style = {{width: '100%', height: '33.33%'}} >
                                    <div style = {infoBorder} />
                                    <div style = {infoLi} >
                                        <p style = {statusP}>Умеpло:</p>
                                        <p style = {{...statusP, ...statusNum}} >{localData[2]}<span style = {chS}>ч.</span></p>
                                    </div>
                                </div>
                            </div>

                            <div style = {{height: '100%', width: '3%'}} >
                                <div style = {{height: '33.33%',width: '100%',borderRadius: '100px 100px 0 0',backgroundColor: 'red'}}/>
                                <div style = {{height: '33.33%',width: '100%',backgroundColor: 'green'}}/>
                                <div style = {{height: '33.33%',width: '100%',borderRadius: '0 0 100px 100px',backgroundColor: 'black'}}/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className = 'updateDiv' style = {{height: '6%', display: 'flex', justifyContent: 'end', margin: '1% 10%'}}>
                <div style = {{flex: 1}} />
                <p style = {{fontSize: updatePSize ,margin: '0', fontWeight: '300'}} >Обновлено {updateDownload}</p>
            </div>
        </div>
    )
}

export default Tab0
