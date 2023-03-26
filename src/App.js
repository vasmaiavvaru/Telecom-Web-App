import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

function App() {
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
                        <Link href="/" sx={{ textDecoration: 'none' }}>ChargeUp</Link>
                    </Typography>
                    <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                    <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        SignUp
                    </Button>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
