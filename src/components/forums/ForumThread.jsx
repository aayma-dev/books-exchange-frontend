import React from "react";
import { ThumbsUp, Flag } from "lucide-react";

const posts = [
  { id: 1, user: "BookLover92", time: "2h ago", text: "The ending really surprised me. The way the author tied all the loose threads was masterful.", likes: 24, anonymous: false },
  { id: 2, user: "Anonymous", time: "3h ago", text: "Chapter 7 completely changed my perspective. I had to put it down for a day to process it.", likes: 18, anonymous: true },
  { id: 3, user: "ReadingNerd", time: "5h ago", text: "The symbolism in this book is incredible. Every re-read reveals something new.", likes: 31, anonymous: false },
];

export default function ForumThread() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="font-semibold" style={{ color: "var(--cream)" }}>Discussion ({posts.length} posts)</h3>
      {posts.map((post) => (
        <div key={post.id} className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: post.anonymous ? "var(--ink-mid)" : "linear-gradient(135deg, var(--gold), var(--gold-light))", color: post.anonymous ? "#666" : "var(--ink)" }}>
              {post.anonymous ? "?" : post.user[0]}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>
                {post.anonymous ? "Anonymous" : post.user}
              </p>
              <p className="text-xs" style={{ color: "#666" }}>{post.time}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--cream-dim)" }}>{post.text}</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "#666" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "#666"}>
              <ThumbsUp size={13} /> {post.likes}
            </button>
            <button className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "#666" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--rose)"}
              onMouseLeave={e => e.currentTarget.style.color = "#666"}>
              <Flag size={13} /> Report
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
