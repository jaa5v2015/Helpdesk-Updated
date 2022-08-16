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
  

  const logIn = () =>{
    setLogin(true)
    console.log(loggedIn)
  }

  const noLogin = () =>{
    console.log(loggedIn)
  }

  



 
    return(
      
      <div>
       
      
            
            
      <DashboardPage/>
         
         
      </div>

      /*<DashboardPage/>*/
      
    );
  
}

export default App;