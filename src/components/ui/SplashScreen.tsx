import React from "react";


export default function SplashScreen({ fadeOut }: { fadeOut?: boolean }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-primary text-base-100 z-50 transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Seu logo e conteúdo */}
      <svg width={80} height={80} fill="none" viewBox="0 0 80 80">
        <circle cx={40} cy={40} r={38} stroke="#fff" strokeWidth={4} />
        <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="32" fontFamily="Arial" dy=".3em">
          🚗
        </text>
      </svg>
      <h1 className="mt-6 text-2xl font-bold">Fuelly</h1>
      <p className="mt-2 text-secondary">Carregando...</p>
    </div>
  );
}