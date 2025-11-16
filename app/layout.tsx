"use client";

import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/components/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const noNavbarRoutes = ["/login", "/success"];

  const hideNavbar = noNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            {/* Login and Success pages do NOT need protection */}
            {pathname === "/login" || pathname === "/success" ? (
              <>{children}</>
            ) : (
              <ProtectedRoute>
                {!hideNavbar && <Navbar />}
                {children}
              </ProtectedRoute>
            )}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
