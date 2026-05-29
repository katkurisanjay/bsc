// @ts-ignore - Suppress VS Code casing glitch
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import ThemedLogo from "./ThemedLogo";

export default function Hero() {
  const { t } = useLang();

  const badges = [t.heroBadge1, t.heroBadge2, t.heroBadge3];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 telangana-pattern opacity-10"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 animate-float flex justify-center">
            <ThemedLogo variant="dark" className="h-40 md:h-48 w-40 md:w-48 drop-shadow-2xl" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t.heroTitle}
          </h1>

          <p className="font-body text-xl md:text-2xl text-gold-50 mb-10 font-medium tracking-wide drop-shadow-md">
            {t.heroTagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircleIcon className="w-5 h-5 text-gold" />
                <span className="font-body text-sm font-medium text-white">{badge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/booking" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
              {t.heroBtn1}
            </Link>
            <Link to="/menu" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 bg-black/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1A1A1A]">
              {t.heroBtn2}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,111.47,192.39,92.83C242.6,77.58,284.18,63.36,321.39,56.44Z" fill="#FFF8F0"></path>
        </svg>
      </div>
    </section>
  );
}
