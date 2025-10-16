"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function ThankYouPage() {
  const [quoteId, setQuoteId] = useState<string | null>(null);

  useEffect(() => {
    // Get quote ID from URL parameters if available
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      setQuoteId(id);
    }

    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17646346376/YH79CKKuuqwbEIjBt95B',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header is provided globally in layout */}

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tack för din förfrågan!
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Din offertförfrågan har mottagits och vi kommer att återkomma till dig inom 24 timmar med en detaljerad offert.
          </p>

          {/* Quote ID Display */}
          {quoteId && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Ditt referensnummer
              </h3>
              <p className="text-2xl font-mono font-bold text-brand-orange">
                #{quoteId}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Spara detta nummer för framtida referens
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Vad händer härnäst?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Teknisk granskning
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Våra experter granskar din förfrågan och ställer eventuella följdfrågor för att säkerställa en exakt offert.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Matchning med specialist
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Vi matchar ditt projekt med den bäst lämpade lackeraren i vårt kvalitetssäkrade nätverk.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Detaljerad offert
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Du får en komplett offert med pris, tidsplan och alla tekniska specifikationer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-brand text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Behöver du hjälp direkt?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Ring oss så hjälper vi dig med dina frågor
            </p>
            <a 
              href="tel:0708214708" 
              className="inline-block bg-white text-brand-orange font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 070-821 47 08
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-brand text-lg py-3 px-8"
            >
              Tillbaka till startsidan
            </Link>
            <Link
              href="/#services"
              className="btn-brand-secondary text-lg py-3 px-8"
            >
              Läs mer om våra tjänster
            </Link>
          </div>
        </div>
      </main>

      {/* Footer is provided globally in layout */}
    </div>
  );
}
