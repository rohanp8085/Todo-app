import { useState } from "react"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import Navbar from "./components/Navbar"
import  { GlobalProvider } from "./Context/GlobalContext"



function App() {

 

 

     

   
     
  const time = new Date().toLocaleTimeString()
  const [ctime , setCtime] = useState(time)
const updateTime = () =>{
  const time = new Date().toLocaleTimeString()
  setCtime(time)
}

setInterval(() => {
  updateTime()
}, 1000);
 
    

  return (
    <GlobalProvider>
    <div className="container">
      <h4 className="time">{ctime}</h4>
    <div className="box">
      <Navbar/>
      <Form />
      <ListGroup/>
    </div>
    </div>
    </GlobalProvider>
  )
}

export default App
