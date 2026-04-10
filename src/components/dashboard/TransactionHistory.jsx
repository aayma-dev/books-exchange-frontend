import React from "react";
import { transactions } from "../../data/mockData";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

export default function TransactionHistory() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--cream)" }}>Transaction History</h3>
      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl"
            style={{ background: "var(--ink-mid)", border: "1px solid var(--ink-border)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: tx.type === "earned" ? "rgba(163,230,53,0.1)" : "rgba(244,63,94,0.1)" }}>
                {tx.type === "earned"
                  ? <TrendingUp size={14} color="#a3e635" />
                  : <TrendingDown size={14} color="var(--rose)" />}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>{tx.book}</p>
                <p className="text-xs" style={{ color: "#666" }}>{tx.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold" style={{
                color: tx.type === "earned" ? "#a3e635" : "var(--rose)",
                fontFamily: "var(--font-mono)"
              }}>
                {tx.type === "earned" ? "+" : ""}{tx.points} pts
              </span>
              {tx.status === "pending" && (
                <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Clock size={10} /> Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
