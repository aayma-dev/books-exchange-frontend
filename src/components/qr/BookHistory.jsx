import React, { useState } from "react";
import { qrHistory } from "../../data/mockData";
import { MapPin, Clock, MessageSquare, PlusCircle, ChevronDown, ChevronUp } from "lucide-react";
import Button from "../ui/Button";

export default function BookHistory({ bookId }) {
  const [showAdd, setShowAdd] = useState(false);
  const [newNote, setNewNote] = useState({ city: "", duration: "", note: "" });
  const [entries, setEntries] = useState(qrHistory);
  const [submitted, setSubmitted] = useState(false);

  const handleAdd = () => {
    if (!newNote.city || !newNote.note) return;
    setEntries((prev) => [
      ...prev,
      { ...newNote, reader: "You", date: "Apr 2026" },
    ]);
    setNewNote({ city: "", duration: "", note: "" });
    setShowAdd(false);
    setSubmitted(true);
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>Reading Journey</h3>
          {bookId && <p className="text-xs mt-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>#{bookId}</p>}
        </div>
        <span className="badge-gold">{entries.length} readers</span>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-0 mb-6">
        {entries.map((entry, i) => (
          <div key={i} className="flex gap-4">
            {/* Line + dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                style={{ background: i === entries.length - 1 ? "var(--gold)" : "var(--ink-border)", border: "2px solid var(--gold)", boxShadow: i === entries.length - 1 ? "0 0 10px var(--gold-glow)" : "none" }} />
              {i < entries.length - 1 && (
                <div className="w-px flex-1 mt-1 mb-1" style={{ background: "var(--ink-border)", minHeight: 24 }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-5 flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} style={{ color: "var(--gold)" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--cream)" }}>{entry.city}</span>
                </div>
                <span className="text-xs" style={{ color: "#555", fontFamily: "var(--font-mono)" }}>{entry.date}</span>
              </div>

              <div className="flex items-center gap-3 mb-2 text-xs" style={{ color: "#666" }}>
                <span className="flex items-center gap-1"><Clock size={10} /> {entry.duration || "–"}</span>
                <span>·</span>
                <span>{entry.reader}</span>
              </div>

              {entry.note && (
                <div className="rounded-lg p-3 text-sm italic"
                  style={{ background: "var(--ink-mid)", border: "1px solid var(--ink-border)", color: "var(--cream-dim)" }}>
                  <MessageSquare size={11} className="inline mr-1.5 opacity-50" />
                  "{entry.note}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add your chapter */}
      {submitted ? (
        <div className="text-center py-4 rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-sm font-semibold" style={{ color: "var(--gold)" }}>✓ Your chapter added to this book's story!</p>
        </div>
      ) : (
        <>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px dashed rgba(201,168,76,0.3)", color: "var(--gold)" }}>
            <PlusCircle size={15} />
            Add Your Reading Chapter
            {showAdd ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          {showAdd && (
            <div className="mt-4 flex flex-col gap-3">
              <input value={newNote.city} onChange={e => setNewNote({ ...newNote, city: e.target.value })}
                placeholder="Your city" className="input-dark" />
              <input value={newNote.duration} onChange={e => setNewNote({ ...newNote, duration: e.target.value })}
                placeholder="Reading duration (e.g. 7 days)" className="input-dark" />
              <textarea value={newNote.note} onChange={e => setNewNote({ ...newNote, note: e.target.value })}
                rows={3} placeholder="Leave a tip or note for the next reader…"
                className="input-dark resize-none" />
              <Button onClick={handleAdd} disabled={!newNote.city || !newNote.note} className="w-full">
                Save My Chapter
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
