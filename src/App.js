import ToDoList from './components/ToDoList'; // no brackets on ToDoList function because it was exported as default
import { useState, useRef } from 'react';

function App() {
  const [view, setView] = useState('all');
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  // https://reactjs.org/docs/hooks-reference.html#useref 
  
  function newTodo(){
    // console.log(inputRef.current.value);
    let newState = todos;
    newState.push(inputRef.current.value);
    setTodos([...newState])
    console.log('todos:', todos)
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <input ref={inputRef} type="text" placeholder="Enter your new task"></input>
      <button onClick={newTodo} >Add</button>
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


// description = newState,
// id = Date.now(),
// type = active
// );
// console.log(todos);