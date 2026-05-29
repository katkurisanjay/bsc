import { useLang } from "../context/LanguageContext";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ThemedLogo from "./ThemedLogo";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { name: t.navHome, href: "#home" },
    { name: t.navAbout, href: "#about" },
    { name: t.navServices, href: "#services" },
    { name: t.navMenu, href: "#menu" },
    { name: t.navGallery, href: "#gallery" },
    { name: t.navTestimonials, href: "#testimonials" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 telangana-pattern opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <ThemedLogo variant="dark" className="h-20 md:h-24 w-20 md:w-24 drop-shadow-lg hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-bold text-2xl tracking-wide">{t.heroTitle}</h3>
            </div>
            <p className="font-body text-gray-400 leading-relaxed max-w-md mb-8">
              {t.footerTagline}
            </p>
            {/* Social Placeholders */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors cursor-pointer border border-white/20">
                  <span className="text-xs font-body text-white/50">S{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-saffron">{t.footerLinks}</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/admin" className="font-body text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                  {t.navAdmin}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-saffron">{t.footerContact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-400 leading-relaxed">
                  Head Office: Hyderabad, Telangana.<br/>Serving all 33 districts.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+919866059966" className="font-body text-gray-400 hover:text-white transition-colors">
                  +91 98660 59966
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@bscaters.in" className="font-body text-gray-400 hover:text-white transition-colors">
                  info@bscaters.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-gray-500">
            {t.footerCopy}
          </p>
          <p className="font-body text-sm text-gray-500 flex items-center gap-1">
            {t.footerMade}
          </p>
        </div>
      </div>
    </footer>
  );
}
