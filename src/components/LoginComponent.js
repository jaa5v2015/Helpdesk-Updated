import {Button, TextField} from "@mui/material/Button"
import '../App.css'


const LoginComponent = (props) => {
    if (props.invalidLogin === false) {
        return (
            <div className='login'>
                <TextField id="outlined-basic" label="BH number" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={() => logIn(username, password)}>Login</Button>
            </div>
        )
    }
    else {
        return (
            <div className="login">
                <TextField error id="outlined-error-helper-text" label="BH number" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                <TextField error id="outlined-error-helper-text" helperText="Incorrect entry." label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={() => logIn(username, password)}>Login</Button>
            </div>
        )
    }
}

export default LoginComponent