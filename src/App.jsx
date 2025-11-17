import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Snackbar, Alert } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';


export default function App() {
  const [snack, setSnack] = React.useState({ open: false, message: '', severity: 'success' });

  const showMessage = useMemo(
    () => (message, severity = 'success') => setSnack({ open: true, message, severity }),
    []
  );

  return (
    <>
      <Navbar onNotify={showMessage} />
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 6,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Routes>
          <Route path="/" element={<Home onNotify={showMessage} />} />
          <Route path="/products" element={<Products onNotify={showMessage} />} />
          <Route path="/products/:id" element={<ProductDetails onNotify={showMessage} />} />
          <Route path="/cart" element={<Cart onNotify={showMessage} />} />
          <Route path="/checkout" element={<Checkout onNotify={showMessage} />} />
        </Routes>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={2000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
}