import React, { useState, useReducer } from 'react'


function List(props) {
  const  {list, toggle} = props;

 
    return(
        <div>
            {
                list.map( (item,id) =>{
                    return <div 
                    key={item.id} 
                    onClick={() => toggle(item.id),id}
                    style={{color:item.completed? 'red': 'black'}}>
                        <p>{item.item}</p>
                    </div>
                })
            }
        </div>
    )
}
export default List