import { useState, useMemo } from "react";
import { useLang } from "../context/LanguageContext";
import { menuData } from "../data/menuData";
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Menu() {
  const { lang, t } = useLang();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [expandedCats, setExpandedCats] = useState(
    menuData.reduce((acc, cat, idx) => ({ ...acc, [cat.id]: idx === 0 }), {})
  );

  const toggleCat = (id) => {
    setExpandedCats((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredData = useMemo(() => {
    let data = menuData;
    if (activeTab !== "all") {
      data = data.filter((cat) => cat.id === activeTab);
    }
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      data = data.map((cat) => {
        const filteredItems = cat.items.filter(
          (item) => item.en.toLowerCase().includes(q) || item.te.includes(q)
        );
        return { ...cat, items: filteredItems };
      }).filter(cat => cat.items.length > 0);
    }
    return data;
  }, [search, activeTab]);

  return (
    <section id="menu" className="section-wrapper bg-cream">
      <div className="text-center mb-12">
        <span className="section-badge">{t.menuTitle}</span>
        <h2 className="section-title mb-4">{t.menuTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.menuSubtitle}</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card overflow-hidden">
        {/* Top Controls */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.menuSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none font-body text-sm transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-body text-sm font-medium text-gray-500">Language view:</span>
              <div className="flex bg-gray-200 rounded-full p-1">
                <div className={`px-4 py-1.5 rounded-full text-sm font-medium font-body ${lang === 'en' ? 'bg-white shadow-sm text-saffron' : 'text-gray-500'}`}>EN</div>
                <div className={`px-4 py-1.5 rounded-full text-sm font-medium font-body ${lang === 'te' ? 'bg-white shadow-sm text-saffron' : 'text-gray-500'}`}>TE</div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-3">
            <button
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "menu-tab-active" : "menu-tab"}
            >
              {t.menuAll}
            </button>
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={activeTab === cat.id ? "menu-tab-active" : "menu-tab"}
              >
                {cat[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Menu List */}
        <div className="p-4 sm:p-6 bg-white min-h-[500px]">
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-gray-500">No items found for "{search}"</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredData.map((cat) => (
                <div key={cat.id} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleCat(cat.id)}
                    className="w-full flex items-center justify-between p-5 bg-saffron/5 hover:bg-saffron/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="font-display font-bold text-lg text-[#1A1A1A]">
                        {cat[lang]}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-saffron text-xs font-bold border border-saffron/20 shadow-sm">
                        {cat.items.length}
                      </span>
                    </div>
                    {expandedCats[cat.id] ? (
                      <ChevronUpIcon className="w-5 h-5 text-saffron" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-saffron" />
                    )}
                  </button>

                  {expandedCats[cat.id] && (
                    <div className="p-5 bg-white">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                        {cat.items.map((item, idx) => (
                          <div key={item.id} className="flex items-start gap-3 group">
                            <span className="font-body text-xs font-semibold text-gray-300 mt-1 w-6">
                              {(idx + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body font-medium text-[#1A1A1A] group-hover:text-saffron transition-colors">
                                {item[lang]}
                              </span>
                              <span className="font-body text-xs text-gray-400 mt-0.5">
                                {lang === 'en' ? item.te : item.en}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
