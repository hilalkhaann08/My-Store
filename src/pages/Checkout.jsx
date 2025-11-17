import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/routes.jsx';


export default function Checkout({ onNotify }) {
  const [form, setForm] = React.useState({ name: '', email: '', address: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    onNotify && onNotify('Order placed! Thank you.', 'success');
    navigate(ROUTES.home);
  };

  return (
    <Paper
      sx={{
        p: 3,
        maxWidth: 600,
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid rgba(148, 163, 184, 0.35)',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Checkout
      </Typography>
      <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
        <TextField
          label="Full Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
        />
        <TextField
          label="Address"
          multiline
          minRows={3}
          value={form.address}
          onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
          required
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained">
            Submit Order
          </Button>
          <Button variant="outlined" onClick={() => navigate(ROUTES.cart)}>
            Back to Cart
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}