import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Divider,
  Button,
  Paper,
} from '@mui/material';
import CartItem from '../components/CartItem.jsx';
import { selectCartItems, selectCartTotal, clearCart } from '../store/slices/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/routes.jsx';


export default function Cart({ onNotify }) {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClear = () => {
    dispatch(clearCart());
    onNotify && onNotify('Cart cleared', 'info');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>

      {items.length === 0 ? (
        <Typography color="text.secondary">Your cart is empty.</Typography>
      ) : (
        <>
          <Box>
            {items.map((item) => (
              <CartItem key={item.id} item={item} onNotify={onNotify} />
            ))}
          </Box>

          <Paper
            sx={{
              p: 2,
              mt: 2,
              bgcolor: 'background.paper',
              borderRadius: 3,
              border: '1px solid rgba(148, 163, 184, 0.35)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${total.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="outlined" color="error" onClick={handleClear}>
                Clear Cart
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate(ROUTES.checkout)}
                disabled={items.length === 0}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Paper>
        </>
      )}
    </Box>
  );
}