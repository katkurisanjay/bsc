import { useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const categories = [
    { id: "All", label: t.gAll },
    { id: "Weddings", label: t.gWeddings },
    { id: "Corporate", label: t.gCorporate },
    { id: "Birthday", label: t.gBirthday },
    { id: "Home Events", label: t.gHome },
    { id: "Food Items", label: t.gFood },
  ];

  const images = [
    { id: 1, cat: "Weddings", src: "bg-saffron/20" },
    { id: 2, cat: "Food Items", src: "bg-burgundy/20" },
    { id: 3, cat: "Corporate", src: "bg-gold/20" },
    { id: 4, cat: "Birthday", src: "bg-green-100" },
    { id: 5, cat: "Food Items", src: "bg-blue-100" },
    { id: 6, cat: "Weddings", src: "bg-purple-100" },
    { id: 7, cat: "Home Events", src: "bg-pink-100" },
    { id: 8, cat: "Food Items", src: "bg-orange-100" },
    { id: 9, cat: "Corporate", src: "bg-teal-100" },
    { id: 10, cat: "Weddings", src: "bg-indigo-100" },
    { id: 11, cat: "Birthday", src: "bg-red-100" },
    { id: 12, cat: "Home Events", src: "bg-yellow-100" },
  ];

  const filteredImages = filter === "All" ? images : images.filter(img => img.cat === filter);

  return (
    <section id="gallery" className="section-wrapper bg-cream">
      <div className="text-center mb-12 reveal">
        <span className="section-badge">{t.galleryTitle}</span>
        <h2 className="section-title mb-4">{t.galleryTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.gallerySubtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={filter === cat.id ? "menu-tab-active" : "menu-tab"}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal reveal-delay-1">
        {filteredImages.map((img) => (
          <div 
            key={img.id} 
            onClick={() => setLightbox(img)}
            className={`w-full aspect-square rounded-2xl cursor-pointer overflow-hidden border-2 border-transparent hover:border-saffron transition-all duration-300 shadow-sm hover:shadow-md relative group ${img.src}`}
          >
            {/* Placeholder styling */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 opacity-60 group-hover:opacity-100 transition-opacity bg-black/5 group-hover:bg-black/10">
              <span className="font-display font-bold text-lg">Image {img.id}</span>
              <span className="font-body text-xs bg-white/80 px-2 py-1 rounded mt-2">{img.cat}</span>
            </div>
            
            {/* Admin Note */}
            <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 font-body">
              [Placeholder]
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative w-[90%] max-w-4xl aspect-video bg-white rounded-xl shadow-2xl flex items-center justify-center overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setLightbox(null)} 
              className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-600 transition-colors z-10"
            >
              ✕
            </button>
            <div className={`absolute inset-0 ${lightbox.src} flex flex-col items-center justify-center`}>
              <span className="font-display font-bold text-4xl text-gray-700 mb-4">Image {lightbox.id}</span>
              <span className="font-body px-4 py-2 bg-white/50 backdrop-blur rounded-full text-gray-700">{lightbox.cat}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
