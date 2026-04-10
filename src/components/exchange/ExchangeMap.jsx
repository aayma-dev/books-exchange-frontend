import React, { useState } from "react";
import { exchangeStalls } from "../../data/mockData";
import { MapPin, Phone, BookOpen } from "lucide-react";

export default function ExchangeMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--cream)" }}>Nearby Exchange Points</h3>

      {/* Map placeholder with pinned stalls */}
      <div className="relative rounded-xl overflow-hidden mb-5"
        style={{ height: 220, background: "var(--ink-mid)", border: "1px solid var(--ink-border)" }}>
        {/* Grid to simulate a map */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
          <MapPin size={32} style={{ color: "var(--gold)" }} />
          <p className="text-xs" style={{ color: "#666" }}>Interactive map (integrate Leaflet/Mapbox)</p>
        </div>
        {/* Pin dots */}
        {exchangeStalls.map((stall, i) => (
          <button
            key={stall.id}
            onClick={() => setSelected(stall)}
            className="absolute w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform hover:scale-110"
            style={{
              background: stall.open ? "var(--gold)" : "#555",
              color: "var(--ink)",
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
              border: selected?.id === stall.id ? "2px solid white" : "none",
            }}>
            {i + 1}
          </button>
        ))}
      </div>

      {/* Stall list */}
      <div className="flex flex-col gap-2">
        {exchangeStalls.map((stall) => (
          <button
            key={stall.id}
            onClick={() => setSelected(stall)}
            className="flex items-center gap-3 p-3 rounded-xl text-left transition-all"
            style={{
              background: selected?.id === stall.id ? "rgba(201,168,76,0.1)" : "var(--ink-mid)",
              border: `1px solid ${selected?.id === stall.id ? "rgba(201,168,76,0.3)" : "var(--ink-border)"}`,
            }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: stall.open ? "rgba(45,212,191,0.1)" : "rgba(255,255,255,0.05)" }}>
              <MapPin size={14} style={{ color: stall.open ? "var(--teal)" : "#555" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: "var(--cream)" }}>{stall.name}</p>
              <p className="text-xs" style={{ color: "#666" }}>{stall.owner} · {stall.books} books</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
              style={{
                background: stall.open ? "rgba(45,212,191,0.1)" : "rgba(255,255,255,0.05)",
                color: stall.open ? "var(--teal)" : "#555",
                border: `1px solid ${stall.open ? "rgba(45,212,191,0.2)" : "transparent"}`,
              }}>
              {stall.open ? "Open" : "Closed"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
