import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import PageTitle from '../PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import classes from './ChooseCampus.module.css'
import ShowCampusData from '../ShowData/ShowCampusData';
import { useHistory, useParams } from 'react-router-dom'
import DateRange from '../ShowData/DateRange';
import axios from 'axios'


const ChooseCampus = () => {

    // const url = 'https://mocki.io/v1/d255f32a-7a9b-4a87-9810-9c7cc3b7b96f'

    const dispatch = useDispatch()
    const [campusNumber, setCampusNumber] = useState(1)
    const campuses = useSelector(state => state["campuses"])
    const [selectedDateFrom, setSelectedDateFrom] = useState('')
    const [selectedDateTo, setSelectedDateTo] = useState('')
    let campusesFromServer = []


    // const getData = async() => {
    //     await axios.get(url)
    //         .then(response => campusesFromServer.push(...response.data));
    //         dispatch({ type: "ADD_CAMPUSES_DATA", payload: [...campusesFromServer] })
    //     }
    // getData()

    return (
        <div className={classes.ChooseCampus}>    
            <div className={classes.pageHeader}>
                <div>
                    <PageTitle title='Choose Campus' />
                </div>
                <div style={{ 'float': "right" }}><NavLink style={{textDecoration:'none'}} to='/app/ui/addcampus'><Button variant="contained" color="primary">Add Campus</Button></NavLink></div>
            </div>

            <div className={classes.container}>

                <div className={classes.firstChild}>
                    <select value={campusNumber} onChange={e => {
                        setCampusNumber(e.target.value)
                        e.preventDefault()
                    }
                    }>
                        {campuses.map(campus =>
                            <option value={campus.number}>Campus number: {campus.number}</option>
                        )}
                    </select>
                </div>
                {/* <div className={classes.selectsFromTo}>
                    <span>From:</span>
                    <select value={selectedDateFrom} onChange={e => setSelectedDateFrom(e.target.value)}>
                        <option selected disabled value="Choose Date">Choose Date</option>
                        {campuses[campusNumber - 1].dates.map(date =>
                            <option value={date.date.day}>{date.date.day}</option>
                        )}
                    </select>
                </div>
                <div className={classes.selectsFromTo}>
                    <span>To:</span>
                    <select value={selectedDateTo} onChange={e => setSelectedDateTo(e.target.value)}>
                        {console.log(selectedDateTo)}
                        <option selected disabled value="Choose Date">Choose Date</option>
                        {campuses[campusNumber - 1].dates.map(date =>
                            <option value={date.date.day}>{date.date.day}</option>
                        )}
                    </select>
                </div> */}
                <div>
                    <DateRange campusNumber={campusNumber} />
                </div>
                <div>
                    <ShowCampusData campusNumber={ parseInt(campusNumber) - 1 } />
                </div>
            </div>
        </div>
    )
}

export default ChooseCampus;


