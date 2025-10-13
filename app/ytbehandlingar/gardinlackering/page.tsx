"use client";

import Link from "next/link";

export default function GardinlackeringPage() {
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
            <Link href="/ytbehandlingar" className="text-slate-600 hover:text-brand-blue transition-colors duration-200">
              Våra Ytbehandlingar
            </Link>
            <Link href="/#industries" className="text-slate-600 hover:text-brand-red transition-colors duration-200">
              Branscher
            </Link>
            <Link href="/#why-us" className="text-slate-600 hover:text-brand-yellow transition-colors duration-200">
              Varför Oss?
            </Link>
            <Link href="/om" className="text-slate-600 hover:text-brand-green transition-colors duration-200">
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
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/ytbehandlingar" className="hover:text-white transition-colors">Våra Ytbehandlingar</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Gardinlackering</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Gardinlackering
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Högeffektiv metod för ytbeläggning av plana detaljer i en produktionslinje
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Gardinlackering är en ytbeläggande bearbetning där detaljen passerar en ridå av färg. Denna högeffektiva 
                metod är särskilt lämplig för produktionslinjer där plana detaljer ska behandlas i stora volymer.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Färgbehållare</h3>
                  <p className="text-slate-600">
                    En övre behållare fylls kontinuerligt med den ytbeläggande vätskan. En lång slits i behållarens 
                    botten släpper igenom vätskan i form av en tunn film, gardinen.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Cirkulation</h3>
                  <p className="text-slate-600">
                    Gardinen samlas upp av det undre tråget där den pumpas tillbaka till den övre behållaren för att 
                    på så sätt cirkuleras och återanvändas.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Transport</h3>
                  <p className="text-slate-600">
                    Med hjälp av ett tvådelat transportband förs artiklarna genom gardinen och beläggs på så sätt 
                    snabbt och effektivt med ett jämt skikt. Metoden passar således utmärkt för produktionslinjer.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Begränsningar</h3>
                  <p className="text-slate-600">
                    Detaljernas utformning är dock begränsad till att vara relativt plana för att få en heltäckande 
                    och felfri beläggning.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Belägger effektivt plana ytor med en passage</li>
                    <li>• Passar linjeproduktion</li>
                    <li>• Kan belägga en stor variation av platta detaljer</li>
                    <li>• Ingen ställtid mellan olika detaljer</li>
                    <li>• Mycket kostnadseffektiv för stora volymer</li>
                    <li>• Återanvänder färg genom cirkulation</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Kan endast ytbelägga jämna och plana ytor</li>
                    <li>• Belägger ej kanter</li>
                    <li>• Kräver efterföljande torkbuffert vid linjeproduktion</li>
                    <li>• Begränsad till platta detaljer</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Gardinlackering är särskilt lämplig för plana metaller som plåtar, skivor och andra platta komponenter. 
                Metoden fungerar bäst för produktionslinjer där stora volymer av relativt enkla, platta detaljer ska 
                behandlas effektivt.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En jämn och effektiv beläggning av plana ytor. Gardinlackering ger en kostnadseffektiv lösning för 
                produktionslinjer där stora volymer av platta detaljer ska behandlas med hög effektivitet och 
                konsekvent kvalitet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du gardinlackering för ditt projekt?</h2>
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
            <Link href="/ytbehandlingar" className="hover:text-brand-blue transition-colors duration-200">
              Ytbehandlingar
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
