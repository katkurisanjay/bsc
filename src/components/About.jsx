import { useLang } from "../context/LanguageContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function About() {
  const { lang, t } = useLang();

  const reasons = [t.w1, t.w2, t.w3, t.w4];

  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="text-center mb-16 reveal">
        <span className="section-badge">{t.aboutTitle}</span>
        <h2 className="section-title mb-4">{t.aboutTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.aboutSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profiles */}
        <div className="space-y-8 reveal reveal-delay-1 h-full flex flex-col justify-center">
          {/* Founder */}
          <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 sm:p-10 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-saffron/10 to-transparent rounded-bl-full -z-0"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-50 rounded-full blur-2xl -z-0 opacity-50"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              {/* Photo */}
              <div className="relative flex-shrink-0 mx-auto">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-[8px] border-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/master chef.png" 
                    alt="Master Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white p-2 rounded-full shadow-lg">
                  <div className="bg-saffron text-white w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl">
                    20+
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col items-center mt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-bold text-orange-600 tracking-widest uppercase mb-4">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  {t.founderExp}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] mb-2 tracking-tight">
                  {t.founderName}
                </h3>
                <p className="font-body text-saffron font-bold text-lg mb-4">{t.founderTitle}</p>
                <div className="w-12 h-1 bg-gray-200 mb-5 mx-auto"></div>
                <p className="font-body text-gray-600 text-base leading-relaxed italic max-w-lg">
                  "{t.founderBio}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="reveal reveal-delay-2">
          <h3 className="font-display font-bold text-3xl text-[#1A1A1A] mb-8">{t.whyTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <CheckBadgeIcon className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="font-body font-bold text-lg text-[#1A1A1A] mb-1">{reason}</h4>
                  <p className="font-body text-sm text-gray-500">
                    {lang === 'en' ? 'Quality and tradition guaranteed for your event.' : 'మీ ఈవెంట్ కోసం నాణ్యత మరియు సంప్రదాయం హామీ.'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Placeholder */}
          <div className="mt-10 p-6 bg-cream rounded-2xl border border-saffron/20">
            <h4 className="font-display font-bold text-lg mb-4">Our Journey [Placeholder]</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-16 font-body font-bold text-saffron">2000</div>
                <div className="font-body text-sm text-gray-600 border-l-2 border-saffron/30 pl-4 pb-4">Started catering services in Hyderabad</div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 font-body font-bold text-saffron">2010</div>
                <div className="font-body text-sm text-gray-600 border-l-2 border-saffron/30 pl-4 pb-4">Expanded to pan-Telangana service</div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 font-body font-bold text-saffron">2025</div>
                <div className="font-body text-sm text-gray-600 border-l-2 border-transparent pl-4">Served over 500+ events successfully</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
