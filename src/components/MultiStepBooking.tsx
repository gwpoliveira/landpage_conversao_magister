"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, Check, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export function MultiStepBooking() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [nomeAluno, setNomeAluno] = useState("");
  const [serie, setSerie] = useState("Educação Infantil (2 a 5 anos)");
  const [turno, setTurno] = useState("Manhã");
  const [tipoAtendimento, setTipoAtendimento] = useState("visita_presencial");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleNext = () => {
    if (step === 1) {
      if (!nome.trim() || !whatsapp.trim()) {
        alert("Por favor, preencha seu nome e WhatsApp para continuar.");
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = [
      "Olá, gostaria de agendar uma visita ao Instituto Magister de Ensino!",
      "",
      `*Responsável:* ${nome}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Aluno:* ${nomeAluno || "Não informado"}`,
      `*Série Pretendida:* ${serie}`,
      `*Turno:* ${turno}`,
      `*Tipo de Atendimento:* ${
        tipoAtendimento === "visita_presencial"
          ? "Visita Presencial Guiada"
          : "Consultoria via WhatsApp"
      }`,
    ].join("\n");

    const url = whatsappLink(mensagem);
    setWhatsappUrl(url);
    setIsSubmitted(true);

    setTimeout(() => {
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <section
      id="agendamento"
      className="py-20 bg-gradient-to-b from-magister-navy to-magister-dark text-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-magister-amber/20 text-magister-amber font-heading font-bold text-xs uppercase tracking-wider mb-2">
            Passo Decisivo
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Agende sua Visita Pedagógica Guiada
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Conheça de perto as salas, a equipe pedagógica e as condições especiais para matrículas 2026/2027.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10"
        >
          {/* Progress Badges */}
          {!isSubmitted && (
            <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition ${
                    step >= 1
                      ? "bg-magister-blue text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  1
                </div>
                <span className="text-[11px] font-semibold text-slate-600 mt-1">
                  Contato
                </span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-200 mx-2" />
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition ${
                    step >= 2
                      ? "bg-magister-blue text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  2
                </div>
                <span className="text-[11px] font-semibold text-slate-600 mt-1">
                  Aluno
                </span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-200 mx-2" />
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition ${
                    step >= 3
                      ? "bg-magister-blue text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-semibold text-slate-600 mt-1">
                  Agendamento
                </span>
              </div>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-base text-magister-navy border-b border-slate-100 pb-2">
                      Passo 1: Seus dados de contato
                    </h4>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome Completo do Responsável *
                      </label>
                      <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          WhatsApp com DDD (Ex: 86) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="(86) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          E-mail Principal
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seuemail@exemplo.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue"
                        />
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 rounded-xl font-heading font-bold text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition flex items-center gap-2"
                      >
                        <span>Continuar</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-base text-magister-navy border-b border-slate-100 pb-2">
                      Passo 2: Informações do Aluno
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nome do(a) Filho(a) ou Dependente
                        </label>
                        <input
                          type="text"
                          value={nomeAluno}
                          onChange={(e) => setNomeAluno(e.target.value)}
                          placeholder="Nome do aluno..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Série / Ciclo Pretendido *
                        </label>
                        <select
                          required
                          value={serie}
                          onChange={(e) => setSerie(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue text-slate-700"
                        >
                          <option value="Educação Infantil (2 a 5 anos)">
                            Educação Infantil (2 a 5 anos)
                          </option>
                          <option value="Ensino Fundamental I (1º ao 5º ano)">
                            Ensino Fundamental I (1º ao 5º ano)
                          </option>
                          <option value="Ensino Fundamental II (6º ao 9º ano)">
                            Ensino Fundamental II (6º ao 9º ano)
                          </option>
                          <option value="Ensino Médio & Pré-Vestibular">
                            Ensino Médio & Pré-Vestibular
                          </option>
                          <option value="Turno Integral">Turno Integral / Contraturno</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Turno de Preferência
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Manhã", "Tarde", "Integral"].map((t) => (
                          <label
                            key={t}
                            className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium cursor-pointer transition ${
                              turno === t
                                ? "border-magister-blue bg-blue-50/50 text-magister-blue"
                                : "border-slate-200 hover:bg-slate-50 text-slate-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="turno"
                              value={t}
                              checked={turno === t}
                              onChange={() => setTurno(t)}
                              className="text-magister-blue focus:ring-magister-blue"
                            />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-5 py-3 rounded-xl font-heading font-medium text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                      >
                        Voltar
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-3 rounded-xl font-heading font-bold text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition flex items-center gap-2"
                      >
                        <span>Continuar</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-base text-magister-navy border-b border-slate-100 pb-2">
                      Passo 3: Como prefere ser atendido?
                    </h4>
                    <div className="space-y-3">
                      <label
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                          tipoAtendimento === "visita_presencial"
                            ? "border-magister-blue bg-blue-50/40"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="atendimento"
                          value="visita_presencial"
                          checked={tipoAtendimento === "visita_presencial"}
                          onChange={() => setTipoAtendimento("visita_presencial")}
                          className="mt-1 text-magister-blue focus:ring-magister-blue"
                        />
                        <div>
                          <p className="font-heading font-bold text-sm text-magister-navy">
                            Quero agendar uma visita presencial guiada
                          </p>
                          <p className="text-xs text-slate-500">
                            Conhecer as instalações, os professores e a coordenação pessoalmente.
                          </p>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                          tipoAtendimento === "whatsapp_online"
                            ? "border-magister-blue bg-blue-50/40"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="atendimento"
                          value="whatsapp_online"
                          checked={tipoAtendimento === "whatsapp_online"}
                          onChange={() => setTipoAtendimento("whatsapp_online")}
                          className="mt-1 text-magister-blue focus:ring-magister-blue"
                        />
                        <div>
                          <p className="font-heading font-bold text-sm text-magister-navy">
                            Quero atendimento consultivo pelo WhatsApp
                          </p>
                          <p className="text-xs text-slate-500">
                            Receber valores, grade curricular e tirar dúvidas com um consultor online.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-5 py-3 rounded-xl font-heading font-medium text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                      >
                        Voltar
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-lg hover:shadow-glow-amber transition flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Finalizar e Enviar Agendamento</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-magister-navy">
                Agendamento Solicitado com Sucesso!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Nossa equipe de orientação pedagógica já recebeu sua solicitação e entrará em contato pelo WhatsApp informado nas próximas horas.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-white bg-magister-whatsapp hover:opacity-90 shadow-md transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Abrir WhatsApp da Secretaria Agora</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
