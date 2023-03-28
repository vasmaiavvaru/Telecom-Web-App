import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

export default function ReviewOrder({ mobileNumber, plan, payment }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Plan selected for mobile {mobileNumber}
            </Typography>
            <List disablePadding>
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'baseline',
                        }}
                    >
                        <Typography component="h5" variant="h5" color="text.primary">
                            {plan?.title}
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
                        <Typography component="h5" variant="h5" color="text.primary">
                            &#8377;{plan?.price}
                        </Typography>
                    </Box>
                    <ul>
                        {plan?.description?.map((line) => (

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
            </List>
            <Grid container spacing={2}>
                <Grid item container direction="column" xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{"Name on card"}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{payment.cardName}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{"Card number"}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{payment.cardNumber}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{"Expiry date"}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{payment.expDate}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}