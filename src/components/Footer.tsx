"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck, Cookie } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenCookies?: () => void;
}

export function Footer({
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms,
  onOpenCookies,
}: FooterProps) {
  return (
    <footer className="bg-magister-navy text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 bg-white/10 rounded-lg p-1">
                <Image
                  src="/logo.png"
                  alt="Instituto Magister de Ensino"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-base text-white leading-tight">
                  Instituto Magister de Ensino
                </span>
                <span className="block text-[10px] text-magister-amber uppercase tracking-wider">
                  Teresina • Piauí
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formação de excelência humana e acadêmica em Teresina - Piauí. Da Educação Infantil ao Ensino Médio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3">
              Ciclos de Ensino
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <a href="#ciclos" className="hover:text-magister-amber transition">
                  Educação Infantil
                </a>
              </li>
              <li>
                <a href="#ciclos" className="hover:text-magister-amber transition">
                  Ensino Fundamental I
                </a>
              </li>
              <li>
                <a href="#ciclos" className="hover:text-magister-amber transition">
                  Ensino Fundamental II
                </a>
              </li>
              <li>
                <a href="#ciclos" className="hover:text-magister-amber transition">
                  Ensino Médio & Pré-Vestibular
                </a>
              </li>
              <li>
                <a href="#ciclos" className="hover:text-magister-amber transition">
                  Turno Integral
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3">
              Unidade Teresina
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-magister-amber shrink-0 mt-0.5" />
                <span>Teresina - PI • Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-magister-amber shrink-0" />
                <span>(86) 3232-1500</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-magister-amber shrink-0" />
                <span>contato@magisterteresina.com.br</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3">
              Horário da Secretaria
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Segunda a Sexta: 07h00 às 18h00
              <br />
              Sábado: 08h00 às 12h00
            </p>
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-lg font-heading font-bold text-xs text-magister-navy bg-magister-amber hover:bg-magister-amberHover transition"
              >
                Agendar Visita Agora
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Instituto Magister de Ensino. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-magister-amber transition flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacidade & LGPD</span>
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-magister-amber transition"
            >
              Termos de Uso
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={onOpenCookies}
              className="hover:text-magister-amber transition flex items-center gap-1"
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Preferências de Cookies</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
