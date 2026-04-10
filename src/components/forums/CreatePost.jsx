import React, { useState } from "react";
import Button from "../ui/Button";
import { Eye, EyeOff } from "lucide-react";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;
    setText("");
  };

  return (
    <div className="glass-card rounded-2xl p-6 mb-2">
      <h3 className="font-semibold mb-4" style={{ color: "var(--cream)" }}>Add to Discussion</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Share your thoughts, interpretations, or insights..."
        className="input-dark resize-none mb-4"
      />
      <div className="flex items-center justify-between">
        <button
          onClick={() => setAnonymous(!anonymous)}
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: anonymous ? "var(--gold)" : "#666" }}>
          {anonymous ? <EyeOff size={15} /> : <Eye size={15} />}
          {anonymous ? "Posting anonymously" : "Post as yourself"}
        </button>
        <Button onClick={handleSubmit} disabled={!text.trim()}>Post Reply</Button>
      </div>
    </div>
  );
}
