import React from 'react'
import "./task.css"



export default function Task(props) {
    const makeTask=(id)=>{
        props.dispatch({type:"INCREMENT_DONE_TASKS"});
        props.dispatch({type:"DECREMENT_REMAINING_TASKS"});
        const newTasks=props.tasks.map((task)=>{
            if(task.taskId===id){
                task.taskDone=true;
            }
            return task;
        })
        props.setTasks(newTasks);
    }
  return (
    <>
        {props.tasks.map((task) => {
            return (
                <div className='task'>
                    <div>{task.taskName}</div>
                    <div className='buttons'>
                        <div className='makeTask'>
                            <div><button onClick={()=>makeTask(task.taskId)} id='makeButton' disabled={task.taskDone} style={{visibility : task.taskDone ? "hidden" : "visible"}}>Make</button></div>
                            <div className='text'><p id="done">{task.taskDone ? "Done": ""}</p> </div>
                        </div>
                        <div><button onClick={()=>props.deleteTask(task.taskId)} className="secondbtn"><i className="fas fa-trash"></i></button></div>
                    </div>  
                </div>
                
            );
        })}
    </>
  )
}
