"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const items = [
    {
      quote:
        "Meu filho entrou tímido no 1º ano e a evolução socioemocional dele foi impressionante. Os professores realmente conhecem cada aluno pelo nome. Hoje ele ama ir para a escola!",
      name: "Mariana Castelo Branco",
      role: "Mãe de aluno do Fundamental I",
      initials: "MC",
      avatarBg: "bg-magister-blue text-white",
    },
    {
      quote:
        "A preparação para o ENEM no Magister é de outro nível. O plantão de redação me fez saltar de 720 para 960 pontos. Consegui minha aprovação em Medicina na primeira chamada!",
      name: "Gabriel Sousa",
      role: "Ex-aluno • Aprovado em Medicina",
      initials: "GS",
      avatarBg: "bg-magister-amber text-magister-navy",
    },
    {
      quote:
        "Como mãe que trabalha em horário integral, a tranquilidade de saber que minhas filhas estão em um local seguro, com alimentação saudável e contraturno rico em atividades é impagável.",
      name: "Dra. Roberta Fontenele",
      role: "Mãe de alunas do Infantil e Fund. II",
      initials: "RF",
      avatarBg: "bg-emerald-600 text-white",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Histórias de Sucesso
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            A voz de quem confia no Instituto Magister de Ensino.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Veja os relatos de famílias que vivenciam diariamente nossa dedicação ao ensino em Teresina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex text-magister-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} font-bold flex items-center justify-center text-xs`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-magister-navy">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
