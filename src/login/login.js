import * as React from 'react';
import { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignIn() {
  const [error,setError]=useState(false);
  const [errmsg, setErrmsg]=useState('')
  const history = useHistory();

  useEffect(() => {
    // Set a timeout to clear the error message after 1 second
    const timeoutId = setTimeout(() => {
      setError(false);
    }, 2000);

    // Clear the timeout when the component unmounts or when a new error is set
    return () => clearTimeout(timeoutId);
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      email: data.get('email'),
      password: data.get('password'),
      custodian: true,
      dean: false
    }
    const url = 'https://groupa-backend.onrender.com/loginCustodian';

    // Define the options for the fetch request
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(formData), // Convert data to JSON
    };

    // Use the fetch API to send the POST request
    fetch(url, options)
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          setErrmsg(errorData.message)
          setError(true)
          console.error('Error from server:', errorData.message);
          throw new Error('Unauthorized'); // Throw a new error to handle in the next catch block
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the JSON response data as needed
        // console.log('Response from server:', data.user);
        console.log('Response from server:', data);
        localStorage.setItem('accessToken', data.accessToken);
        if(data.refreshToken){
          localStorage.setItem('refreshToken', data.refreshToken);
        }
        // const storedAccessToken = localStorage.getItem('accessToken');
        // console.log(storedAccessToken)
        // console.log(data.accessToken)
        console.log(window.location.pathname)
         history.push("/")
         window.location.reload();
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error:', error);
      });

  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >{error ? (
            <Alert severity="error">{errmsg}</Alert>
          ) : null}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
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
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={'/register'} href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}