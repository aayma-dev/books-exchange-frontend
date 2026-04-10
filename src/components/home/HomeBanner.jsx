import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, QrCode, Users, Repeat } from "lucide-react";

// ── Scrolling genre strip
const genres = ["Fantasy","Mystery","Classic","Self-Help","Dystopian","Romance","Philosophy","Adventure","Sci-Fi","Thriller","Historical","Biography","Poetry","Drama","Horror","Memoir"];

// ── Floating stat pills
const pills = [
  { icon: BookOpen, label: "12,400+ Books",  color: "var(--gold)" },
  { icon: Users,    label: "5,800+ Readers", color: "var(--teal)" },
  { icon: Repeat,   label: "8,200+ Exchanges", color: "#a3e635" },
  { icon: QrCode,   label: "QR on every book", color: "var(--rose)" },
];

export default function HomeBanner() {
  return (
    <>
      {/* ════════════════════════════════════════════
          ✦ SECTION 1 — Scrolling genre marquee strip
          Add this between HeroSection and HowItWorks
          ════════════════════════════════════════════ */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(8px)",
          padding: "12px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marqueeScroll 30s linear infinite",
          }}
        >
          {[...genres, ...genres].map((g, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginRight: 28,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-mono)",
                color: i % 5 === 0 ? "var(--gold)" : i % 5 === 2 ? "var(--teal)" : "rgba(212,206,196,0.5)",
              }}
            >
              <span style={{
                width: 4, height: 4, borderRadius: "50%",
                background: i % 5 === 0 ? "var(--gold)" : "rgba(201,168,76,0.3)",
                display: "inline-block",
                flexShrink: 0,
              }} />
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ✦ SECTION 2 — Glowing stats banner
          Add this between HowItWorks and FeaturedBooks
          ════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "56px 24px",
          background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(13,13,13,0) 50%, rgba(45,212,191,0.04) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        {/* background glow orb */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 200,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 8,
            }}>
              Platform at a glance
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800, color: "var(--cream)",
              lineHeight: 1.15,
            }}>
              A Living Library,{" "}
              <span style={{
                background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}>
                Always Growing
              </span>
            </h2>
          </div>

          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            {pills.map((pill, i) => {
              const Icon = pill.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 22px",
                    borderRadius: 99,
                    background: "rgba(26,26,26,0.85)",
                    border: `1px solid ${pill.color}30`,
                    backdropFilter: "blur(12px)",
                    transition: "transform 0.25s cubic-bezier(.22,.68,0,1.4), box-shadow 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px) scale(1.04)";
                    e.currentTarget.style.boxShadow = `0 12px 40px ${pill.color}22`;
                    e.currentTarget.style.borderColor = `${pill.color}60`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = `${pill.color}30`;
                  }}
                >
                  <Icon size={16} color={pill.color} />
                  <span style={{
                    fontSize: "0.85rem", fontWeight: 600,
                    color: "var(--cream)", fontFamily: "var(--font-body)",
                  }}>
                    {pill.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA row */}
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link
              to="/register"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 32px", borderRadius: 10,
                background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                color: "var(--ink)", fontWeight: 700, fontSize: "0.95rem",
                fontFamily: "var(--font-body)", textDecoration: "none",
                boxShadow: "0 6px 30px rgba(201,168,76,0.25)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(201,168,76,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 30px rgba(201,168,76,0.25)";
              }}
            >
              <Sparkles size={16} />
              Join the Community — It's Free
            </Link>
          </div>
        </div>
      </div>

      {/* ── Keyframe for marquee — inject once globally */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
