import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import products from '../components/products.js';
import ProductCard from '../components/ProductCard.jsx';
import SearchBar from '../components/SearchBar.jsx';


export default function Products({ onNotify }) {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('');

  const categories = React.useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    []
  );

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = !category || p.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <Box sx={{ color: 'text.primary' }}>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>

      <Box sx={{ mb: 2 }}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </Box>

      <Grid container spacing={2}>
        {filtered.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} onNotify={onNotify} />
          </Grid>
        ))}
        {filtered.length === 0 && (
          <Grid item xs={12}>
            <Typography color="text.secondary">No products found.</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}