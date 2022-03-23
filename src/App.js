import ToDoList from './components/ToDoList'; // no brackets on ToDoList function because it was exported as default
import { useState } from 'react';

function App() {
  const [view, setView] = useState('all');
  const [todos, setTodos] = useState(['task test 1', 'task test 2']);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Enter your new task"></input>
        <ToDoList todos={ todos } />
       {/* ToDoList ^ is passed the prop of todos here which is defined in state on line 7 */}
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
