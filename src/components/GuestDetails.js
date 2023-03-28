import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../contexts/AuthContext';

export function GuestDetails() {
    const { authState } = useAuthContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            defaultValue={authState?.user ? authState?.user.firstName : ""}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            defaultValue={authState?.user ? authState?.user.lastName : ""}
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="mobileNumber"
                            label="Mobile"
                            name="mobileNumber"
                            defaultValue={authState?.user ? authState?.user.mobileNumber : ""}
                            autoComplete="phone"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            defaultValue={authState?.user ? authState?.user.emailAddress : ""}
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};