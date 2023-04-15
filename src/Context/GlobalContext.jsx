import { createContext, useReducer ,useState} from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

 const initialState = {
  todos : [],
  edit : {
    todo : {},
    isEdit : false
  }
 }
 const [state , dispatch] = useReducer(GlobalReducer , initialState)

 

const deleteTodo = (id) => {
    dispatch({
      type : "DELETE_TODO",
      payload : id
    })
 }

 const saveTodo = (text) =>{
    const newTodo = {
      id : crypto.randomUUID(),
      text : text
    }
      dispatch({
        type : "SAVE_TODO",
        payload : newTodo
      })
  }


   const editTodo = (todo) =>{
    dispatch({
      type : "EDIT_TODO",
      payload : todo
    })
}

   const updateTodo = (text , id) =>{
         
       const updatedTodo = {
        id : id,
        text : text
       }
       dispatch({
        type : "UPDATE_TODO",
        payload : updatedTodo
       }) }
       return(
        <GlobalContext.Provider value={{
        todos:state.todos,
        edit : state.edit,
        deleteTodo,
        saveTodo,
        
        updateTodo,
        editTodo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext