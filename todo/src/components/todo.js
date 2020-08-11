import React from 'react'
import { toDo } from '../reducers'

function ToDo({todo, dispatch}){
    const toggle = () =>{
        dispatch({
            type: 'toggle',
            data: todo
        })
    }

    return (
        <div onClick={toggle} className={`todo${todo.completed ? "completed" : ""}`} style={{ textDecoration: todo.completed ? "line-through" : ""}}>
          <h3>{todo.item}</h3>
        </div>
      )
}

export default ToDo;