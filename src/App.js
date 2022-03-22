import { ToDoList } from './components/ToDoList';
import { Task } from './components/Task';

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Enter your new task"></input>
        <ToDoList/>
          <Task/> 
      <div>Counter</div>
      <div className="filterButtons">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="overflow">
        <button>Complete All Tasks</button>
        <button>Clear Completed Tasks</button>
        <button>Activate All Tasks</button>
      </div>
    </div>
  );
}

export default App;
