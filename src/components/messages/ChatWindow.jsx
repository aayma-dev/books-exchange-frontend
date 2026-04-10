import React, { useState, useRef, useEffect } from "react";
import { Send, BookOpen } from "lucide-react";

const initialMessages = [
  { id: 1, from: "them", text: "Hi! Is 'The Hobbit' still available for exchange?", time: "10:32 AM" },
  { id: 2, from: "me", text: "Yes it is! It's in great condition. Which book are you offering?", time: "10:34 AM" },
  { id: 3, from: "them", text: "I have 'Atomic Habits' – Like New condition. Would that work?", time: "10:36 AM" },
  { id: 4, from: "me", text: "That works! Let's meet at Liberty Book Corner tomorrow?", time: "10:38 AM" },
];

export default function ChatWindow({ contact }) {
  const [msgs, setMsgs] = useState(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    if (!input.trim()) return;
    setMsgs((prev) => [...prev, { id: Date.now(), from: "me", text: input.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
    setInput("");
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

  if (!contact) return (
    <div className="glass-card rounded-2xl flex flex-col items-center justify-center h-full min-h-[400px]"
      style={{ color: "#555" }}>
      <BookOpen size={40} className="mb-3 opacity-30" />
      <p className="text-sm">Select a conversation to start messaging</p>
    </div>
  );

  return (
    <div className="glass-card rounded-2xl flex flex-col" style={{ height: 520 }}>
      {/* Header */}
      <div className="flex items-center gap-3 p-5 border-b" style={{ borderColor: "var(--ink-border)" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
          style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "var(--ink)" }}>
          {contact.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: "var(--cream)" }}>{contact.user}</p>
          <p className="text-xs" style={{ color: "var(--teal)" }}>● Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3">
        {msgs.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[75%]">
              <div className="px-4 py-2.5 rounded-2xl text-sm"
                style={{
                  background: msg.from === "me"
                    ? "linear-gradient(135deg, var(--gold), var(--gold-light))"
                    : "var(--ink-mid)",
                  color: msg.from === "me" ? "var(--ink)" : "var(--cream)",
                  borderRadius: msg.from === "me" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  border: msg.from !== "me" ? "1px solid var(--ink-border)" : "none",
                }}>
                {msg.text}
              </div>
              <p className={`text-xs mt-1 ${msg.from === "me" ? "text-right" : "text-left"}`}
                style={{ color: "#555" }}>{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-3 items-end" style={{ borderColor: "var(--ink-border)" }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          rows={1}
          placeholder="Type a message..."
          className="input-dark resize-none flex-1"
          style={{ minHeight: 44, maxHeight: 100 }}
        />
        <button
          onClick={send}
          disabled={!input.trim()}
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))" }}>
          <Send size={16} style={{ color: "var(--ink)" }} />
        </button>
      </div>
    </div>
  );
}
