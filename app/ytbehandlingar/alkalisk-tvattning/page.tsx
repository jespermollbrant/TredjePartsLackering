"use client";

import Link from "next/link";

export default function AlkaliskTvattningPage() {
  return (
    <div className="text-slate-700">
      {/* Header is provided globally in layout */}

      <main>
        <section className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/ytbehandlingar" className="hover:text-white transition-colors">Våra Ytbehandlingar</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Alkalisk tvättning</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Alkalisk tvättning
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Effektiv kemisk avfettning av oljor och smuts, ofta för stora serier
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alkalisk tvättning är en ytrengörande metod där detaljerna sköljs eller sänks ned i en alkalisk vätska. 
                Denna kemiska rengöringsprocess är särskilt effektiv för att avlägsna oljor, fett och andra organiska 
                föroreningar från metallytor.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-orange">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Alkalisk lösning</h3>
                  <p className="text-slate-600">
                    Detaljerna sköljs eller sänks ned i en alkalisk vätska med PH-värde högre än 7, vanligtvis mellan 9-10.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Kemisk reaktion</h3>
                  <p className="text-slate-600">
                    Vätskan ihop med eventuell mekaniska påverkan från tryckspolning gör att löst sittande orenheter 
                    och oljor effektivt löses upp och/eller avlägsnas.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Korgtvättning</h3>
                  <p className="text-slate-600">
                    Metoden är vanligt förekommande i så kallad korgtvättning där godset som skall ytrengöras placeras 
                    i en korg som därefter passerar en eller flera efterföljande ytrengörande processer där alkalisk 
                    tvättning kan vara en.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Mycket effektiv för avfettning av oljor och fett</li>
                    <li>• Lämplig för stora serier och bulkbehandling</li>
                    <li>• Kan kombineras med andra rengöringsmetoder</li>
                    <li>• Relativt kostnadseffektiv för stora volymer</li>
                    <li>• Kan automatiseras i produktionslinjer</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Kräver hantering av kemikalier</li>
                    <li>• Kan påverka vissa material negativt</li>
                    <li>• Kräver efterföljande sköljning</li>
                    <li>• Mindre effektiv på hårt sittande föroreningar</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alkalisk tvättning är särskilt lämplig för metaller som stål och aluminium. Metoden fungerar bäst på 
                ytor med löst sittande oljor, fett och andra organiska föroreningar. Den är mindre lämplig för känsliga 
                material eller ytor med hårt sittande föroreningar som kräver mekanisk rengöring.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En ren och avfettad yta som är redo för efterföljande behandling. Alkalisk tvättning ger en bra grund 
                för vidare ytbehandling, särskilt när den kombineras med andra rengöringsmetoder i en komplett 
                förbehandlingsprocess.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du alkalisk tvättning för ditt projekt?</h2>
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
