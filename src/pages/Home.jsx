import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import products from '../components/products.js';
import ProductCard from '../components/ProductCard.jsx';
import { ROUTES } from '../components/routes.jsx';


export default function Home({ onNotify }) {
  const navigate = useNavigate();
  const featured = products.slice(0, 4);

  return (
    <Box sx={{ color: 'text.primary' }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 4,
          borderRadius: 4,
          border: '1px solid rgba(148, 163, 184, 0.35)',
          background:
            'radial-gradient(circle at top left, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(236,72,153,0.25), transparent 55%)',
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome to MyStore
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Find great gadgets at friendly prices.
        </Typography>
        <Button variant="contained" onClick={() => navigate(ROUTES.products)}>
          Shop Now
        </Button>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {featured.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={3}>
            <ProductCard product={p} onNotify={onNotify} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}