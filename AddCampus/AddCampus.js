import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
// import {API_URL} from '../../pages/login/url';
import classes from './addCampus.module.css'
import { useDispatch, useSelector } from 'react-redux'

const campuses = []

const AddCampus = (props) => {

  const dispatch = useDispatch()
  const allCampuses = useSelector(state => state.campuses)

  const [number, setNumber] = useState('')
  const [area, setArea] = useState('')
  const [floors, setFloors] = useState('')
  const [year, setYear] = useState('')

  const createCampus = () => {

    const campusesObj = {
      number,
      area,
      floors,
      year
    }

    campuses.push(campusesObj)
    dispatch({ type: "CREATE_CAMPUS", payload: campusesObj })
    console.log(allCampuses);
    alert(`Campus #${number} was created`)

    return campuses;
  }

  return (
    <>
      <PageTitle title="Add Campus" />
      <div className={classes.AddCampus}>
        <form onSubmit={() => createCampus()}>
          <Input color="primary" type='text' placeholder='campus nr' onChange={(e) => setNumber(e.target.value)} />
          <Input color="primary" type='text' placeholder='the nr of floors' onChange={(e) => setFloors(e.target.value)} />
          <Input color="primary" type='text' placeholder='total area' onChange={(e) => setArea(e.target.value)} />
          <Input color="primary" type='text' placeholder='the year of last repairing works' onChange={(e) => setYear(e.target.value)} />
          <Input value="Create" type="submit" />
        </form>
      </div>
    </>
  )
}

export default AddCampus;