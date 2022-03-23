import { useState } from 'react';
import React from 'react';
import { CloseButton, ListGroup, Inp } from 'react-bootstrap/';



export default function Task({ todo }) {
  // const [status, setStatus] = useState('active');
  // const [description, setDescription] = useState([]); same as todo from state ?? 
  // const [id, setId] = useState(0);
      const [task, setTask] = useState({
        todo: {todo},
        id: Date.now(), 
        status: 'active'
      })
// gets todo (description) from todo prop from input 
// id and status are defined in useState 
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>  
            <input className="marginRight" type="checkbox" />
            <label className="marginRight">{todo}</label>
          <CloseButton /></ListGroup.Item>
      </ListGroup>
    
      {/* { todo }
      <p>{ task.status }</p>
      <p>{ task.id }</p> */}
    </div>
  )
}

// expected the prop of todo defined in toDoList 

