export const ROUTES = {
  home: '/',
  products: '/products',
  productDetails: (id = ':id') => `/products/${id}`,
  cart: '/cart',
  checkout: '/checkout',
};