import React from "react";
import { useParams, Link } from "react-router-dom";
import ForumThread from "../components/forums/ForumThread";
import CreatePost from "../components/forums/CreatePost";
import { forums } from "../data/mockData";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";

export default function ForumDetail() {
  const { id } = useParams();
  const forum = forums.find((f) => f.id === Number(id)) || forums[0];

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-3xl mx-auto">
        <Link to="/forums"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: "#888" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}>
          <ArrowLeft size={14} /> Back to Forums
        </Link>

        {/* Forum header */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {forum.tags.map((tag) => (
              <span key={tag} className="badge-teal">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            {forum.title}
          </h1>
          <p className="text-sm mb-4" style={{ color: "#888" }}>
            Based on: <span style={{ color: "var(--gold)" }}>{forum.book}</span> by {forum.author}
          </p>
          <div className="flex gap-5 text-sm" style={{ color: "#666" }}>
            <span className="flex items-center gap-1.5"><MessageCircle size={13} /> {forum.posts} posts</span>
            <span className="flex items-center gap-1.5"><Users size={13} /> {forum.members} members</span>
          </div>
        </div>

        <CreatePost />
        <ForumThread />
      </div>
    </div>
  );
}
