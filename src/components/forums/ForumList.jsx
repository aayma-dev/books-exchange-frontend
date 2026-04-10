import React from "react";
import { Link } from "react-router-dom";
import { forums } from "../../data/mockData";
import { MessageCircle, Users, Clock } from "lucide-react";

export default function ForumList() {
  return (
    <div className="flex flex-col gap-4">
      {forums.map((forum) => (
        <Link
          key={forum.id}
          to={`/forums/${forum.id}`}
          className="glass-card card-hover rounded-2xl p-6 block"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--cream)" }}>{forum.title}</h3>
              <p className="text-sm" style={{ color: "#888" }}>
                Based on: <span style={{ color: "var(--gold)" }}>{forum.book}</span> by {forum.author}
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 px-2 py-1 rounded-full"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <Clock size={11} style={{ color: "#888" }} />
              <span className="text-xs" style={{ color: "#888" }}>{forum.lastActivity}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {forum.tags.map((tag) => (
              <span key={tag} className="badge-teal">{tag}</span>
            ))}
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-1.5 text-sm" style={{ color: "#666" }}>
              <MessageCircle size={13} />
              <span>{forum.posts} posts</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: "#666" }}>
              <Users size={13} />
              <span>{forum.members} members</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
