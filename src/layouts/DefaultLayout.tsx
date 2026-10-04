import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 min-h-screen overflow-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
