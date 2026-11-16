import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amberLight text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-3">
            Histórias de Sucesso
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-navy tracking-tight">
            A voz de quem confia no Instituto Magister.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Veja os relatos de famílias que vivenciam diariamente nossa dedicação ao ensino em Teresina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex text-magister-amber mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                &ldquo;Meu filho entrou tímido no 1º ano e a evolução socioemocional dele foi impressionante. Os professores realmente conhecem cada aluno pelo nome. Hoje ele ama ir para a escola!&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-magister-blue text-white font-bold flex items-center justify-center text-xs">
                MC
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-magister-navy">
                  Mariana Castelo Branco
                </p>
                <p className="text-xs text-slate-500">Mãe de aluno do Fundamental I</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex text-magister-amber mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                &ldquo;A preparação para o ENEM no Magister é de outro nível. O plantão de redação me fez saltar de 720 para 960 pontos. Consegui minha aprovação em Medicina na primeira chamada!&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-magister-amber text-magister-navy font-bold flex items-center justify-center text-xs">
                GS
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-magister-navy">
                  Gabriel Sousa
                </p>
                <p className="text-xs text-slate-500">Ex-aluno • Aprovado em Medicina</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex text-magister-amber mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                &ldquo;Como mãe que trabalha em horário integral, a tranquilidade de saber que minhas filhas estão em um local seguro, com alimentação saudável e contraturno rico em atividades é impagável.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                RF
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-magister-navy">
                  Dra. Roberta Fontenele
                </p>
                <p className="text-xs text-slate-500">Mãe de alunas do Infantil e Fund. II</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
