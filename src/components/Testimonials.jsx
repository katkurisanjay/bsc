import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const { lang, t } = useLang();
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    { id: 1, name: "రమేష్ కుమార్", event: "Wedding, Hyderabad", rating: 5, text: "అద్భుతమైన సేవ! అన్ని వంటకాలు చాలా రుచిగా ఉన్నాయి." },
    { id: 2, name: "Priya Reddy", event: "Birthday Party, Warangal", rating: 5, text: "Excellent service, the food was absolutely delicious!" },
    { id: 3, name: "సుబ్బారావు", event: "Corporate Event, Karimnagar", rating: 5, text: "సమయానికి సేవ, అద్భుతమైన వంట." },
    { id: 4, name: "Anita Sharma", event: "Home Gathering, Nizamabad", rating: 5, text: "The team was professional and the food reminded us of home." },
    { id: 5, name: "వెంకటేష్", event: "Wedding, Khammam", rating: 5, text: "మా అతిథులందరూ ఆహారాన్ని ఎంతగానో మెచ్చుకున్నారు. ధన్యవాదాలు సతీష్ గారు." },
    { id: 6, name: "Suresh Babu", event: "Engagement, Nalgonda", rating: 5, text: "Highly recommend for any function. 100% pure vegetarian and highly hygienic." },
  ];

  return (
    <section id="testimonials" className="section-wrapper bg-cream">
      <div className="text-center mb-16 reveal">
        <span className="section-badge">{t.testimonialTitle}</span>
        <h2 className="section-title mb-4">{t.testimonialTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.testimonialSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {testimonials.map((review, idx) => (
          <div key={review.id} className={`card p-8 reveal reveal-delay-${(idx % 3) + 1}`}>
            <div className="flex text-gold mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <p className="font-body text-[#5C5C5C] text-sm leading-relaxed mb-6 italic">
              "{review.text}"
            </p>
            <div className="mt-auto border-t border-gray-100 pt-4">
              <h4 className="font-display font-bold text-[#1A1A1A]">{review.name}</h4>
              <p className="font-body text-xs text-gray-500">{review.event}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center reveal">
        <button onClick={() => setShowModal(true)} className="btn-outline">
          {t.addReview}
        </button>
      </div>

      {/* Review Modal Placeholder */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-slide-up">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
            <h3 className="font-display font-bold text-2xl mb-6">{t.addReview}</h3>
            <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert("Review submitted for moderation."); }}>
              <div className="space-y-4">
                <input required placeholder={t.reviewName} className="form-input" />
                <input required placeholder={t.reviewEvent} className="form-input" />
                <textarea required placeholder={t.reviewMsg} rows="4" className="form-input resize-none"></textarea>
                <button type="submit" className="btn-primary w-full justify-center">{t.reviewSubmit}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
