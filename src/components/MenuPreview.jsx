import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const FEATURED = [
  { id: "f1",  en: "Masala Dosa",          te: "మసాల దోస",           cat: "Tiffins",        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80" },
  { id: "f2",  en: "Paneer Tikka",          te: "పనీర్ టిక్కా",       cat: "Starters",       img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
  { id: "f3",  en: "Paneer Butter Masala",  te: "పనీర్ బటర్ మసాలా",   cat: "Gravy",          img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80" },
  { id: "f4",  en: "Veg Dum Biryani",       te: "వెజ్ దమ్ బిర్యానీ",  cat: "Biryani",        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
  { id: "f5",  en: "Gulab Jamun",           te: "గులాబ్ జామూన్",      cat: "Sweets",         img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg" },
  { id: "f6",  en: "Badam Milk Shake",      te: "బాదం మిల్క్ షేక్",   cat: "Welcome Drinks", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thandai_%28Spiced_Indian_Milk_Drink%29.JPG/960px-Thandai_%28Spiced_Indian_Milk_Drink%29.JPG" },
  { id: "f7",  en: "Pav Bhaji",             te: "పావ్ భాజీ",           cat: "Welcome Snacks", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80" },
  { id: "f8",  en: "Butter Naan",           te: "బటర్ నాన్",           cat: "Rotis",          img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  { id: "f9",  en: "Pulka",                 te: "పుల్కా",              cat: "Rotis",          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/2020-05-08_19_34_28_Chapati_being_made_in_a_pan_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-2020-05-08_19_34_28_Chapati_being_made_in_a_pan_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg" },
  { id: "f10", en: "Carrot Halwa",          te: "క్యారెట్ హల్వా",      cat: "Halwas",         img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cuisine_%28268%29_44.jpg" },
  { id: "f11", en: "Mango Pulihora",        te: "మామిడి పులిహోర",      cat: "Flavoured Rice", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pulihara.JPG/960px-Pulihara.JPG" },
  { id: "f12", en: "Kulfi",                 te: "కుల్ఫీ",               cat: "Ice Creams",     img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12 reveal reveal-delay-1">
          {FEATURED.map((item, idx) => {
            const colors = CAT_COLORS[item.cat] || { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-700" };
            return (
              <div
                key={item.id}
                onClick={() => navigate(`/menu?cat=${encodeURIComponent(item.cat)}`)}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 ${colors.border} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-saffron bg-white`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Food Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Normal gradient + badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
                  <span className={`absolute bottom-2 left-2 text-[10px] font-bold font-body px-2.5 py-1 rounded-full ${colors.badge} shadow-sm transition-opacity duration-300 group-hover:opacity-0`}>
                    {item.cat}
                  </span>

                  {/* Hover Overlay: "View all [Category]" */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white/70 text-[10px] font-body uppercase tracking-widest mb-1">Browse</span>
                    <span className="text-white font-display font-bold text-base leading-tight text-center px-2">
                      All {item.cat}
                    </span>
                    <div className="mt-2 flex items-center gap-1 bg-saffron text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      View Menu
                      <ArrowRightIcon className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`p-4 ${colors.bg}`}>
                  <h3 className="font-body font-bold text-sm text-[#1A1A1A] mb-0.5 leading-tight group-hover:text-saffron transition-colors">
                    {lang === "en" ? item.en : item.te}
                  </h3>
                  <p className="font-body text-xs text-gray-400">
                    {lang === "en" ? item.te : item.en}
                  </p>
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
