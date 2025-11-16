"use client";

import Link from "next/link";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        background: "#000000cc", // darker for clear visibility
        color: "white",
        position: "sticky",
        top: 0,
        backdropFilter: "blur(6px)",
        zIndex: 20,
      }}
    >
      {/* LEFT MENU */}
      <div style={{ display: "flex", gap: 20 }}>
        <Link className="navbar-text" href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        {user && (
          <>
            <Link className="navbar-text" href="/men" style={{ color: "white" }}>
              Men
            </Link>
            <Link className="navbar-text" href="/women" style={{ color: "white" }}>
              Women
            </Link>
            <Link className="navbar-text" href="/kids" style={{ color: "white" }}>
              Kids
            </Link>

            <Link className="navbar-text" href="/cart" style={{ color: "white" }}>
              Cart ({cart.length})
            </Link>
          </>
        )}
      </div>

      {/* RIGHT SECTION */}
      <div>
        {!user ? (
          <Link className="navbar-text" href="/login" style={{ color: "white" }}>
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            style={{
              background: "red",
              padding: "6px 14px",
              borderRadius: 8,
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout ({user})
          </button>
        )}
      </div>
    </div>
  );
}
