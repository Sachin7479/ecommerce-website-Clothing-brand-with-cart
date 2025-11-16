"use client";

import { useAuth } from "./AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const publicPages = ["/login"];

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for AuthProvider state to load
    const timer = setTimeout(() => {
      if (!user && !publicPages.includes(pathname)) {
        router.push("/login");
      }
      setIsReady(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [user, pathname]);

  if (!isReady) return null;

  return <>{children}</>;
}
