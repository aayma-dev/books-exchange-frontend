import React from "react";

export default function Badge({ text, variant = "gold" }) {
  return (
    <span className={variant === "teal" ? "badge-teal" : "badge-gold"}>
      {text}
    </span>
  );
}
