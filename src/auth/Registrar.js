import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Registrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegisrar = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <StyledContainer>
      <StyledTypography variant="h4">Registrar</StyledTypography>
      <StyledForm onSubmit={handleRegisrar}>
        <StyledTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Senha"
          type="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <StyledButton type="submit">Registrar</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Registrar;
