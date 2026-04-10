import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

const inputStyle = {
  background: "var(--ink-soft)",
  border: "1px solid var(--ink-border)",
  color: "var(--cream)",
  borderRadius: "8px",
  width: "100%",
  fontFamily: "var(--font-body)",
  outline: "none",
  fontSize: "0.95rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  paddingRight: "1rem",
  paddingLeft: "3rem",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 hero-bg">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))" }}>
            <BookOpen size={26} color="var(--ink)" />
          </div>
          <h1 className="font-display text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Welcome <span className="text-gold-gradient italic">Back</span>
          </h1>
          <p className="text-sm mt-2" style={{ color: "#888" }}>Sign in to your BooksExchange account</p>
        </div>

        <div className="glass-card rounded-2xl p-8" style={{ border: "1px solid var(--ink-border)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--gold)" }}>Email</label>
              <div className="relative flex items-center">
                <Mail size={16} className="absolute pointer-events-none z-10"
                  style={{ left: "0.9rem", color: "#666" }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px var(--gold-glow)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--ink-border)"; e.target.style.boxShadow = "none"; }}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--gold)" }}>Password</label>
              <div className="relative flex items-center">
                <Lock size={16} className="absolute pointer-events-none z-10"
                  style={{ left: "0.9rem", color: "#666" }} />
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ ...inputStyle, paddingRight: "3rem" }}
                  onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px var(--gold-glow)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--ink-border)"; e.target.style.boxShadow = "none"; }}
                  required
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute z-10" style={{ right: "0.9rem", color: "#666" }}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs" style={{ color: "#666" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "#666"}>
                Forgot password?
              </a>
            </div>

            <button type="submit" disabled={loading}
              className="btn-gold w-full py-3 flex items-center justify-center gap-2 text-base">
              {loading
                ? <span className="w-5 h-5 border-2 border-[var(--ink)] border-t-transparent rounded-full animate-spin" />
                : <><span>Sign In</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <p className="mt-6 text-center text-sm" style={{ color: "#666" }}>
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold" style={{ color: "var(--gold)" }}>Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
