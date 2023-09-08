import React from 'react'
import "./tasksNumber.css";
export default function TasksNumber() {
  return (
    
        <div className='tasks-number'>
                <div className='total'>
                  <p className='numbers'>5</p>
                  <p>Total</p>
                </div>
                <div className='remaining'>
                  <p className='numbers'>5</p>
                  <p>Remaining</p>
                </div>
                <div className='Done'>
                  <p className='numbers'>5</p>
                  <p>Done</p>
                </div>
        </div>
    
  )
}
