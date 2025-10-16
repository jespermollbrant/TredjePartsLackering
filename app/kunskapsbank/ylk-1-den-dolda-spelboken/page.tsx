import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YLK-1: Den dolda spelboken för industrilackering – 3. P. Lackering",
  description:
    "Praktisk guide till YLK-1: ansvarsfördelning, kravställning och hur du undviker tvister vid legoytbehandling.",
  openGraph: {
    type: "article",
    title: "YLK-1: Den dolda spelboken för industrilackering",
    description:
      "YLK-1 i praktiken: ansvar, kravställning och hur du undviker tvister.",
    siteName: "3. P. Lackering",
    images: [
      { url: "/icon-512.png", width: 512, height: 512, alt: "3. P. Lackering" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YLK-1: Den dolda spelboken för industrilackering",
    description:
      "YLK-1 i praktiken: ansvar, kravställning och hur du undviker tvister.",
    images: ["/icon-512.png"],
  },
};

export default function Ylk1BlogPostPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <article className="prose prose-neutral max-w-none">
          <Script id="ld-article-ylk1" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "YLK-1: Den dolda spelboken för industrilackering",
              description:
                "YLK-1 i praktiken: ansvar, kravställning och hur du undviker tvister.",
              author: { "@type": "Organization", name: "3. P. Lackering" },
              publisher: {
                "@type": "Organization",
                name: "3. P. Lackering",
                logo: { "@type": "ImageObject", url: "/icon-512.png" },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "/kunskapsbank/ylk-1-den-dolda-spelboken",
              },
              image: ["/icon-512.png"],
            })}
          </Script>

          {/* 1. Rubrik och Metainformation */}
          <div className="mb-8 border-b pb-4">
            <p className="text-sm font-semibold text-orange-600">Kunskapsbank</p>
            <h1>YLK-1: Den dolda spelboken för industrilackering</h1>
            <p className="text-slate-500">Publicerad: 14 oktober 2025 • 6 min läsning</p>
          </div>

          {/* 2. Feature-bild */}
          <div className="relative my-8 aspect-[16/9] w-full">
            <Image
              src="/images/blog/ylk-1-dokumentation.jpg"
              alt="Dokument och checklista för kravställning och ansvarsfördelning"
              fill
              className="rounded-lg object-cover shadow-md"
              priority
            />
          </div>

          {/* 3. "Key Takeaways" -ruta */}
          <div className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mt-0 text-lg font-semibold text-blue-900">I den här guiden lär du dig:</h3>
            <ul className="text-blue-800">
              <li>Vem som bär ansvaret för vad enligt YLK-1 – och varför det är viktigt.</li>
              <li>Hur du undviker vanliga fallgropar som kan leda till kostsamma tvister.</li>
              <li>Varför en expertpartner kan spara dig både tid och pengar.</li>
            </ul>
          </div>

          {/* 4. Brödtext */}
          <p>
            <strong>Vem bär egentligen ansvaret?</strong> När du beställer en legoytbehandlingstjänst, som industrilackering, ingår du ett avtal. Men vad händer om resultatet inte blir som förväntat? Vem ansvarar om godset du skickar in har dolda defekter? Och vad är egentligen en &quot;rimlig&quot; kvalitetsnivå?
          </p>
          <p>
            Dessa frågor kan leda till kostsamma tvister och förseningar. För att skapa tydlighet och trygghet i branschen finns YLK-1 (Allmänna leveransbestämmelser för legoytbehandlingstjänster). Det är branschens gemensamma regelverk, framtaget av Svensk Ytbehandlings Förening och Svensk Pulverlackteknisk Förening.
          </p>
          <p>
            Att förstå YLK-1 är att förstå spelreglerna. I den här guiden översätter vi det juridiska språket till praktisk kunskap och visar varför det är så viktigt att ha en expert på din sida som kan navigera i detta ramverk åt dig.
          </p>

          <h2>Kärnan i YLK-1: Ansvarsfördelning</h2>
          <p>
            YLK-1 är i grunden ett dokument som fördelar ansvar mellan dig som Köpare (den som beställer jobbet) och Säljaren (lackeringsföretaget). Det täcker hela processen, från offert till reklamation. Här är de viktigaste punkterna du som kund behöver känna till.
          </p>

          <h3>1. Ditt ansvar som köpare: Tydlighet är A och O (§ 5 Fordringar)</h3>
          <p>
            Detta är kanske den viktigaste punkten i hela dokumentet. YLK-1 slår fast att det är ditt ansvar som köpare att tydligt specificera kraven på lackeringen. Det inkluderar:
          </p>
          <ul>
            <li><strong>Tekniska underlag:</strong> Ritningar och beskrivningar måste vara korrekta.</li>
            <li><strong>Krav på ytan:</strong> Vilken korrosionsklass gäller? Vilken finish och glans önskas?</li>
            <li><strong>Maskering:</strong> Ytor som inte ska lackeras (t.ex. gängade hål eller anliggningsytor) måste definieras tydligt.</li>
          </ul>

          {/* Expert-tips callout */}
          <div className="my-6 border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-900">Expert-tips från 3P Lackering:</p>
            <p className="text-yellow-800">
              <em>Vad det betyder i praktiken:</em> Om du skickar en vag förfrågan och resultatet inte blir som du tänkt dig, ligger ansvaret ofta på dig. Lackeraren har rätt att utgå från branschpraxis om inget annat specificerats. Vi hjälper er att skapa vattentäta specifikationer.
            </p>
          </div>

          <h3>2. Godsets skick: Resultatet börjar med ditt material (§ 6)</h3>
          <p>
            Lackeraren ansvarar för sin process, men du ansvarar för materialet du skickar in. YLK-1 säger att godset ska vara utformat så att det går att ytbehandla utan extraarbete.
          </p>
          <ul>
            <li><strong>Dolda defekter:</strong> Har materialet porer, oljerester från tidigare produktionssteg eller en udda legering? Detta kan påverka slutresultatet, och det är ditt ansvar att informera om det.</li>
            <li><strong>Känslighet:</strong> Är godset känsligt för den värme som krävs vid pulverlackering? Det måste du meddela.</li>
          </ul>
          <p>
            <em>Vad det betyder i praktiken:</em> Om lacken släpper på grund av en förorening i grundmaterialet, är det sällan lackerarens fel. Ett bra resultat kräver ett bra underlag.
          </p>

          <h3>3. Ansvar för fel: Vad händer när det går fel? (§ 12)</h3>
          <p>
            YLK-1 reglerar tydligt säljarens ansvar. Lackeraren är skyldig att åtgärda fel som beror på brister i själva ytbehandlingen. Ansvaret är dock begränsat:
          </p>
          <ul>
            <li><strong>Tidsgräns:</strong> Ansvaret gäller normalt i sex månader efter leverans.</li>
            <li><strong>Begränsat skadestånd:</strong> Säljarens ansvar täcker sällan följdskador som produktionsbortfall eller utebliven vinst. Ersättningen är ofta begränsad till kostnaden för själva lackeringsarbetet.</li>
            <li><strong>Godsförlust:</strong> Säljaren är normalt inte skyldig att rapportera eller ersätta förlust av gods som understiger 5 % av det totala antalet detaljer i en leverans.</li>
          </ul>
          <p>
            <em>Vad det betyder i praktiken:</em> Att reklamera och få rätt kan vara en komplicerad process. Det bästa skyddet är att minimera risken för att fel uppstår från första början.
          </p>

          <h2>Hur 3P Lackering blir din trygghet och expert</h2>
          <p>
            Att läsa YLK-1 gör en sak tydlig: att beställa industrilackering är en teknisk process med många fallgropar där ansvaret ofta faller på beställaren. Det är precis här vår affärsmodell skapar sitt största värde.
          </p>
          <p>
            Vi är inte bara en förmedlare – vi är din oberoende expertpartner som agerar som din förlängda arm och navigerar detta regelverk åt dig.
          </p>
          <ul>
            <li><strong>Vi skapar en perfekt förfrågan:</strong> Istället för att du ska behöva vara expert på korrosionsklasser och maskering, tar vi hand om det. Vi analyserar ditt behov och skapar en vattentät teknisk specifikation som inte lämnar något åt slumpen. Detta minimerar risken för missförstånd och säkerställer att du får det du beställt.</li>
            <li><strong>Vi bedömer underlaget:</strong> Med vår erfarenhet kan vi identifiera potentiella problem med ditt gods innan det skickas till lackering, vilket sparar både tid och pengar.</li>
            <li><strong>Vi utför oberoende kvalitetskontroll:</strong> Vi agerar som din &quot;kontrollant på plats&quot;. Vi övervakar processen och inspekterar slutresultatet enligt gällande standarder för att säkerställa att det uppfyller den avtalade kravnivån.</li>
            <li><strong>Du får en enda, ansvarig partner:</strong> Om något mot förmodan skulle gå fel, behöver du inte själv driva en komplicerad reklamation. Du har en enda kontaktpunkt – oss – som tar fullt ansvar för att lösa situationen.</li>
          </ul>
          <p>
            Genom att anlita 3P Lackering köper du inte bara en lackeringstjänst. Du köper expertis, trygghet och en garanti för att processen hanteras korrekt enligt branschens alla regler.
          </p>
        </article>

        {/* CTA */}
        <div className="my-16 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Vill ni undvika juridiska fallgropar?</h2>
          <p className="mt-2 text-slate-300">
            Vi navigerar YLK-1 åt er och säkerställer att allt blir rätt från början – enligt branschens alla regler.
          </p>
          <Link href="/#quote" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-slate-100">
            Kontakta oss för en offertförfrågan
          </Link>
        </div>

        {/* Relaterade artiklar */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold">Läs mer från Kunskapsbanken</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="group">
              <h4 className="font-medium text-neutral-900">
                <Link href="/kunskapsbank/bakom-kulisserna-automatiserad-pulverlackeringsanlaggning" className="hover:underline">
                  Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning
                </Link>
              </h4>
              <p className="mt-1 text-sm text-neutral-700">Steg-för-steg genom förbehandling, sprutkabin, härdning, återvinning och säkerhet...</p>
            </div>
            <div className="group">
              <h4 className="font-medium text-neutral-900">
                <Link href="/kunskapsbank/guide-bedoma-kvalitet-lackerad-yta" className="hover:underline">
                  Guide: Hur bedömer man kvaliteten på en lackerad yta?
                </Link>
              </h4>
              <p className="mt-1 text-sm text-neutral-700">Vad betyder 'bra finish'? När är en defekt acceptabel? Vi går igenom branschpraxis...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


