import './App.css';
import DateDisplay from './Components/date/date'
import TasksNumber from './Components/tasksNumber/tasksNumber';
import { useRef,useState,useReducer } from 'react';
import Task from "./Components/task/task"
function App() {
  const inputRef= useRef(null);
  const [tasks,setTasks]=useState([]);
  const reducer=(state,action)=>{
    switch(action.type){
      case "INCREMENT_TOTAL_TASKS":
        return{total:state.total+1,
               remaining:state.remaining,
               done:state.done, 
               taskDOne:false,
      }
      case "DECREMENT_TOTAL_TASKS":
        return{total:state.total-1,
               remaining:state.remaining,
               done:state.done,
               taskDOne:false, 
      }
      case "INCREMENT_REMAINING_TASKS":
        return{total:state.total,
               remaining:state.remaining+1,
               done:state.done,
               taskDOne:false, 
      }
      case "DECREMENT_REMAINING_TASKS":
        return{total:state.total,
               remaining:state.remaining-1,
               done:state.done,
               taskDOne:false, 
      }
      case "INCREMENT_DONE_TASKS":
        return{total:state.total,
               remaining:state.remaining,
               done:state.done+1,
               taskDOne:false, 
      }
      case "DECREMENT_DONE_TASKS":
        return{total:state.total,
               remaining:state.remaining,
               done:state.done-1,
               taskDOne:false, 
      } 
      default : return true;  
    }
  }
  /*const makeTask=()=>{
    dispatch({type:"INCREMENT_DONE_TASKS"});
    dispatch({type:"DECREMENT_REMAINING_TASKS"});
    const done=document.getElementById('done');
    done.innerHTML="done";
  }*/
  
  const [state,dispatch]=useReducer(reducer,{total:0,remaining:0,done:0,doneTask:false})
  const addTask = ()=>{
    const taskName=inputRef.current.value;
    if(taskName!==''){
      const task={
        taskName:taskName,
        taskId:tasks.length===0 ? 1 : tasks.length+1,
      }
      
      setTasks([...tasks,task]);
      dispatch({type:"INCREMENT_REMAINING_TASKS"});
      dispatch({type:"INCREMENT_TOTAL_TASKS"});
      inputRef.current.value="";
      if(state.total<0){
        state.total=0;
      }
      if(state.remaining<0){
        state.remaining=0;
      }
    }
  }
  const deleteTask =(id)=>{
    setTasks( tasks.filter((task)=>task.taskId!==id));
    dispatch({type:"DECREMENT_REMAINING_TASKS"});
    dispatch({type:"DECREMENT_TOTAL_TASKS"});
    dispatch({type:"DECREMENT_DONE_TASKS"});
    if(state.total<0){
      state.total=0;
    }
    if(state.remaining<0){
      state.remaining=0;
    }
    if(state.done<0){
      state.done=0;
    }    
  }
  return (
    <div className="App container">
        <div className='header'>
            <DateDisplay />
            <TasksNumber total={state.total} remaining={state.remaining} done={state.done} />
        </div>
        <div className='tasks-body container'>
          <h3>Tasks for today</h3>
          <div>
            <Task tasks={tasks} deleteTask={deleteTask} dispatch={dispatch} state={state}/>
          </div>
          <button className='button' onClick={addTask}>
            <span>&#43;</span>
            <p>Add new task</p>
          </button>
          <input type="text" placeholder="Add your task..." ref={inputRef} />
        </div>

    </div>
    
  );
}

export default App;
