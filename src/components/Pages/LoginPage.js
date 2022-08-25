
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import React from 'react'
import { HealthAndSafety } from '@mui/icons-material';
import Button from "@mui/material/Button"
import '../../App.css'



const LoginPage = (props) => {

  const [login, setLogin] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [invalidLogin, setInvalid] = useState(false)
  let navigate = useNavigate()
  function logIn(username, password) {
    console.log(username, password)
    let encodedPassword = encodeURIComponent(password)
    let url = `http://127.0.0.1:90/logins/${username}/${encodedPassword}`

    fetch(url, { method: 'GET' }).then(
      res => res.json()
    ).then(
      data => {
        console.log(data.loggedIn)
        props.getUser(data)
        props.logIn(data.loggedIn[0])
        if (data.loggedIn[0] == true) {
          navigate('/dashboard')
          setInvalid(false)
        }
        else {
          setInvalid(true)
        }

      }
    )


  }



  return (
    <div>
      {
        invalidLogin === false ?

          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "25%" }}>
            <TextField id="outlined-basic" label="BH number" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" onClick={() => logIn(username, password)}>Login</Button>
          </div>
          :
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "25%" }}>
            <TextField error id="outlined-error-helper-text" label="BH number" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <TextField error id="outlined-error-helper-text"  helperText="Incorrect entry." label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" onClick={() => logIn(username, password)}>Login</Button>
          </div>
      }

    </div>
  );
}

export default LoginPage;