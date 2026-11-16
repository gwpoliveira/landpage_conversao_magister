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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState("Educação Infantil (2 a 5 anos)");

  const handleOpenBooking = (ciclo?: string) => {
    if (ciclo) {
      setSelectedCycle(ciclo);
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
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
      <Footer onOpenBooking={() => handleOpenBooking()} />
      <WhatsAppFloating />
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        defaultCycle={selectedCycle}
      />
    </main>
  );
}
