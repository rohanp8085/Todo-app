import React, { useContext } from 'react'
import ListItem from './ListItem'
import GlobalContext from '../Context/GlobalContext'

const ListGroup = () => {

  const {todos} = useContext(GlobalContext)
  // console.log(todos);
  return (
    <div className="ul-sec">
    <ul>
     {
      todos.map(todo => <ListItem  key={todo.id} todo={todo}   />)
     }
    
      
   </ul>
    </div>
  )
}

export default ListGroup
