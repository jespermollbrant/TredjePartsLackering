"use client";

import Link from "next/link";

export default function CentrifugaltrumlingPage() {
  return (
    <div className="text-slate-700">
      

      <main>
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/ytbehandlingar" className="hover:text-white transition-colors">Våra Ytbehandlingar</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Centrifugaltrumling</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Centrifugaltrumling
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Avgradning och polering av mindre detaljer i bulk
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Centrifugaltrumling polerar detaljer genom att låta dessa trumla runt tillsammans med ett abrasivt medel 
                så att ytorna jämnas ut och poleras. Denna metod är särskilt effektiv för att behandla stora volymer av 
                mindre detaljer samtidigt.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Placering</h3>
                  <p className="text-slate-600">
                    Centrifugaltrumling utförs genom att detaljerna placeras i ett roterande trumma tillsammans med abrasiva chip.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Vattentillsättning</h3>
                  <p className="text-slate-600">
                    Samtidigt som vatten tillsätts löpande för att skapa optimala förhållanden för bearbetningen.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Rotation och bearbetning</h3>
                  <p className="text-slate-600">
                    Den roterande trumman gör att chipen slås och gnids mot arbetsstyckenas ytor som då utjämnas och poleras.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Anpassning</h3>
                  <p className="text-slate-600">
                    Beroende på arbetsstyckets material, utformning samt önskat resultat finns en mängd olika storlekar 
                    och former på chipen att tillgå.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Mycket effektiv för stora volymer</li>
                    <li>• Kostnadseffektiv för bulkbehandling</li>
                    <li>• Jämn och konsekvent kvalitet</li>
                    <li>• Kan anpassas för olika material</li>
                    <li>• Automatiserad process</li>
                    <li>• Lämplig för mindre detaljer</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Begränsad till mindre detaljer</li>
                    <li>• Kan påverka känsliga ytor</li>
                    <li>• Kräver anpassning av chip för olika material</li>
                    <li>• Mindre kontroll över individuella detaljer</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Centrifugaltrumling är särskilt lämplig för metaller som stål, aluminium och mässing. Metoden fungerar 
                bäst för mindre detaljer som kan behandlas i bulk, såsom skruvar, muttrar, små komponenter och andra 
                mindre metallföremål.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En jämn och polerad yta på alla detaljer som har behandlats. Centrifugaltrumling ger en konsekvent 
                kvalitet över hela batchen och är idealisk för att förbereda detaljer inför vidare ytbehandling 
                eller för att skapa en fin finish.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur centrifugaltrumling fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se centrifugaltrumling i aktion? Klicka på länken nedan för att titta på en video som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=Centrifugaltrumling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om centrifugaltrumling
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du centrifugaltrumling för ditt projekt?</h2>
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
