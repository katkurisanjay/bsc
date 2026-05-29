import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919866059966?text=Hello%20Bijjala%20Satish%2C%20I%20would%20like%20to%20book%20catering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
      </div>
    </a>
  );
}
