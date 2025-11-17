import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/slices/cartSlice.js';
import { ROUTES } from '../components/routes.jsx';


export default function Navbar() {
  const count = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.35)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          gap: 2,
          minHeight: 72,
        }}
      >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate(ROUTES.home)}
        >
          MyStore
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={NavLink} to={ROUTES.home}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to={ROUTES.products}>
            Products
          </Button>
          <IconButton color="inherit" onClick={() => navigate(ROUTES.cart)} aria-label="cart">
            <Badge badgeContent={count} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}