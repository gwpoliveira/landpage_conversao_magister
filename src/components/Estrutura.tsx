"use client";

import { Layout, FlaskConical, Play, Eye } from "lucide-react";

interface EstruturaProps {
  onOpenBooking: () => void;
}

export function Estrutura({ onOpenBooking }: EstruturaProps) {
  return (
    <section id="estrutura" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Infraestrutura Completa
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            Ambientes modernos e 100% climatizados em Teresina.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Projetados para estimular o foco, a criatividade e a segurança dos estudantes em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
            <div className="h-48 bg-gradient-to-tr from-magister-navy to-magister-blue flex items-center justify-center text-white relative">
              <Layout className="w-12 h-12 text-magister-amber opacity-80 group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md">
                Conforto Térmico
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-heading font-bold text-base text-magister-navy">
                Salas de Aula Multimídia
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Ambientes 100% refrigerados, iluminação LED adequada e recursos audiovisuais interativos.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
            <div className="h-48 bg-gradient-to-tr from-slate-800 to-magister-dark flex items-center justify-center text-white relative">
              <FlaskConical className="w-12 h-12 text-magister-amber opacity-80 group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md">
                Prática Científica
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-heading font-bold text-base text-magister-navy">
                Laboratório de Ciências & Robótica
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Bancadas equipadas para experimentos de Física, Química, Biologia e programação prática.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
            <div className="h-48 bg-gradient-to-tr from-magister-blue to-emerald-800 flex items-center justify-center text-white relative">
              <Play className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md">
                Saúde & Bem-Estar
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-heading font-bold text-base text-magister-navy">
                Quadra Poliesportiva Coberta
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Espaço amplo e seguro para campeonatos esportivos, apresentações culturais e recreação diária.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-bold text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow transition"
          >
            <Eye className="w-4 h-4" />
            <span>Agende uma Visita e Conheça de Perto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
