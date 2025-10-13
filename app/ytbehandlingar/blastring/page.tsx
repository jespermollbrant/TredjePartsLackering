"use client";

import Link from "next/link";

export default function BlastringPage() {
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
              <span className="text-white">Blästring (Slipblästring)</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Blästring (Slipblästring)
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Kraftfull mekanisk rengöring för att avlägsna rost och skapa optimal vidhäftning
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Blästring är en kraftfull och fundamental metod för mekanisk ytrengöring. Genom att slunga ett blästermedel 
                (t.ex. sand, stål eller glas) mot en yta under högt tryck avlägsnas effektivt rost, glödskal, gamla färgskikt 
                och andra föroreningar. Processen skapar inte bara en ren yta, utan även en uppruggad profil (ankaryta) som 
                är avgörande för att färgen ska få maximal vidhäftning.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Så säkerställer vi ett perfekt resultat med blästring</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Processen kräver precision för att uppnå rätt renhetsgrad och ytprofil utan att skada arbetsstycket. 
                Vår roll som er expertpartner är att:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Analysera & Specificera</h3>
                  <p className="text-slate-600">
                    Vi utvärderar ert material och krav för att specificera rätt blästermedel, kornstorlek och arbetstryck.
                  </p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Kvalitetssäkra</h3>
                  <p className="text-slate-600">
                    Vi säkerställer att processen uppnår den specificerade renhetsgraden enligt svenska standarder (t.ex. Sa 2½).
                  </p>
                </div>
                <div className="card-brand p-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-3">Kontrollera</h3>
                  <p className="text-slate-600">
                    Vi ser till att ytprofilen är optimerad för det valda lacksystemet för att garantera långsiktig hållbarhet.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-blue">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Innesluten process</h3>
                  <p className="text-slate-600">
                    Bearbetningen sker innesluten i ett skåp. Genom fast monterade gummihandskar eller styrning vrids 
                    antingen arbetsstycket eller sprutmunstycket för att komma åt de ytor som skall blästras.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Abrasiv accelerering</h3>
                  <p className="text-slate-600">
                    Ett abrasivt medel tillförs parallellt med tryckluft och accelereras upp i hastighet då det passerar 
                    blästermunstycket. Partiklarna slungas på så sätt mot arbetsstyckets yta och avlägsnar orenheter.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Återvinning</h3>
                  <p className="text-slate-600">
                    Finare damm som skapas sugs upp medan blästermedlet och tyngre avverkade partiklar faller ner genom 
                    gallret och samlas i en behållare i botten. Från behållaren sugs åter igen blästermedlet upp och 
                    sprutas genom munstycket.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Underhåll</h3>
                  <p className="text-slate-600">
                    Då blästermedlet slits samt att det blandas upp med tyngre avverkade partiklar från detaljen så 
                    måste det rengöras eller bytas regelbundet.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Extremt effektivt på rost och hårt sittande smuts</li>
                    <li>• Skapar den bästa möjliga grunden för krävande korrosionsskydd</li>
                    <li>• Enkelhet i natur</li>
                    <li>• Ekonomisk</li>
                    <li>• Inget behov av komplex utrustning</li>
                    <li>• Perfekt mobil metod</li>
                    <li>• Ekovänlig metod</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Kan deformera tunna material om det utförs felaktigt</li>
                    <li>• Processen kan vara dammig och kräver inneslutning</li>
                    <li>• Kräver mycket erfarenhet</li>
                    <li>• Begränsad för enkla former</li>
                    <li>• Stålstrån behöver slipas emellanåt</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Främst metallytor som stål, gjutjärn och aluminium som ska målas med högpresterande färgsystem.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En metalliskt ren yta med en definierad profil, redo för lackering med maximal vidhäftning och livslängd.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur blästring fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se blästring i aktion? Klicka på länken nedan för att titta på en video som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=Bl%C3%A4string+i+bl%C3%A4stersk%C3%A5p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om blästring
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du blästring för ditt projekt?</h2>
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
