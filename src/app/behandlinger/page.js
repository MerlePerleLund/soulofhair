"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function BehandlingerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const treatments = [
    {
      category: "Klipning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      items: [
        { name: "Dame klip", price: "960 kr" },
        { name: "Herre klip", price: "720 kr" },
        { name: "Maskin klip", price: "320 kr" },
        { name: "Ungdoms klip Pige (under 13-20 år)", price: "800 kr" },
        { name: "Ungdoms klip Dreng (under 13-20 år)", price: "640 kr" },

      ]
    },
    {
      category: "Børneklip",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        { name: "Børneklip 0-3 år", price: "400 kr" },
        { name: "Børneklip 4-6 år", price: "480 kr" },
        { name: "Børneklip 7-12 år", price: "560 kr" },
      ]
    },
    {
      category: "Farve",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      items: [
        { name: "Hel farve", price: "Fra 1.600 - 1.690 kr" },
        { name: "Bundfarve", price: "900 kr" },
        { name: "Striber (folier)", price: "Fra 1.190-2.300kr" },
        { name: "Balayage", price: "Fra 1.610 - 2.670 kr" },
        { name: "Toning", price: "Fra 1.110 - 1.530 kr" },
        { name: "Glossing behandling", price: "420 kr" },
      ],
      note: "Bemærk: Priserne kan variere alt efter hårets længde og tykkelse. Vi inddeler hårlængder i kort, medium, langt og ekstra langt hår."
    },
    {
      category: "Styling",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      items: [
        { name: "Føn ifm. med behandling", price: "Fra 240 kr" },
        { name: "Vask og føn", price: "Fra 650-810 kr" },
        { name: "Opsætning", price: "Fra 970 kr" },
        { name: "Brude styling", price: "Kontakt os" },
        
      ]
    },
    {
      category: "Bryn og vipper",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      items: [
        { name: "Farve af bryn ink. ret", price: "250 kr" },
        { name: "Farve af vipper", price: "250 kr" },
        { name: "Farve af bryn og vipper", price: "400 kr" },
        { name: "Rettelse af bryn", price: "Fra 165 kr" },
        
      ]
    },
    {
      category: "Elev behandlinger",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      items: [
        { name: "Bryn og vipper", price: "400 kr" },
        { name: "Striber", price: "Kontakt os" },
        { name: "Klip", price: "Kontakt os" },
        { name: "Kur og føn", price: "300 kr" },
      ],
      note: "Bemærk: Karla er på sit første år og er stadig igang med at lære. Klip og Striber kan ikke bookes online endnu, derfor bedes du kontakte os på telefon."
    },
    {
      category: "Special",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      items: [
        { name: "Kur", price: "260 kr" },
        { name: "Permanent", price: "Fra 1.300-2.020 kr" },
        { name: "Skægklip (herre)", price: "Fra 240 kr" },
        { name: "Tilrettelse af kanter", price: "240 kr" },
        { name: "Pandehårs klip", price: "160 kr" },
      ]
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
              <Link href="/#galleri" className="text-grey hover:text-primary transition-colors font-medium">
                Galleri
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
                  href="/#galleri"
                  className="text-grey hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Galleri
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
              Vores Behandlinger
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-grey max-w-3xl mx-auto">
              Fra klassiske klip til avancerede farvebehandlinger - vi tilbyder et komplet udvalg af professionelle hårtjenester
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-primary-tint p-8 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-tint rounded-full flex items-center justify-center text-primary">
                    {treatment.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-grey-dark">{treatment.category}</h2>
                </div>

                <div className="space-y-4">
                  {treatment.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start border-b border-primary-tint pb-3 last:border-0">
                      <span className="text-grey font-medium">{item.name}</span>
                      <span className="text-primary font-semibold whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                  {treatment.note && (
                    <div className="mt-6 pt-0">
                      <p className="text-sm text-grey italic">{treatment.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-tint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey-dark mb-4 sm:mb-6">
            Vigtig Information
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-grey-dark mb-3">📅 Booking</h3>
              <p className="text-grey">
                Vi anbefaler at booke tid i god tid, især til farve- og behandlinger. Kontakt os for at få en tid der passer dig.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-grey-dark mb-3">⏱️ Tidsforbrug</h3>
              <p className="text-grey">
                Tidsforbruget varierer efter behandling. 
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-grey-dark mb-3">💰 Priser</h3>
              <p className="text-grey">
                Alle priser er vejledende og kan variere afhængigt af hårlængde og -tykkelse. Vi giver altid en præcis pris ved konsultation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-grey-dark mb-3">✨ Konsultation</h3>
              <p className="text-grey">
                Vi tilbyder gratis konsultation til alle nye kunder. Book en tid, så vi kan finde den perfekte behandling til dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey-dark mb-4 sm:mb-6">
            Klar til at booke?
          </h2>
          <p className="text-xl text-grey mb-8">
            Kontakt os i dag og lad os give dig det look, du drømmer om
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
