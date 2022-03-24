import { useState } from 'react';
import React from 'react';
import { CloseButton, ListGroup, Inp } from 'react-bootstrap/';



export default function Task({ todo, handleDelete } ) {
      const [task, setTask] = useState({
        todo: {todo},
        id: Date.now(), 
        status: 'active'
      })
// gets todo (description) from todo prop from input 
// id and status are defined in useState 

  function handleCheckClick(e) {
    console.log('clicked');
    console.log(task.status);
    let newTaskInstance = task;
    if ( task.status === 'active' ){
      task.status = 'completed'
    }
    else if ( task.status === 'completed' ){
      task.status = 'active'
    }
    setTask(newTaskInstance)
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
    
      {/* { todo }
      <p>{ task.status }</p>
      <p>{ task.id }</p> */}
    </div>
  )
}

// expected the prop of todo defined in toDoList 

