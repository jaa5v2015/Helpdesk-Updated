
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
 


const LoginPage = ({logIn}) => {
    //Declare Variables
    let navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [successLogin, setLogin] = useState(true)
    const users = [{username: "bh05230", password:"Wildlife#1"}]
    //Set Username from username textfield
    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }
    // Set password from password textfield
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        
    }
    //Login and navigate to dashboard
    function Login(username, password) {
       
        for(let i = 0; i < users.length; i++){
            console.log(users[i].username)
            if(users[i].username == username && users[i].password == password){
               
                setLogin(true)
                logIn();
                navigate("/dashboard", {state: {loggedIn: successLogin}});
                
                
            }
            else{
                setLogin(false)
              
               
            }
        }
    }


        if(successLogin == true){
            return(
                <div onKeyDown={e => e.key === 'Enter' && Login(username, password)} style={{justifyContent:"center", display:"flex", paddingTop:"15%"}}>
                <div   style={{display:"flex", flexDirection:"column", border:"2px solid black", padding:"5%", boxshadow: "2px 2px 2px grey"}}>
                    <div style={{padding:"3%"}}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        onChange={handleUsername}                
                    />
                    </div>

                   <div style={{padding: "3%"}}>
                   <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                    />
                   </div>
                   <button onClick={() => Login(username, password)}>Login</button>
                </div>
        
            </div>
            )
        }
        else{
            return(
                <div onKeyDown={e => e.key === 'Enter' && Login(username, password)} style={{justifyContent:"center", display:"flex", paddingTop:"15%"}}>
                    
                <div   style={{display:"flex", flexDirection:"column", border:"2px solid black", padding:"5%", boxshadow: "2px 2px 2px grey"}}>
                    <div style={{padding:"3%"}}>
                    <TextField
                    error
                        id="outlined-basic"
                        label="Username"
                        onChange={handleUsername}                
                    />
                    </div>

                   <div style={{padding: "3%"}}>
                   <TextField
                        error
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        helperText="Incorrect Username or Password"
                        onChange={handlePassword}
                    />
                   </div>
                   <button onClick={() => Login(username, password)}>Login</button>
                </div>
        
            </div>
            )
        }
 }

 export default LoginPage;