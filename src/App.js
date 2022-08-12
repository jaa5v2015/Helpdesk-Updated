import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import DashboardPage from "./components/Pages/DashboardPage.js";
import LoginPage from "./components/Pages/LoginPage.js";
import {useState, useEffect} from 'react'
import {  BrowserRouter,Routes,Route,useNavigate,} from "react-router-dom";
import { config } from "./Authentication/config.js";
import {PublicClientApplication} from '@azure/msal-browser';
//var LdapStrategy = require('passport-ldapauth');


class App extends React.Component{


  constructor(props){
    super(props);
    const ldap = require('ldapjs');
    const client = ldap.createClient({
      url: 'LDAP://ag0319006wd101'
    });
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
      client: client
    };
   
  }

  
  authenticateUsers(username, password){
    
    console.log(this.state.client)
  }

 render(){
  return(
    <div>
    <button onClick={() => this.authenticateUsers("asd","dsad")} >Login</button>
    {this.state.isAuthenticated ? <DashboardPage isLoggedIn/> : <p>NOT VALID</p>}
  </div>
  );
 }

}

export default App;