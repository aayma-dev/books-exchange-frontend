import React, { useState } from "react";
import Button from "../ui/Button";
import { Plus, CheckCircle } from "lucide-react";

export default function ExchangeRequest() {
  const [form, setForm] = useState({ name: "", address: "", phone: "", hours: "" });
  const [submitted, setSubmitted] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  if (submitted) return (
    <div className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
      <CheckCircle size={48} className="mb-4" style={{ color: "var(--teal)" }} />
      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--cream)" }}>Stall Added!</h3>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Your exchange point is now visible on the map to nearby readers.</p>
      <Button onClick={() => setSubmitted(false)} variant="outline">Add Another Stall</Button>
    </div>
  );

  const labelStyle = { color: "var(--gold)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 };

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <Plus size={16} style={{ color: "var(--gold)" }} />
        </div>
        <h3 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>Add Your Exchange Stall</h3>
      </div>

      <p className="text-sm mb-6" style={{ color: "#888" }}>
        Have a physical stall or spot where readers can exchange books? List it here so others can find you on the map.
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label style={labelStyle}>Stall / Location Name</label>
          <input name="name" value={form.name} onChange={handle} placeholder="e.g. Liberty Book Corner" className="input-dark" />
        </div>
        <div>
          <label style={labelStyle}>Full Address</label>
          <input name="address" value={form.address} onChange={handle} placeholder="Street, Area, City" className="input-dark" />
        </div>
        <div>
          <label style={labelStyle}>Contact Number</label>
          <input name="phone" value={form.phone} onChange={handle} placeholder="+92 3xx xxxxxxx" className="input-dark" />
        </div>
        <div>
          <label style={labelStyle}>Opening Hours</label>
          <input name="hours" value={form.hours} onChange={handle} placeholder="e.g. 10am – 8pm, Mon–Sat" className="input-dark" />
        </div>
        <Button onClick={() => form.name && setSubmitted(true)} className="w-full py-3 mt-2">
          Add to Map
        </Button>
      </div>
    </div>
  );
}
