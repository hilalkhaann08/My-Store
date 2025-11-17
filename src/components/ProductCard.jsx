import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/routes.jsx';


export default function ProductCard({ product, onNotify }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleAdd = () => {
    dispatch(addItem(product));
    onNotify && onNotify('Item added to cart');
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid rgba(148, 163, 184, 0.35)',
        boxShadow: '0 18px 45px rgba(15,23,42,0.9)',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 24px 60px rgba(15,23,42,1)',
          borderColor: 'rgba(129, 140, 248, 0.9)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => navigate(ROUTES.productDetails(product.id))}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {product.title}
        </Typography>
        <Typography color="text.secondary">${product.price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-around'}} >
        <Button size="small" onClick={() => navigate(ROUTES.productDetails(product.id))}>
          Details
        </Button>
        <Button size="small" variant="contained" onClick={handleAdd}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}