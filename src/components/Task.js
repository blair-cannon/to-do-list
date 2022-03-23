import { useState } from 'react';
import React from 'react'



export default function Task({ todo }) {
  // const [status, setStatus] = useState('active');
  // const [description, setDescription] = useState([]); same as todo from state ?? 
  // const [id, setId] = useState(0);
      const [task, setTask] = useState({
        todo: {todo},
        id: Date.now(), 
        status: 'active'
      })

  return (
    <div>
      <p>{ todo }</p> 
      <p>{ task.status }</p>
      <p>{ task.id }</p>
    </div>
  )
}

// expected the prop of todo defined in toDoList 

