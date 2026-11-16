"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { CyclesGrid } from "@/components/CyclesGrid";
import { Diferenciais } from "@/components/Diferenciais";
import { Estrutura } from "@/components/Estrutura";
import { Testimonials } from "@/components/Testimonials";
import { MultiStepBooking } from "@/components/MultiStepBooking";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { BookingModal } from "@/components/BookingModal";
import { CookieConsent } from "@/components/CookieConsent";
import { PrivacyModal } from "@/components/PrivacyModal";
import { TermsModal } from "@/components/TermsModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState("Educação Infantil (2 a 5 anos)");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleOpenBooking = (ciclo?: string) => {
    if (ciclo) {
      setSelectedCycle(ciclo);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleReopenCookies = () => {
    try {
      localStorage.removeItem("magister_cookie_consent");
      window.location.reload();
    } catch {
      // fallback
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <Hero onOpenBooking={handleOpenBooking} />
      <StatsBar />
      <CyclesGrid onOpenBooking={handleOpenBooking} />
      <Diferenciais />
      <Estrutura onOpenBooking={() => handleOpenBooking()} />
      <Testimonials />
      <MultiStepBooking />
      <Faq />
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenCookies={handleReopenCookies}
      />
      <WhatsAppFloating />

      {/* Modal de Agendamento */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultCycle={selectedCycle}
      />

      {/* Modal de Política de Privacidade & LGPD */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Modal de Termos de Uso */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Banner & Gerenciador de Cookies LGPD */}
      <CookieConsent
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />
    </main>
  );
}
