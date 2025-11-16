"use client";

import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const { cart, increaseQty, decreaseQty, removeFromCart, subtotal } = useCart();

  const textStyle = { color: "white" }; // FIX TEXT VISIBILITY

  if (!cart || cart.length === 0) {
    return <h2 style={{ padding: 20, color: "white" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h2 style={textStyle}>Your Cart 🛒</h2>

      {cart.map((item: any) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #666",
            padding: 15,
            marginTop: 10,
            display: "flex",
            gap: 20,
            background: "rgba(0,0,0,0.4)",
            borderRadius: 10,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: 100, borderRadius: 10 }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={textStyle}>{item.title}</h3>
            <p style={textStyle}>₹{item.price}</p>

            {/* Quantity Controls */}
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <button
                onClick={() => decreaseQty(item.id)}
                style={{
                  padding: "6px 12px",
                  background: "red",
                  color: "white",
                  borderRadius: 6,
                }}
              >
                –
              </button>

              <span
                style={{
                  padding: "6px 12px",
                  background: "white",
                  color: "black",
                  borderRadius: 6,
                }}
              >
                {item.qty}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                style={{
                  padding: "6px 12px",
                  background: "green",
                  color: "white",
                  borderRadius: 6,
                }}
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "6px 12px",
                  background: "black",
                  color: "white",
                  borderRadius: 6,
                  marginLeft: 10,
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: 20, color: "white" }}>Total: ₹{subtotal}</h2>

      <button
        onClick={() => router.push("/checkout")}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "white",
          color: "black",
          fontWeight: "bold",
          borderRadius: 10,
          width: 220,
          cursor: "pointer",
        }}
      >
        Proceed to Checkout →
      </button>
    </div>
  );
}
