"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function ProductCard({ product }: any) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const inCart = cart.find((item: any) => item.id === product.id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 14,
        padding: 15,
        width: 260,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        background: "white",
      }}
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />

      {/* Product Title & Price */}
      <h3 style={{ color: "black", marginTop: 10 }}>{product.title}</h3>
      <p style={{ color: "black" }}>₹{product.price}</p>

      {/* If NOT in cart → Show Add to Cart */}
      {!inCart ? (
        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            padding: "10px",
            background: "black",
            color: "white",
            borderRadius: 8,
            marginTop: 10,
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div style={{ marginTop: 10 }}>
          {/* Quantity Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            {/* - Button */}
            <button
              onClick={() => decreaseQty(product.id)}
              style={{
                padding: "8px 12px",
                background: "red",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              –
            </button>

            {/* Quantity Number */}
            <span
              style={{
                padding: "6px 14px",
                background: "#eee",
                borderRadius: 8,
                fontWeight: "bold",
                color: "black", // ✅ FIXED (text visible)
              }}
            >
              {inCart.qty}
            </span>

            {/* + Button */}
            <button
              onClick={() => increaseQty(product.id)}
              style={{
                padding: "8px 12px",
                background: "green",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          {/* Go to Cart button */}
          <Link href="/cart">
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#444",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Go to Cart →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
