import React from "react";
import ListBookForm from "../components/books/ListBookForm";
import { Star, Zap, QrCode } from "lucide-react";

const perks = [
  { icon: Star, title: "Earn Points", desc: "Get 30–70 points based on book condition and demand." },
  { icon: QrCode, title: "QR Identity", desc: "Your book gets a unique QR code tracking its full journey." },
  { icon: Zap, title: "AI Valuation", desc: "Our AI prices your book fairly based on rarity and demand." },
];

export default function ListBook() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Share Your Shelf</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            List a <span className="text-gold-gradient italic">Book</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Form */}
          <div className="md:col-span-2">
            <ListBookForm />
          </div>

          {/* Perks sidebar */}
          <div className="flex flex-col gap-4">
            {perks.map((perk, i) => {
              const PerkIcon = perk.icon;
              return (
                <div key={i} className="glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <PerkIcon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{perk.title}</h3>
                  <p className="text-sm" style={{ color: "#888" }}>{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
