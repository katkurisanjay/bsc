import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const FEATURED = [
  { id: "f1",  en: "Masala Dosa",          te: "మసాల దోస",           cat: "Tiffins",       emoji: "🫓" },
  { id: "f2",  en: "Paneer Tikka",          te: "పనీర్ టిక్కా",       cat: "Starters",      emoji: "🧀" },
  { id: "f3",  en: "Paneer Butter Masala",  te: "పనీర్ బటర్ మసాలా",   cat: "Gravy",         emoji: "🍛" },
  { id: "f4",  en: "Veg Dum Biryani",       te: "వెజ్ దమ్ బిర్యానీ",  cat: "Biryani",       emoji: "🍚" },
  { id: "f5",  en: "Gulab Jamun",           te: "గులాబ్ జామూన్",      cat: "Sweets",        emoji: "🍮" },
  { id: "f6",  en: "Badam Milk Shake",      te: "బాదం మిల్క్ షేక్",   cat: "Welcome Drinks",emoji: "🥛" },
  { id: "f7",  en: "Pav Bhaji",             te: "పావ్ భాజీ",           cat: "Welcome Snacks",emoji: "🥘" },
  { id: "f8",  en: "Butter Naan",           te: "బటర్ నాన్",           cat: "Rotis",         emoji: "🫓" },
  { id: "f9",  en: "Pulka",                 te: "పుల్కా",              cat: "Rotis",         emoji: "🫓" },
  { id: "f10", en: "Carrot Halwa",          te: "క్యారెట్ హల్వా",      cat: "Halwas",        emoji: "🍯" },
  { id: "f11", en: "Mango Pulihora",        te: "మామిడి పులిహోర",      cat: "Flavoured Rice",emoji: "🍋" },
  { id: "f12", en: "Kulfi",                 te: "కుల్ఫీ",               cat: "Ice Creams",    emoji: "🍦" },
];

const CAT_COLORS = {
  "Tiffins":       { bg: "bg-orange-50",   border: "border-orange-200",  badge: "bg-orange-100 text-orange-700" },
  "Starters":      { bg: "bg-red-50",      border: "border-red-200",     badge: "bg-red-100 text-red-700" },
  "Gravy":         { bg: "bg-amber-50",    border: "border-amber-200",   badge: "bg-amber-100 text-amber-700" },
  "Biryani":       { bg: "bg-yellow-50",   border: "border-yellow-200",  badge: "bg-yellow-100 text-yellow-700" },
  "Sweets":        { bg: "bg-pink-50",     border: "border-pink-200",    badge: "bg-pink-100 text-pink-700" },
  "Welcome Drinks":{ bg: "bg-sky-50",      border: "border-sky-200",     badge: "bg-sky-100 text-sky-700" },
  "Welcome Snacks":{ bg: "bg-lime-50",     border: "border-lime-200",    badge: "bg-lime-100 text-lime-700" },
  "Rotis":         { bg: "bg-stone-50",    border: "border-stone-200",   badge: "bg-stone-100 text-stone-700" },
  "Halwas":        { bg: "bg-purple-50",   border: "border-purple-200",  badge: "bg-purple-100 text-purple-700" },
  "Flavoured Rice":{ bg: "bg-green-50",    border: "border-green-200",   badge: "bg-green-100 text-green-700" },
  "Ice Creams":    { bg: "bg-blue-50",     border: "border-blue-200",    badge: "bg-blue-100 text-blue-700" },
};

export default function MenuPreview() {
  const { lang, t } = useLang();
  const navigate = useNavigate();

  return (
    <section id="menu-preview" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-badge">
            <SparklesIcon className="w-4 h-4" />
            {lang === "en" ? "Featured Dishes" : "ప్రత్యేక వంటకాలు"}
          </span>
          <h2 className="section-title mb-4">
            {lang === "en" ? "Taste Our Signature Menu" : "మా సిగ్నేచర్ వంటకాలు రుచి చూడండి"}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            {lang === "en"
              ? "A glimpse of our 300+ authentic vegetarian dishes across 29 categories. From traditional Telangana flavours to continental delights."
              : "29 వర్గాలలో 300+ అసలైన శాకాహారి వంటకాల సంగ్రహ వీక్షణ. సంప్రదాయ తెలంగాణ రుచుల నుండి కాంటినెంటల్ వ్యంజనాల వరకు."}
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 reveal reveal-delay-1">
          {FEATURED.map((item, idx) => {
            const colors = CAT_COLORS[item.cat] || { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-700" };
            return (
              <div
                key={item.id}
                onClick={() => navigate("/menu")}
                className={`group relative flex flex-col items-center text-center p-5 rounded-2xl border-2 ${colors.bg} ${colors.border} cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-saffron`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Emoji */}
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </div>

                {/* Name */}
                <h3 className="font-body font-semibold text-sm text-[#1A1A1A] mb-1 leading-tight group-hover:text-saffron transition-colors">
                  {lang === "en" ? item.en : item.te}
                </h3>
                <p className="font-body text-xs text-gray-400 mb-3">
                  {lang === "en" ? item.te : item.en}
                </p>

                {/* Category Badge */}
                <span className={`text-[10px] font-semibold font-body px-2.5 py-1 rounded-full ${colors.badge}`}>
                  {item.cat}
                </span>

                {/* Hover Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRightIcon className="w-4 h-4 text-saffron" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 reveal reveal-delay-2">
          {[
            { num: "300+", label: lang === "en" ? "Dishes" : "వంటకాలు" },
            { num: "29",   label: lang === "en" ? "Categories" : "వర్గాలు" },
            { num: "100%", label: lang === "en" ? "Vegetarian" : "శాకాహారి" },
            { num: "33",   label: lang === "en" ? "Districts Served" : "సేవించిన జిల్లాలు" },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient-saffron">{stat.num}</div>
              <div className="font-body text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center reveal reveal-delay-3">
          <button
            onClick={() => navigate("/menu")}
            className="btn-primary text-lg px-10 py-4 gap-3"
          >
            {lang === "en" ? "View Full Menu" : "పూర్తి మెనూ చూడండి"}
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          <p className="font-body text-sm text-gray-400 mt-4">
            {lang === "en"
              ? "Browse all 300+ items, search by name, and filter by category"
              : "300+ వంటకాలు బ్రౌజ్ చేయండి, పేరు ద్వారా వెతకండి, వర్గం వారీగా ఫిల్టర్ చేయండి"}
          </p>
        </div>
      </div>
    </section>
  );
}
