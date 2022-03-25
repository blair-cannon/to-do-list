import React from 'react';
import Task from './Task';

export default function ToDoList({ todos, setTodoList }) {

  return (
    todos.map(todo => {
      return <Task todo={ todo } todos={ todos } setTodoList={ setTodoList } key={ todo.id }  />
    })
  )
}

// expected the prop of todos defined on App.js
// maps over todos to get each individual todo
// Task is passed the prop of todo here which is defined from the map 

