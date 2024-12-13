import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import SplashScreen from "../components/SplashScreen";
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [])

  if (showSplash) {
    return <SplashScreen />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
