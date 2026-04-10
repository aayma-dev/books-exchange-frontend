import React from "react";
import { messages } from "../../data/mockData";

export default function ChatList({ onSelect, selectedId }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      
      {/* Header */}
      <div
        className="p-5 border-b"
        style={{ borderColor: "var(--ink-border)" }}
      >
        <h3
          className="font-semibold text-lg"
          style={{ color: "var(--cream)" }}
        >
          Messages
        </h3>
      </div>

      {/* Chat List */}
      <div className="flex flex-col">
        {messages.map((msg) => (
          <button
            key={msg.id}
            onClick={() => onSelect && onSelect(msg)}
            className="flex items-center gap-3 p-4 text-left transition-all border-b"
            style={{
              borderColor: "var(--ink-border)",
              background:
                selectedId === msg.id
                  ? "rgba(201,168,76,0.07)"
                  : "transparent",
              borderLeft:
                selectedId === msg.id
                  ? "3px solid var(--gold)"
                  : "3px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (selectedId !== msg.id)
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.03)";
            }}
            onMouseLeave={(e) => {
              if (selectedId !== msg.id)
                e.currentTarget.style.background = "transparent";
            }}
          >
            
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold), var(--gold-light))",
                  color: "var(--ink)",
                }}
              >
                {msg.avatar}
              </div>

              {msg.unread > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "var(--rose)",
                    color: "white",
                    fontSize: "0.6rem",
                  }}
                >
                  {msg.unread}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--cream)" }}
                >
                  {msg.user}
                </p>

                <p className="text-xs" style={{ color: "#555" }}>
                  {msg.time}
                </p>
              </div>

              <p
                className="text-xs truncate"
                style={{ color: "#888" }}
              >
                {msg.lastMsg}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}