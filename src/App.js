import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import Avatar from '@mui/material/Avatar';
import { useAuthContext } from './contexts/AuthContext';

function App() {
    const { authState } = useAuthContext();

    return (
        <div >
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <Link to="/">ChargeUp</Link>
                    </Typography>
                    {authState.user ?
                        <>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOpenOutlined />
                            </Avatar> 
                            <Link to="/account">{authState.user.firstName} {authState.user.lastName}</Link>
                        </> :
                        <>
                            <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                                Login
                            </Button>
                            <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                                SignUp
                            </Button>
                        </>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
