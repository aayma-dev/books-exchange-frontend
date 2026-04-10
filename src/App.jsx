import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages (These are correctly located in src/pages)
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyPoints from "./pages/BuyPoints";
import ExchangePoints from "./pages/ExchangePoints";
import Forums from "./pages/Forums";
import ForumDetail from "./pages/ForumDetail";
import Messages from "./pages/Messages";
import QRHistory from "./pages/QRHistory";
import ListBook from "./pages/ListBook";
import BookDetailPage from "./pages/BookDetailPage";
import Wishlist from "./pages/Wishlist";

// Components used as pages (Corrected paths based on your folder structure)
import AddBook from "./components/books/AddBooks";
import MyBooks from "./components/dashboard/MyBooks";
import ScanQR from "./components/qr/ScanQR";
import BookTimeline from "./components/qr/BookTimeline";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0d0d0d]">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/browse/:id" element={<BookDetailPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/buy-points" element={<BuyPoints />} />
            <Route path="/exchange-points" element={<ExchangePoints />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:id" element={<ForumDetail />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/qr-history" element={<QRHistory />} />
            <Route path="/listbook" element={<ListBook />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/my-books" element={<MyBooks />} />
            <Route path="/scan" element={<ScanQR />} />
            <Route path="/book/:qrId" element={<BookTimeline />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}