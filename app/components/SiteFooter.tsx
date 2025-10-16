export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-12 border-t border-brand-orange/20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <p className="font-bold text-white text-lg">3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering</p>
        </div>
        <p> Mail: jesper@3plackering.com</p>
        <p> Telefon: 0708214708</p>
        <div className="mt-4 space-x-6">
          <a href="#process" className="hover:text-brand-orange transition-colors duration-200">
            Process
          </a>
          <a href="/ytbehandlingar" className="hover:text-brand-blue transition-colors duration-200">
            Ytbehandlingar
          </a>
          <a href="#industries" className="hover:text-brand-red transition-colors duration-200">
            Branscher
          </a>
          <a href="#quote" className="hover:text-brand-yellow transition-colors duration-200">
            Offert
          </a>
          <a href="/om" className="hover:text-brand-green transition-colors duration-200">
            Om oss
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          &copy; 2025 - 3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering
        </p>
      </div>
    </footer>
  );
}


