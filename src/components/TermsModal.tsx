"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative z-10 text-slate-800 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-magister-amber flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-magister-navy">
                    Termos de Uso
                  </h3>
                  <p className="text-xs text-slate-500">
                    Instituto Magister de Ensino • Teresina - PI
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto py-4 space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed pr-2">
              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  1. Aceitação dos Termos
                </h4>
                <p>
                  Ao acessar esta página e utilizar os serviços de solicitação de agendamento de visita pedagógica ou atendimento do <strong>Instituto Magister de Ensino</strong>, você concorda expressamente com os presentes Termos de Uso e com a nossa Política de Privacidade.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  2. Finalidade da Plataforma
                </h4>
                <p>
                  Esta página tem como objetivo apresentar a proposta pedagógica, infraestrutura, diferenciais e ciclos de ensino do Instituto Magister de Ensino, bem como viabilizar o contato direto entre as famílias interessadas e a equipe de orientação e secretaria escolar para o ano letivo 2026/2027.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  3. Veracidade das Informações Fornecidas
                </h4>
                <p>
                  O usuário declara e garante que as informações cadastrais inseridas nos formulários de agendamento e contato (nome do responsável, telefone com DDD, e-mail e dados do aluno) são verdadeiras, exatas e pertencem a si ou aos seus dependentes legais.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  4. Propriedade Intelectual
                </h4>
                <p>
                  Todos os elementos visuais, marcas registradas, logotipo, textos pedagógicos, fotografias das instalações e código-fonte desta página são de propriedade exclusiva do Instituto Magister de Ensino ou devidamente licenciados, sendo vedada qualquer reprodução total ou parcial sem autorização prévia por escrito.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  5. Agendamento e Disponibilidade de Vagas
                </h4>
                <p>
                  O preenchimento do formulário de agendamento manifesta intenção de visita pedagógica e consulta de condições de matrícula. A confirmação da matrícula definitiva está sujeita à existência de vagas disponíveis na série pretendida e ao cumprimento dos requisitos documentais e contratuais estabelecidos pela direção da instituição.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-magister-navy">
                  6. Legislação e Foro
                </h4>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Para dirimir eventuais controvérsias decorrentes da utilização deste website, fica eleito o Foro da Comarca de Teresina, Estado do Piauí.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition shadow-sm"
              >
                Concordo com os Termos
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
