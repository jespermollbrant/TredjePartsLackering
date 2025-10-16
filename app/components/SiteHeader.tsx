"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-brand-orange/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-slate-800 text-brand-orange">
            3. P. Lackering
            <span className="text-slate-800 text-sm"> - Förmedlare & Oberoende Expert av Lackering</span>
          </span>
        </Link>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen ? "true" : "false"}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {!mobileMenuOpen ? (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            ) : (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            )}
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-6">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="text-slate-600 hover:text-brand-orange transition-colors duration-200 inline-flex items-center"
              aria-haspopup="true"
              aria-expanded={servicesOpen ? "true" : "false"}
              onFocus={() => setServicesOpen(true)}
              onBlur={() => setServicesOpen(false)}
            >
              Tjänster
              <svg className="ml-2 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 mt-2 w-64 rounded-md border border-slate-200 bg-white shadow-lg z-50"
                role="menu"
                aria-label="Tjänster"
              >
                <div className="py-2">
                  <Link href="/ytbehandlingar" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" role="menuitem">
                    Översikt Ytbehandlingar
                  </Link>
                  <Link href="/ytbehandlingar/pulverlackering" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" role="menuitem">
                    Pulverlackering
                  </Link>
                  <Link href="/ytbehandlingar/vatlackering" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" role="menuitem">
                    Våtlackering
                  </Link>
                  <Link href="/ytbehandlingar/blastring" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" role="menuitem">
                    Förbehandling & Rengöring
                  </Link>
                </div>
              </div>
            )}
          </div>
          <a href="https://www.3plackering.com/#industries" className="text-slate-600 hover:text-brand-red transition-colors duration-200">
            Branscher
          </a>
          <Link href="/kunskapsbank" className="text-slate-600 hover:text-brand-blue transition-colors duration-200">
            Kunskapsbank
          </Link>
          <Link href="/om" className="text-slate-600 hover:text-brand-green transition-colors duration-200">
            Om oss
          </Link>
          <Link href="/kontakt" className="text-slate-600 hover:text-brand-yellow transition-colors duration-200">
            Kontakt
          </Link>
        </div>
        <a
          href="#quote"
          className="btn-brand"
        >
          Offertförfrågan
        </a>
      </nav>
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
          <div className="container mx-auto px-6 py-4 space-y-1">
            <button
              type="button"
              className="w-full flex items-center justify-between py-2 text-slate-700"
              aria-controls="mobile-services"
              aria-expanded={mobileServicesOpen ? "true" : "false"}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <span>Tjänster</span>
              <svg className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                {!mobileServicesOpen ? (
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.06l-3.71 3.71a.75.75 0 11-1.06-1.06l4.24-4.24a.75.75 0 011.06 0l4.24 4.24c.3.3.3.78 0 1.08z" clipRule="evenodd" />
                )}
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services" className="pl-4 space-y-1 pb-2">
                <Link href="/ytbehandlingar" className="block py-2 text-slate-700">Översikt Ytbehandlingar</Link>
                <Link href="/ytbehandlingar/pulverlackering" className="block py-2 text-slate-700">Pulverlackering</Link>
                <Link href="/ytbehandlingar/vatlackering" className="block py-2 text-slate-700">Våtlackering</Link>
                <Link href="/ytbehandlingar/blastring" className="block py-2 text-slate-700">Förbehandling & Rengöring</Link>
              </div>
            )}
            <a href="#industries" className="block py-2 text-slate-700">Branscher</a>
            <Link href="/kunskapsbank" className="block py-2 text-slate-700">Kunskapsbank</Link>
            <Link href="/om" className="block py-2 text-slate-700">Om oss</Link>
            <Link href="/kontakt" className="block py-2 text-slate-700">Kontakt</Link>
            <a href="#quote" className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-700">
              Offertförfrågan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


