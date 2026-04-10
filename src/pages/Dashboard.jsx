import React from "react";
import UserProfile from "../components/dashboard/UserProfile";
import MyBooks from "../components/dashboard/MyBooks";
import TransactionHistory from "../components/dashboard/TransactionHistory";
import WishList from "../components/dashboard/WishList";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="section-label">Your Hub</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}>
              Dashboard
            </h1>
          </div>
          <div className="flex gap-3">
            <Link to="/listbook" className="btn-outline flex items-center gap-2 text-sm py-2.5 px-4">
              <Plus size={15} /> List a Book
            </Link>
            <Link to="/buy-points" className="btn-gold flex items-center gap-2 text-sm py-2.5 px-4">
              <ShoppingCart size={15} /> Buy Points
            </Link>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserProfile />
          <MyBooks />
          <TransactionHistory />
          <WishList />
        </div>
      </div>
    </div>
  );
}
