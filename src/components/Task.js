import { useState } from 'react';
import React from 'react'

export default function Task({ todo }) {
  const [status, setStatus] = useState('active');
  // const [description, setDescription] = useState([]); same as todo from state ?? 
  const [id, setId] = useState(0);
  return (
    <div>
      { todo }
      {console.log(id)}
    </div>
  )
}

// expected the prop of todo defined in toDoList 