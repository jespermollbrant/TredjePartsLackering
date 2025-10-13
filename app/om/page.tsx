"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-slate-700">
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-brand-orange/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-slate-800 text-brand-orange">
              3. P. Lackering
              <span className="text-slate-800 text-sm"> - Förmedlare & Oberoende Expert av Lackering</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#process" className="text-slate-600 hover:text-brand-orange transition-colors duration-200">
              Så fungerar det
            </Link>
            <Link href="/#services" className="text-slate-600 hover:text-brand-blue transition-colors duration-200">
              Våra Tjänster
            </Link>
            <Link href="/#industries" className="text-slate-600 hover:text-brand-red transition-colors duration-200">
              Branscher
            </Link>
            <Link href="/#why-us" className="text-slate-600 hover:text-brand-yellow transition-colors duration-200">
              Varför Oss?
            </Link>
            <Link href="/om" className="text-slate-600 hover:text-brand-green transition-colors duration-200 font-semibold">
              Om oss
            </Link>
          </div>
          <Link
            href="/#quote"
            className="btn-brand"
          >
            Offertförfrågan
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Om 3P Lackering
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Er oberoende expert i en komplex bransch
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-16">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Industrilackering är mer än bara färg på en yta – det är en kritisk process som avgör en produkts livslängd, funktion och kvalitet. Men att navigera i en fragmenterad marknad för att hitta rätt partner för varje unikt projekt är en tidskrävande och riskfylld utmaning.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Det är därför 3P Lackering finns.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Vi grundades för att lösa detta problem. Vi är inte en lackerare; vi är er oberoende expertpartner och den enda kontaktpunkt ni behöver. Vår affärsidé bygger på att kombinera djup branschkunskap med ett noga utvalt nätverk av Sveriges främsta specialister inom ytbehandling. Vi tar hand om hela processen – från teknisk analys och kravställning till projektledning och slutgiltig kvalitetskontroll – så att ni kan vara trygga i att jobbet blir rätt utfört, i tid.
                </p>
              </div>

              {/* Team Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                  Vår samlade expertis är er trygghet
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                  Kärnan i 3P Lackering är vårt team. Tillsammans representerar vi en unik bredd av erfarenhet från industrins alla hörn, vilket ger oss en oöverträffad förmåga att förstå era behov och säkerställa en lyckad leverans.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Jesper */}
                  <div className="card-brand p-6 hover:border-brand-orange">
                    <h3 className="text-xl font-semibold text-brand-orange mb-3">Jesper</h3>
                    <p className="text-slate-600">
                      Med mångårig erfarenhet av logistik och processutveckling inom industrilackering säkerställer Jesper att varje projekt flyter smidigt, effektivt och levereras enligt tidplan.
                    </p>
                  </div>

                  {/* Karl */}
                  <div className="card-brand p-6 hover:border-brand-blue" style={{borderLeftColor: 'var(--color-blue)'}}>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">Karl</h3>
                    <p className="text-slate-600">
                      Expert inom försäljning och material, med en bakgrund inom färg- och pulverleverantörsledet. Karls kunskap garanterar att rätt material och metod väljs för just era tekniska krav.
                    </p>
                  </div>

                  {/* Jens */}
                  <div className="card-brand p-6 hover:border-brand-green" style={{borderLeftColor: 'var(--color-green)'}}>
                    <h3 className="text-xl font-semibold text-brand-green mb-3">Jens</h3>
                    <p className="text-slate-600">
                      Strategisk investerare med ett brett och väletablerat nätverk inom tillverkningsindustrin i södra Sverige, vilket ger oss tillgång till de bästa och mest pålitliga partnerna.
                    </p>
                  </div>

                  {/* Anders */}
                  <div className="card-brand p-6 hover:border-brand-yellow" style={{borderLeftColor: 'var(--color-yellow)'}}>
                    <h3 className="text-xl font-semibold text-brand-yellow mb-3">Anders</h3>
                    <p className="text-slate-600">
                      Före detta produktionschef hos ett av branschens ledande företag. Anders djupa tekniska kunnande och erfarenhet av kvalitetsstyrning är er garanti för ett förstklassigt resultat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mb-16">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Låt oss bli er partner för ett enklare, tryggare och mer effektivt lackeringsbehov.
                </p>
                <Link
                  href="/#quote"
                  className="btn-brand text-lg py-4 px-8 inline-block"
                >
                  Begär offert
                </Link>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  Har du ett projekt eller en fundering? Hör av dig till oss!
                </h3>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-slate-700 mb-2">Mail</p>
                    <a 
                      href="mailto:jesper@3plackering.com" 
                      className="text-brand-orange hover:text-orange-600 transition-colors duration-200 text-lg"
                    >
                      jesper@3plackering.com
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-slate-700 mb-2">Telefon</p>
                    <a 
                      href="tel:0708214708" 
                      className="text-brand-orange hover:text-orange-600 transition-colors duration-200 text-lg"
                    >
                      070-821 47 08
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-12 border-t border-brand-orange/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <p className="font-bold text-white text-lg">3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering</p>
          </div>
          <p> Mail: jesper@3plackering.com</p>
          <p> Telefon: 0708214708</p>
          <div className="mt-4 space-x-6">
            <Link href="/#process" className="hover:text-brand-orange transition-colors duration-200">
              Process
            </Link>
            <Link href="/#services" className="hover:text-brand-blue transition-colors duration-200">
              Tjänster
            </Link>
            <Link href="/#industries" className="hover:text-brand-red transition-colors duration-200">
              Branscher
            </Link>
            <Link href="/#quote" className="hover:text-brand-yellow transition-colors duration-200">
              Offert
            </Link>
            <Link href="/om" className="hover:text-brand-green transition-colors duration-200">
              Om oss
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            &copy; 2025 - 3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering
          </p>
        </div>
      </footer>
    </div>
  );
}
