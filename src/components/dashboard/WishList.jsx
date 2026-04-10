import React from "react";
import { books } from "../../data/mockData";
import { Heart, Bell, Star } from "lucide-react";

export default function WishList() {
  const wishlist = books.slice(6, 10);

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>Wishlist</h3>
        <span className="badge-gold">{wishlist.length} books</span>
      </div>
      <div className="flex flex-col gap-3">
        {wishlist.map((book) => (
          <div key={book.id} className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: "var(--ink-mid)", border: "1px solid var(--ink-border)" }}>
            <img src={book.image} alt={book.title} className="w-10 h-12 rounded-lg object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: "var(--cream)" }}>{book.title}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star size={10} fill="var(--gold)" color="var(--gold)" />
                <span className="text-xs" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>{book.points} pts</span>
              </div>
            </div>
            <button className="p-1.5 rounded-lg transition-colors"
              style={{ color: "#555" }}
              title="Get alerted when available"
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}>
              <Bell size={14} />
            </button>
            <button className="p-1.5 rounded-lg"
              style={{ color: "var(--rose)" }}>
              <Heart size={14} fill="var(--rose)" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
