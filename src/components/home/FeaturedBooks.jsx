import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../ui/BookCard";
import { ArrowRight } from "lucide-react";
import { books } from "../../data/mockData";

export default function FeaturedBooks() {
  const featured = books.slice(0, 6);

  return (
    <section className="py-24 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">Curated Picks</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}>
              Featured <span className="text-gold-gradient italic">Books</span>
            </h2>
          </div>
          <Link
            to="/browse"
            className="hidden md:flex items-center gap-2 text-sm transition-colors"
            style={{ color: "var(--gold)" }}
          >
            Browse all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/browse" className="btn-outline inline-flex items-center gap-2">
            Browse all books <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
