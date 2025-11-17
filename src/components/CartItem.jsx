import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../store/slices/cartSlice.js';


export default function CartItem({ item, onNotify }) {
  const dispatch = useDispatch();

  const inc = () => dispatch(increaseQty(item.id));
  const dec = () => dispatch(decreaseQty(item.id));
  const del = () => {
    dispatch(removeItem(item.id));
    onNotify && onNotify('Item removed from cart', 'info');
  };

  return (
    <Card
      sx={{
        display: 'flex',
        mb: 2,
        flexWrap: 'wrap',
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid rgba(148, 163, 184, 0.35)',
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{ width: 120, height: 120, objectFit: 'cover' }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {item.title}
        </Typography>
        <Typography color="text.secondary">
          ${item.price.toFixed(2)} x {item.quantity} = $
          {(item.price * item.quantity).toFixed(2)}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 1 }}>
          <IconButton size="small" onClick={dec} aria-label="decrease">
            <RemoveIcon sx={{ color: "#fff" }}/>
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton size="small" onClick={inc} aria-label="increase">
            <AddIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={del}
            sx={{ ml: 2 }}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}