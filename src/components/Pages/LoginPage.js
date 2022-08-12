
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import React from 'react'


const LoginPage = ({logIn}) => {
   return(
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", textAlign:"center", padding:"25%"}}>
        <button onClick={() => logIn() }>Login</button>
        <span>Login to view Dashboard</span>
    </div>
   );
 }

 export default LoginPage;