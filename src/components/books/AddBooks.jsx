import React, { useState } from "react";
import { Upload, BookOpen, CheckCircle, QrCode } from "lucide-react";

export default function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", condition: "", location: "", description: "" });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ FIX 1: QR pattern
  const [qrPattern] = useState(() =>
    Array(49).fill(0).map(() => Math.random() > 0.4)
  );

  // ✅ FIX 2: ID (Date.now moved out of render)
  const [bookId] = useState(() =>
    "BX-" + Date.now().toString().slice(-8)
  );

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const labelStyle = { color: "var(--gold)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 };

  const inputStyle = {
    background: "var(--ink-soft)", border: "1px solid var(--ink-border)",
    color: "var(--cream)", padding: "0.75rem 1rem", borderRadius: "8px",
    width: "100%", fontFamily: "var(--font-body)", outline: "none", marginBottom: "1rem",
  };

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center px-4 hero-bg">
      <div className="glass-card rounded-2xl p-12 text-center max-w-md w-full">
        <CheckCircle size={52} className="mx-auto mb-5" style={{ color: "var(--teal)" }} />
        <h2 className="font-display text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>Book Listed!</h2>
        <p className="text-sm mb-8" style={{ color: "#888" }}>
          Your book has been submitted. Here is its unique QR code — print it and stick it inside the book.
        </p>

        {/* Simulated QR code */}
        <div className="w-44 h-44 mx-auto mb-6 rounded-xl flex items-center justify-center"
          style={{ background: "white", padding: "1rem" }}>
          <div className="w-full h-full grid grid-cols-7 gap-0.5">
            {qrPattern.map((val, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{ background: val ? "#0d0d0d" : "white" }}
              />
            ))}
          </div>
        </div>

        {/* ✅ FIXED: no Date.now here */}
        <p className="text-xs mb-6" style={{ color: "#666", fontFamily: "var(--font-mono)" }}>
          {bookId}
        </p>

        <div className="flex gap-3">
          <button className="btn-outline flex-1 py-2.5 text-sm" onClick={() => window.print()}>
            <QrCode size={14} className="inline mr-2" /> Print QR
          </button>
          <button className="btn-gold flex-1 py-2.5 text-sm" onClick={() => { setSubmitted(false); setForm({ title:"",author:"",condition:"",location:"",description:"" }); setPreview(null); }}>
            Add Another
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Share Your Shelf</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Add a <span className="text-gold-gradient italic">Book</span>
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#888" }}>
            List your book to earn points and get a unique QR code for tracking its journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-x-6">
                <div>
                  <label style={labelStyle}>Title *</label>
                  <input name="title" value={form.title} onChange={handle} placeholder="Book title" style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = "var(--gold)"} onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
                </div>
                <div>
                  <label style={labelStyle}>Author *</label>
                  <input name="author" value={form.author} onChange={handle} placeholder="Author name" style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = "var(--gold)"} onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
                </div>
                <div>
                  <label style={labelStyle}>Condition *</label>
                  <select name="condition" value={form.condition} onChange={handle} style={{ ...inputStyle, cursor: "pointer" }} required
                    onFocus={e => e.target.style.borderColor = "var(--gold)"} onBlur={e => e.target.style.borderColor = "var(--ink-border)"}>
                    <option value="">Select condition</option>
                    {["Like New", "Good", "Fair", "Worn"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Location *</label>
                  <input name="location" value={form.location} onChange={handle} placeholder="City or area" style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = "var(--gold)"} onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
                </div>
                <div className="md:col-span-2">
                  <label style={labelStyle}>Description</label>
                  <textarea name="description" value={form.description} onChange={handle} rows={3}
                    placeholder="Share your thoughts about this book..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"} onBlur={e => e.target.style.borderColor = "var(--ink-border)"} />
                </div>
              </div>

              {/* Image upload */}
              <label style={labelStyle}>Book Cover Photo</label>
              <label className="block cursor-pointer mb-6">
                <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
                {preview ? (
                  <div className="relative rounded-xl overflow-hidden" style={{ height: 180 }}>
                    <img src={preview} alt="preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.4)" }}>
                      <p className="text-sm text-white font-semibold">Click to change</p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl p-8 text-center transition-colors"
                    style={{ border: "2px dashed var(--ink-border)", background: "var(--ink-soft)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--ink-border)"}>
                    <Upload size={28} className="mx-auto mb-2" style={{ color: "#555" }} />
                    <p className="text-sm" style={{ color: "#666" }}>Click to upload book cover</p>
                    <p className="text-xs mt-1" style={{ color: "#444" }}>PNG, JPG up to 5MB</p>
                  </div>
                )}
              </label>

              <button type="submit" disabled={loading}
                className="btn-gold w-full py-3 flex items-center justify-center gap-2 text-base">
                {loading
                  ? <><span className="w-5 h-5 border-2 border-[var(--ink)] border-t-transparent rounded-full animate-spin" /> Submitting...</>
                  : <><BookOpen size={16} /> List Book & Earn Points</>}
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "⭐", title: "Earn 30–70 pts", desc: "Based on condition and demand assessed by our AI." },
              { icon: "📱", title: "Get a QR Code", desc: "After listing, you receive a unique QR sticker for the book." },
              { icon: "🔄", title: "Fair Exchange", desc: "Our system prevents abuse and ensures fair point transfers." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <p className="text-2xl mb-2">{item.icon}</p>
                <h3 className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "#888" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}