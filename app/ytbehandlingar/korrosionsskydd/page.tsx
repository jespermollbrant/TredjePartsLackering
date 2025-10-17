"use client";

import Link from "next/link";

export default function KorrosionsskyddPage() {
  return (
    <div className="text-slate-700">
      

      <main>
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/ytbehandlingar" className="hover:text-white transition-colors">Våra Ytbehandlingar</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Korrosionsskydd</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Korrosionsskydd
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Säkra din investering och maximera livslängden med rätt skydd för rätt miljö
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion: Varför är korrosionsskydd avgörande?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Korrosion är en naturlig process där metaller bryts ned när de reagerar med sin omgivning. Utan rätt skydd kan detta leda till försvagade konstruktioner, funktionsfel och kostsamma reparationer. Att välja rätt korrosionsskydd är därför en investering i säkerhet, funktion och livslängd. Nyckeln är att förstå miljön produkten ska verka i – här hjälper korrosivitetsklasserna.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-blue">Vad är korrosivitetsklasser? En guide för rätt beslut</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                För att bedöma hur aggressiv en miljö är används standarden <strong>SS-EN ISO 12944-2</strong>. Den delar in miljöer i korrosivitetsklasser från <strong>C1</strong> (mycket låg) till <strong>C5</strong> (mycket hög). Att förstå dessa klasser är avgörande för att specificera ett skydd som varken är för svagt eller onödigt kraftigt, och därmed nå optimal balans mellan prestanda och kostnad.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Översikt av korrosivitetsklasserna (C1–C5)</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-2">C1 – Mycket låg korrosivitet</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li><strong>Miljö:</strong> Inomhus i uppvärmda, rena och torra utrymmen.</li>
                    <li><strong>Exempel:</strong> Kontor, butiker, skolor, hotell.</li>
                    <li><strong>Rekommenderade lösningar:</strong> Elförzinkning är ofta fullt tillräckligt.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-2">C2 – Låg korrosivitet</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li><strong>Miljö:</strong> Utomhus på landsbygden; inomhus i ouppvärmda utrymmen där kondens kan förekomma.</li>
                    <li><strong>Exempel:</strong> Lager, sporthallar, garage; lantliga utomhusmiljöer.</li>
                    <li><strong>Rekommenderade lösningar:</strong> Varmförzinkning, Sendzimirförzinkning eller Zink/Nickel.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-2">C3 – Måttlig korrosivitet</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li><strong>Miljö:</strong> Stads-/industriområden med måttlig SO₂; kustnära med låg salthalt; inomhus med hög fukt.</li>
                    <li><strong>Exempel:</strong> Tvätterier, bryggerier, livsmedelsindustri; de flesta städer.</li>
                    <li><strong>Rekommenderade lösningar:</strong> Varmförzinkning eller Zink/Nickel.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-2">C4 – Hög korrosivitet</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li><strong>Miljö:</strong> Industri- och kustområden med måttlig salthalt; inomhus som simhallar/kemiska miljöer.</li>
                    <li><strong>Exempel:</strong> Industrier, hamnar, båtvarv.</li>
                    <li><strong>Rekommenderade lösningar:</strong> Tjockare varmförzinkning, Zink/Nickel eller rostfritt stål 304L/A2.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-green mb-2">C5 – Mycket hög korrosivitet</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li><strong>Miljö:</strong> Mycket aggressiv industriell (C5‑I) eller marin (C5‑M) atmosfär.</li>
                    <li><strong>Exempel:</strong> Offshore, tung processindustri, områden med permanent kondens.</li>
                    <li><strong>Rekommenderade lösningar:</strong> Syrafast rostfritt 316L/A4; för stål – duplexsystem (varmförzinkning + avancerat målningssystem).</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Från klassificering till lösning: Våra ytbehandlingar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Elförzinkning</h3>
                  <p className="text-slate-600 mb-2">Grundläggande skydd och estetisk finish.</p>
                  <p className="text-slate-600"><strong>Passar för:</strong> C1, C2</p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Varmförzinkning</h3>
                  <p className="text-slate-600 mb-2">Tjockt och mycket slitstarkt zinkskikt med viss självläkning.</p>
                  <p className="text-slate-600"><strong>Passar för:</strong> C2, C3, C4</p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Zink/Nickel</h3>
                  <p className="text-slate-600 mb-2">Tunn, högpresterande legering – bra för snäva toleranser.</p>
                  <p className="text-slate-600"><strong>Passar för:</strong> C3, C4</p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Rostfritt stål (304L/A2)</h3>
                  <p className="text-slate-600 mb-2">Inbyggt skydd via krom/nickel.</p>
                  <p className="text-slate-600"><strong>Passar för:</strong> C4, C5‑I</p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Syrafast rostfritt (316L/A4)</h3>
                  <p className="text-slate-600 mb-2">Molybdenförstärkt – utmärkt mot klorider/syror.</p>
                  <p className="text-slate-600"><strong>Passar för:</strong> C5‑I, C5‑M</p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se mer om korrosionsskydd</h3>
                <p className="text-slate-600 mb-4">
                  Fördjupa dig i korrosionsskydd och ISO 12944. Klicka nedan för relevanta genomgångar och exempel.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=ISO+12944+corrosion+protection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om korrosionsskydd
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du hjälp att välja rätt korrosionsskydd?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Vi guidar dig enligt ISO 12944 och matchar rätt metod till din miljö och livslängd.
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


