import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const { lang, t } = useLang();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is the minimum guest count for catering?",
      a: "Our minimum order requirement is for 50 guests. For smaller intimate gatherings, please contact us to discuss possibilities based on your location and date."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 2-4 weeks in advance for regular events, and 3-6 months in advance for weddings and major festivals to ensure availability."
    },
    {
      q: "Do you serve outside Hyderabad?",
      a: "Yes, we proudly serve all 33 districts across Telangana. Travel and transport charges may apply based on the distance from our base kitchen."
    },
    {
      q: "Is all food 100% vegetarian?",
      a: "Absolutely. We run a strict 100% pure vegetarian kitchen. We also cater to Jain, Swaminarayan, and vegan dietary requirements upon request."
    },
    {
      q: "Do you provide serving staff?",
      a: "Yes, we provide professional, uniformed serving staff, supervisors, and live counter chefs as part of our comprehensive catering packages."
    },
    {
      q: "Can I customize the menu?",
      a: "Yes! While we have 300+ items across 29 categories, we can completely customize the menu to match your theme, preferences, and budget."
    },
    {
      q: "What is the payment structure?",
      a: "We require a 30% advance to block the date, 50% one week before the event, and the remaining 20% on the day of the event."
    },
    {
      q: "Do you provide tables, chairs, and crockery?",
      a: "Yes, we provide premium melamine or ceramic crockery, cutlery, chafing dishes, and buffet table setups. Dining tables and chairs for guests can be arranged upon request."
    },
    {
      q: "What is the cancellation policy?",
      a: "Cancellations made 14 days prior to the event will receive a full advance refund. Cancellations within 14 days may be subject to material cost deductions."
    },
    {
      q: "Do you offer tasting sessions before the event?",
      a: "Yes, for events with over 200 guests, we offer a complimentary menu tasting session for up to 4 people once the booking is confirmed."
    }
  ];

  return (
    <section id="faq" className="section-wrapper bg-white">
      <div className="text-center mb-16 reveal">
        <span className="section-badge">{t.faqTitle}</span>
        <h2 className="section-title mb-4">{t.faqTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.faqSubtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 reveal reveal-delay-1">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="accordion-btn"
            >
              <span className="pr-4">{faq.q}</span>
              <ChevronDownIcon 
                className={`w-5 h-5 text-saffron transition-transform duration-300 flex-shrink-0 ${openIdx === idx ? "rotate-180" : ""}`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out bg-gray-50 overflow-hidden ${
                openIdx === idx ? "max-h-96 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-6 font-body text-[#5C5C5C] leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
