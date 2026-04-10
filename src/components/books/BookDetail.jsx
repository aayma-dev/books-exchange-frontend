import React from "react";
import { Star, MapPin } from "lucide-react";

export default function BookDetail({ book }) {
  if (!book) return null;
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row gap-8">
      <img src={book.image} alt={book.title} className="rounded-xl w-40 h-56 object-cover" style={{ border: "1px solid var(--ink-border)" }} />
      <div>
        <span className="badge-gold mb-3 inline-block">{book.genre}</span>
        <h2 className="font-display text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>{book.title}</h2>
        <p className="mb-4" style={{ color: "#888" }}>by {book.author}</p>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-sm" style={{ color: "var(--gold)" }}>
            <Star size={13} fill="var(--gold)" color="var(--gold)" /> {book.points} pts
          </span>
          <span className="flex items-center gap-1 text-sm" style={{ color: "#888" }}>
            <MapPin size={13} /> {book.location}
          </span>
        </div>
      </div>
    </div>
  );
}
