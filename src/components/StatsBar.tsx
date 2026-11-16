"use client";

import { motion } from "framer-motion";

export function StatsBar() {
  const stats = [
    { value: "+25 Anos", label: "Tradição & Inovação no Piauí", color: "text-magister-blue" },
    { value: "+1.500", label: "Alunos Formados com Sucesso", color: "text-magister-amber" },
    { value: "100%", label: "Salas Climatizadas & Multimídia", color: "text-magister-blue" },
    { value: "Top ENEM", label: "Redações Acima de 900 Pontos", color: "text-magister-amber" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 md:pt-0"
            >
              <p className={`font-heading font-extrabold text-3xl sm:text-4xl ${item.color}`}>
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
