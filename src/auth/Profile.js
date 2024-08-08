import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import './App.css';

const Register = () => {
  return (
    <Container className="register-container">
      <Paper className="register-paper">
        <Typography variant="h4" className="register-title">
          Registro
        </Typography>
        <form className="register-form">
          <TextField
            label="Nome"
            name="name"
            fullWidth
            required
            className="register-input"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
            className="register-input"
          />
          <TextField
            label="Senha"
            type="password"
            name="password"
            fullWidth
            required
            className="register-input"
          />
          <Button type="submit" className="btn-primary">
            Registrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
