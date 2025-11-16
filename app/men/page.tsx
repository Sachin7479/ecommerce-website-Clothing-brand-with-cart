"use client";

import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/components/AuthContext";

export default function MenPage() {
  const { user } = useAuth();
  const men = products.filter((p) => p.category === "men");

  if (!user) return <h2 style={{ padding: 20 }}>Login first</h2>;

  return (
    <div
      style={{
        padding: 20,
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/532558/pexels-photo-532558.jpeg")',
        backgroundSize: "cover",
      }}
    >
      <h2>Men's Collection 👕</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 25 }}>
        {men.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
