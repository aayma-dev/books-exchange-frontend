import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, MessageSquare, PlusCircle, ArrowLeft, BookOpen, Star, X } from "lucide-react";
import { qrHistory } from "../../data/mockData";

const bookInfo = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  cover: "https://covers.openlibrary.org/b/id/8301161-M.jpg",
  genre: "Philosophy",
  points: 45,
};

export default function BookTimeline() {
  const { qrId } = useParams();
  const [entries, setEntries] = useState(qrHistory);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ city: "", duration: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleAdd = () => {
    if (!form.city || !form.note) return;
    setEntries(prev => [...prev, { ...form, reader: "You", date: "Apr 2026" }]);
    setForm({ city: "", duration: "", note: "" });
    setShowModal(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: "var(--ink-soft)", border: "1px solid var(--ink-border)",
    color: "var(--cream)", padding: "0.7rem 1rem", borderRadius: "8px",
    width: "100%", fontFamily: "var(--font-body)", outline: "none",
  };

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-2xl mx-auto">
        <Link to="/scan"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: "#888" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}>
          <ArrowLeft size={14} /> Back to Scanner
        </Link>

        {/* Book info card */}
        <div className="glass-card rounded-2xl p-6 mb-8 flex items-center gap-5">
          <img src={bookInfo.cover} alt={bookInfo.title}
            className="w-20 rounded-xl object-cover flex-shrink-0" style={{ height: 110 }} />
          <div className="flex-1">
            <span className="badge-gold mb-2 inline-block">{bookInfo.genre}</span>
            <h1 className="font-display text-2xl font-bold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
              {bookInfo.title}
            </h1>
            <p className="text-sm mb-2" style={{ color: "#888" }}>by {bookInfo.author}</p>
            <div className="flex items-center gap-2">
              <Star size={12} fill="var(--gold)" color="var(--gold)" />
              <span className="text-xs font-semibold" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
                {bookInfo.points} pts
              </span>
              <span className="text-xs ml-2 px-2 py-0.5 rounded-full"
                style={{ background: "rgba(45,212,191,0.1)", color: "var(--teal)", border: "1px solid rgba(45,212,191,0.2)", fontFamily: "var(--font-mono)" }}>
                #{qrId}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
              Reading Journey
            </h2>
            <p className="text-xs mt-0.5" style={{ color: "#666" }}>{entries.length} readers across {entries.length} cities</p>
          </div>
          <span className="badge-gold">{entries.length} readers</span>
        </div>

        {/* Timeline */}
        <div className="mb-6">
          {entries.map((entry, i) => (
            <div key={i} className="flex gap-4">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0"
                  style={{
                    background: i === entries.length - 1 ? "var(--gold)" : "var(--ink-border)",
                    border: `2px solid ${i === entries.length - 1 ? "var(--gold)" : "#444"}`,
                    boxShadow: i === entries.length - 1 ? "0 0 12px var(--gold-glow)" : "none",
                  }} />
                {i < entries.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: "var(--ink-border)", minHeight: 20 }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-6 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} style={{ color: "var(--gold)" }} />
                    <span className="font-semibold text-sm" style={{ color: "var(--cream)" }}>{entry.city}</span>
                    <span className="text-xs" style={{ color: "#555" }}>· {entry.reader}</span>
                  </div>
                  <span className="text-xs" style={{ color: "#444", fontFamily: "var(--font-mono)" }}>{entry.date}</span>
                </div>
                {entry.duration && (
                  <div className="flex items-center gap-1 mb-2 text-xs" style={{ color: "#666" }}>
                    <Clock size={11} /> {entry.duration}
                  </div>
                )}
                {entry.note && (
                  <div className="rounded-xl p-3 text-sm italic"
                    style={{ background: "var(--ink-mid)", border: "1px solid var(--ink-border)", color: "var(--cream-dim)" }}>
                    <MessageSquare size={11} className="inline mr-1.5 opacity-40" />
                    "{entry.note}"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add experience button */}
        {submitted ? (
          <div className="text-center py-5 rounded-2xl"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="font-semibold" style={{ color: "var(--gold)" }}>✓ Your chapter has been added to this book's story!</p>
          </div>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all text-sm"
            style={{ background: "rgba(201,168,76,0.07)", border: "2px dashed rgba(201,168,76,0.3)", color: "var(--gold)" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.12)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(201,168,76,0.07)"}>
            <PlusCircle size={18} /> Add My Reading Experience
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          onClick={() => setShowModal(false)}>
          <div className="glass-card rounded-2xl p-7 w-full max-w-md"
            style={{ border: "1px solid var(--ink-border)" }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
                Add Your Chapter
              </h3>
              <button onClick={() => setShowModal(false)} style={{ color: "#666" }}>
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--gold)" }}>Your City *</label>
                <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Lahore" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--gold)"}
                  onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--gold)" }}>Reading Duration</label>
                <input value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}
                  placeholder="e.g. 7 days" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--gold)"}
                  onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--gold)" }}>Note for Next Reader *</label>
                <textarea value={form.note} onChange={e => setForm({ ...form, note: e.target.value })}
                  placeholder="Leave a tip, insight, or thought for the next reader..."
                  rows={4} style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "var(--gold)"}
                  onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
              </div>
              <button
                onClick={handleAdd}
                disabled={!form.city || !form.note}
                className="btn-gold w-full py-3 text-base disabled:opacity-40">
                Save My Chapter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
