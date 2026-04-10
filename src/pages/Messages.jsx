import React, { useState } from "react";
import ChatList from "../components/messages/ChatList";
import ChatWindow from "../components/messages/ChatWindow";

export default function Messages() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="section-label">In-App Chat</p>
          <h1 className="font-display text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gold-gradient italic">Messages</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ height: 580 }}>
          <div className="md:col-span-1 h-full overflow-y-auto">
            <ChatList onSelect={setSelected} selectedId={selected?.id} />
          </div>
          <div className="md:col-span-2">
            <ChatWindow contact={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}
