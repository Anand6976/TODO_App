import React from 'react'

function TodoList(props) {
  return (
   <li className='list-item'>
    
    <span className='icons'>
    {props.item}</span>
    <i className="fa-light fa fa-trash-can icon-delete" onClick={e=>{
        props.deleteItem(props.index)
    }}></i>
    
   </li>
  )
}

export default TodoList
