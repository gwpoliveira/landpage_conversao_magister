"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/contact";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-magister-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-magister-amber text-magister-navy uppercase tracking-wider">
              Teresina - PI
            </span>
            <span className="text-slate-200">
              Matrículas Abertas para o Ano Letivo 2026/2027 • Vagas Limitadas
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="tel:+558632321500"
              className="hover:text-magister-amber transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-magister-amber" />
              <span>(86) 3232-1500</span>
            </a>
            <span className="text-white/20">|</span>
            <button
              onClick={onOpenBooking}
              className="hover:text-magister-amber transition font-semibold text-magister-amber flex items-center gap-1"
            >
              <span>Agende sua Visita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Oficial */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-12 sm:w-14">
              <Image
                src="/logo.png"
                alt="Instituto Magister de Ensino"
                fill
                sizes="56px"
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div>
              <span className="block font-heading font-extrabold text-base sm:text-lg tracking-tight text-magister-blue leading-tight">
                Instituto Magister de Ensino
              </span>
              <span className="block text-[11px] font-bold text-magister-amber tracking-wider uppercase">
                Teresina • Piauí
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-magister-blue transition">A Escola</a>
            <a href="#ciclos" className="hover:text-magister-blue transition">Ciclos</a>
            <a href="#diferenciais" className="hover:text-magister-blue transition">Diferenciais</a>
            <a href="#estrutura" className="hover:text-magister-blue transition">Estrutura</a>
            <a href="#depoimentos" className="hover:text-magister-blue transition">Depoimentos</a>
            <a href="#faq" className="hover:text-magister-blue transition">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.navbar)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-magister-navy bg-slate-100 hover:bg-slate-200 transition"
            >
              <MessageCircle className="w-4 h-4 text-magister-whatsapp" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-magister-navy bg-magister-amber hover:bg-magister-amberHover shadow-md hover:shadow-glow-amber transition-all transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
