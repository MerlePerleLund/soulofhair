import Image from "next/image";
import Link from "next/link";

export default function BehandlingerPage() {
  const treatments = [
    {
      category: "Klipning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        { name: "Dame klip", price: "Fra 450 kr" },
        { name: "Herre klip", price: "Fra 350 kr" },
        { name: "Børn klip (under 12 år)", price: "Fra 250 kr" },
        { name: "Pandeklip", price: "Fra 150 kr" },
        { name: "Klip og føn", price: "Fra 550 kr" },
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
        { name: "Hel farve", price: "Fra 650 kr" },
        { name: "Bundfarve", price: "Fra 550 kr" },
        { name: "Highlights (folier)", price: "Fra 750 kr" },
        { name: "Balayage", price: "Fra 950 kr" },
        { name: "Toning", price: "Fra 350 kr" },
        { name: "Glossing behandling", price: "Fra 450 kr" },
      ]
    },
    {
      category: "Styling",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      items: [
        { name: "Føn", price: "Fra 300 kr" },
        { name: "Krøller med krøllejern", price: "Fra 350 kr" },
        { name: "Opsætning", price: "Fra 500 kr" },
        { name: "Brude styling", price: "Fra 800 kr" },
        { name: "Fest styling", price: "Fra 600 kr" },
      ]
    },
    {
      category: "Behandlinger",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      items: [
        { name: "Olaplex behandling", price: "Fra 200 kr" },
        { name: "Keratin behandling", price: "Fra 800 kr" },
        { name: "Dyb balsam kur", price: "Fra 150 kr" },
        { name: "Hovedbundsmassage", price: "Fra 100 kr" },
        { name: "Proteinkur", price: "Fra 250 kr" },
      ]
    },
    {
      category: "Special",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      items: [
        { name: "Extensions konsultation", price: "Gratis" },
        { name: "Permanent", price: "Fra 950 kr" },
        { name: "Afblegning", price: "Fra 700 kr" },
        { name: "Hårforlængelse", price: "Kontakt os" },
        { name: "Skægpleje (herre)", price: "Fra 200 kr" },
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
              <Link href="/#hjem" className="text-grey hover:text-primary transition-colors font-medium">
                Hjem
              </Link>
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
              <button className="md:hidden text-grey">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-primary-tint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-grey-dark mb-6">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-primary-tint">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-dark mb-6">
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
                Tidsforbruget varierer efter behandling. Vi informerer dig altid om forventet tid ved booking.
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-dark mb-6">
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
