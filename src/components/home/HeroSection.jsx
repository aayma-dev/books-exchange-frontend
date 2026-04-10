import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star } from "lucide-react";

const stats = [
  { value: "12,400+", label: "Books Listed" },
  { value: "5,800+",  label: "Readers" },
  { value: "8,200+",  label: "Exchanges" },
];

// ✅ Add your real book cover image URLs here in the "image" field
const floatingBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pts: 45,
    delay: "0s",
    x: "4%",
    y: "18%",
    image: "https://covers.openlibrary.org/b/id/8301161-M.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pts: 55,
    delay: "1.5s",
    x: "74%",
    y: "8%",
    image: "https://covers.openlibrary.org/b/id/10521270-M.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    pts: 40,
    delay: "0.8s",
    x: "78%",
    y: "65%",
    image: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          top: "50%", left: "0%", transform: "translate(-30%, -50%)",
        }} />
        <div className="absolute w-[400px] h-[400px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)",
          top: "20%", right: "10%",
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* Floating book cards with real images */}
      {floatingBooks.map((book, i) => (
        <div key={i}
          className="absolute hidden lg:block animate-float"
          style={{ left: book.x, top: book.y, animationDelay: book.delay, animationDuration: `${4 + i}s` }}>
          <div className="rounded-xl p-3 w-44"
            style={{
              background: "rgba(26,26,26,0.9)",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              transform: i % 2 === 0 ? "rotate(-4deg)" : "rotate(3deg)",
            }}>
            {/* Book cover image */}
            <div className="w-full rounded-lg mb-2 overflow-hidden"
              style={{ height: 96, background: "var(--ink-mid)" }}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
                onError={e => { e.target.style.display = "none"; e.target.parentNode.style.display = "flex"; e.target.parentNode.style.alignItems = "center"; e.target.parentNode.style.justifyContent = "center"; }}
              />
            </div>
            <p className="text-xs font-semibold truncate" style={{ color: "var(--cream)" }}>{book.title}</p>
            <p className="text-xs" style={{ color: "#666" }}>{book.author}</p>
            <div className="mt-1.5 flex items-center gap-1">
              <Star size={10} fill="var(--gold)" color="var(--gold)" />
              <span className="text-xs" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>{book.pts} pts</span>
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl">
          <div className={`mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="badge-gold">Community Book Exchange Platform</span>
          </div>
          <h1
            className={`font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Books Find<br />
            <span className="text-gold-gradient italic">New Homes.</span><br />
            Stories Travel.
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "var(--cream-dim)" }}>
            Exchange books using a fair point system. Every physical book carries its own digital identity — preserving its journey across cities and readers.
          </p>
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Link to="/register" className="btn-gold flex items-center gap-2 text-base py-3 px-7">
              Start Exchanging <ArrowRight size={16} />
            </Link>
            <Link to="/browse" className="btn-outline flex items-center gap-2 text-base py-3 px-7">
              <BookOpen size={16} /> Browse Books
            </Link>
          </div>
          <div className={`flex gap-10 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--gold)" }}>{stat.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "#666" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
