import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/GlobalContext'

const Form = () => {

 const {saveTodo,edit,updateTodo} = useContext(GlobalContext)

 const [text , setText] = useState("")

 const  handleSubmit = (e) =>{
       e.preventDefault()
      if (edit.isEdit) {
        updateTodo(text ,edit.todo.id)
      }else{
        saveTodo(text)
      }
       setText("")
  }

 useEffect(()=>{
       setText(edit.todo.text)
 },[edit])
  return (
    <form className="form" onSubmit={(e)=>handleSubmit(e)}>
    <input required value={text} className="input" type="text" placeholder="Add List"onChange={(e)=>setText(e.target.value)} /><button className="save-btn"><i class="bi bi-plus-lg plus"></i></button>
 </form>
  )
}

export default Form
