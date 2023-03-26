import React, { useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Login } from "../components/Login"
import { GuestDetails } from "../components/GuestDetails";
import ReviewOrder from "../components/ReviewOrder";

const plan = {
    name: 'Basic',
    desc: [
        'Unlimited talk and text',
        '10 GB data included',
        '28 days validity'],
    price: '100'
}

const steps = ['Login', 'Details', 'Review your order'];

export function CheckoutPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
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
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => handleNext()}
                        >
                            Proceed
                        </Button>
                    </Container>
                </Container>);
            case 2:
                return (<>
                    <ReviewOrder mobileNumber={999999999} plan={plan} />
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


