import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import products from '../components/products.js';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice.js';


export default function ProductDetails({ onNotify }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatch();

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAdd = () => {
    dispatch(addItem(product));
    onNotify && onNotify('Item added to cart');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="360"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: 'cover' }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              {product.title}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="h6" gutterBottom>
              ${product.price.toFixed(2)}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography>{product.description}</Typography>
            </Box>
            <Button variant="contained" onClick={handleAdd}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}