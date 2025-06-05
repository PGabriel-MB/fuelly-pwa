"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "../components/ui/SplashScreen";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1800);
    const hideTimer = setTimeout(() => setShow(false), 2300);
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return <>{children}</>;

  return (
    <>
      <SplashScreen fadeOut={fade} />
      {children}
    </>
  );
}