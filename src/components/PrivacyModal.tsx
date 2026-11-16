"use client";

import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-slate-800 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-magister-blue flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-magister-navy">
                Política de Privacidade & LGPD
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
          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-magister-navy text-xs">
            <strong>Compromisso Institucional:</strong> O Instituto Magister de Ensino preza pela transparência, segurança e privacidade dos dados pessoais de seus alunos, pais e responsáveis, em total conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>.
          </div>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy flex items-center gap-2">
              <FileText className="w-4 h-4 text-magister-amber" />
              <span>1. Controlador dos Dados Pessoais</span>
            </h4>
            <p>
              O controlador dos dados coletados através desta plataforma é o <strong>Instituto Magister de Ensino</strong>, sediado em Teresina, Piauí, responsável pelas decisões referentes ao tratamento de dados pessoais.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy flex items-center gap-2">
              <Lock className="w-4 h-4 text-magister-amber" />
              <span>2. Quais Dados Coletamos e para Qual Finalidade?</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Dados do Responsável:</strong> Nome completo, telefone WhatsApp e endereço de e-mail. Finalidade: agendamento de visita pedagógica guiada, contato institucional e envio de propostas de matrículas solicitadas.
              </li>
              <li>
                <strong>Dados do Aluno (Criança ou Adolescente):</strong> Nome, série/ciclo pretendido e turno de preferência. Finalidade: verificar a disponibilidade de vagas e organizar o plano de acolhimento pedagógico da turma.
              </li>
              <li>
                <strong>Dados de Navegação:</strong> Cookies de desempenho e preferências de sessão para garantir estabilidade e segurança.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>3. Tratamento de Dados de Menores de Idade (Artigo 14 da LGPD)</span>
            </h4>
            <p>
              O tratamento de dados pessoais de crianças e adolescentes é realizado estritamente no seu melhor interesse, mediante o consentimento específico e em destaque dado por pelo menos um dos pais ou responsável legal, exclusivamente para fins de atendimento pré-matrícula e visita escolar.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy">
              4. Não Compartilhamento com Terceiros
            </h4>
            <p>
              O Instituto Magister <strong>não vende, aluga ou compartilha</strong> informações de contato ou dados pessoais com terceiros para fins comerciais estranhos à prestação de serviços educacionais da própria escola.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy">
              5. Direitos do Titular de Dados (Artigo 18 da LGPD)
            </h4>
            <p>
              A qualquer momento, o responsável legal poderá solicitar a confirmação da existência de tratamento, o acesso aos dados cadastrados, a correção de dados incompletos ou a revogação do consentimento e eliminação dos dados de nossa base de contato.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-magister-navy">
              6. Canal de Atendimento e Encarregado de Dados (DPO)
            </h4>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou exercer seus direitos de titular, entre em contato diretamente com a nossa Secretaria ou pelo e-mail:{" "}
              <a
                href="mailto:privacidade@magisterteresina.com.br"
                className="text-magister-blue font-semibold underline"
              >
                privacidade@magisterteresina.com.br
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition shadow-sm"
          >
            Entendi e Concordo
          </button>
        </div>
      </div>
    </div>
  );
}
