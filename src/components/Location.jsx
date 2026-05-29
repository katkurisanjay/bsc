import { useLang } from "../context/LanguageContext";
import { PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

const TELANGANA_DISTRICTS = [
  "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Nalgonda", 
  "Adilabad", "Mahbubnagar", "Medak", "Rangareddy", "Siddipet", "Suryapet", 
  "Yadadri Bhuvanagiri", "Jagtial", "Peddapalli", "Mancherial", "Nirmal", 
  "Kumuram Bheem Asifabad", "Rajanna Sircilla", "Jayashankar Bhupalpally", 
  "Mulugu", "Bhadradri Kothagudem", "Nagarkurnool", "Wanaparthy", "Gadwal", 
  "Narayanpet", "Vikarabad", "Sangareddy", "Medchal-Malkajgiri", "Kamareddy",
  "Jangaon", "Mahabubabad", "Jogulamba Gadwal"
];

export default function Location() {
  const { t } = useLang();

  return (
    <section id="location" className="section-wrapper bg-white">
      <div className="text-center mb-16 reveal">
        <span className="section-badge">{t.locationTitle}</span>
        <h2 className="section-title mb-4">{t.locationTitle}</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle max-w-2xl mx-auto">{t.locationSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="reveal reveal-delay-1">
          <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-card border border-gray-100">
            {/* Google Maps Embed Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923481.564551717!2d76.84074251147587!3d17.848356784557997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3350c354e60bfd%3A0x1b13866d92df9174!2sTelangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8 reveal reveal-delay-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-saffron/5 border border-saffron/10">
              <div className="w-12 h-12 rounded-full bg-saffron text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-body text-sm text-gray-500 mb-1">{t.locationPhone} / {t.locationWhatsApp}</span>
                <a href="tel:+919866059966" className="font-display font-bold text-xl text-[#1A1A1A] hover:text-saffron transition-colors">
                  +91 98660 59966
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-body text-sm text-gray-500 mb-1">{t.locationHours}</span>
                <span className="font-body font-medium text-[#1A1A1A]">
                  {t.locationHoursVal}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a href="#booking" className="btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base">
              {t.locationCTA}
            </a>
          </div>
        </div>
      </div>

      <div className="reveal">
        <h3 className="font-display font-bold text-xl text-center mb-6">Serving all 33 districts of Telangana</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {TELANGANA_DISTRICTS.map(district => (
            <span key={district} className="district-chip">{district}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
