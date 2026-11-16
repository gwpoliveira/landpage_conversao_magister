"use client";

import { motion } from "framer-motion";
import { Layout, FlaskConical, Play, Eye } from "lucide-react";

interface EstruturaProps {
  onOpenBooking: () => void;
}

const spaces = [
  {
    icon: Layout,
    tag: "Conforto Térmico",
    bg: "from-magister-navy to-magister-blue",
    iconColor: "text-magister-amber",
    title: "Salas de Aula Multimídia",
    desc: "Ambientes 100% refrigerados, iluminação LED adequada e recursos audiovisuais interativos.",
  },
  {
    icon: FlaskConical,
    tag: "Prática Científica",
    bg: "from-slate-800 to-magister-dark",
    iconColor: "text-magister-amber",
    title: "Laboratório de Ciências & Robótica",
    desc: "Bancadas equipadas para experimentos de Física, Química, Biologia e programação prática.",
  },
  {
    icon: Play,
    tag: "Saúde & Bem-Estar",
    bg: "from-magister-blue to-emerald-800",
    iconColor: "text-white",
    title: "Quadra Poliesportiva Coberta",
    desc: "Espaço amplo e seguro para campeonatos esportivos, apresentações culturais e recreação diária.",
  },
];

export function Estrutura({ onOpenBooking }: EstruturaProps) {
  return (
    <section id="estrutura" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Infraestrutura Completa
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            Ambientes modernos e 100% climatizados em Teresina.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Projetados para estimular o foco, a criatividade e a segurança dos estudantes em cada etapa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, idx) => {
            const Icon = space.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div
                  className={`h-48 bg-gradient-to-tr ${space.bg} flex items-center justify-center text-white relative`}
                >
                  <Icon
                    className={`w-12 h-12 ${space.iconColor} opacity-80 group-hover:scale-110 transition-transform`}
                  />
                  <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md">
                    {space.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-bold text-base text-magister-navy">
                    {space.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {space.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-bold text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow transition"
          >
            <Eye className="w-4 h-4" />
            <span>Agende uma Visita e Conheça de Perto</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
