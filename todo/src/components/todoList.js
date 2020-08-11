import React, { useState, useReducer } from 'react'


function List(props) {
  const  {list, toggle} = props;

 
    return(
        <div>
            {
                list.map( item =>{
                    return <div 
                    key={item.id} 
                    onClick={() => toggle(item.id)}
                    className={`item${item.completed? 'completed': ''}`}>
                        <p>{item.item}</p>
                    </div>
                })
            }
        </div>
    )
}
export default List