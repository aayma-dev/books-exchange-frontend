import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", city: "Lahore", rating: 5, text: "BooksExchange transformed how I read. I've gone through 30+ books without spending a rupee. The QR history feature is genius!" },
  { name: "Ahmed K.", city: "Karachi", rating: 5, text: "Found incredibly rare titles here that weren't available anywhere else. The community is warm, helpful and passionate about reading." },
  { name: "Priya R.", city: "Islamabad", rating: 5, text: "The forum discussions are so rich. I discovered books through reader debates that I never would have found on my own." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label">Reader Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            What <span className="text-gold-gradient italic">Readers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card card-hover rounded-2xl p-7">
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={14}
                    fill={j < t.rating ? "var(--gold)" : "none"}
                    color={j < t.rating ? "var(--gold)" : "#444"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-dim)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#666" }}>{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
