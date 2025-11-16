"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div
      style={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",   // 👈 FIX TEXT COLOR
      }}
    >
      <h1 style={{ fontSize: 48, marginBottom: 10 }}>
        🎉 Thank You for Shopping!
      </h1>

      <p style={{ fontSize: 22, marginBottom: 30 }}>
        Your order has been placed successfully.
      </p>

      <Link href="/">
        <button
          style={{
            padding: "12px 28px",
            background: "black",
            color: "white",
            borderRadius: 12,
            fontSize: 18,
            cursor: "pointer",
            border: "2px solid blue"
          }}
        >
          Go to Home →
        </button>
      </Link>
    </div>
  );
}
