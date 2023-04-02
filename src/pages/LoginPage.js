import React from "react";
import { Login } from "../components/Login"
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";


export function LoginPage() {
    const navigate = useNavigate();

    return (
        <Container component="main" maxWidth="xs">
            <Login handleLogin={() => navigate("/")}/>
            <Container>
                <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Container>
        </Container>
    );
}

