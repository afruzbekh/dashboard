"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
