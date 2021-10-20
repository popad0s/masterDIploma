import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classes from './CampusInfo.module.css'
import Chart from './Chart'

const CampusDataPage = () => {

    const campuses = useSelector(state => state.campuses)
    const from = useSelector(state => state.from)
    const to = useSelector(state => state.to)

    const start = from.split('/')
    const end = to.split('/')
    const dateFrom = (start[1])
    const dateTo = (end[1])
    const days = parseInt(dateTo) - parseInt(dateFrom) + 1;

    if(days === undefined || dateFrom === undefined || dateTo === undefined) {
        days = 31;
        dateFrom = 1;
        dateTo = 31;
    }

    const params = useParams()
    const campusNr = params.id;

    const campus = campuses[campusNr]

    const [electricityPerMonth, setElectricityPerMonth] = useState(campus['electricityPerMonth'])
    const [waterSupply, setWaterSupply] = useState(campus['waterSupply'])
    const [gas, setGas] = useState(campus['gas'])


    return (
        <div className={classes.CampusInfo}>
            <div className={classes.header}>
                <h3>Information about campus nr. {campusNr}</h3>
                <span>During the period from:<strong style={{ borderBottom: '1px solid red', fontSize: '19px' }}> {from}</strong> to: <strong style={{ borderBottom: '1px solid red', fontSize: '19px' }}>{to}</strong></span>
            </div>
            <div className={classes.wrapperContainer}>
                <div className={classes.container}>
                    <h3>Average Daily Electricity Consumption: {Math.round(parseInt(electricityPerMonth) / 31)} kWt</h3>
                    <h3>Average Daily Water Consumption: {Math.round(parseInt(waterSupply) / 31)} m³</h3>
                    <h3>Average Daily Gas Consumption: {Math.round(parseInt(gas) / 31)} m³</h3>
                </div>
                <div className={classes.container}>
                    <h3>Electricity Consumption for {days} days: {Math.round(parseInt(electricityPerMonth) / 31 * days)} kWt</h3>
                    <h3>Water Consumption for {days} days: {Math.round(parseInt(waterSupply) / 31 * days)} m³</h3>
                    <h3>Gas Consumption for {days} days: {Math.round(parseInt(gas) / 31 * days)} m³</h3>
                </div>
            </div>

            <div className={classes.wrapperContainer}>
                <Chart />
            </div>
        </div>
    )
}

export default CampusDataPage;