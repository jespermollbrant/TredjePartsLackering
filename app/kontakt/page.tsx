import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – 3. P. Lackering",
  description:
    "Kontakta 3. P. Lackering för frågor, rådgivning eller offert. Vi svarar snabbt och hjälper er hela vägen.",
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Kontakt</h1>
      <p className="mt-4 text-slate-700">
        Har du ett projekt där kvaliteten är avgörande? Hör av dig så ser vi till att det blir rätt från början.
      </p>

      <section className="mt-8 grid gap-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium text-slate-900">Kontaktuppgifter</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p>
              <span className="font-medium">E-post:</span> <a className="text-brand-blue hover:underline" href="mailto:info@3plackering.se">info@3plackering.se</a>
            </p>
            <p>
              <span className="font-medium">Telefon:</span> <a className="text-brand-blue hover:underline" href="tel:+46700000000">+46 70 000 00 00</a>
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium text-slate-900">Vill du ha en offert?</h2>
          <p className="mt-2 text-slate-700">
            Använd vårt formulär så guidar vi dig genom det tekniska underlaget och återkommer snabbt.
          </p>
          <a href="https://www.3plackering.com/#quote" className="mt-4 inline-flex rounded-md bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-700">
            Gå till offertförfrågan
          </a>
        </div>
      </section>
    </main>
  );
}


