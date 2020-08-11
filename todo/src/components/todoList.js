import React, { useState, useReducer } from 'react'


function List(props) {
  const  {list, toggle} = props;

 
    return(
        <div>
            {
                list.map( (item,id) =>{
                    return <div 
                    key={item.id} 
                    onClick={() => toggle(item.id)}
                    style={{color:item.completed? 'red': 'black', textDecoration:item.completed? 'line-through': 'none'}}>
                        <p>{item.item}</p>
                    </div>
                })
            }
        </div>
    )
}
export default List