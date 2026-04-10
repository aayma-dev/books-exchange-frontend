import React from "react";

const genres = ["", "Classic", "Fantasy", "Dystopian", "Romance", "Adventure", "Historical", "Fiction", "Philosophy", "Self-Help"];
const conditions = ["", "Like New", "Good", "Fair", "Worn"];

export default function BookFilters({ filters, setFilters }) {
  const selectStyle = {
    background: "var(--ink-soft)",
    border: "1px solid var(--ink-border)",
    color: "var(--cream)",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    outline: "none",
    minWidth: 140,
  };

  return (
    <div className="flex gap-3">
      <select
        value={filters.genre}
        onChange={(e) => setFilters((f) => ({ ...f, genre: e.target.value }))}
        style={selectStyle}
      >
        <option value="">All Genres</option>
        {genres.filter(Boolean).map((g) => <option key={g}>{g}</option>)}
      </select>

      <select
        value={filters.condition}
        onChange={(e) => setFilters((f) => ({ ...f, condition: e.target.value }))}
        style={selectStyle}
      >
        <option value="">All Conditions</option>
        {conditions.filter(Boolean).map((c) => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
}
