import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import ThemedLogo from "./ThemedLogo";

export default function Navbar() {
  const { lang, t, toggle } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome,         href: "/" },
    { name: t.navAbout,        href: "/about" },
    { name: t.navServices,     href: "/services" },
    { name: t.navMenu,         href: "/menu" },
    { name: t.navGallery,      href: "/gallery" },
    { name: t.navTestimonials, href: "/testimonials" },
    { name: t.navContact,      href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-nav py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <ThemedLogo 
                variant={scrolled ? "light" : "dark"} 
                className="h-12 md:h-14 w-12 md:w-14 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`font-body font-medium text-sm transition-colors hover:text-saffron ${scrolled ? "text-[#1A1A1A]/80" : "text-white/90"}`}>
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-300/30">
              <button onClick={toggle} className={`px-4 py-1.5 rounded-full text-xs font-semibold font-body border transition-colors ${scrolled ? "border-saffron text-saffron hover:bg-saffron hover:text-white" : "border-white/50 text-white hover:bg-white/20"}`}>
                {t.langToggle}
              </button>
              <Link to="/booking" className="btn-primary py-2.5 px-6">
                {t.navBookNow}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <button onClick={toggle} className={`px-3 py-1 rounded-full text-xs font-semibold border ${scrolled ? "border-saffron text-saffron" : "border-white/50 text-white"}`}>
              {t.langToggle}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-[#1A1A1A]" : "text-white"}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-slide-up">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-base font-medium text-[#1A1A1A] hover:text-saffron hover:bg-saffron/5 rounded-lg">
              {link.name}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center mt-2">
            {t.navBookNow}
          </Link>
        </div>
      )}
    </nav>
  );
}
