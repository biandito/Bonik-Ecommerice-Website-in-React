import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/profile');
  };

  return (
    <StyledContainer>
      <StyledTypography variant="h4">Login</StyledTypography>
      <StyledForm onSubmit={handleLogin}>
        <StyledTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
