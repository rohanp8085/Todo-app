import { useState } from "react"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import Navbar from "./components/Navbar"
import { GlobalProvider } from "./Context/GlobalContext"



function App() {










  return (
    <GlobalProvider>
      <div className="container">

        <div className="box">
          <Navbar />
          <Form />
          <ListGroup />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
