import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const plans = [
    {
        title: 'Basic',
        price: '100',
        description: [
            'Unlimited talk and text',
            '10 GB data included',
            '28 days validity'        ],
        buttonText: 'Select plan',
        buttonVariant: 'outlined',
    },
    {
        title: 'Standard',
        price: '200',
        description: [
            'Unlimited talk and text',
            '20 GB data included',
            '28 days validity'
        ],
        buttonText: 'Select plan',
        buttonVariant: 'outlined',
    },
    {
        title: 'Premium',
        price: '300',
        description: [
            'Unlimited talk and text',
            '50 GB data included',
            '28 days validity'
        ],
        buttonText: 'Select plan',
        buttonVariant: 'outlined',
    },
];

export function HomePage() {
    const navigate = useNavigate();
    const { appState, selectPlan } = useAppContext();

    const handleSelectPlan = (plan) => {
        selectPlan(plan);
        navigate("/checkout");
    }

    return (
        <React.Fragment>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Great value offers!
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {plans.map((plan) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={plan.title}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={plan.title}
                                    subheader={plan.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            &#8377;{plan.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {plan.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={plan.buttonVariant} onClick={() => handleSelectPlan(plan)}>
                                        {plan.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}