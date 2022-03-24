import ToDoList from './components/ToDoList'; // no brackets on ToDoList function because it was exported as default
import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav, ButtonGroup, Button } from 'react-bootstrap';

function App() {
  const inputRef = useRef();
  // https://reactjs.org/docs/hooks-reference.html#useref 

  const [view, setView] = useState('all');
  const [counter, setCounter] = useState(0);

  const [todos, setTodoList] = useState(() => {
    const string = localStorage.getItem("todos");
    const saved = JSON.parse(string); 
    return saved || [];
  });
  // presents saved todos or returns empty array as intial state
  
  useEffect(() => {
    setCounter((counter) => {
    return todos.filter((todo) => todo.status === 'active').length;
    })  
  })



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // on change of [todos], new todo is saved into local storage

  function newTodo(e){
    let newState = todos;
    let todoObject = {
      description: inputRef.current.value,
      id: Date.now(), 
      status: 'active'
    }
    newState.push(todoObject);
    setTodoList([...newState]);
    inputRef.current.value = null; // empties input box 
  }

  // function handleDelete(e) {
  //   console.log('deleted');
  //   const updatedTodos = todos.filter(todo => id !== todo.id);
  //   setTodoList(updatedTodos);
  // }

  return (
    <div className="App">
      <Card className="centered-medium-card">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled"> Completed </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h1>TO DO LIST</h1>
            <input ref={inputRef} type="text" placeholder="Enter your new task"></input>
            <button onClick={newTodo} >Add</button>
          </Card.Title>
          <div>
            <ToDoList todos={ todos } setTodoList={ setTodoList } />
            <span> Remaining tasks: {counter} </span>
          </div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Check All </Button>
            <Button variant="primary">Delete Completed</Button>
            <Button variant="primary">Uncheck All</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
</div>
  );
}

export default App;

