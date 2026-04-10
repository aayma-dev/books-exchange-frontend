import React from "react";
import { Star } from "lucide-react";

export default function PointsBadge({ points }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold)" }}>
      <Star size={11} fill="var(--gold)" color="var(--gold)" />
      <span className="text-xs font-bold" style={{ fontFamily: "var(--font-mono)" }}>{points} pts</span>
    </span>
  );
}
