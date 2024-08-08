mport React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Grid, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './App.css';

const Profile = () => {
const [editMode, setEditMode] = useState(false);
const [user, setUser] = useState({
avatar: 'https://via.placeholder.com/150',
name: 'João Silva',
email: 'joao.silva@example.com',
address: 'Rua Principal, 123, Cidade Exemplo, Brasil',
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
<Container className="profile-container">
<Paper className="profile-paper">
<Grid container spacing={2}>
<Grid item xs={12} sm={4} className="profile-avatar-container">
<Avatar
src={user.avatar}
className="profile-avatar"
/>
</Grid>
<Grid item xs={12} sm={8}>
<Typography variant="h4" className="profile-name">
{editMode ? (
<TextField
label="Nome"
name="name"
value={[editUser.name](http://edituser.name/)}
onChange={handleChange}
fullWidth
className="profile-input"
/>
) : (
[user.name](http://user.name/)
)}
</Typography>
<Typography variant="body1" className="profile-info">
Email: {editMode ? (
<TextField
label="Email"
name="email"
value={editUser.email}
onChange={handleChange}
fullWidth
className="profile-input"
/>
) : (
user.email
)}
</Typography>
<Typography variant="body1" className="profile-info">
Endereço: {editMode ? (
<TextField
label="Endereço"
name="address"
value={editUser.address}
onChange={handleChange}
fullWidth
className="profile-input"
/>
) : (
user.address
)}
</Typography>
<Typography variant="body1" className="profile-info">
Telefone: {editMode ? (
<TextField
label="Telefone"
name="phone"
value={editUser.phone}
onChange={handleChange}
fullWidth
className="profile-input"
/>
) : (
user.phone
)}
</Typography>
<div className="profile-actions">
{editMode ? (
<Button startIcon={<SaveIcon />} onClick={handleSave} className="btn-primary">
Salvar
</Button>
) : (
<Button startIcon={<EditIcon />} onClick={handleEditToggle} className="btn-secondary">
Editar
</Button>
)}
</div>
</Grid>
</Grid>
</Paper>
<Paper className="important-section">
<Typography variant="h5" className="profile-orders-title">Histórico de Pedidos</Typography>
<ul className="profile-orders-list">
<li>Pedido #1: Produto A, Produto B</li>
<li>Pedido #2: Produto C, Produto D</li>
</ul>
</Paper>
</Container>
);
};

export default Profile;
