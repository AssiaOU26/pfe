import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartIds, setCartIds] = useState(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [products, setProducts] = useState([]);
  const [toast, setToast] = useState(null);

  // Fetch product details for all cart IDs
  useEffect(() => {
    async function fetchProducts() {
      if (cartIds.length === 0) {
        setProducts([]);
        return;
      }
      try {
        const response = await fetch(`http://localhost:8000/api/products/`);
        const allProducts = await response.json();
        // Filter only products in cart
        setProducts(allProducts.filter(p => cartIds.includes(p.id)));
      } catch (err) {
        setProducts([]);
      }
    }
    fetchProducts();
  }, [cartIds]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartIds));
  }, [cartIds]);

  const addToCart = useCallback((product) => {
    setCartIds((prev) => {
      if (prev.includes(product.id)) return prev;
      setToast({ message: `${product.name} added to cart!`, type: 'success' });
      return [...prev, product.id];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartIds((prev) => prev.filter((itemId) => itemId !== id));
  }, []);

  // Hide toast after 2 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <CartContext.Provider value={{ cart: products, addToCart, removeFromCart, toast, setToast }}>
      {children}
    </CartContext.Provider>
  );
}
