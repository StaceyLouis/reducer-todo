import React, { useState } from "react"
 

function Form(props){
    const {add , clear} = props
    const [list, setList] = useState("");

    const handleChanges = e => {
        setList(e.target.value)
    }


    const submitChanges = e =>{
        e.preventDefault();
       add(list);
       setList('');
    }

    const clearChanges = (e) => {
        e.preventDefault();
        clear()
    }

    
  const onDelete = (key) =>{
    const filteredItems = list.filter(item =>
      item.key !== key);
        setList({
            list: filteredItems
        })
      
}

    
    return(
        <div>
        <form id="to-do-form">
        <input 
        type="text" 
        name="'item"
        placeholder="Enter task here"
        value={list}
        onChange={handleChanges}
        />
            <button type="submit" onClick={submitChanges}>Add</button>
            <button onClick={() => onDelete(list.key)}> Clear</button>
            </form>
           </div> 
    
      
    
    )
}

export default Form