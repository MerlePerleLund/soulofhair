"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const team = [
    {
      name: "Jannie",
      role: "Frisør & indehaver",
      image: "/gallery/SoH_6.jpg",
      description: "Teknisk ekspert i klipning og farvning",
    },
    {
      name: "Tilda",
      role: "Senior Frisør",
      image: "/gallery/SoH_31.jpg",
      description: "Specialist i striber og klipninger",
    },
    {
      name: "Lene",
      role: "Frisør & Make-up Artist",
      image: "/gallery/SoH_38.jpg",
      description: "Passioneret om styling og kreative opsætninger",
    },
    {
      name: "Arnar",
      role: "Frisør",
      image: "/gallery/SoH_9.jpg",
      description: "Mange års erfaring med permanentkrøller og specielle klippeteknikker",
    },
    {
      name: "Tenna",
      role: "Frisør",
      image: "/gallery/SoH_26.jpg",
      description: "Klassiske klipninger med et moderne twist",
    },
    {
      name: "Merle",
      role: "Friøsør",
      image: "/gallery/SoH_62.jpg",
      description: "Passioneret for farveteknikker, særligt balayage og striber",
    },

     {
      name: "Karla",
      role: "Lærling",
      image: "/gallery/SoH_62.jpg",
      description: "Ambitiøs og grundig med fokus på at lære farve og klippeteknikker",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-primary-tint z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/logo/_SOH_green.png"
                  alt="Soul of Hair Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-grey hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/#teamet" className="text-grey hover:text-primary transition-colors font-medium">
                Teamet
              </Link>
              <Link href="/#om" className="text-grey hover:text-primary transition-colors font-medium">
                Om os
              </Link>
              <Link href="/#kontakt" className="text-grey hover:text-primary transition-colors font-medium">
                Kontakt
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link href="/#kontakt" className="hidden sm:block bg-primary hover:bg-primary-shade text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300">
                Book tid
              </Link>
              {/* Mobile menu button */}
              <button
                className="md:hidden text-grey"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary-tint shadow-lg">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <Link
                  href="/#services"
                  className="text-grey hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/#teamet"
                  className="text-grey hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Teamet
                </Link>
                <Link
                  href="/#om"
                  className="text-grey hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Om os
                </Link>
                <Link
                  href="/#kontakt"
                  className="text-grey hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
                <Link
                  href="/#kontakt"
                  className="bg-primary hover:bg-primary-shade text-white font-semibold px-6 py-3 rounded-full text-center transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book tid
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-primary-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-grey-dark mb-4 sm:mb-6">
              Mød Vores Team
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-grey max-w-3xl mx-auto">
              Vi er et passioneret team af erfarne frisører, der brænder for at skabe det perfekte look til hver enkelt kunde
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-primary-tint hover:border-primary transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-shade opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-grey-dark mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-grey leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-tint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey-dark mb-4 sm:mb-6">
            Book tid hos et af vores dygtige team medlemmer
          </h2>
          <p className="text-xl text-grey mb-8">
            Vi glæder os til at byde dig velkommen i salonen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#kontakt" className="bg-primary hover:bg-primary-shade text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Book tid nu
            </Link>
            <Link href="/#kontakt" className="bg-white hover:bg-primary-tint border-2 border-primary text-primary font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300">
              Kontakt os
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Soul of Hair. Alle rettigheder forbeholdes.</p>
        </div>
      </footer>
    </div>
  );
}
