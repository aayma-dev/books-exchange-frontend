import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrCode, Hash, ArrowRight, Camera } from "lucide-react";

export default function ScanQR() {
  const [code, setCode] = useState("");
  const [scanning, setScanning] = useState(false);
  const navigate = useNavigate();

  const handleManual = () => {
    if (code.trim()) navigate(`/book/${code.trim()}`);
  };

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      navigate("/book/BX-2024-00042");
    }, 2500);
  };

  return (
    <div className="min-h-screen py-12 px-6 hero-bg">
      <div className="max-w-lg mx-auto">
        <div className="mb-10 text-center">
          <p className="section-label">Book DNA</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Scan <span className="text-gold-gradient italic">QR Code</span>
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            Scan the QR sticker inside any BooksExchange book to view its full reading journey.
          </p>
        </div>

        {/* Camera view */}
        <div className="glass-card rounded-2xl overflow-hidden mb-6">
          <div
            className="relative flex flex-col items-center justify-center cursor-pointer"
            style={{ height: 300, background: scanning ? "rgba(201,168,76,0.04)" : "var(--ink-mid)" }}
            onClick={simulateScan}
          >
            {scanning ? (
              <>
                {/* Scanning animation */}
                <div className="relative w-48 h-48">
                  {/* Corner brackets */}
                  {[
                    { top: 0, left: 0, borderTop: "3px solid var(--gold)", borderLeft: "3px solid var(--gold)" },
                    { top: 0, right: 0, borderTop: "3px solid var(--gold)", borderRight: "3px solid var(--gold)" },
                    { bottom: 0, left: 0, borderBottom: "3px solid var(--gold)", borderLeft: "3px solid var(--gold)" },
                    { bottom: 0, right: 0, borderBottom: "3px solid var(--gold)", borderRight: "3px solid var(--gold)" },
                  ].map((style, i) => (
                    <div key={i} className="absolute w-8 h-8" style={style} />
                  ))}
                  {/* Scan line */}
                  <div className="absolute left-2 right-2 h-0.5 animate-bounce"
                    style={{ top: "50%", background: "var(--gold)", boxShadow: "0 0 12px var(--gold)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <QrCode size={60} style={{ color: "rgba(201,168,76,0.3)" }} />
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--gold)" }}>
                  Scanning…
                </p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Camera size={36} style={{ color: "var(--gold)" }} />
                </div>
                <p className="font-semibold mb-1" style={{ color: "var(--cream)" }}>Tap to Start Camera</p>
                <p className="text-xs" style={{ color: "#555" }}>
                  Point at the QR code inside the book
                </p>
                <p className="text-xs mt-4 px-4 py-2 rounded-full"
                  style={{ background: "rgba(201,168,76,0.08)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  Demo: Click to simulate a scan
                </p>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: "var(--ink-border)" }} />
          <span className="text-xs px-3" style={{ color: "#555", fontFamily: "var(--font-mono)" }}>OR ENTER CODE MANUALLY</span>
          <div className="flex-1 h-px" style={{ background: "var(--ink-border)" }} />
        </div>

        {/* Manual entry */}
        <div className="glass-card rounded-2xl p-6">
          <label className="block text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--gold)" }}>Book QR Code / ID</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Hash size={15} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "#555" }} />
              <input
                value={code}
                onChange={e => setCode(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleManual()}
                placeholder="e.g. BX-2024-00042"
                style={{
                  background: "var(--ink-soft)", border: "1px solid var(--ink-border)",
                  color: "var(--cream)", padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "8px", width: "100%", fontFamily: "var(--font-mono)",
                  outline: "none", fontSize: "0.9rem",
                }}
                onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px var(--gold-glow)"; }}
                onBlur={e => { e.target.style.borderColor = "var(--ink-border)"; e.target.style.boxShadow = "none"; }}
              />
            </div>
            <button
              onClick={handleManual}
              disabled={!code.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
              Go <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
