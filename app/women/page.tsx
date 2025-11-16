"use client";

import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/components/AuthContext";

export default function WomenPage() {
  const { user } = useAuth();
  const women = products.filter((p) => p.category === "women");

  if (!user) return <h2 style={{ padding: 20 }}>Login first</h2>;

  return (
    <div
      style={{
        padding: 20,
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg")',
        backgroundSize: "cover",
      }}
    >
      <h2>Women's Collection 👗</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 25 }}>
        {women.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
