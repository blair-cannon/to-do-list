import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap/';



export default function Task({ todo, setTodoList } ) {
  
  // FUNCTIONS that affect an individual todo:
  function handleCheckClick(e) {
    setTodoList((todos) => {
      let targetTodo = todos.find(clicked => clicked.id === todo.id)
      targetTodo.status = targetTodo.status === 'active' ? 'completed' : 'active';
      return [...todos];
    })
  }
  // toggles active and completed status

  function handleDeleteTodo(e) {
    setTodoList((todos) => {
      let targetTodo = todos.find(clicked => clicked.id === todo.id)
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
            <input onChange={ handleCheckClick } className="marginRight" type="checkbox" checked={todo.status === 'completed'} />
            <label className={`marginRight ${todo.status === 'completed' ? "strikethrough" : ''}`} >{todo.description}</label>
          <CloseButton onClick={ handleDeleteTodo }  />
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
