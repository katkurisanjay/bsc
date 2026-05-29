import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { menuData } from "../data/menuData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const TELANGANA_CITIES = [
  "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Nalgonda", 
  "Adilabad", "Mahbubnagar", "Medak", "Rangareddy", "Siddipet", "Suryapet", 
  "Yadadri Bhuvanagiri", "Jagtial", "Peddapalli", "Mancherial", "Nirmal", 
  "Kumuram Bheem Asifabad", "Rajanna Sircilla", "Jayashankar Bhupalpally", 
  "Mulugu", "Bhadradri Kothagudem", "Nagarkurnool", "Wanaparthy", "Gadwal", 
  "Narayanpet", "Vikarabad", "Sangareddy", "Medchal-Malkajgiri", "Kamareddy"
];

export default function BookingForm() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("");

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", city: "",
    eventType: "", otherEventName: "", date: "", guests: "", venue: "", duration: "Single Day",
    menuCats: [], notes: "", budget: ""
  });

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const toggleMenuCat = (catId) => {
    setFormData(prev => ({
      ...prev,
      menuCats: prev.menuCats.includes(catId)
        ? prev.menuCats.filter(id => id !== catId)
        : [...prev.menuCats, catId]
    }));
  };

  const validateStep = () => {
    if (step === 1) return formData.name && formData.phone && formData.city;
    if (step === 2) {
      const baseValid = formData.eventType && formData.date && formData.guests && formData.venue;
      if (formData.eventType === "Other") return baseValid && formData.otherEventName;
      return baseValid;
    }
    return true;
  };

  const nextStep = () => validateStep() && setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const submitForm = (e) => {
    e.preventDefault();
    
    // Save to local storage for admin panel
    const existing = JSON.parse(localStorage.getItem("bs_bookings") || "[]");
    const newBooking = { ...formData, id: Date.now(), status: "Pending", submitDate: new Date().toISOString() };
    localStorage.setItem("bs_bookings", JSON.stringify([newBooking, ...existing]));

    // Generate WhatsApp Link
    const text = `Hello Bijjala Satish,\n\nI want to book catering:\n*Name:* ${formData.name}\n*Event:* ${formData.eventType}\n*Date:* ${formData.date}\n*Guests:* ${formData.guests}\n*City:* ${formData.city}\n*Duration:* ${formData.duration}\n\nPlease contact me.`;
    setWaLink(`https://wa.me/919866059966?text=${encodeURIComponent(text)}`);
    
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="booking" className="section-wrapper">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-card text-center reveal">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">{t.bookSuccess}</h2>
          <p className="font-body text-gray-500 mb-8">{t.bookSuccess}</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center py-4 text-lg">
            {t.bookWhatsApp}
          </a>
          <button onClick={() => { setIsSuccess(false); setStep(1); setFormData({name: "", phone: "", email: "", city: "", eventType: "", otherEventName: "", date: "", guests: "", venue: "", duration: "Single Day", menuCats: [], notes: "", budget: ""}) }} className="mt-6 font-body text-sm text-saffron font-medium hover:underline">
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-cream -z-10"></div>
      
      <div className="max-w-4xl mx-auto reveal">
        <div className="text-center mb-10">
          <span className="section-badge">{t.bookTitle}</span>
          <h2 className="section-title">{t.bookTitle}</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-card-hover border border-gray-100 p-6 md:p-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-saffron transition-all duration-300 -z-10`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
            
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm transition-colors duration-300 ${step >= num ? "bg-saffron text-white shadow-md" : "bg-white text-gray-400 border-2 border-gray-200"}`}>
                {num}
              </div>
            ))}
          </div>

          <form onSubmit={submitForm}>
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="font-display font-bold text-2xl mb-6">{t.bookStep1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">{t.bookName} *</label>
                    <input required name="name" value={formData.name} onChange={handleInput} className="form-input" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookPhone} *</label>
                    <input required name="phone" type="tel" value={formData.phone} onChange={handleInput} className="form-input" placeholder="WhatsApp number" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookEmail}</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInput} className="form-input" placeholder="Email (optional)" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookCity} *</label>
                    <select required name="city" value={formData.city} onChange={handleInput} className="form-input bg-white">
                      <option value="">Select a city</option>
                      {TELANGANA_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="font-display font-bold text-2xl mb-6">{t.bookStep2}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">{t.bookEventType} *</label>
                    <select required name="eventType" value={formData.eventType} onChange={handleInput} className="form-input bg-white">
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding / Engagement</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Birthday">Birthday Party</option>
                      <option value="Home Event">Home Gathering / Pooja</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Conditional: Show when Other is selected */}
                  {formData.eventType === "Other" && (
                    <div>
                      <label className="form-label">Event Name *</label>
                      <input
                        required
                        name="otherEventName"
                        value={formData.otherEventName}
                        onChange={handleInput}
                        className="form-input"
                        placeholder="e.g. Sathyanarayana Pooja, Company Annual Day..."
                        autoFocus
                      />
                    </div>
                  )}
                  <div>
                    <label className="form-label">{t.bookDate} *</label>
                    <input required name="date" type="date" min={new Date(Date.now() + 604800000).toISOString().split('T')[0]} value={formData.date} onChange={handleInput} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookGuests} *</label>
                    <input required name="guests" type="number" min="50" max="5000" value={formData.guests} onChange={handleInput} className="form-input" placeholder="Min 50 guests" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookDuration}</label>
                    <select name="duration" value={formData.duration} onChange={handleInput} className="form-input bg-white">
                      <option value="Single Day">{t.bookSingleDay}</option>
                      <option value="Multiple Days">{t.bookMultiDay}</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label">{t.bookVenue} *</label>
                    <input required name="venue" value={formData.venue} onChange={handleInput} className="form-input" placeholder="Function hall name or address" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="font-display font-bold text-2xl mb-6">{t.bookStep3}</h3>
                <p className="font-body text-sm text-gray-500 mb-4">Select the categories you want in your menu. We will discuss specific items later.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                  {menuData.map(cat => (
                    <label key={cat.id} className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${formData.menuCats.includes(cat.id) ? "border-saffron bg-saffron/5" : "border-gray-200 hover:border-saffron/40"}`}>
                      <input type="checkbox" checked={formData.menuCats.includes(cat.id)} onChange={() => toggleMenuCat(cat.id)} className="w-4 h-4 text-saffron rounded focus:ring-saffron" />
                      <span className="font-body text-sm font-medium">{cat[lang]}</span>
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">{t.bookBudget}</label>
                    <input name="budget" value={formData.budget} onChange={handleInput} className="form-input" placeholder="e.g. ₹500 per plate" />
                  </div>
                  <div>
                    <label className="form-label">{t.bookMenuNote}</label>
                    <textarea name="notes" value={formData.notes} onChange={handleInput} className="form-input resize-none" rows="2" placeholder="Jain food, no onion/garlic, etc."></textarea>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="font-display font-bold text-2xl mb-6">{t.bookSummaryTitle}</h3>
                <div className="bg-cream rounded-2xl p-6 border border-saffron/10 space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">Name</span>
                      <strong className="font-body text-sm">{formData.name}</strong>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">Phone</span>
                      <strong className="font-body text-sm">{formData.phone}</strong>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">City</span>
                      <strong className="font-body text-sm">{formData.city}</strong>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">Event Date</span>
                      <strong className="font-body text-sm">{formData.date}</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">Event Type</span>
                      <strong className="font-body text-sm">
                        {formData.eventType === "Other" ? formData.otherEventName : formData.eventType}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-body mb-1">Guests</span>
                      <strong className="font-body text-sm">{formData.guests}</strong>
                    </div>
                  </div>
                  {formData.menuCats.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <span className="block text-xs text-gray-500 font-body mb-2">Selected Categories</span>
                      <div className="flex flex-wrap gap-2">
                        {formData.menuCats.map(id => {
                          const cat = menuData.find(c => c.id === id);
                          return <span key={id} className="px-2.5 py-1 bg-white border border-gray-200 rounded text-xs font-medium font-body">{cat[lang]}</span>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="btn-secondary px-6 py-2.5">
                  {t.bookPrev}
                </button>
              ) : <div></div>}
              
              {step < 4 ? (
                <button type="button" onClick={nextStep} className={`btn-primary px-8 py-2.5 ${!validateStep() ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-gold" : ""}`}>
                  {t.bookNext}
                </button>
              ) : (
                <button type="submit" className="btn-primary px-8 py-2.5">
                  {t.bookSubmit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
