import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/contact";

export function WhatsAppFloating() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden sm:block bg-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-2xl shadow-xl border border-slate-100 animate-pulse-subtle">
        👋 Dúvidas sobre vagas?{" "}
        <span className="text-magister-blue font-bold">Fale conosco!</span>
      </div>

      <a
        href={whatsappLink(WHATSAPP_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="w-14 h-14 rounded-full bg-magister-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
