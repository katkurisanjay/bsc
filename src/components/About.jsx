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
        <div className="space-y-8 reveal reveal-delay-1">
          {/* Founder */}
          <div className="card p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 rounded-bl-full -z-10"></div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 border-4 border-white shadow-md flex-shrink-0 flex items-center justify-center overflow-hidden">
              {/* Photo placeholder */}
              <span className="text-gray-400 font-body text-xs text-center px-2">[Upload Photo]</span>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mb-1">{t.founderName}</h3>
              <p className="font-body text-saffron font-medium mb-3">{t.founderTitle}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-4">
                {t.founderExp}
              </span>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {t.founderBio}
              </p>
            </div>
          </div>

          {/* Co-Founder Placeholder */}
          <div className="card p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-dashed border-gray-300 bg-gray-50/50">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-200 border-4 border-white shadow-sm flex-shrink-0 flex items-center justify-center">
              <span className="text-gray-400 font-body text-xs text-center px-2">[Upload Photo]</span>
            </div>
            <div className="text-center sm:text-left flex flex-col justify-center w-full">
              <h3 className="font-display font-bold text-xl text-gray-400 mb-1">[Add Co-Founder Details]</h3>
              <p className="font-body text-gray-400 font-medium">{t.cofounderTitle}</p>
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
