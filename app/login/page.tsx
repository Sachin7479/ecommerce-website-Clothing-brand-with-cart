"use client";

import { useAuth } from "@/components/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email.endsWith("@gmail.com")) {
      alert("Email must end with @gmail.com");
      return;
    }
    if (password.length < 3) {
      alert("Password must be at least 3 characters");
      return;
    }

    login(email);
    router.push("/");
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521335751419-603f61523713')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <div
  style={{
    width: 350,
    margin: "80px auto",
    padding: 20,
    background: "white",
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    color: "black"   // ← ADD THIS LINE
  }}
>

      
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          Login to Continue
        </h2>

        <input
          type="email"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            background: "black",
            color: "white",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
