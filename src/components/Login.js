import React,{useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export function Login({ handleLogin }) {
    const navigate = useNavigate();


    const { signIn } = useAuthContext();
    
    const[mobile, setmobile] = useState("")
    const[lpassword, setlpassword] = useState("")


    const submitLogin = async()=>{
        const requestOptions = {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(`grant_type=&username=${mobile}&password=${lpassword}&scope=&client_id=&client_secret=`)
        }
        const response = await fetch("http://127.0.0.1:8000/api/v1/auth/access-token", requestOptions)
        const data = await response.json()
        if(!response.ok){
            console.log({"error":data.detail})
        }
        else{
            console.log(data)
            localStorage.setItem("userToken", data.access_token)
            navigate("/")
        }
    }

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const request = {
            mobileNumber: data.get('mobileNumber'),
            password: data.get('password'),
        };
        submitLogin();
        await signIn(request)
            .then((response) => {
                handleLogin();
            });
    };

    return (
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="mobileNumber"
                            label="Mobile"
                            name="mobileNumber"
                            autoComplete="phone"
                            autoFocus
                             
                           value={mobile}
                           onChange={(e)=>{setmobile(e.target.value)}}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            
                            value={lpassword}
                            onChange={(e)=>{setlpassword(e.target.value)}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
}


