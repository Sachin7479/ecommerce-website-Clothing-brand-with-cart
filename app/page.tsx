"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthContext";

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return (
      <h2 style={{ padding: 40 }}>
        Please <a href="/login">Login</a> to continue.
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        paddingTop: 100,
      }}
    >
      <h1 style={{ fontSize: 42 }}>Welcome {user} 👋</h1>
      <p>Select a category to start shopping</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: 30,
        }}
      >
        <Link href="/men" style={btn}>Men</Link>
        <Link href="/women" style={btn}>Women</Link>
        <Link href="/kids" style={btn}>Kids</Link>
        <Link href="/cart" style={btn}>Cart</Link>
      </div>
    </div>
  );
}

const btn: any = {
  padding: "12px 25px",
  background: "rgba(255,255,255,0.85)",
  borderRadius: 10,
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
};
