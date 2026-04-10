import React, { useState } from "react";
import QRScanner from "../components/qr/QRScanner";
import BookHistory from "../components/qr/BookHistory";

export default function QRHistory() {
  const [scannedId, setScannedId] = useState(null);

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Book DNA</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            QR <span className="text-gold-gradient italic">History</span>
          </h1>
          <p className="mt-2 text-sm max-w-lg" style={{ color: "#888" }}>
            Every book carries a living timeline. Scan its QR code to see where it's been, who read it, and the notes left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QRScanner onScan={setScannedId} />
          <BookHistory bookId={scannedId} />
        </div>
      </div>
    </div>
  );
}
