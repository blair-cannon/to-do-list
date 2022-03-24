import ToDoList from './components/ToDoList'; // no brackets on ToDoList function because it was exported as default
import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav, ButtonGroup, Button } from 'react-bootstrap';

function App() {
  const [view, setView] = useState('all');
  const [todos, setTodoList] = useState([]);
  const inputRef = useRef();
  // https://reactjs.org/docs/hooks-reference.html#useref 
  
  function newTodo(){
    // console.log(inputRef.current.value);
    let newState = todos;
    newState.push(inputRef.current.value);
    setTodoList([...newState]);
    console.log('todos:', todos);
    inputRef.current.value = null; // empties input box 
  }

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
          <Card.Text>
            <ToDoList todos={ todos } />
            <span>Counter</span>
          </Card.Text>
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

