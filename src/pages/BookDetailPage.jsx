import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/mockData";
import { Star, MapPin, ArrowLeft, QrCode, Heart, Share2 } from "lucide-react";
import Button from "../components/ui/Button";

export default function BookDetailPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id)) || books[0];
  const [requested, setRequested] = useState(false);

  const conditionColor = { "Like New": "var(--teal)", "Good": "#a3e635", "Fair": "var(--gold)", "Worn": "#f97316" }[book.condition] || "var(--gold)";

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-5xl mx-auto">
        <Link to="/browse" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "#888" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}>
          <ArrowLeft size={15} /> Back to Browse
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]"
              style={{ border: "1px solid var(--ink-border)" }}>
              <img src={book.image || `https://picsum.photos/seed/${book.id}/400/600`}
                alt={book.title} className="w-full h-full object-cover" />
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center glass-card">
              <Heart size={18} style={{ color: "var(--cream-dim)" }} />
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="badge-gold mb-4">{book.genre}</span>
            <h1 className="font-display text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>{book.title}</h1>
            <p className="text-lg mb-6" style={{ color: "#888" }}>by {book.author}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass-card rounded-xl px-4 py-3 text-center">
                <div className="flex items-center gap-1 mb-1">
                  <Star size={14} fill="var(--gold)" color="var(--gold)" />
                  <span className="text-xl font-bold" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>{book.points}</span>
                </div>
                <p className="text-xs" style={{ color: "#666" }}>Points Required</p>
              </div>
              <div className="glass-card rounded-xl px-4 py-3 text-center">
                <p className="text-xl font-bold mb-1" style={{ color: conditionColor, fontFamily: "var(--font-mono)" }}>{book.condition}</p>
                <p className="text-xs" style={{ color: "#666" }}>Condition</p>
              </div>
              <div className="glass-card rounded-xl px-4 py-3 text-center">
                <div className="flex items-center gap-1 mb-1">
                  <MapPin size={14} style={{ color: "var(--teal)" }} />
                  <p className="text-sm font-bold" style={{ color: "var(--cream)" }}>{book.location}</p>
                </div>
                <p className="text-xs" style={{ color: "#666" }}>Location</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--cream-dim)" }}>
              A beloved classic available for exchange. Contact the owner to arrange a meeting at a nearby exchange point, or coordinate delivery. Your points will be transferred upon confirmation.
            </p>

            <div className="flex gap-3">
              <Button onClick={() => setRequested(!requested)} className="flex-1 py-3">
                {requested ? "✓ Request Sent!" : "Request Exchange"}
              </Button>
              <Link to={`/qr-history`}>
                <button className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: "rgba(45,212,191,0.1)", border: "1px solid rgba(45,212,191,0.25)", color: "var(--teal)" }}>
                  <QrCode size={18} />
                </button>
              </Link>
              <button className="w-12 h-12 rounded-xl flex items-center justify-center transition-all glass-card"
                style={{ color: "var(--cream-dim)" }}>
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
