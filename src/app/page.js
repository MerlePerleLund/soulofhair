import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-primary-tint z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
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
              <a
                href="#hjem"
                className="text-grey hover:text-primary transition-colors font-medium"
              >
                Hjem
              </a>
              <a
                href="#services"
                className="text-grey hover:text-primary transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#teamet"
                className="text-grey hover:text-primary transition-colors font-medium"
              >
                Teamet
              </a>
              <a
                href="#om"
                className="text-grey hover:text-primary transition-colors font-medium"
              >
                Om os
              </a>
              <a
                href="#kontakt"
                className="text-grey hover:text-primary transition-colors font-medium"
              >
                Kontakt
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <a
                href="#kontakt"
                className="hidden sm:block bg-primary hover:bg-primary-shade text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300"
              >
                Book tid
              </a>
              {/* Mobile menu button */}
              <button className="md:hidden text-grey">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hjem"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/intro2024.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-grey-dark/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            FRISØR I WATERFRONT, HELLERUP
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 max-w-2xl mx-auto drop-shadow-lg">
            Når du har været i stolen hos os, stråler ikke bare dit hår, <br />
            men hele dig!
          </p>
          <button className="bg-primary hover:bg-primary-shade text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book din tid
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grey-dark mb-4">
              Vores Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl border border-primary-tint hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/klip.jpg"
                  alt="Præcisionsklip"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-tint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-grey-dark">
                  Præcisionsklip
                </h3>
              </div>
              <p className="text-grey leading-relaxed">
                Ekspert klipning tilpasset din unikke stil, ansigtsfacon og
                personlighed
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl border border-primary-tint hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/farve.jpg"
                  alt="Farvemagi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-tint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-grey-dark">
                  Farvemagi
                </h3>
              </div>
              <p className="text-grey leading-relaxed">
                Skånsomme farver for levende og langvarige resultater
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl border border-primary-tint hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/styling.jpg"
                  alt="Styling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-tint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-grey-dark">
                  Styling
                </h3>
              </div>
              <p className="text-grey leading-relaxed">
                Professionel føn, opsætninger og styling til særlige lejligheder
              </p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 rounded-2xl border border-primary-tint hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/vask.jpg"
                  alt="Behandlinger"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-tint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-grey-dark">
                  Vask og føn
                </h3>
              </div>
              <p className="text-grey leading-relaxed">
                Luksuriøs hårvask og føntørring
              </p>
            </div>
          </div>
          <Link href="/behandlinger">
            <div>
              <p className="text-center text-primary mt-12 underline">
                Se alle behandlinger{" "}
                <ArrowRight className="inline-block w-4 h-4 ml-1" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* TEAM Section */}
      <section id="teamet" className="py-24 bg-primary-tint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grey-dark mb-4">
              Mød Teamet
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SoH_26.jpg",
              "SoH_31.jpg",
              "SoH_38.jpg",
              "SoH_9.jpg",
              "SoH_6.jpg",
              "SoH_62.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer border border-primary-light"
              >
                <Image
                  src={`/gallery/${image}`}
                  alt={`Galleri billede ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-shade opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/team">
          <div>
            <p className="text-center text-primary mt-12 underline">
              Læs mere om vores team{" "}
              <ArrowRight className="inline-block w-4 h-4 ml-1" />
            </p>
          </div>
        </Link>
      </section>

      {/* About Section */}
      <section id="om" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo/_SOH_green.png"
                alt="Soul of Hair Logo"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-grey-dark mb-6">
              Historie & håndværk i fokus
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-grey leading-relaxed mb-6">
              Sæt dig godt til rette i stolen hos os og træk vejret dybt. For
              lige nu – den næste times tid – er det dig, det handler om. Glæd
              dig til en luksuriøs pause fyldt med ro, omsorg og fokus på dig og
              dit hår. Hos os er rådgivning, kreativitet og faglighed lige så
              vigtig en del af oplevelsen, som miljøbevidstheden er i vores
              produktvalg. <br />
              <br />
              Vi er en salon med 10 års erfaring, grundlagt af Lisbeth – den
              tidligere indehaver af ChaCha. Vores rødder udspringer fra
              ChaCha-kæden, hvor håndværk, kvalitet og personlig service altid
              har været kernen. I dag drives salonen af Jannie, der har
              videreført den samme kærlighed til faget, samtidig med at hun har
              sat sit eget præg på stemningen og stilen.
            </p>
            <p className="text-lg text-grey leading-relaxed mb-8">
              Vi samarbejder med Park Styling som vores faste leverandør af
              produkter og farver – et dansk brand, der kombinerer professionel
              kvalitet med bæredygtige værdier. Det betyder, at alt vi bruger i
              dit hår, er nøje udvalgt med både dig og miljøet i tankerne.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-grey">
                  Et passioneret team af seks frisører med mere end 10 års
                  erfaring
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  Miljø
                </div>
                <div className="text-grey">Miljøbevidste producktvalg</div>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Star
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  Luksus
                </div>
                <div className="text-grey">
                  Rolig, luksuriøs oplevelse skræddersyet til dig
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="kontakt" className="py-24 bg-primary-tint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grey-dark mb-4">
              Kontakt Os
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-grey-dark">
                  Besøg Os
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-grey">Waterfront shopping</p>
                      <p className="text-grey">Philip Heymans allé 17</p>
                      <p className="text-grey">2900 Hellerup</p>
                      <p className="text-grey">Danmark</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-grey">+45 39 90 29 00</p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-grey">info@soulofhair.dk</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-grey-dark">
                  Åbningstider
                </h3>
                <div className="space-y-2 text-grey">
                  <p>Mandag - Fredag: 07:00 - 19:00</p>
                  <p>Lørdag: 09:00 - 17:00</p>
                  <p>Søndag: Lukket</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-grey-dark">
                Skriv til os
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Dit Navn"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-grey/20 text-grey-dark placeholder-grey/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Adresse"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-grey/20 text-grey-dark placeholder-grey/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                {/* <div>
                  <input
                    type="tel"
                    placeholder="Telefonnummer"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-grey/20 text-grey-dark placeholder-grey/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div> */}
                {/* <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-grey/20 text-grey-dark focus:outline-none focus:border-primary transition-colors">
                    <option value="">Vælg Service</option>
                    <option value="cut">Præcisionsklip</option>
                    <option value="color">Farvemagi</option>
                    <option value="styling">Styling</option>
                    <option value="treatment">Behandling</option>
                  </select>
                </div> */}
                <div>
                  <textarea
                    rows="4"
                    placeholder="Har du nogle særlige spørgsmål eller forespørgsler? "
                    className="w-full px-4 py-3 rounded-lg bg-white border border-grey/20 text-grey-dark placeholder-grey/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-shade text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>
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
