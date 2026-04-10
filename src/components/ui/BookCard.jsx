import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";

export default function BookCard({ id, title, author, image, points, condition, location, genre }) {
  // ✦ ADDED: wishlist toggle state
  const [wishlisted, setWishlisted] = useState(false);
  const [popping, setPopping] = useState(false);

  const conditionColor = {
    "Like New": "var(--teal)",
    "Good": "#a3e635",
    "Fair": "var(--gold)",
    "Worn": "#f97316",
  }[condition] || "var(--gold)";

  // ✦ ADDED: click handler with pop animation
  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted((w) => !w);
    setPopping(true);
    setTimeout(() => setPopping(false), 350);
  };

  return (
    <div className="glass-card card-hover rounded-2xl overflow-hidden group">
      {/* Image — unchanged structure */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={image || `https://picsum.photos/seed/${id || title}/400/300`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient — unchanged */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)" }} />

        {/* Points badge — unchanged */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(13,13,13,0.85)", border: "1px solid rgba(201,168,76,0.4)", backdropFilter: "blur(8px)" }}>
          <Star size={11} fill="var(--gold)" color="var(--gold)" />
          <span className="text-xs font-bold" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
            {points || 40} pts
          </span>
        </div>

        {/* ✦ Wishlist button — enhanced: always visible, zoom+pop+color on click */}
        <button
          onClick={handleWishlist}
          style={{
            position: "absolute",
            top: 12, left: 12,
            width: 32, height: 32,
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: wishlisted ? "rgba(244,63,94,0.2)" : "rgba(13,13,13,0.75)",
            backdropFilter: "blur(8px)",
            border: wishlisted ? "1px solid rgba(244,63,94,0.5)" : "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            // ✦ always visible (removed opacity-0 / group-hover:opacity-100)
            opacity: 1,
            transform: popping ? "scale(1.45)" : "scale(1)",
            transition: "transform 0.25s cubic-bezier(.22,.68,0,1.5), background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => { if (!popping) e.currentTarget.style.transform = "scale(1.2)"; }}
          onMouseLeave={e => { if (!popping) e.currentTarget.style.transform = "scale(1)"; }}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={14}
            fill={wishlisted ? "var(--rose)" : "none"}
            color={wishlisted ? "var(--rose)" : "var(--cream-dim)"}
          />
        </button>

        {/* Condition tag — unchanged */}
        {condition && (
          <div className="absolute bottom-3 left-3">
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: "rgba(13,13,13,0.9)", color: conditionColor, border: `1px solid ${conditionColor}40` }}>
              {condition}
            </span>
          </div>
        )}
      </div>

      {/* Content — completely unchanged */}
      <div className="p-4">
        {genre && (
          <span className="badge-gold text-xs mb-2 inline-block">{genre}</span>
        )}
        <h3 className="font-semibold text-base leading-snug mb-1" style={{ color: "var(--cream)" }}>
          {title}
        </h3>
        <p className="text-sm mb-3" style={{ color: "#888" }}>by {author}</p>

        {location && (
          <div className="flex items-center gap-1 text-xs mb-4" style={{ color: "#666" }}>
            <MapPin size={11} />
            <span>{location}</span>
          </div>
        )}

        <Link
          to={`/browse/${id}`}
          className="block w-full text-center py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{
            background: "rgba(201,168,76,0.1)",
            color: "var(--gold)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--ink)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.color = "var(--gold)"; }}
        >
          Request Exchange
        </Link>
      </div>
    </div>
  );
}
