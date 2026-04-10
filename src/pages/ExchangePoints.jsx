import React from "react";
import ExchangeMap from "../components/exchange/ExchangeMap";
import ExchangeRequest from "../components/exchange/ExchangeRequest";

export default function ExchangePoints() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Physical Locations</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Exchange <span className="text-gold-gradient italic">Stalls</span>
          </h1>
          <p className="mt-2 text-sm max-w-md" style={{ color: "#888" }}>
            Find nearby physical exchange points on the map, or register your own stall for the community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExchangeMap />
          <ExchangeRequest />
        </div>
      </div>
    </div>
  );
}
