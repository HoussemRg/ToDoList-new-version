import React from 'react'
import "./tasksNumber.css";
export default function TasksNumber(props) {
  return (
    
        <div className='tasks-number'>
                <div className='total'>
                  <p className='numbers'>{props.total}</p>
                  <p>Total</p>
                </div>
                <div className='remaining'>
                  <p className='numbers'>{props.remaining}</p>
                  <p>Remaining</p>
                </div>
                <div className='Done'>
                  <p className='numbers'>{props.done}</p>
                  <p>Done</p>
                </div>
        </div>
    
  )
}
