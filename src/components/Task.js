import { useState, useEffect } from 'react';
import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/';



export default function Task({ todo, todos, setTodoList } ) {

  function handleCheckClick(e) {
    setTodoList((todos) => {
      let targetTodo = todos.find(e => e.id === todo.id)
      targetTodo.status = targetTodo.status === 'active' ? 'completed' : 'active';
      return todos;
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
            <input onChange={ handleCheckClick } className="marginRight" type="checkbox" />
            <label className="marginRight">{todo.description}</label>
          <CloseButton onClick={ handleDeleteTodo }  />
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
