import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Update from "./components//Main/Update"
import Save from "./components/Main/save_score"
import Wyniki_pro from "./components/Main/wyniki_pro"


function App() {
  const user = localStorage.getItem("token")
  return (
    
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      {user && <Route path="/userlist" exact element={<Main />} />}
      <Route path="/userlist" element={<Navigate replace to="/login" />} />
      <Route path="/save" exact element={<Save />} />
      <Route path="/update" exact element={<Update />} />
      <Route path="/wyniki2" exact element={<Wyniki_pro />} />
    </Routes>
  
  )
}
export default App