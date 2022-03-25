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
  
  useEffect(() => {
    setCounter((counter) => {
    return todos.filter((todo) => todo.status === 'active').length;
    })  
  })
  // updates counter on each render 


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // on change of [todos], new todo is saved into local storage

  // let newView = todos;
  // if (view === "active"){
  //   newView = todos.filter(todo.status === "active");
  //   console.log('hey');
  // }
  //  if (view === "completed"){
  //   newView = todos.filter((todo) => todo.status === "completed");
  //   console.log('hey');
  //   return [newView];
  // }

  function handleUncheckAll() {
    console.log('handled');
    setTodoList((todos) => {
      todos.forEach(element => element.status = 'active');
      return [...todos]
    })
  }

  function handleCheckAll() {
    console.log('handled');
    setTodoList((todos) => {
      todos.forEach(element => element.status = 'completed');
      return [...todos]
    })
  }

  function handleDeleteCompleted() {
    setTodoList((todos) => {
      let active = todos.filter(todo => todo.status !== 'completed');
      return active;
    })
  }

  return (
    <div className="App">
      <Card className="centered-medium-card">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first" onClick={ () => setView('all') } >All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#second" onClick={ () => setView('active') }>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#third" onClick={ () => setView('completed') } > Completed </Nav.Link>
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
            <Button onClick={ handleCheckAll }  variant="primary">Check All </Button>
            <Button onClick={ handleDeleteCompleted } variant="primary">Delete Completed</Button>
            <Button onClick={ handleUncheckAll } variant="primary">Uncheck All</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
</div>
  );
}

export default App;

