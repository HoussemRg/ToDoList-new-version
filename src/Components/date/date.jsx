import React from 'react'
import "./date.css";

export default function DateDisplay() {
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const date= new Date();
    console.log(days[date.getDay()]);
    
  return (
    <div className='date'>
      <div className='title'>
        <h2 className='day'>{days[date.getDay()]},</h2>
        <h4 className='day-number'>{date.getDate()}th</h4>
      </div>
      <p className='month'>{months[date.getMonth()]}</p>
    </div>
  )
}
