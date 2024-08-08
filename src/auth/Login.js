import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import './App.css';

const Login = () => {
  return (
    <Container className="login-container">
      <Paper className="login-paper">
        <Typography variant="h4" className="login-title">
          Login
        </Typography>
        <form className="login-form">
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
            className="login-input"
          />
          <TextField
            label="Senha"
            type="password"
            name="password"
            fullWidth
            required
            className="login-input"
          />
          <Button type="submit" className="btn-primary">
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
