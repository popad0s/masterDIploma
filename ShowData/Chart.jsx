import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import classes from './CampusInfo.module.css'
import { useSelector } from 'react-redux'




export default function Chart() {

    const from = useSelector(state => state.from)
    const to = useSelector(state => state.to)

    const start = from.split('/')
    const end = to.split('/')
    const dateFrom = parseInt(start[1])
    const dateTo = parseInt(end[1])
    const days = parseInt(dateTo) - parseInt(dateFrom) + 1;


    const info = [];

    const getData = () => {
        for (let i = 0; i <= days; i++) {
            info.push({
                name: `${start[0]}/${dateFrom + i}`,
                electricity: Math.round(Math.random() * (135 - 100) + 100),
                gas: Math.round(Math.random() * (88 - 61) + 61),
            })
        }
    }
    getData()

    return (
        <div className={classes.chart}>
            <LineChart
                width={1000}
                height={400}
                data={info}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="gas"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="electricity" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}
