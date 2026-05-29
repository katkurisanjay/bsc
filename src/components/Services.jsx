import { useLang } from "../context/LanguageContext";
import { SparklesIcon, BriefcaseIcon, CakeIcon, HomeIcon, SunIcon, UserGroupIcon, FireIcon, StarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Services() {
  const { t } = useLang();

  const services = [
    {
      id: 1,
      icon: SparklesIcon,
      title: t.s1Title,
      desc: t.s1Desc,
      color: "text-saffron bg-saffron/10 border-saffron/20",
    },
    {
      id: 2,
      icon: BriefcaseIcon,
      title: t.s2Title,
      desc: t.s2Desc,
      color: "text-[#2E7D32] bg-[#2E7D32]/10 border-[#2E7D32]/20",
    },
    {
      id: 3,
      icon: CakeIcon,
      title: t.s3Title,
      desc: t.s3Desc,
      color: "text-[#1976D2] bg-[#1976D2]/10 border-[#1976D2]/20",
    },
    {
      id: 4,
      icon: HomeIcon,
      title: t.s4Title,
      desc: t.s4Desc,
      color: "text-burgundy bg-burgundy/10 border-burgundy/20",
    },
    {
      id: 5,
      icon: SunIcon,
      title: t.s5Title,
      desc: t.s5Desc,
      color: "text-[#D97706] bg-[#D97706]/10 border-[#D97706]/20",
    },
    {
      id: 6,
      icon: UserGroupIcon,
      title: t.s6Title,
      desc: t.s6Desc,
      color: "text-[#9C27B0] bg-[#9C27B0]/10 border-[#9C27B0]/20",
    },
    {
      id: 7,
      icon: FireIcon,
      title: t.s7Title,
      desc: t.s7Desc,
      color: "text-[#E65100] bg-[#E65100]/10 border-[#E65100]/20",
    },
    {
      id: 8,
      icon: StarIcon,
      title: t.s8Title,
      desc: t.s8Desc,
      color: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
    },
  ];

  return (
    <section id="services" className="bg-[#FCFBF8] text-gray-900 py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-saffron font-semibold tracking-widest uppercase text-sm mb-3 block">
            {t.servicesTitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-saffron-gradient mx-auto mb-6"></div>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Luxury Menu List Layout */}
        <div className="border-t border-gray-200">
          {services.map((svc, idx) => (
            <div 
              key={svc.id}
              className={`group flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b border-gray-200 hover:bg-saffron/[0.03] transition-colors duration-500 px-6 -mx-6 reveal reveal-delay-${(idx % 4) + 1}`}
            >
              
              {/* Icon */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${svc.color}`}>
                  <svc.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow md:pr-12">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-saffron transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="font-body text-gray-500 leading-relaxed text-lg">
                  {svc.desc}
                </p>
              </div>

              {/* Action / Price */}
              <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center mt-8 md:mt-0 w-full md:w-auto border-t border-gray-100 md:border-t-0 pt-6 md:pt-0">
                <span className="font-body text-sm font-semibold text-gray-400 uppercase tracking-widest md:mb-4">
                  {t.svcPrice}
                </span>
                <a href="/booking" className="inline-flex items-center text-gray-900 font-bold hover:text-saffron transition-colors group/btn">
                  {t.svcBtn}
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
