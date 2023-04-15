import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'
import { BsFillRecordFill } from "react-icons/bs";

const ListItem = ({todo }) => {

  const {deleteTodo ,editTodo} = useContext(GlobalContext)

  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  return (
<>


<li>
         <h6>{todo.text}</h6> 
         
         <span>
           <button className="update-btn" onClick={()=>editTodo(todo)}><i className="bi bi-check2-circle update"></i></button> 
           <button className="delete-btn" onClick={()=>deleteTodo(todo.id)}><i className="bi bi-trash delete"></i></button>
          </span> 
    </li>
    
    <span id='date'><p className='current-date'> <BsFillRecordFill/> {date}</p></span>
</>
    
  )
}

export default ListItem
