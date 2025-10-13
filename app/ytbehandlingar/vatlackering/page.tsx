"use client";

import Link from "next/link";

export default function VatlackeringPage() {
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
              <span className="text-white">Våtlackering (Sprutlackering)</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Våtlackering (Sprutlackering)
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Den klassiska metoden för oöverträffad finish och obegränsade kulörmöjligheter
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Våtlackering är en ytbeläggande bearbetning där färg som utsätts för tryckluft atomiseras och sprutas 
                mot ytan som skall beläggas. Denna traditionella och mångsidiga metod erbjuder oöverträffad flexibilitet 
                när det gäller färgval, finish och tillämpning på olika material.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Sprutmunstycke</h3>
                  <p className="text-slate-600">
                    Sprutmunstycket är uppbyggt så att när tryckluft eller gas leds genom sprutpistolen och ut genom 
                    munstycket så skapas ett undertryck i färgtillförseln vilket suger upp färgen som då tillförs luftströmmen.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Atomisering</h3>
                  <p className="text-slate-600">
                    Den höga hastigheten gör att färgen finfördelas till mikroskopiska droppar, atomiseras, och slungas 
                    ut mot ytan som skall beläggas.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Anpassning</h3>
                  <p className="text-slate-600">
                    Det finns en mängd olika sprutmunstycken att tillgå som ger olika strålar anpassade efter olika behov. 
                    Vissa system har även ytterligare en yttre tryckluftsstråle som omsluter hela sprayflödet för att på 
                    så sätt öka precisionen.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Oöverträffad flexibilitet i färgval</li>
                    <li>• Kan appliceras på nästan alla material</li>
                    <li>• Möjlighet till komplexa färgsystem</li>
                    <li>• Utmärkt för komplexa geometrier</li>
                    <li>• Kan bygga upp flera skikt för optimalt skydd</li>
                    <li>• Möjlighet till specialeffekter (metallic, strukturlack)</li>
                    <li>• Lämplig för både små och stora serier</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Kräver mer tid för torkning</li>
                    <li>• Kan vara mer miljöpåverkande (lösningsmedel)</li>
                    <li>• Kräver mer skicklighet från operatören</li>
                    <li>• Kan vara svårare att uppnå jämn tjocklek</li>
                    <li>• Kräver kontrollerad miljö (sprutbox)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Våtlackering kan appliceras på nästan alla material inklusive metaller, trä, plast och kompositer. 
                Metoden är särskilt lämplig för material som inte tål värme (vilket krävs för pulverlackering) och 
                för komplexa geometrier där andra metoder kan vara begränsade.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En högpresterande ytbehandling med oöverträffad estetik och funktionalitet. Våtlackering ger möjlighet 
                till komplexa färgsystem som kan möta de allra tuffaste kraven, från offshore- och marin miljö till 
                arkitektoniska tillämpningar där estetik och prestanda går hand i hand.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur våtlackering fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se våtlackering i aktion? Klicka på länken nedan för att titta på en video som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=V%C3%A5tlackering" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om våtlackering
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du våtlackering för ditt projekt?</h2>
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
