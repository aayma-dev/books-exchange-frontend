import React, { useState } from "react";
import { QrCode, Camera, Hash } from "lucide-react";
import Button from "../ui/Button";

export default function QRScanner({ onScan }) {
  const [mode, setMode] = useState("idle"); // idle | scanning | manual
  const [code, setCode] = useState("");

  const handleManual = () => {
    if (code.trim()) {
      onScan && onScan(code.trim());
      setMode("idle");
      setCode("");
    }
  };

  const simulateScan = () => {
    setMode("scanning");
    setTimeout(() => {
      setMode("idle");
      onScan && onScan("BX-2024-00042");
    }, 2000);
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--cream)" }}>Scan Book QR Code</h3>
      <p className="text-sm mb-6" style={{ color: "#888" }}>
        Scan the QR sticker on any BooksExchange book to view its complete reading history.
      </p>

      {/* QR scan area */}
      <div
        className="relative rounded-2xl flex flex-col items-center justify-center mb-6 cursor-pointer transition-all"
        style={{
          height: 220,
          background: "var(--ink-mid)",
          border: `2px dashed ${mode === "scanning" ? "var(--gold)" : "var(--ink-border)"}`,
          boxShadow: mode === "scanning" ? "0 0 30px var(--gold-glow)" : "none",
        }}
        onClick={simulateScan}
      >
        {mode === "scanning" ? (
          <>
            {/* Scanning animation */}
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 rounded-xl" style={{ borderColor: "var(--gold)" }} />
              {/* Corner brackets */}
              {[["top-0 left-0", "border-t-2 border-l-2"], ["top-0 right-0", "border-t-2 border-r-2"],
                ["bottom-0 left-0", "border-b-2 border-l-2"], ["bottom-0 right-0", "border-b-2 border-r-2"]
              ].map(([pos, cls], i) => (
                <div key={i} className={`absolute w-5 h-5 ${pos} ${cls}`}
                  style={{ borderColor: "var(--gold)" }} />
              ))}
              {/* Scan line */}
              <div className="absolute left-0 right-0 h-0.5 animate-bounce"
                style={{ top: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }} />
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--gold)" }}>Scanning…</p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <QrCode size={32} style={{ color: "var(--gold)" }} />
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--cream)" }}>Click to Simulate Scan</p>
            <p className="text-xs" style={{ color: "#666" }}>Or use a real QR scanner below</p>
          </>
        )}
      </div>

      {/* Manual code entry */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-px" style={{ background: "var(--ink-border)" }} />
        <span className="text-xs px-3" style={{ color: "#555" }}>OR ENTER CODE MANUALLY</span>
        <div className="flex-1 h-px" style={{ background: "var(--ink-border)" }} />
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Hash size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. BX-2024-00042"
            className="input-dark pl-9"
            onKeyDown={(e) => e.key === "Enter" && handleManual()}
          />
        </div>
        <Button onClick={handleManual} disabled={!code.trim()} variant="outline">Look Up</Button>
      </div>
    </div>
  );
}
