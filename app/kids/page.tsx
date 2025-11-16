"use client";

import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/components/AuthContext";

export default function KidsPage() {
  const { user } = useAuth();
  const kids = products.filter((p) => p.category === "kids");

  if (!user) return <h2 style={{ padding: 20 }}>Login first</h2>;

  return (
    <div
      style={{
        padding: 20,
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg")',
        backgroundSize: "cover",
      }}
    >
      <h2>Kids' Collection 🧒</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 25 }}>
        {kids.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
