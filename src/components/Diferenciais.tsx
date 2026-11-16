"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Shield,
  Clock,
  Laptop,
  Globe,
  Dumbbell,
  Users,
} from "lucide-react";

export function Diferenciais() {
  const cards = [
    {
      icon: Laptop,
      color: "text-magister-blue",
      title: "Tecnologia & Cultura Maker",
      desc: "Salas interativas com lousas digitais, programação e robótica integrada ao currículo regular.",
    },
    {
      icon: Globe,
      color: "text-magister-amber",
      title: "Programa de Bilinguismo",
      desc: "Imersão prática na língua inglesa com foco em conversação natural e preparação para certificações internacionais.",
    },
    {
      icon: Dumbbell,
      color: "text-emerald-600",
      title: "Esportes & Socialização",
      desc: "Futsal, vôlei, basquete, judô e dança, desenvolvendo cooperação, saúde física e resiliência.",
    },
    {
      icon: Users,
      color: "text-magister-blue",
      title: "Comunicação Escola-Família",
      desc: "Aplicativo escolar próprio com boletim em tempo real, recados, frequência e canal direto com a coordenação.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-magister-blue font-heading font-bold text-xs uppercase tracking-wider">
              Por que o Instituto Magister?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight leading-tight">
              Mais que uma escola: uma extensão segura da sua família.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Sabemos que escolher a escola do seu filho é uma das decisões mais importantes da vida. Por isso, aliamos excelência pedagógica com atenção humana individualizada.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-magister-amberLight text-magister-amber flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-magister-navy">
                    Núcleo de Psicologia & Acolhimento
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Apoio contínuo contra ansiedade, fomento à inteligência emocional e resolução colaborativa de conflitos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-magister-blue flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-magister-navy">
                    Segurança e Portaria Assistida
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Controle rigoroso de acesso biométrico, monitoramento por câmeras e fluxo organizado de embarque e desembarque.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-magister-navy">
                    Turno Integral Flexível
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Contraturno enriquecido com acompanhamento pedagógico, esportes, oficinas artísticas e nutrição supervisionada.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards visuais */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition shadow-sm"
                >
                  <Icon className={`w-8 h-8 ${card.color} mb-4`} />
                  <h4 className="font-heading font-bold text-lg text-magister-navy">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
