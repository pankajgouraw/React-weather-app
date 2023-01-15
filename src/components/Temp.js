import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Temp.css'
import icon from '../img/icon.png'

export default function temp(props) {
  console.log("hi i am prps", props)
  return (
    <div className='mt-4'>
        <img src={icon} alt="weather icon" />
        <h2>{(props.resp==='')?"":props.resp.name}</h2>
        <h1>{(props.resp==='')?"":`${Math.round(props.resp.main.temp)} °C     (${props.resp.weather[0].main}) `}</h1>
    </div>
  )
}
