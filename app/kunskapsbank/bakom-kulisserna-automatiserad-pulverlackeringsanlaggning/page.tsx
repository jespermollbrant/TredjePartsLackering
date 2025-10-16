import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning – 3. P. Lackering",
  description:
    "Steg-för-steg: förbehandling, tork, sprutkabin med elektrostatik, härdugn, återvinning – och säkerhet enligt ATEX.",
  openGraph: {
    type: "article",
    title: "Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning",
    description:
      "Steg-för-steg: förbehandling, sprutkabin, härdning, återvinning och säkerhet.",
    siteName: "3. P. Lackering",
    images: [
      { url: "/icon-512.png", width: 512, height: 512, alt: "3. P. Lackering" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakom kulisserna: Automatiserad pulverlackeringsanläggning",
    description:
      "Så fungerar en modern pulverlackeringslina – från förbehandling till härdning.",
    images: ["/icon-512.png"],
  },
};

export default function AutomatiseradPulverlackeringPost() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <article className="prose prose-neutral max-w-none">
          {/* --- SCRIPT FÖRBLIR SAMMA --- */}
          <Script id="ld-article-pulver" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning",
              description:
                "Steg-för-steg: förbehandling, sprutkabin, härdning, återvinning och säkerhet.",
              author: { "@type": "Organization", name: "3. P. Lackering" },
              publisher: {
                "@type": "Organization",
                name: "3. P. Lackering",
                logo: { "@type": "ImageObject", url: "/icon-512.png" },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "/kunskapsbank/bakom-kulisserna-automatiserad-pulverlackeringsanlaggning",
              },
              image: ["/icon-512.png"],
            })}
          </Script>

          {/* === NY STRUKTUR BÖRJAR HÄR === */}

          {/* 1. Rubrik och Metainformation */}
          <div className="mb-8 border-b pb-4">
            <p className="text-sm font-semibold text-orange-600">Kunskapsbank</p>
            <h1>Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning</h1>
            <p className="text-slate-500">Publicerad: 16 oktober 2025 • 5 min läsning</p>
          </div>

          {/* 2. Feature-bild */}
          <div className="relative my-8 aspect-[16/9] w-full">
            <Image
              src="/images/blog/pulverlackeringsanlaggning.jpg"
              alt="En modern, automatiserad pulverlackeringsanläggning med en conveyor."
              fill
              className="rounded-lg object-cover shadow-md"
              priority
            />
          </div>

          {/* 3. "Key Takeaways" -ruta */}
          <div className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mt-0 text-lg font-semibold text-blue-900">I den här guiden lär du dig:</h3>
            <ul className="text-blue-800">
              <li>De 5 kritiska stegen i en modern lackeringslina, från förbehandling till härdning.</li>
              <li>Hur elektrostatisk laddning skapar en perfekt och jämn yta.</li>
              <li>Varför säkerhet och ventilation är avgörande för en säker process.</li>
            </ul>
          </div>

          {/* 4. Brödtext */}
          <p>
            Pulverlackering är känt för att ge en av de mest slitstarka, kostnadseffektiva och miljövänliga ytorna som finns. Men hur går det egentligen till när hundratals eller tusentals detaljer ska få en identisk, högkvalitativ yta? Svaret är en automatiserad pulverlackeringsanläggning – en avancerad processlinje där varje steg är minutiöst kontrollerat.
          </p>
          <p>
            I den här guiden tar vi dig med bakom kulisserna och förklarar, steg för steg, hur en modern anläggning förvandlar en rå metalldetalj till en perfekt lackerad slutprodukt.
          </p>

          <h2>Den automatiserade resan: En femstegsprocess</h2>
          <p>
            En automatiserad pulverlackeringsanläggning är i grunden ett slutet kretslopp där detaljerna transporteras på en hängande bana, en så kallad &quot;conveyor&quot;, genom flera olika zoner. Varje zon har en specifik uppgift som är avgörande för slutresultatet.
          </p>

          <h3>Steg 1: Förbehandling – Grunden för allt</h3>
          <p>
            Allt börjar här. Precis som en målare aldrig målar på en smutsig vägg, kan man inte lackera på en oren metallyta. Förbehandlingen är det absolut viktigaste steget för att garantera vidhäftning och ett långvarigt korrosionsskydd.
          </p>
          
          {/* 5. Callout-ruta / Expert-tips */}
          <div className="my-6 border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-900">Expert-tips från 3P Lackering:</p>
            <p className="text-yellow-800">
              9 av 10 problem med vidhäftning beror på bristfällig förbehandling. Vi säkerställer alltid att rätt metod (blästring, kemisk tvätt, etc.) används för just ert material och slutanvändning.
            </p>
          </div>

          <p>Processen sker i flera steg och kan inkludera:</p>
          <ul>
            <li><strong>Avfettning:</strong> Kemiska bad eller högtryckstvättar avlägsnar oljor och fetter från tidigare tillverkningssteg.</li>
            <li><strong>Blästring:</strong> För extra höga krav blästras ytan för att ta bort glödskal och skapa en perfekt mikroskopisk profil för pulvret att fästa i.</li>
            <li><strong>Konverteringsskikt:</strong> Ofta appliceras ett tunt skikt (t.ex. järnfosfatering) som både förbättrar vidhäftningen och ger ett extra rostskydd.</li>
          </ul>

          <h3>Steg 2: Torkugn – Noll fukt tolereras</h3>
          <p>
            Efter den noggranna rengöringen passerar detaljerna genom en torkugn. Ytan måste vara 100 % torr innan pulverappliceringen, eftersom minsta lilla fuktdroppe kan leda till defekter som blåsor i den färdiga lacken.
          </p>

          <h3>Steg 3: Sprutkabinen – Här sker magin</h3>
          <p>
            Nu är det dags för själva lackeringen. Detaljerna förs in i en sluten sprutkabin där robotar eller automatiska sprutpistoler applicerar pulvret. Processen bygger på en enkel fysisk princip:
          </p>
          <ul>
            <li><strong>Elektrostatisk laddning:</strong> Pulverpartiklarna ges en positiv elektrisk laddning när de lämnar sprutpistolen.</li>
            <li><strong>Jordning:</strong> Detaljen som ska lackeras är jordad (negativt laddad).</li>
            <li><strong>Attraktion:</strong> Den positiva laddningen gör att pulverpartiklarna dras till den jordade detaljen och fäster som en magnet, jämnt fördelat över hela ytan – även på komplexa geometrier.</li>
          </ul>

          <h3>Steg 4: Härdugnen – Från pulver till stenhård yta</h3>
          <p>
            Efter sprutkabinen är detaljen täckt av ett torrt pulverlager. För att skapa den slutgiltiga, slitstarka ytan förs den in i en härdugn. Under kontrollerad värme (oftast 160–200°C) smälter pulvret och flyter samman till ett homogent, tätt och slätt skikt. Under härdningen sker en kemisk reaktion som korslänkar molekylerna och skapar den extremt tåliga yta som pulverlackering är känd för.
          </p>

          <h3>Steg 5: Återvinning &amp; Kylning</h3>
          <p>
            Det pulver som inte träffar detaljen i sprutkabinen (översprut) går inte till spillo. Kraftfulla ventilationssystem samlar upp överskottspulvret, filtrerar det och återför det till systemet. Detta gör processen både ekonomisk och miljövänlig. Efter härdugnen får detaljerna svalna innan de kan packas och levereras.
          </p>

          <h2>Säkerheten först: En kontrollerad miljö</h2>
          <p>
            En automatiserad pulverlackeringsanläggning är en komplex industriell miljö som styrs av strikta europeiska direktiv och standarder (som ATEX och SS-EN 50177). Finfördelat pulver i luften kan vara explosivt, vilket ställer extrema krav på:
          </p>
          <ul>
            <li><strong>Ventilation:</strong> Luftflödet i kabinen är exakt beräknat för att hålla pulverkoncentrationen långt under den undre explosionsgränsen.</li>
            <li><strong>Jordning:</strong> All utrustning, från conveyor till sprutpistoler, måste vara korrekt jordad för att förhindra statisk elektricitet och gnistbildning.</li>
            <li><strong>Brandskydd:</strong> Anläggningarna är utrustade med avancerade brandlarm och automatiska släckningssystem som omedelbart kan stänga ner processen vid en incident.</li>
          </ul>
          <p>Att säkerställa att en anläggning uppfyller alla dessa säkerhetskrav kräver djup teknisk expertis.</p>

          <h2>Hur 3P Lackering säkerställer en perfekt process för dig</h2>
          <p>
            Att förstå hur en automatiserad anläggning fungerar är en sak, att säkerställa att den levererar ett perfekt resultat för just ditt projekt är en annan. Som er oberoende expertpartner är det vårt jobb att:
          </p>
          <ul>
            <li><strong>Specificera kraven:</strong> Vi översätter era behov till tekniska specifikationer för hela kedjan – från rätt förbehandling till exakt härdningstid.</li>
            <li><strong>Matcha med rätt anläggning:</strong> Vi väljer inte bara en leverantör, vi väljer en partner vars anläggning är optimalt utrustad och certifierad för ert specifika gods.</li>
            <li><strong>Kvalitetssäkra processen:</strong> Vi agerar som er kontrollant och säkerställer att alla steg utförs korrekt för att garantera ett resultat som uppfyller era krav på kvalitet och säkerhet.</li>
          </ul>
        </article>

        {/* 6. Stor, tydlig Call-to-Action (CTA) */}
        <div className="my-16 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Redo att säkerställa er kvalitet?</h2>
          <p className="mt-2 text-slate-300">
            Låt oss vara er expertpartner. Vi hanterar hela processen, från teknisk specifikation till garanterad leverans.
          </p>
          <Link href="/#quote" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-slate-100">
            Starta en offertförfrågan
          </Link>
        </div>

        {/* 7. Relaterade artiklar */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold">Läs mer från Kunskapsbanken</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="group">
              <h4 className="font-medium text-neutral-900">
                <Link href="/kunskapsbank/guide-bedoma-kvalitet-lackerad-yta" className="hover:underline">
                  Guide: Hur bedömer man kvaliteten på en lackerad yta?
                </Link>
              </h4>
              <p className="mt-1 text-sm text-neutral-700">Vad betyder 'bra finish'? När är en defekt acceptabel? Vi går igenom branschpraxis...</p>
            </div>
            <div className="group">
              <h4 className="font-medium text-neutral-900">
                <Link href="/kunskapsbank/ylk-1-den-dolda-spelboken" className="hover:underline">
                  YLK-1: Den dolda spelboken för industrilackering
                </Link>
              </h4>
              <p className="mt-1 text-sm text-neutral-700">Förstå ansvarsfördelning, kravställning och hur du undviker vanliga tvister...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


