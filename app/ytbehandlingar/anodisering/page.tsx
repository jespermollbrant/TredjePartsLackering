"use client";

import Link from "next/link";

export default function AnodiseringPage() {
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
              <span className="text-white">Anodisering</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Anodisering
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Förvandlar aluminiumytor till ett slitstarkt, korrosionsbeständigt och dekorativt skikt
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-brand-green">Introduktion av metoden</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Anodisering är en elektrokemisk process som skapar ett extremt tåligt och skyddande oxidskikt på aluminiumets yta. Till skillnad från plätering omvandlar anodisering den egna ytan till aluminiumoxid, vilket ger överlägset korrosionsskydd, slitstyrka och möjligheten till dekorativ infärgning i många kulörer.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-blue">Hur fungerar metoden</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-xl font-semibold text-brand-green mb-2">Förbehandling</h3>
                  <p className="text-slate-600">
                    Noggrann rengöring avlägsnar olja, smuts och naturlig oxidfilm för att skapa en ren och aktiv yta.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="text-xl font-semibold text-brand-orange mb-2">Elektrokemisk process</h3>
                  <p className="text-slate-600">
                    Detaljen sänks i ett syrabad (oftast svavelsyra) och kopplas som anod (+). Vid likström frigörs syre som reagerar med aluminiumet och bygger ett tjockt, poröst och mycket hårt oxidskikt.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Infärgning (valfritt)</h3>
                  <p className="text-slate-600">
                    Oxidskiktets porösa struktur möjliggör infärgning där pigment absorberas i porerna och ger en hållbar, UV‑beständig kulör.
                  </p>
                </div>
                <div className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-xl font-semibold text-brand-yellow mb-2">Tätning (sealing)</h3>
                  <p className="text-slate-600">
                    Slutligen förseglas ytan, ofta i hett vatten, vilket stänger porerna och maximerar korrosionsskyddet samt gör ytan smutsavvisande.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-red">Fördelar och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-brand p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fördelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Extremt slitstarkt och reptåligt</li>
                    <li>• Överlägset korrosionsskydd</li>
                    <li>• Integrerad yta som ej kan flagna</li>
                    <li>• Dekorativ infärgning i många kulörer</li>
                    <li>• Elektriskt isolerande</li>
                    <li>• Miljövänlig och hållbar process</li>
                  </ul>
                </div>
                <div className="card-brand p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Nackdelar</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Begränsad främst till aluminium</li>
                    <li>• Ytan kan spricka vid kraftig böjning</li>
                    <li>• Svår att reparera, kräver omslipning och ny anodisering</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-brand-purple">Material som passar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Aluminiumbaserade material. Vanligt för arkitektoniska detaljer, profiler, elektronikchassin, fordonskomponenter och köksutrustning. Även titan kan anodiseras.
              </p>

              <h2 className="text-3xl font-bold mb-8 text-brand-indigo">Slutresultat</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En hård, vacker och mycket tålig yta som är fullständigt integrerad med grundmaterialet och ger långvarigt skydd samt estetisk finish.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Se hur anodisering fungerar</h3>
                <p className="text-slate-600 mb-4">
                  Vill du se anodisering i aktion? Klicka på länken nedan för att titta på videor som visar processen.
                </p>
                <a 
                  href="https://www.youtube.com/results?search_query=Anodisering+aluminium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Titta på video om anodisering
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Behöver du anodisering för ditt projekt?</h2>
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


