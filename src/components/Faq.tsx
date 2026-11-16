"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Como funciona o período integral no Instituto Magister?",
    answer:
      "Oferecemos modalidades de turno integral e semi-integral. O contraturno inclui almoço e lanches supervisionados por nutricionista, orientação de tarefas de casa (dever), atividades esportivas (futsal, judô, vôlei), oficinas de idiomas e artes.",
  },
  {
    id: 2,
    question: "Qual a metodologia adotada para o Ensino Médio e ENEM?",
    answer:
      "Utilizamos material didático de ponta alinhado à Matriz de Referência do ENEM e aos principais vestibulares do país. Os alunos contam com simulados analíticos semanais com TRI, plantão exclusivo de correção de redações e mentoria de estudos individualizada.",
  },
  {
    id: 3,
    question: "Como funciona a segurança e o controle de entrada e saída?",
    answer:
      "A escola possui portaria assistida, controle de acesso e catracas biométricas. Alunos da Educação Infantil e Fundamental I só são liberados para responsáveis previamente cadastrados com documento oficial ou autorização via aplicativo escolar.",
  },
  {
    id: 4,
    question: "Como agendar uma visita e conhecer as condições de matrícula?",
    answer:
      "Basta preencher o formulário nesta página ou clicar no botão do WhatsApp. Nossa equipe de relacionamento agendará um horário exclusivo com a coordenação pedagógica para apresentar a estrutura e as condições da campanha 2026/2027.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Tire suas Dúvidas
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            Perguntas Frequentes de Pais e Responsáveis
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-4 text-left font-heading font-bold text-base text-magister-navy flex items-center justify-between hover:bg-slate-50 transition"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === item.id && (
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
