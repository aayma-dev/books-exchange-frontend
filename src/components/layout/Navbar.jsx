import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X, Bell, MessageSquare, Star, QrCode, User, LogOut } from "lucide-react";

const navLinks = [
  { label: "Browse", to: "/browse" },
  { label: "Add Book", to: "/add-book" },
  { label: "Scan QR", to: "/scan" },
  { label: "My Books", to: "/my-books" },
  { label: "Forums", to: "/forums" },
];

// Small reusable icon button with zoom + tooltip
function NavIconBtn({ to, icon, tooltip, badge }) {
  const Icon = icon;
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "inline-flex" }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: 10,
          color: hovered ? "var(--gold)" : "var(--cream-dim)",
          background: hovered ? "rgba(201,168,76,0.12)" : "transparent",
          transform: hovered ? "scale(1.22) translateY(-2px)" : "scale(1) translateY(0)",
          transition: "transform 0.22s cubic-bezier(.22,.68,0,1.4), background 0.2s, color 0.2s",
          position: "relative",
        }}
      >
        <Icon size={18} />
        {badge && (
          <span style={{
            position: "absolute", top: 4, right: 4,
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--rose)",
          }} />
        )}
      </span>
      {/* Tooltip */}
      {hovered && (
        <span style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(20,20,20,0.95)",
          color: "var(--cream)",
          fontSize: "0.7rem",
          padding: "3px 8px",
          borderRadius: 6,
          whiteSpace: "nowrap",
          border: "1px solid var(--ink-border)",
          pointerEvents: "none",
          fontFamily: "var(--font-body)",
          zIndex: 100,
        }}>
          {tooltip}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,13,0.96)" : "rgba(13,13,13,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #2e2e2e" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo — unchanged */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96b)" }}>
            <BookOpen size={18} color="#0d0d0d" />
          </div>
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
            Books<span style={{
              background: "linear-gradient(135deg, #c9a84c, #e8c96b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Exchange</span>
          </span>
        </Link>

        {/* Desktop Links — unchanged */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: isActive(link.to) ? "var(--gold)" : "var(--cream-dim)",
                background: isActive(link.to) ? "rgba(201,168,76,0.1)" : "transparent",
              }}
              onMouseEnter={e => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.color = "var(--cream)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.color = "var(--cream-dim)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Points balance — unchanged */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <Star size={13} fill="var(--gold)" color="var(--gold)" />
            <span className="text-xs font-semibold" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>
              350 pts
            </span>
          </div>

          {/* ✦ Messages icon — zoom + tooltip ADDED */}
          <NavIconBtn to="/messages" icon={MessageSquare} tooltip="Messages" badge={true} />

          {/* ✦ Dashboard/User icon — zoom + tooltip ADDED */}
          <NavIconBtn to="/dashboard" icon={User} tooltip="My Profile" />

          {/* Login & Sign Up — unchanged */}
          <Link to="/login"
            className="text-sm font-semibold px-4 py-2 rounded-lg border transition-all"
            style={{ color: "var(--gold)", borderColor: "var(--gold)", background: "transparent" }}>
            Login
          </Link>
          <Link to="/register"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
            Sign Up
          </Link>

          {/* ✦ Logout button — ADDED */}
          <button
            onClick={() => window.location.href = "/login"}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "6px 13px", borderRadius: 8,
              fontSize: "0.8rem", fontWeight: 600,
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(244,63,94,0.3)",
              color: "var(--rose)",
              background: "rgba(244,63,94,0.07)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(244,63,94,0.18)";
              e.currentTarget.style.borderColor = "var(--rose)";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(244,63,94,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(244,63,94,0.07)";
              e.currentTarget.style.borderColor = "rgba(244,63,94,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <LogOut size={13} /> Logout
          </button>
        </div>

        {/* Mobile toggle — unchanged */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--cream)", background: "rgba(255,255,255,0.05)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu — unchanged */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--ink-border)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{
                color: isActive(link.to) ? "var(--gold)" : "var(--cream-dim)",
                background: isActive(link.to) ? "rgba(201,168,76,0.1)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <Link to="/login" onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold py-2 flex-1 text-center rounded-lg border"
              style={{ color: "var(--gold)", borderColor: "var(--gold)" }}>
              Login
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold py-2 flex-1 text-center rounded-lg"
              style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
              Sign Up
            </Link>
          </div>
          <button
            onClick={() => window.location.href = "/login"}
            className="mt-2 py-2 rounded-lg text-sm font-semibold"
            style={{ color: "var(--rose)", border: "1px solid rgba(244,63,94,0.3)", background: "rgba(244,63,94,0.07)" }}
          >
            <LogOut size={13} style={{ display: "inline", marginRight: 6 }} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
