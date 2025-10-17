"use client";

import Link from "next/link";

export default function ElektroplateringTennPage() {
  return (
    <div className="text-slate-700">
      

      <main>
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/ytbehandlingar" className="hover:text-white transition-colors">Våra Ytbehandlingar</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Elektroplätering med tenn</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Elektroplätering med tenn
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ger en livsmedelssäker, lödbar och korrosionsskyddande yta
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Elektroplätering med tenn (förtenning) applicerar ett tunt lager tenn med elektrisk ström. Tenn är giftfritt och livsmedelssäkert, har utmärkt lödbarhet och ger effektivt korrosionsskydd – idealiskt för elektronik och livsmedelsapplikationer.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-blue">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Förbehandling</h3>
                  <p className="text-slate-600">
                    Noggrann avfettning, elektrolytisk rengöring och betning för att avlägsna oljor, oxider och föroreningar.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Elektroplätering</h3>
                  <p className="text-slate-600">
                    Detaljen (katod) och tennanoder sänks i elektrolyt. Vid likström löses tennjoner och fälls ut som ett jämnt, tätt skikt. Elektrolyten anpassas för matt till högblank finish.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Efterbehandling</h3>
                  <p className="text-slate-600">
                    Sköljning och torkning. Vid behov reflow där tennskiktet kort värms över smältpunkten för ännu tätare och blankare yta.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Utmärkt lödbarhet</li>
                    <li>• Giftfri och livsmedelssäker</li>
                    <li>• Gott korrosionsskydd</li>
                    <li>• Mjuk och formbar beläggning</li>
                    <li>• God elektrisk ledningsförmåga</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Relativt mjuk yta, känslig för repor</li>
                    <li>• Risk för missfärgning (oxidation) över tid</li>
                    <li>• Risk för tennpest vid mycket låga temperaturer</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Koppar, mässing, stål och zink. Oumbärlig i elektronik för kretskort, kontakter och komponentben. Vanligt i livsmedelsindustrin för delar i kontakt med livsmedel.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En funktionell och säker yta med mycket goda elektriska och mekaniska egenskaper – lödbar, korrosionsskyddad och pålitlig i krävande applikationer.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur förtenning fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se förtenning i aktion? Klicka på länken nedan för att titta på videor som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=Tin+electroplating" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om förtenning
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du förtenning för ditt projekt?</h2>
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


