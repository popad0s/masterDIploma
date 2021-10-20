import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const SendDate = ({from, to}) => {

    const start = useSelector(state=> state.from);
    const end = useSelector(state=> state.to);
    const dispatch = useDispatch()

    console.log(from, to);


    dispatch({type: 'GET_FROM', payload: from })
    dispatch({type: 'GET_TO', payload: to })



    return (
        <div>
            
        </div>
    )
}

export default SendDate
