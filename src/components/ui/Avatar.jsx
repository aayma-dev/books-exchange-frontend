// Avatar.jsx
import React from "react";

export default function Avatar({ src, name, size = 10 }) {
  return src ? (
    <img src={src} alt={name || "avatar"}
      className={`w-${size} h-${size} rounded-full object-cover`}
      style={{ border: "2px solid var(--ink-border)" }} />
  ) : (
    <div className={`w-${size} h-${size} rounded-full flex items-center justify-center font-bold text-sm`}
      style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
      {name ? name[0].toUpperCase() : "?"}
    </div>
  );
}
