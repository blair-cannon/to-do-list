import { useState } from 'react';
import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/';



export default function Task({ todo, todos, setTodoList } ) {
      const [task, setTask] = useState({
        todo: todo,
        id: Date.now(), 
        status: 'active'
      })
// gets todo (description) from todo prop from input 
// id and status are defined in useState 

  function handleCheckClick(e) {
    setTask({
      ...task,
      status: task.status === 'active' ? 'completed' : 'active'
    })
  }

  function handleDeleteTodo(e) {
    setTodoList((todos) => {
      let targetTodo = todos.find(e => e.id === todo.id)
      let updatedTodos = todos.filter(todo => todo !== targetTodo);
      return updatedTodos;
    })
  }
  // find clicked target todo
  // filter for array to not include the target todo

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>  
            <input onChange={handleCheckClick} className="marginRight" type="checkbox" />
            <label className="marginRight">{todo}</label>
          <CloseButton onClick={handleDeleteTodo}  />
        </ListGroup.Item>
      </ListGroup>
    

    </div>
  )
}
