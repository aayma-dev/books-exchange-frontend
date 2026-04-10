import React from "react";
import { Upload, Star, Repeat, QrCode } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "List Your Book", desc: "Upload your book with title, condition, photos and location. Each book gets a unique digital identity with a QR code." },
  { icon: Star, num: "02", title: "Earn Points", desc: "Receive points when you list and give away books. Our AI system values books based on condition, rarity and demand." },
  { icon: Repeat, num: "03", title: "Exchange Books", desc: "Use your points to request books from other readers. Browse by genre, location, or discover rare finds." },
  { icon: QrCode, num: "04", title: "Scan & Connect", desc: "Every physical book carries its own history. Scan the QR code to see where it's been and add your own chapter." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--ink-soft)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Simple Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            How It <span className="text-gold-gradient italic">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="glass-card card-hover rounded-2xl p-6 relative overflow-hidden group">
                {/* Step number watermark */}
                <span className="absolute -top-4 -right-2 font-bold text-8xl pointer-events-none select-none"
                  style={{ color: "rgba(201,168,76,0.06)", fontFamily: "var(--font-mono)" }}>
                  {step.num}
                </span>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Icon size={22} style={{ color: "var(--gold)" }} />
                </div>

                <span className="text-xs font-bold mb-3 block"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
                  STEP {step.num}
                </span>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--cream)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
