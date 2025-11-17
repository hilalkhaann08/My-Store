import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.js';

/**
 * Configures Redux store with a single slice: cart.
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});