import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Login } from "../components/Login"
import { GuestDetails } from "../components/GuestDetails";
import ReviewOrder from "../components/ReviewOrder";
import { useAuthContext } from "../contexts/AuthContext";
import { useAppContext } from "../contexts/AppContext";

const steps = ['Login', 'Details', 'Review your order'];

export function CheckoutPage() {
    const { authState } = useAuthContext();
    const { appState, storePaymentDetails } = useAppContext();
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (authState?.user) {
            setActiveStep(1);
        }
    }, [authState])

    const handleDetailsNext = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const paymentData = {
            cardName: data.get('cardName'),
            cardNumber: data.get('cardNumber'),
            expDate: data.get('expDate'),
            cvv: data.get('cvv')
        };

        storePaymentDetails(paymentData)
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleCheckOut = () => {

    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (<Container component="main" maxWidth="xs">
                    <Login />
                    <Container>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={() => handleNext()}
                        >
                            Continue as Guest
                        </Button>
                    </Container>
                </Container>);
            case 1:
                return (<Container component="main" maxWidth="xs">
                    <Container>
                        <GuestDetails />
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Payment method
                        </Typography>
                        <Box component="form" onSubmit={handleDetailsNext} noValidate sx={{ mt: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="cardName"
                                        name="cardName"
                                        label="Name on card"
                                        fullWidth
                                        autoComplete="cc-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="cardNumber"
                                        name="cardNumber"
                                        label="Card number"
                                        fullWidth
                                        autoComplete="cc-number"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="expDate"
                                        name="expDate"
                                        label="Expiry date"
                                        fullWidth
                                        autoComplete="cc-exp"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cvv"
                                        name="cvv"
                                        label="CVV"
                                        fullWidth
                                        autoComplete="cc-csc"
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3 }}
                            >
                                Proceed
                            </Button>
                        </Box>
                    </Container>
                </Container>);
            case 2:
                return (<>
                    <ReviewOrder mobileNumber={authState?.user?.mobileNumber} plan={appState?.selectedPlan} payment={appState?.paymentDetails}/>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleCheckOut()}
                    >
                        Checkout
                    </Button>
                </>);
            default:
                throw new Error('Unknown step');
        }
    }


    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order
                            confirmation, and will send you an update when your order has
                            shipped.
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}
                        </Box>
                    </React.Fragment>
                )}
            </Paper>
        </Container>);
}


