import React, { useReducer } from 'react'
import{reducer, toDo} from '../reducers/index'
import Form from './todoForm'
import Todo from './todo'


function List(){
    const [state, dispatch]= useReducer(reducer, toDo)
    return(

        <div>
            <Form dispatch={dispatch} />
            {state.map(item =>{
                return <Todo todo = {item} dispatch={dispatch} key={item.id}/>
            })}
        </div>
    )
}
export default List