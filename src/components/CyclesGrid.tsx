"use client";

import { motion } from "framer-motion";
import { Shapes, BookOpen, Compass, Award, CheckCircle } from "lucide-react";

interface CyclesGridProps {
  onOpenBooking: (ciclo: string) => void;
}

const cycles = [
  {
    title: "Educação Infantil",
    tag: "Maternal ao Pré",
    description: "Afeto, segurança, psicomotricidade e introdução bilíngue lúdica. Espaço acolhedor projetado para despertar o amor natural pela descoberta.",
    icon: Shapes,
    iconBg: "bg-amber-50 text-magister-amber",
    tagColor: "text-magister-amber",
    borderHover: "hover:border-magister-amber",
    btnText: "Conhecer o Infantil",
    btnClass: "bg-slate-50 group-hover:bg-magister-amber group-hover:text-magister-navy",
    highlights: ["Parquinho temático seguro", "Acompanhamento socioemocional", "Nutrição balanceada orientada"],
    isFeatured: false,
  },
  {
    title: "Fundamental I",
    tag: "1º ao 5º ano",
    description: "Consolidação da leitura fluente, raciocínio lógico-matemático e construção de disciplina e hábitos de estudo consistentes.",
    icon: BookOpen,
    iconBg: "bg-blue-50 text-magister-blue",
    tagColor: "text-magister-blue",
    borderHover: "hover:border-magister-blue",
    btnText: "Conhecer o Fund. I",
    btnClass: "bg-slate-50 group-hover:bg-magister-blue group-hover:text-white",
    highlights: ["Projetos de leitura criativa", "Educação financeira prática", "Iniciação à robótica educativa"],
    isFeatured: false,
  },
  {
    title: "Fundamental II",
    tag: "6º ao 9º ano",
    description: "Pensamento crítico, autonomia intelectual, laboratório de ciências e transição madura para os desafios acadêmicos futuros.",
    icon: Compass,
    iconBg: "bg-blue-50 text-magister-blue",
    tagColor: "text-magister-blue",
    borderHover: "hover:border-magister-blue",
    btnText: "Conhecer o Fund. II",
    btnClass: "bg-slate-50 group-hover:bg-magister-blue group-hover:text-white",
    highlights: ["Laboratório de Ciências moderno", "Simulados diagnósticos anuais", "Desenvolvimento de liderança"],
    isFeatured: false,
  },
  {
    title: "Ensino Médio & ENEM",
    tag: "1ª à 3ª série",
    description: "Preparação de alta densidade para o ENEM/SISU, redação nota 1000 com plantão semanal, simulados padrão TRI e orientação vocacional.",
    icon: Award,
    iconBg: "bg-white/10 text-magister-amber",
    tagColor: "text-magister-amber",
    borderHover: "hover:border-magister-amber",
    btnText: "Quero Alta Performance",
    btnClass: "bg-magister-amber hover:bg-magister-amberHover text-magister-navy",
    highlights: ["Correção analítica de redação", "Simulados com ranqueamento TRI", "Mentoria de carreira universitária"],
    isFeatured: true,
  },
];

export function CyclesGrid({ onOpenBooking }: CyclesGridProps) {
  return (
    <section id="ciclos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Jornada Completa de Formação
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            O cuidado certo para cada fase do desenvolvimento.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Do primeiro contato com o mundo das letras até a conquista da vaga na universidade dos sonhos, oferecemos um ecossistema pedagógico estruturado para o crescimento integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={
                  item.isFeatured
                    ? "bg-gradient-to-b from-magister-dark to-magister-navy text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-glow-amber transition-all flex flex-col justify-between group relative overflow-hidden"
                    : `bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 ${item.borderHover} shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between group`
                }
              >
                {item.isFeatured && (
                  <div className="absolute top-0 right-0 bg-magister-amber text-magister-navy text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl">
                    Destaque ENEM
                  </div>
                )}
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-bold ${item.tagColor} uppercase tracking-wider`}>
                    {item.tag}
                  </span>
                  <h3
                    className={`font-heading font-bold text-xl mt-1 mb-3 ${
                      item.isFeatured ? "text-white" : "text-magister-navy"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      item.isFeatured ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                  <ul
                    className={`text-xs space-y-2 mb-6 ${
                      item.isFeatured ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle
                          className={`w-4 h-4 ${
                            item.isFeatured ? "text-magister-amber" : "text-emerald-500"
                          }`}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenBooking(item.title)}
                  className={`w-full py-2.5 rounded-xl font-heading font-bold text-xs transition ${item.btnClass}`}
                >
                  {item.btnText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
