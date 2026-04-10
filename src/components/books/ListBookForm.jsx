import React, { useState } from "react";
import Button from "../ui/Button";
import { Upload, BookOpen } from "lucide-react";

export default function ListBookForm() {
  const [form, setForm] = useState({ title: "", author: "", genre: "", condition: "", location: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) return (
    <div className="glass-card rounded-2xl p-10 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
        <BookOpen size={28} style={{ color: "var(--gold)" }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--cream)" }}>Book Listed!</h3>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Your book has been submitted. A QR code will be generated shortly.</p>
      <Button onClick={() => setSubmitted(false)}>List Another Book</Button>
    </div>
  );

  const inputClass = "input-dark mb-4";
  const labelClass = "block text-xs font-semibold mb-1.5 uppercase tracking-wider";

  return (
    <form onSubmit={submit} className="glass-card rounded-2xl p-8">
      <h2 className="font-display text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
        List Your Book
      </h2>

      <div className="grid md:grid-cols-2 gap-x-6">
        <div>
          <label className={labelClass} style={{ color: "var(--gold)" }}>Title *</label>
          <input name="title" value={form.title} onChange={handle} placeholder="Book title" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass} style={{ color: "var(--gold)" }}>Author *</label>
          <input name="author" value={form.author} onChange={handle} placeholder="Author name" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass} style={{ color: "var(--gold)" }}>Genre</label>
          <select name="genre" value={form.genre} onChange={handle} className={inputClass}
            style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-border)", color: form.genre ? "var(--cream)" : "#555" }}>
            <option value="">Select genre</option>
            {["Classic","Fantasy","Dystopian","Romance","Self-Help","Philosophy","Fiction","Adventure"].map(g => <option key={g}>{g}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} style={{ color: "var(--gold)" }}>Condition *</label>
          <select name="condition" value={form.condition} onChange={handle} className={inputClass} required
            style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-border)", color: form.condition ? "var(--cream)" : "#555" }}>
            <option value="">Select condition</option>
            {["Like New","Good","Fair","Worn"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} style={{ color: "var(--gold)" }}>Location *</label>
          <input name="location" value={form.location} onChange={handle} placeholder="City or area" className={inputClass} required />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} style={{ color: "var(--gold)" }}>Description</label>
          <textarea name="description" value={form.description} onChange={handle} rows={4}
            placeholder="Share your thoughts about the book..." className="input-dark resize-none mb-4" />
        </div>
      </div>

      {/* Cover image upload */}
      <div className="mb-6 border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors"
        style={{ borderColor: "var(--ink-border)", background: "var(--ink-soft)" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "var(--ink-border)"}>
        <Upload size={24} className="mx-auto mb-2" style={{ color: "#666" }} />
        <p className="text-sm" style={{ color: "#666" }}>Click to upload book cover photo</p>
        <p className="text-xs mt-1" style={{ color: "#444" }}>PNG, JPG up to 5MB</p>
      </div>

      <Button type="submit" className="w-full py-3">List Book & Earn Points</Button>
    </form>
  );
}
