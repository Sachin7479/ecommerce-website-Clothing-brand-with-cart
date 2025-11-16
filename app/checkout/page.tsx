"use client";

import { useAuth } from "@/components/AuthContext";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { user } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  const [payment, setPayment] = useState("");
  const [finished, setFinished] = useState(false);

  // Redirect if NOT logged in
  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  // Redirect to success after placing order
  useEffect(() => {
    if (finished) {
      router.push("/success");
    }
  }, [finished]);

  if (!user) return null;

  if (cart.length === 0) {
    return <h2 style={{ padding: 20 }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div style={{ padding: 30, color: "white" }}>
      <h2>Select Payment Method</h2>

      <div style={{ marginTop: 20 }}>
        <label style={{ marginRight: 15 }}>
          <input
            type="radio"
            name="pay"
            onChange={() => setPayment("UPI")}
          /> UPI
        </label>

        <label style={{ marginRight: 15 }}>
          <input
            type="radio"
            name="pay"
            onChange={() => setPayment("Card")}
          /> Card
        </label>

        <label>
          <input
            type="radio"
            name="pay"
            onChange={() => setPayment("COD")}
          /> Cash on Delivery
        </label>
      </div>

      <button
        onClick={() => {
          if (!payment) {
            alert("Select a payment method first!");
            return;
          }
          setFinished(true); // triggers useEffect → success page
        }}
        style={{
          marginTop: 30,
          padding: "12px 20px",
          background: payment ? "black" : "gray",
          color: "white",
          cursor: payment ? "pointer" : "not-allowed",
          borderRadius: 10,
        }}
      >
        Place Order
      </button>
    </div>
  );
}
