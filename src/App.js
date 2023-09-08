import './App.css';
import DateDisplay from './Components/date/date'
import TasksNumber from './Components/tasksNumber/tasksNumber';
function App() {
 
  return (
    <div className="App container">
        <div className='header'>
            <DateDisplay />
            <TasksNumber />
        </div>
    </div>
    
  );
}

export default App;
