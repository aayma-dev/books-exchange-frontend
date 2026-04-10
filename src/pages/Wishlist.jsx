import React, { useState } from "react";
import { books } from "../data/mockData";
import BookCard from "../components/ui/BookCard";
import { Heart, Bell } from "lucide-react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(books.slice(4, 10));

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="section-label">Saved Books</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}>
              My <span className="text-gold-gradient italic">Wishlist</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm"
            style={{ color: "var(--cream-dim)" }}>
            <Bell size={15} style={{ color: "var(--gold)" }} />
            Alerts enabled for all
          </div>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((book) => (
              <div key={book.id} className="relative group">
                <BookCard {...book} />
                <button
                  onClick={() => setWishlist((w) => w.filter((b) => b.id !== book.id))}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(244,63,94,0.15)", border: "1px solid rgba(244,63,94,0.3)" }}
                  title="Remove from wishlist"
                >
                  <Heart size={14} fill="var(--rose)" color="var(--rose)" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <Heart size={48} className="mx-auto mb-4 opacity-20" style={{ color: "var(--rose)" }} />
            <p className="text-xl font-semibold mb-2" style={{ color: "var(--cream)" }}>Your wishlist is empty</p>
            <p className="text-sm" style={{ color: "#666" }}>Browse books and save the ones you want to read next</p>
          </div>
        )}
      </div>
    </div>
  );
}
