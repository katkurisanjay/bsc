import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";
const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const toggle = () => setLang(l => l === "en" ? "te" : "en");
  return <LanguageContext.Provider value={{ lang, t, toggle }}>{children}</LanguageContext.Provider>;
}
export const useLang = () => useContext(LanguageContext);
