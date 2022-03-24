import { useState } from 'react';
import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/';



export default function Task({ todo, todos, setTodoList } ) {
      const [task, setTask] = useState({
        todo: todo,
        id: Date.now(), 
        status: 'active'
      })

      console.log('rerender')
// gets todo (description) from todo prop from input 
// id and status are defined in useState 

  function handleCheckClick(e) {
    setTask({
      ...task,
      status: task.status === 'active' ? 'completed' : 'active'
    })
  }

  function handleDelete(e) {
    console.log('deleted');
    const updatedTodos = todos.filter(todo => todo !== todo.id);
    setTodoList(updatedTodos);
    // not rerendering or not connecting back to todolist or logic is off ? 
  }

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>  
            <input onChange={handleCheckClick} className="marginRight" type="checkbox" />
            <label className="marginRight">{todo}</label>
          <CloseButton onClick={handleDelete} />
        </ListGroup.Item>
      </ListGroup>
    

    </div>
  )
}
