"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "../components/ui/SplashScreen";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <SplashScreen /> : <>{children}</>;
}