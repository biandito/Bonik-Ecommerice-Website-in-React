import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Grid, Paper, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    avatar: 'https://via.placeholder.com/150',
    name: 'João Silva',
    email: 'joao.silva@example.com',
    address: 'Rua dos Bobos, 0, Nada, Brasil',
    phone: '(11) 1234-5678',
  });

  const [editUser, setEditUser] = useState({ ...user });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setUser(editUser);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  return (
    <Container>
      <Paper style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Avatar
              src={user.avatar}
              style={{ width: '100px', height: '100px', margin: '0 auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">
              {editMode ? (
                <TextField
                  label="Nome"
                  name="name"
                  value={editUser.name}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                user.name
              )}
            </Typography>
            <Typography variant="body1">
              Email: {editMode ? (
                <TextField
                  label="Email"
                  name="email"
                  value={editUser.email}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                user.email
              )}
            </Typography>
            <Typography variant="body1">
              Endereço: {editMode ? (
                <TextField
                  label="Endereço"
                  name="address"
                  value={editUser.address}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                user.address
              )}
            </Typography>
            <Typography variant="body1">
              Telefone: {editMode ? (
                <TextField
                  label="Telefone"
                  name="phone"
                  value={editUser.phone}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                user.phone
              )}
            </Typography>
            <div style={{ marginTop: '20px' }}>
              {editMode ? (
                <Button startIcon={<SaveIcon />} onClick={handleSave}>
                  Salvar
                </Button>
              ) : (
                <Button startIcon={<EditIcon />} onClick={handleEditToggle}>
                  Editar
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
      {}
      <Paper style={{ padding: '20px', marginTop: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h5">Histórico de Pedidos</Typography>
        <ul>
          <li>Pedido #1:  A,  B</li>
          <li>Pedido #2:  B,  D</li>
          {}
        </ul>
      </Paper>
    </Container>
  );
};

export default Profile;
