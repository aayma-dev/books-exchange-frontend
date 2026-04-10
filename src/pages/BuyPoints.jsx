import React, { useState } from "react";
import { Star, Zap, Crown, CreditCard, CheckCircle } from "lucide-react";

const tiers = [
  { pts: 100, price: 200, label: "Starter", icon: Star, popular: false },
  { pts: 300, price: 500, label: "Reader", icon: Zap, popular: true },
  { pts: 700, price: 1000, label: "Collector", icon: Crown, popular: false },
];

export default function BuyPoints() {
  const [selected, setSelected] = useState(1);
  const [success, setSuccess] = useState(false);

  if (success) return (
    <div className="min-h-screen flex items-center justify-center hero-bg px-4">
      <div className="glass-card rounded-2xl p-12 text-center max-w-sm">
        <CheckCircle size={52} className="mx-auto mb-5" style={{ color: "var(--teal)" }} />
        <h2 className="font-display text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
          Points Added!
        </h2>
        <p className="text-sm mb-6" style={{ color: "#888" }}>
          {tiers[selected].pts} points have been added to your account.
        </p>
        <button className="btn-gold w-full py-3" onClick={() => setSuccess(false)}>Buy More Points</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-6 hero-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Fuel Your Reading</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)" }}>
            Buy <span className="text-gold-gradient italic">Points</span>
          </h1>
          <p className="text-sm max-w-md mx-auto" style={{ color: "#888" }}>
            Don't have a book to offer? Buy points directly and start exchanging immediately.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const isSelected = selected === i;
            return (
              <button key={i} onClick={() => setSelected(i)}
                className="glass-card rounded-2xl p-7 text-left card-hover transition-all relative"
                style={{
                  border: `1px solid ${isSelected ? "var(--gold)" : "var(--ink-border)"}`,
                  boxShadow: isSelected ? "0 0 30px var(--gold-glow)" : "none",
                }}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-gold text-xs whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: isSelected ? "rgba(201,168,76,0.15)" : "var(--ink-mid)", border: `1px solid ${isSelected ? "rgba(201,168,76,0.3)" : "var(--ink-border)"}` }}>
                  <Icon size={20} style={{ color: isSelected ? "var(--gold)" : "#666" }} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: isSelected ? "var(--gold)" : "#666", fontFamily: "var(--font-mono)" }}>
                  {tier.label}
                </p>
                <p className="font-bold text-3xl mb-1" style={{ color: "var(--cream)", fontFamily: "var(--font-mono)" }}>
                  {tier.pts} <span className="text-lg" style={{ color: "var(--gold)" }}>pts</span>
                </p>
                <p className="text-sm" style={{ color: "#888" }}>PKR {tier.price}</p>
              </button>
            );
          })}
        </div>

        {/* Payment form */}
        <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="font-semibold text-lg mb-6" style={{ color: "var(--cream)" }}>
            Payment Details
          </h3>
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--gold)" }}>Card Number</label>
              <div className="relative">
                <CreditCard size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                <input placeholder="1234 5678 9012 3456" className="input-dark pl-10" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--gold)" }}>Expiry</label>
                <input placeholder="MM / YY" className="input-dark" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--gold)" }}>CVV</label>
                <input placeholder="•••" className="input-dark" />
              </div>
            </div>
          </div>

          <div className="rounded-xl p-4 mb-6 flex items-center justify-between"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <span className="text-sm" style={{ color: "var(--cream-dim)" }}>
              {tiers[selected].pts} points — {tiers[selected].label}
            </span>
            <span className="font-bold" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
              PKR {tiers[selected].price}
            </span>
          </div>

          <button className="btn-gold w-full py-3 text-base" onClick={() => setSuccess(true)}>
            Pay & Add Points
          </button>
        </div>
      </div>
    </div>
  );
}
