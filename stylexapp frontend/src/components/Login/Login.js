import React, { useState, useContext } from 'react';
import {
    Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,
    Grid, Box, Typography, Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });
    const { login } = useContext(UserContext);
    const [loginMessage, setLoginMessage] = useState('');
    const [success, setSuccess] = useState(true);

    const addUser = (event) => {
        setSuccess(true);
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/getCustomers');
            const customers = await response.json();

            const { email, password } = user;
            const loggedInCustomer = customers.find(
                (customer) => customer.email === email && customer.password === password
            );

            if (loggedInCustomer) {
                setSuccess(true);
                setLoginMessage('Login successful!');
                login(loggedInCustomer);
                navigate('/');
            } else {
                setSuccess(false);
                setLoginMessage('Invalid email or password.');
            }
        } catch (error) {
            setSuccess(false);
            setLoginMessage('Error fetching customers.');
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <div className="total">
            <div className="login-image-container">
                <img src="images\loginpic.jpg" alt="Login" />
            </div>
            <div className="login-container">
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" className="userContainer">
                        <CssBaseline />
                        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ m: 1 }}>
                                <Link to="/">
                                    <LockOutlinedIcon />
                                </Link>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={addUser}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={addUser}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Box className="loginMessage" sx={{ color: success ? 'green' : 'red' }}>
                                    {loginMessage}
                                </Box>
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            Don't have an account?{' '}
                                            <Link to="/register" variant="body2">
                                                Sign Up
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
}
