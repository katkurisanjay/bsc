import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PageLayout({ title, subtitle, badge, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body overflow-hidden">
      <Navbar />

      {/* Page Hero Banner */}
      <div className="bg-hero-gradient pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 telangana-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold font-body bg-white/10 text-gold border border-gold/30 mb-4">
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-white/80 text-lg max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm font-body">
            <button onClick={() => navigate("/")} className="hover:text-gold transition-colors">Home</button>
            <span>/</span>
            <span className="text-gold">{title}</span>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="min-h-screen bg-cream">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
