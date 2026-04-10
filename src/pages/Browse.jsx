import React, { useState } from "react";
import BookCard from "../components/ui/BookCard";
import BookFilters from "../components/books/BookFilters";
import SearchBar from "../components/ui/SearchBar";
import { books } from "../data/mockData";
import { SlidersHorizontal } from "lucide-react";

export default function Browse() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ genre: "", condition: "" });

  const filtered = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchGenre = !filters.genre || b.genre === filters.genre;
    const matchCond = !filters.condition || b.condition === filters.condition;
    return matchSearch && matchGenre && matchCond;
  });

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label">Discover</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)" }}>
            Browse <span className="text-gold-gradient italic">Books</span>
          </h1>
          <p className="text-sm" style={{ color: "#888" }}>{filtered.length} books available</p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by title or author..." />
          </div>
          <BookFilters filters={filters} setFilters={setFilters} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">📚</p>
            <p className="text-xl font-semibold mb-2" style={{ color: "var(--cream)" }}>No books found</p>
            <p className="text-sm" style={{ color: "#666" }}>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
