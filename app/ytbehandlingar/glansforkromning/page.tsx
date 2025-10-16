"use client";

import Link from "next/link";

export default function GlansforkromningPage() {
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
              <span className="text-white">Hexavalent glansförkromning</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Hexavalent glansförkromning
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ger den klassiska, spegelblanka och slitstarka kromfinishen
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hexavalent glansförkromning är en traditionell elektrolytisk process som applicerar ett tunt, dekorativt lager krom med enastående glans. Den skapar den klassiska spegelblanka kromlooken med lätt blåaktig ton och ger en extremt hård, slitstark yta med gott korrosionsskydd.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-blue">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Förbehandling</h3>
                  <p className="text-slate-600">
                    Noggrann flertrinsrengöring och aktivering. Ofta appliceras underliggande nickellager för korrosionsskydd och slät bas.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Elektroplätering</h3>
                  <p className="text-slate-600">
                    Detaljen (katoden) sänks i ett uppvärmt kromsyra‑baserat elektrolytbad. Vid likström fälls kromjoner ut som ett tunt metalliskt skikt på ytan.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Sköljning och torkning</h3>
                  <p className="text-slate-600">
                    Efter plätering sköljs och torkas detaljen för att uppnå den slutliga högglansiga finishen.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Spegelblank, högestetisk yta</li>
                    <li>• Extremt hård och reptålig</li>
                    <li>• Bra slitstyrka och låg friktion</li>
                    <li>• Gott korrosionsskydd (med nickelunderlag)</li>
                    <li>• Lätt att hålla ren</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Använder hexavalent krom med strikta miljö- och hälsokrav</li>
                    <li>• Sämre täckning i håligheter och komplexa former</li>
                    <li>• Kromskiktet kan vara sprött</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Vanligen stål, mässing, koppar och aluminium, oftast med underliggande nickel. Typiska applikationer är fordonsdetaljer, VVS‑armaturer, möbler, verktyg och motorcykeldelar.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En klassisk, tidlös spegelfinish som förenar hög estetik med funktionell prestanda: hård, lättskött och slitstark.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur glansförkromning fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se glansförkromning i aktion? Klicka på länken nedan för att titta på videor som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=Chrome+plating+hexavalent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om glansförkromning
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du glansförkromning för ditt projekt?</h2>
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


