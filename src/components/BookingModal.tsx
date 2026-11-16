"use client";

import { useState, useEffect } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCycle?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultCycle = "Educação Infantil (2 a 5 anos)",
}: BookingModalProps) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ciclo, setCiclo] = useState(defaultCycle);

  useEffect(() => {
    if (defaultCycle) {
      setCiclo(defaultCycle);
    }
  }, [defaultCycle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${encodeURIComponent(
      nome
    )}, meu contato é ${encodeURIComponent(
      whatsapp
    )} e gostaria de agendar uma visita guiada para o ciclo ${encodeURIComponent(
      ciclo
    )} no Instituto Magister.`;
    const url = `https://wa.me/5586999999999?text=${msg}`;
    onClose();
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-magister-amberLight text-magister-amber flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-magister-navy">
            Agendar Visita Pedagógica
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Nossa coordenação apresentará toda a estrutura da escola para sua família.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Carlos Eduardo Melo"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-magister-blue/20 focus:border-magister-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp com DDD *
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
              Ciclo de Interesse *
            </label>
            <select
              required
              value={ciclo}
              onChange={(e) => setCiclo(e.target.value)}
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
              <option value="Turno Integral">Turno Integral</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-heading font-bold text-sm text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-md transition flex items-center justify-center gap-2"
          >
            <span>Confirmar e Conversar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
