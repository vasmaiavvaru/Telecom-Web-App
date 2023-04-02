import * as React from 'react';
import { useState,useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useAuthContext } from '../contexts/AuthContext';

const plans = [
    {
        name: 'Basic',
        desc: [
            'Unlimited talk and text',
            '10 GB data included',
            '28 days validity'],
        price: '100',
        isActive: true
    },
    {
        name: 'Standard',
        desc: [
            'Unlimited talk and text',
            '10 GB data included',
            '28 days validity'],
        price: '200',
        isActive: false
    },
    {
        name: 'Premium',
        desc: [
            'Unlimited talk and text',
            '10 GB data included',
            '28 days validity'],
        price: '300',
        isActive: false
    }
];

export default function AccountPage() {
    const { authState } = useAuthContext();

    const[userdata, setuserdata] = useState({})
   
      useEffect(()=>{
          const fetchTUser = async()=>{
              const responseOptions = {
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json',
                      Authorization:"Bearer " + localStorage.getItem("userToken")
                  },
              }
              const response = await fetch("http://127.0.0.1:8000/api/v1/users/token/decoder", responseOptions)
              const data = await response.json()
              if(!response.ok){
                  console.log({"error":data.detail})
              }
              else{
                  console.log(data)
                  setuserdata(data)
              }
          }
          fetchTUser();
      },[])

    return (
        <Container component="main" sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                defaultValue={authState?.user?.firstName}
                               
                                disabled
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
                                defaultValue={authState?.user?.lastName}
                               
                                disabled
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
                                defaultValue={authState?.user?.mobileNumber}
                              
                                disabled
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                defaultValue={authState?.user?.emailAddress}
                              
                                disabled
                                autoComplete="email"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                        Active Plan
                    </Typography>
                    <List disablePadding>
                        {plans.filter(p => p.isActive === true).map((plan) =>
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'baseline',
                                        mb: 1
                                    }}
                                >
                                    <Typography component="h6" variant="h6" color="text.primary">
                                        {plan.name}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'baseline',
                                        mt: -4
                                    }}
                                >
                                    <Typography variant="body2"> &#8377;{plan.price}</Typography>
                                </Box>
                                <ul>
                                    {plan.desc.map((line) => (

                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            key={line}
                                            sx={{ mx: 2, fontSize: 14, color: "gray" }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </>)}
                    </List>
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                        Plan history
                    </Typography>
                    <List disablePadding>
                        {plans.filter(p => p.isActive === false).map((plan) => (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'baseline',
                                        mb: 1,
                                        mt: 2
                                    }}
                                >
                                    <Typography component="h6" variant="h6" color="text.primary">
                                        {plan.name}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'baseline',
                                        mt: -4
                                    }}
                                >
                                    <Typography variant="body2"> &#8377;{plan.price}</Typography>
                                </Box>
                                <ul>
                                    {plan.desc.map((line) => (

                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            key={line}
                                            sx={{ mx: 2, fontSize: 14, color: "gray" }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}