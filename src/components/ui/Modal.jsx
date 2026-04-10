import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}>
      <div className="glass-card rounded-2xl w-full max-w-md p-7 relative"
        style={{ border: "1px solid var(--ink-border)" }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h3 className="font-semibold text-lg" style={{ color: "var(--cream)" }}>{title}</h3>
          )}
          <button onClick={onClose} className="ml-auto p-1.5 rounded-lg transition-colors"
            style={{ color: "#666" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--rose)"}
            onMouseLeave={e => e.currentTarget.style.color = "#666"}>
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
