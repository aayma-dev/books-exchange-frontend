import React from "react";
import ForumList from "../components/forums/ForumList";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export default function Forums() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label">Community</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}>
              Book <span className="text-gold-gradient italic">Forums</span>
            </h1>
          </div>
          <button className="btn-gold flex items-center gap-2 text-sm py-2.5 px-4">
            <Plus size={15} /> New Forum
          </button>
        </div>
        <ForumList />
      </div>
    </div>
  );
}
