import React from "react";
import { Login } from "../components/Login"
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

export function LoginPage() {
    return (
        <Container component="main" maxWidth="xs">
            <Login />
            <Container>
                <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Container>
        </Container>
    );
}


