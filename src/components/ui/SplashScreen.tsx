import Image from "next/image";
import React from "react";


export default function SplashScreen({ fadeOut }: { fadeOut?: boolean }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-red-400 text-base-100 z-50 transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <Image
        src="/brand/fuelly-logo.svg"
        alt="Fuelly logo"
        width={251}
        height={259} />
    </div>
  );
}