import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Lock, User, MapPin, ArrowRight, Eye, EyeOff } from "lucide-react";

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

const fields = [
  { name: "name",  label: "Full Name", type: "text",  placeholder: "Ahmed Khan",        icon: User   },
  { name: "email", label: "Email",     type: "email", placeholder: "you@example.com",   icon: Mail   },
  { name: "city",  label: "City",      type: "text",  placeholder: "Lahore",            icon: MapPin },
];

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", city: "", password: "", confirm: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Check if passwords match
  if (form.password !== form.confirm) {
    alert("Passwords don't match!");
    return;
  }
  
  setLoading(true);
  
  try {
    const response = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        city: form.city,
        password: form.password
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Save token and user data
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('token_type', data.token_type);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      alert('Registration successful!');
      // Redirect to dashboard or home page
      window.location.href = '/';
    } else {
      alert(data.detail || 'Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to connect to backend. Make sure it\'s running on port 8000');
  } finally {
    setLoading(false);
  }
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
            Join the <span className="text-gold-gradient italic">Community</span>
          </h1>
          <p className="text-sm mt-2" style={{ color: "#888" }}>Start exchanging books today — it's free</p>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {fields.map((field) => {
              const FieldIcon = field.icon;
              return (
                <div key={field.name}>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--gold)" }}>{field.label}</label>
                  <div className="relative flex items-center">
                    <FieldIcon size={16} className="absolute pointer-events-none z-10"
                      style={{ left: "0.9rem", color: "#666" }} />
                    <input
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handle}
                      placeholder={field.placeholder}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px var(--gold-glow)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--ink-border)"; e.target.style.boxShadow = "none"; }}
                      required
                    />
                  </div>
                </div>
              );
            })}

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--gold)" }}>Password</label>
              <div className="relative flex items-center">
                <Lock size={16} className="absolute pointer-events-none z-10"
                  style={{ left: "0.9rem", color: "#666" }} />
                <input
                  name="password" type={showPwd ? "text" : "password"}
                  value={form.password} onChange={handle}
                  placeholder="Min. 8 characters"
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

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--gold)" }}>Confirm Password</label>
              <div className="relative flex items-center">
                <Lock size={16} className="absolute pointer-events-none z-10"
                  style={{ left: "0.9rem", color: "#666" }} />
                <input
                  name="confirm" type="password"
                  value={form.confirm} onChange={handle}
                  placeholder="Repeat password"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px var(--gold-glow)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--ink-border)"; e.target.style.boxShadow = "none"; }}
                  required
                />
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="btn-gold w-full py-3 flex items-center justify-center gap-2 text-base mt-1">
              {loading
                ? <span className="w-5 h-5 border-2 border-[var(--ink)] border-t-transparent rounded-full animate-spin" />
                : <><span>Create Account</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <p className="mt-6 text-center text-sm" style={{ color: "#666" }}>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold" style={{ color: "var(--gold)" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
