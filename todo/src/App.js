import React , {useReducer} from 'react';
import './App.css';
import List from './components/todoList'
import Form from './components/todoForm'
import { reducer, initialToDo } from './reducers/reducer';

function App() {
 const [state, dispatch] = useReducer(reducer, initialToDo)

 const add = item => {
  dispatch({
    type: 'add',
  payload: item})
}


const toggle = item =>{
  dispatch({
      type: "toggle",
      payload: item
  })
}

const clear = () => {
  dispatch({
      type: 'clear'
  })
}

  return (
    <div className="App">
      <Form add={add} clear={clear} />
   <List list={state.list} toggle={toggle} dispatch={dispatch}/>
    </div>
  );
}

export default App;
