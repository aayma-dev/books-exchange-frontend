import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, X, Globe, AtSign, Heart } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Browse Books", to: "/browse" },
    { label: "List a Book", to: "/listbook" },
    { label: "Exchange Points", to: "/exchange-points" },
    { label: "Buy Points", to: "/buy-points" },
  ],
  Community: [
    { label: "Forums", to: "/forums" },
    { label: "Messages", to: "/messages" },
    { label: "QR History", to: "/qr-history" },
    { label: "Wishlist", to: "/wishlist" },
  ],
  Account: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid var(--ink-border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96b)" }}>
                <BookOpen size={18} className="text-[#0d0d0d]" />
              </div>
              <span className="font-display font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Books<span className="text-gold-gradient">Exchange</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-dim)", maxWidth: 280 }}>
              A community-driven platform where books find new homes, stories travel cities, and readers connect beyond pages.
            </p>
            <div className="flex gap-3">
              {[X, Globe, AtSign].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "var(--ink-mid)", color: "var(--cream-dim)", border: "1px solid var(--ink-border)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--ink-border)"; e.currentTarget.style.color = "var(--cream-dim)"; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm mb-4 tracking-wider uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--cream-dim)" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--cream)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--cream-dim)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#555" }}>
            © {new Date().getFullYear()} BooksExchange. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: "#555" }}>
            Made with <Heart size={11} fill="#c9a84c" color="#c9a84c" /> for readers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
