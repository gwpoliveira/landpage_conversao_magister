"use client";

import { useState } from "react";
import {
  CalendarCheck,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  GraduationCap,
  ArrowRight,
  Trophy,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: (ciclo?: string) => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segmento, setSegmento] = useState("");

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(segmento);
  };

  return (
    <section className="relative bg-gradient-to-br from-magister-navy via-magister-dark to-magister-blue text-white overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-magister-amber/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-magister-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-magister-amber backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-magister-amber animate-ping" />
              <span>Educação com Propósito em Teresina</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Onde o <span className="text-magister-amber">acolhimento</span> transforma o aprendizado e o futuro acontece.
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Da <strong className="text-white font-semibold">Educação Infantil</strong> ao{" "}
              <strong className="text-white font-semibold">Ensino Médio de Alta Performance</strong>. No Instituto Magister, seu filho constrói autonomia, inteligência emocional e a preparação sólida para o ENEM e para a vida.
            </p>

            {/* CTAs Duplos */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-base text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-lg hover:shadow-glow-amber transition-all transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Agendar Visita Guiada</span>
              </button>
              <a
                href="https://wa.me/5586999999999?text=Ol%C3%A1%2C%20quero%20conversar%20com%20um%20orientador%20do%20Magister."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-heading font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
              >
                <MessageCircle className="w-5 h-5 text-magister-whatsapp" />
                <span>Falar com Orientador</span>
              </a>
            </div>

            {/* Badges de Confiança */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <div className="flex text-magister-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-white">4.9/5 Satisfação dos Pais</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-magister-amber" />
                <span>Segurança & Monitoramento Integral</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-magister-amber" />
                <span>Top Desempenho ENEM Piauí</span>
              </div>
            </div>
          </div>

          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border border-slate-100">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-magister-amberLight flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-magister-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-magister-navy">
                      Matrículas 2026/2027
                    </h4>
                    <p className="text-xs text-slate-500">Agende sua experiência escolar</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Abertas
                </span>
              </div>

              <form onSubmit={handleHeroSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Ana Clara Silva"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(86) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Segmento de Interesse
                  </label>
                  <select
                    required
                    value={segmento}
                    onChange={(e) => setSegmento(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue transition text-slate-700"
                  >
                    <option value="">Selecione o ciclo escolar...</option>
                    <option value="Educação Infantil (2 a 5 anos)">
                      Educação Infantil (Maternal ao Pré)
                    </option>
                    <option value="Ensino Fundamental I (1º ao 5º ano)">
                      Ensino Fundamental I (1º ao 5º ano)
                    </option>
                    <option value="Ensino Fundamental II (6º ao 9º ano)">
                      Ensino Fundamental II (6º ao 9º ano)
                    </option>
                    <option value="Ensino Médio & Pré-Vestibular">
                      Ensino Médio & Pré-Vestibular
                    </option>
                    <option value="Turno Integral">Período Integral / Contraturno</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>Receber Contato & Agendar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  🔒 Seus dados estão seguros e protegidos pela LGPD.
                </p>
              </form>
            </div>

            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-magister-dark/95 backdrop-blur-md text-white p-4 rounded-2xl border border-white/15 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-magister-amber flex items-center justify-center text-magister-navy font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-300">Aprovações Medicina & Direito</p>
                <p className="text-sm font-heading font-bold text-magister-amber">
                  +98% em Universidades Públicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
