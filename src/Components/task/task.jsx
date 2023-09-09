import React from 'react'
import { useState } from 'react';
import "./task.css"



export default function Task(props) {
    const [taskDone,setTaskDone]=useState(false);
    const makeTask=()=>{
        props.dispatch({type:"INCREMENT_DONE_TASKS"});
        props.dispatch({type:"DECREMENT_REMAINING_TASKS"});
        setTaskDone(true);
        if(props.state.done<0){
            props.state.done=0;
        }
        if(props.state.remaining<0){
            props.state.remaining=0;
        }
    }
  return (
    <>
        {props.tasks.map((task) => {
            return (
                <div className='task'>
                    <div>{task.taskName}</div>
                    <div className='buttons'>
                        <div className='makeTask'>
                            <div><button onClick={makeTask} id='makeButton' disabled={taskDone} style={{display : taskDone ? "none" : "inline"}}>make</button></div>
                            <div><p id="done">{taskDone ? "Done": ""}</p> </div>
                        </div>
                        <div><button onClick={()=>props.deleteTask(task.taskId)} className="secondbtn"><i className="fas fa-trash"></i></button></div>
                    </div>
                    
                </div>
                
            );
        })}
    </>
  )
}
