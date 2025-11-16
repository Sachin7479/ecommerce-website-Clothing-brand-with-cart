"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);

  // load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  // save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  function addToCart(product: any) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function increaseQty(id: string) {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  }

  function decreaseQty(id: string) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  const subtotal = cart.reduce((s, item) => s + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
