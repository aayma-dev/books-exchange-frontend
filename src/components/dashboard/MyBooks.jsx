import React from "react";
import { books } from "../../data/mockData";
import { Star, Trash2 } from "lucide-react";

export default function MyBooks() {
  const myBooks = books.slice(0, 4);

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--cream)" }}>My Listed Books</h3>
      <div className="flex flex-col gap-3">
        {myBooks.map((book) => (
          <div key={book.id} className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: "var(--ink-mid)", border: "1px solid var(--ink-border)" }}>
            <img
              src={book.image}
              alt={book.title}
              className="w-10 h-12 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: "var(--cream)" }}>
                {book.title}
              </p>
              <p className="text-xs" style={{ color: "#666" }}>{book.author}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={11} fill="var(--gold)" color="var(--gold)" />
              <span className="text-xs font-bold"
                style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
                {book.points}
              </span>
            </div>
            <button
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: "#555" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--rose)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#555"; }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
