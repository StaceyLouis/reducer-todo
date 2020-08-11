import React, { useState } from "react"
 

function Form({dispatch}){
    const [list, setList] = useState("");

    const handleChanges = e => {
        setList(e.target.value)
    }


    const submitChanges = e =>{
        e.preventDefault();
        dispatch({
            type: "add",
            data: [list]
        })
    }

    const clearChanges = (e) => {
        e.preventDefault();
        dispatch({
            type: 'clear'
        })
    }
    return(
        <div>
        <form id="to-do-form" onSubmit={submitChanges}>
        <input 
        type="text" 
        placeholder="Enter task here"
        value={list}
        onChange={handleChanges}
        id={Date.now()}
        />
            <button>Add</button>
            <button onClick={clearChanges}> Clear</button>
            </form>
           </div> 
    
      
    
    )
}

export default Form