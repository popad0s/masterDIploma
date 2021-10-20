
import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const ShowCampusData = ( {campusNumber} ) => {

    const router = useHistory()

    const getInfo = () => {
        router.push(`/app/ui/showCampusData/${campusNumber + 1}`)
    }

    const campuses = useSelector(state => state.campuses)

    return (
        <div>
            <Button  color="primary" variant="contained" onClick={ () => getInfo()} >
                Show Info
            </Button>
        </div>
    )
}

export default ShowCampusData
