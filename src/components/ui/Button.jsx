import React from "react";

export default function Button({ children, onClick, className = "", variant = "gold", type = "button", disabled = false }) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 px-5 py-2.5 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    gold: "btn-gold",
    outline: "btn-outline",
    ghost: "hover:bg-white/5 text-[var(--cream-dim)] hover:text-[var(--cream)]",
    danger: "bg-[var(--rose)] text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.gold} ${className}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </button>
  );
}
