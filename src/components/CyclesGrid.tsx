"use client";

import { Shapes, BookOpen, Compass, Award, CheckCircle } from "lucide-react";

interface CyclesGridProps {
  onOpenBooking: (ciclo: string) => void;
}

export function CyclesGrid({ onOpenBooking }: CyclesGridProps) {
  return (
    <section id="ciclos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Jornada Completa de Formação
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            O cuidado certo para cada fase do desenvolvimento.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Do primeiro contato com o mundo das letras até a conquista da vaga na universidade dos sonhos, oferecemos um ecossistema pedagógico estruturado para o crescimento integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Educação Infantil */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-magister-amber shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-magister-amber flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shapes className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-magister-amber uppercase tracking-wider">
                Maternal ao Pré
              </span>
              <h3 className="font-heading font-bold text-xl text-magister-navy mt-1 mb-3">
                Educação Infantil
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Afeto, segurança, psicomotricidade e introdução bilíngue lúdica. Espaço acolhedor projetado para despertar o amor natural pela descoberta.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Parquinho temático seguro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Acompanhamento socioemocional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Nutrição balanceada orientada</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking("Educação Infantil")}
              className="w-full py-2.5 rounded-xl font-heading font-bold text-xs text-magister-blue bg-slate-50 group-hover:bg-magister-amber group-hover:text-magister-navy transition"
            >
              Conhecer o Infantil
            </button>
          </div>

          {/* Fundamental I */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-magister-blue shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-magister-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-magister-blue uppercase tracking-wider">
                1º ao 5º ano
              </span>
              <h3 className="font-heading font-bold text-xl text-magister-navy mt-1 mb-3">
                Fundamental I
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Consolidação da leitura fluente, raciocínio lógico-matemático e construção de disciplina e hábitos de estudo consistentes.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Projetos de leitura criativa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Educação financeira prática</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Iniciação à robótica educativa</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking("Fundamental I")}
              className="w-full py-2.5 rounded-xl font-heading font-bold text-xs text-magister-blue bg-slate-50 group-hover:bg-magister-blue group-hover:text-white transition"
            >
              Conhecer o Fund. I
            </button>
          </div>

          {/* Fundamental II */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-magister-blue shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-magister-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-magister-blue uppercase tracking-wider">
                6º ao 9º ano
              </span>
              <h3 className="font-heading font-bold text-xl text-magister-navy mt-1 mb-3">
                Fundamental II
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Pensamento crítico, autonomia intelectual, laboratório de ciências e transição madura para os desafios acadêmicos futuros.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Laboratório de Ciências moderno</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Simulados diagnósticos anuais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Desenvolvimento de liderança</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking("Fundamental II")}
              className="w-full py-2.5 rounded-xl font-heading font-bold text-xs text-magister-blue bg-slate-50 group-hover:bg-magister-blue group-hover:text-white transition"
            >
              Conhecer o Fund. II
            </button>
          </div>

          {/* Ensino Médio & Pré-Vestibular */}
          <div className="bg-gradient-to-b from-magister-dark to-magister-navy text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-glow-amber transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-magister-amber text-magister-navy text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl">
              Destaque ENEM
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-magister-amber flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-magister-amber uppercase tracking-wider">
                1ª à 3ª série
              </span>
              <h3 className="font-heading font-bold text-xl text-white mt-1 mb-3">
                Ensino Médio & ENEM
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                Preparação de alta densidade para o ENEM/SISU, redação nota 1000 com plantão semanal, simulados padrão TRI e orientação vocacional.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-magister-amber" />
                  <span>Correção analítica de redação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-magister-amber" />
                  <span>Simulados com ranqueamento TRI</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-magister-amber" />
                  <span>Mentoria de carreira universitária</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking("Ensino Médio")}
              className="w-full py-2.5 rounded-xl font-heading font-bold text-xs text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition"
            >
              Quero Alta Performance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
