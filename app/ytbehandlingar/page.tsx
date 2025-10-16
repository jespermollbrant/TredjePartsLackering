"use client";

import Link from "next/link";

export default function YtbehandlingarPage() {
  return (
    <div className="text-slate-700">
      {/* Header is provided globally in layout */}

      <main>
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Våra Ytbehandlingar
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Vi analyserar era krav på funktion, estetik och kostnadseffektivitet för att säkerställa att ert projekt får den optimala ytbehandlingen. Genom vårt nätverk erbjuder vi en komplett portfölj av industrins främsta metoder. Utforska våra kärnområden nedan för att lära dig mer, eller kontakta oss direkt för en skräddarsydd rekommendation.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-green">
                1. Förbehandling & Ytrengöring
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                Ett hållbart resultat börjar alltid med en perfekt förberedd yta. Förbehandlingen är det absolut viktigaste steget 
                för att garantera att lacken fäster korrekt och ger ett långvarigt skydd. Vi säkerställer att all smuts, olja, 
                rost och gamla beläggningar avlägsnas effektivt.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Link href="/ytbehandlingar/blastring" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Blästring (Slipblästring)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Kraftfull mekanisk rengöring för att avlägsna rost och skapa optimal vidhäftning.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/vatblastring" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Våtblästring
                  </h3>
                  <p className="text-slate-600 mb-4">
                    En skonsammare blästringsmetod som är dammfri och idealisk för känsliga ytor.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/alkalisk-tvattning" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Alkalisk tvättning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Effektiv kemisk avfettning av oljor och smuts, ofta för stora serier.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/laserrengoring" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Laserrengöring
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Högteknologisk och precis rengöring för känsliga komponenter utan att påverka grundmaterialet.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/pyrolysrensning" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Pyrolysrensning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Värmebaserad rengöring som förvandlar gamla färgskikt till aska, perfekt för renovering.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/centrifugaltrumling" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Centrifugaltrumling
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Avgradning och polering av mindre detaljer i bulk.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">
                2. Våtlackering
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                När kraven på estetik, kulörprecision och finish är som högst är våtlackering ofta det självklara valet. 
                Metoden är extremt flexibel och kan appliceras på nästan alla material.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                <Link href="/ytbehandlingar/vatlackering" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Våtlackering (Sprutlackering)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Den klassiska metoden för oöverträffad finish och obegränsade kulörmöjligheter.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/centrifugallackering" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Centrifugallackering
                  </h3>
                  <p className="text-slate-600 mb-4">
                    En specialiserad metod för att skapa tunna, jämna skikt på roterande arbetsstycken.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/gardinlackering" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Gardinlackering
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Högeffektiv metod för ytbeläggning av plana detaljer i en produktionslinje.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/trumlingslackning" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Trumlingslackning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Kostnadseffektiv lackering av stora volymer av smådetaljer i en roterande trumma.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-orange">
                3. Pulverlackering
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                En modern och avancerad metod som ger en extremt slitstark och reptålig yta. Processen är helt fri från lösningsmedel, 
                vilket gör den till ett utmärkt miljöval.
              </p>
              
              <div className="grid md:grid-cols-1 gap-8 mb-16">
                <Link href="/ytbehandlingar/pulverlackering" className="card-brand p-6 hover:border-brand-orange transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-orange mb-3 group-hover:text-brand-blue transition-colors">
                    Pulverlackering
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Ger ett mycket starkt skydd mot slitage, kemikalier och korrosion, idealiskt för produkter i tuffa miljöer.
                  </p>
                  <span className="text-brand-orange font-medium group-hover:text-brand-blue transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-green">
                4. Kemisk ytbeläggning
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                Autokatalytiska processer som skapar helt jämna och täta metallskikt – idealiskt för komplexa geometrier och invändiga ytor.
              </p>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <Link href="/ytbehandlingar/kemisk-fornickling" className="card-brand p-6 hover:border-brand-green transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-green mb-3 group-hover:text-brand-orange transition-colors">
                    Kemisk förnickling
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Extremt jämnt och korrosionsbeständigt nickel‑fosforskikt utan elektrisk ström.
                  </p>
                  <span className="text-brand-green font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">
                5. Elektrolytisk ytbehandling
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                Elektrolytiska processer för dekorativa och funktionella metallskikt – från anodisering till avancerade nickel/kromsystem och zink.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Link href="/ytbehandlingar/anodisering" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Anodisering
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Hårt, korrosionsbeständigt och dekorativt oxidskikt på aluminium.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/glansforkromning" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Hexavalent glansförkromning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Klassisk spegelfinish med mycket hård och slitstark yta.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/multilagerfornickling" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Multilagerförnickling
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Skiktad nickelstruktur som drastiskt förlänger korrosionslivslängden.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/elektroplatering-tenn" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Elektroplätering med tenn
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Lödbar, livsmedelssäker och korrosionsskyddande tennyta.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/elforzinkning" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Elförzinkning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Kostnadseffektivt katodiskt rostskydd med passivering.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>

                <Link href="/ytbehandlingar/surzinkning" className="card-brand p-6 hover:border-brand-blue transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    Surzinkning
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Snabb och högblank zinkbeläggning med stark estetik.
                  </p>
                  <span className="text-brand-blue font-medium group-hover:text-brand-orange transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-brand-orange">
                6. Kunskapsguide
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                Förstå korrosivitetsklasser och välj rätt system baserat på miljö och livslängd.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-16">
                <Link href="/ytbehandlingar/korrosionsskydd" className="card-brand p-6 hover:border-brand-orange transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-brand-orange mb-3 group-hover:text-brand-blue transition-colors">
                    Korrosionsskydd (ISO 12944)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Översikt av C1–C5, typiska miljöer och rekommenderade lösningar.
                  </p>
                  <span className="text-brand-orange font-medium group-hover:text-brand-blue transition-colors">
                    Läs mer →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du rådgivning?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Kontakta oss för en skräddarsydd rekommendation baserat på dina specifika behov och krav.
            </p>
            <Link
              href="/#quote"
              className="bg-white text-brand-orange font-bold py-4 px-8 rounded-lg text-lg hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Begär offert
            </Link>
          </div>
        </section>
      </main>

      {/* Footer is provided globally in layout */}
    </div>
  );
}
