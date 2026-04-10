import React from "react";
import { Star, BookOpen, Repeat, MapPin } from "lucide-react";

export default function UserProfile() {
  const stats = [
    { label: "Points", value: "350", icon: Star },
    { label: "Books Listed", value: "12", icon: BookOpen },
    { label: "Exchanges", value: "8", icon: Repeat },
  ];

  return (
    <div className="glass-card rounded-2xl p-6">
      
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
            color: "var(--ink)",
            fontFamily: "var(--font-display)",
          }}
        >
          A
        </div>

        <div>
          <h2 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>
            Ahmed Reader
          </h2>
          <p className="text-sm" style={{ color: "#888" }}>
            ahmed@example.com
          </p>

          <div className="flex items-center gap-1 mt-1">
            <MapPin size={11} style={{ color: "#666" }} />
            <span className="text-xs" style={{ color: "#666" }}>
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((item) => {
          const Icon = item.icon; // ✅ FIXED

          return (
            <div
              key={item.label}
              className="rounded-xl p-3 text-center"
              style={{
                background: "var(--ink-mid)",
                border: "1px solid var(--ink-border)",
              }}
            >
              <Icon
                size={14}
                className="mx-auto mb-1"
                style={{ color: "var(--gold)" }}
              />

              <p
                className="text-xl font-bold"
                style={{
                  color: "var(--cream)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {item.value}
              </p>

              <p className="text-xs" style={{ color: "#666" }}>
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}