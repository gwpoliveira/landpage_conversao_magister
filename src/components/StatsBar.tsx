export function StatsBar() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-4 md:pt-0">
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-blue">
              +25 Anos
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Tradição & Inovação no Piauí
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-amber">
              +1.500
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Alunos Formados com Sucesso
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-blue">
              100%
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Salas Climatizadas & Multimídia
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-magister-amber">
              Top ENEM
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Redações Acima de 900 Pontos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
