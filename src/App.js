import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import DashboardPage from "./components/Pages/DashboardPage.js";
import LoginPage from "./components/Pages/LoginPage.js";
import {useState, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { isOptionGroup } from "@mui/base";



const App = () => {


  const [loggedIn, setLogin] = useState(false)
  const [user, setUser] = useState()
 
  const logIn = (bool) =>{
    setLogin(bool)
    
  }
  const getUser = (user) =>{
    setUser(user)
  }

 
    return(
      <BrowserRouter>
        <Routes>
          {console.log(user)}
          {console.log(loggedIn)}
          <Route path='/' element={<LoginPage logIn={logIn} getUser={getUser}/>}/>
          <Route path='/dashboard' element={<DashboardPage loggedIn={loggedIn} user={user}/>}/>
        </Routes>
      </BrowserRouter>    
    );
  
}

export default App;