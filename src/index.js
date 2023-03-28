import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import App from './App';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import AccountPage from './pages/AccountPage';
import { AppProvider } from './contexts/AppContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <AppProvider>
                <BrowserRouter>
                    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                    <CssBaseline />

                    <App />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/account" element={<AccountPage />} />
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </AuthProvider>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
