import { createSlice } from '@reduxjs/toolkit';

/**
 * Cart slice using Redux Toolkit for add/remove and quantity changes.
 * State shape:
 * {
 *   items: { [productId]: { id, title, price, image, quantity } }
 * }
 */
const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds an item to the cart or increases quantity if it already exists.
    addItem: (state, action) => {
      const product = action.payload;
      const existing = state.items[product.id];
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[product.id] = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
      }
    },
    // Removes an item completely from the cart.
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    // Increases quantity by 1.
    increaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    // Decreases quantity by 1; removes item if quantity hits 0.
    decreaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    // Clears the entire cart.
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;

/**
 * Selectors to read cart state.
 */
export const selectCartItems = (state) => Object.values(state.cart.items);
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;