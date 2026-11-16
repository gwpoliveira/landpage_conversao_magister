"use client";

import { useState, useEffect } from "react";
import { Cookie, Shield, Check, Settings, X } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  saved: boolean;
}

export function CookieConsent({
  onOpenPrivacy,
  onOpenTerms,
}: {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("magister_cookie_consent");
      if (!stored) {
        // Exibe após 1 segundo para entrada suave
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // fallback
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem("magister_cookie_consent", JSON.stringify(prefs));
    } catch {
      // ignore
    }
    setIsVisible(false);
    setIsConfigOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      saved: true,
    });
  };

  const handleAcceptEssentialOnly = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      saved: true,
    });
  };

  const handleSaveCustom = () => {
    savePreferences({
      essential: true,
      analytics,
      marketing,
      saved: true,
    });
  };

  if (!isVisible && !isConfigOpen) return null;

  return (
    <>
      {/* Banner Principal de Cookies (Inferior Direito) */}
      {isVisible && !isConfigOpen && (
        <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-200 text-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-magister-amberLight text-magister-amber flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-sm text-magister-navy flex items-center gap-2">
                <span>Controle de Privacidade & Cookies</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-magister-blue uppercase">
                  LGPD
                </span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizamos cookies essenciais para o funcionamento seguro da página e tecnologias semelhantes para personalizar conteúdos e analisar o tráfego institucional, de acordo com nossa{" "}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-magister-blue font-semibold underline hover:text-magister-dark"
                >
                  Política de Privacidade
                </button>{" "}
                e{" "}
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-magister-blue font-semibold underline hover:text-magister-dark"
                >
                  Termos de Uso
                </button>
                .
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => setIsConfigOpen(true)}
              className="text-xs font-semibold text-slate-600 hover:text-magister-blue flex items-center gap-1.5 transition py-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAcceptEssentialOnly}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
              >
                Apenas Essenciais
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl text-xs font-heading font-bold text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-sm transition"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Configuração Avançada de Cookies */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-slate-800">
            <button
              onClick={() => setIsConfigOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-magister-blue flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-magister-navy">
                  Preferências de Cookies
                </h3>
                <p className="text-xs text-slate-500">
                  Gerencie como seus dados são tratados de acordo com a LGPD
                </p>
              </div>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {/* Essenciais */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-bold text-sm text-magister-navy">
                    Cookies Essenciais & Segurança
                  </h4>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Sempre Ativo
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Necessários para o funcionamento seguro da página, proteção contra envio de spam nos formulários e armazenamento do consentimento. Não podem ser desativados.
                </p>
              </div>

              {/* Analíticos */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-bold text-sm text-magister-navy">
                    Cookies Analíticos & Desempenho
                  </h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-magister-blue" />
                  </label>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Permitem mensurar de forma anônima as visitas e as fontes de tráfego para que possamos aprimorar a experiência de navegação das famílias.
                </p>
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-bold text-sm text-magister-navy">
                    Cookies de Marketing & Conversão
                  </h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-magister-amber" />
                  </label>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Utilizados para veicular anúncios relevantes sobre as matrículas e eventos do Instituto Magister em redes sociais e buscadores.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="text-xs font-semibold text-slate-600 hover:text-magister-blue"
              >
                Aceitar Todos
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition flex items-center gap-2 shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Salvar Preferências</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
