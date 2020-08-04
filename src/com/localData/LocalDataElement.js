import React, { useState, useEffect } from 'react'

const LocalDataElement = (props) => {

    const [localData, setLocalData] = useState ([false, []])
    const [updateTime, setUpdateTime] = useState ()

    // FETCH DATA
    useEffect (() => {
        fetchLocalData ()
    }, [])

    const fetchLocalData = () => {
        fetch ('https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true')
        .then (response => response.json())
        .then (result => {
            setLocalData ([true, result.infectedByRegion[50]])
            setUpdateTime (result.lastUpdatedAtSource.toString().slice (0, -14))
        })
        .catch (error => {
            console.error (error)
        })
    }

    // VAR ELEMENTS
    let updateDownload = null
    if (localData[0] === true) {
        let date = new Date (updateTime)
        let day =  date.getDate ()
            if (day < 10) day = '0' + day
        let month = date.getMonth () + 1
            if (month < 10) month = '0' + month
        updateDownload = `${day}.${month}.${date.getFullYear()}`
    }

    return (
        <div
            style = {{
            backgroundColor: '#fdfdfd',margin: '10%'
            }}
        >
            <h3>Заболевших:</h3>
            <h5>{localData[1].infected}</h5>
            <h6>Обновлено {updateDownload}</h6>
        </div>
    )
}

export default LocalDataElement
