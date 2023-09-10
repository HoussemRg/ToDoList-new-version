import './App.css';
import DateDisplay from './Components/date/date'
import TasksNumber from './Components/tasksNumber/tasksNumber';
import { useRef,useState,useReducer, useEffect } from 'react';
import Task from "./Components/task/task"

function App() {
  
  const inputRef= useRef(null);
  const [inputToggle,setInputToggle]=useState(false);
  const [tasks,setTasks]=useState([]);
  const showInput = ()=>{
    setInputToggle(true);
  }
  const reducer=(state,action)=>{
    switch(action.type){
      case "INITIAL_STATS":
        return {
          total: action.payload.total,
          remaining: action.payload.remaining,
          done: action.payload.done,
        };
      case "INCREMENT_TOTAL_TASKS":
        return{total:state.total+1,
               remaining:state.remaining,
               done:state.done, 
              
      }
      case "DECREMENT_TOTAL_TASKS":
        return{total:state.total>0 ? state.total-1:0,
               remaining:state.remaining,
               done:state.done,
    
      }
      
      case "INCREMENT_REMAINING_TASKS":
        return{total:state.total,
               remaining:state.remaining+1,
               done:state.done,
           
      }
      case "DECREMENT_REMAINING_TASKS":
        return{total:state.total,
               remaining: state.remaining>0 ? state.remaining-1 : 0,
               done:state.done,
              
      }
      
      case "INCREMENT_DONE_TASKS":
        return{total:state.total,
               remaining:state.remaining,
               done:state.done+1,
                
      }
      case "DECREMENT_DONE_TASKS":
        return{total:state.total,
               remaining:state.remaining,
               done:state.done>0 ? state.done-1 : 0,
                
      }
     
      default : return true;  
    }
  }
  
  const [state,dispatch]=useReducer(reducer,{total:0,remaining:0,done:0});
  useEffect(() => {
    const storedStats = localStorage.getItem("stats");
    if (storedStats) {
      const parsedStats = JSON.parse(storedStats);
      dispatch({
        type: "INITIAL_STATS",
        payload: parsedStats,
      });
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem("stats",JSON.stringify(state));
  },[state]);
  const addTask = ()=>{
    const taskName=inputRef.current.value;
    if(taskName!==''){
      const task={
        taskName:taskName,
        taskId:tasks.length===0 ? 1 : tasks.length+1,
        taskDone:false,
      }
      
      setTasks([...tasks,task]);
      dispatch({type:"INCREMENT_REMAINING_TASKS"});
      dispatch({type:"INCREMENT_TOTAL_TASKS"});
      inputRef.current.value="";
      setInputToggle(false);
      
    }
  }
  const deleteTask =(id)=>{
    setTasks( tasks.filter((task)=>task.taskId!==id));
    dispatch({type:"DECREMENT_REMAINING_TASKS"});
    dispatch({type:"DECREMENT_TOTAL_TASKS"});
    dispatch({type:"DECREMENT_DONE_TASKS"});
        
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
            <Task tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} dispatch={dispatch} state={state}/>
          </div>
          <button className='button' onClick={showInput}>
            <span>&#43;</span>
            <p>Add new task</p>
          </button>
          { inputToggle && <div className='input-box'>
            <input type="text" placeholder="Add your task..." ref={inputRef} />
            <button onClick={addTask}>Add</button>
          </div>}
        </div>

    </div>
    
  );
}

export default App;
