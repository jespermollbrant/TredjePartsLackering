import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Guide: Hur bedömer man kvaliteten på en lackerad yta? – 3. P. Lackering",
  description:
    "En expertförklaring av hur kvalitet på lackerade ytor bedöms objektivt – avstånd, ljus och tid – samt vanliga defekter och hur vi säkerställer er kvalitet.",
  openGraph: {
    type: "article",
    title: "Guide: Hur bedömer man kvaliteten på en lackerad yta?",
    description:
      "En expertförklaring av objektiv kvalitetsbedömning av lackerade ytor – avstånd, ljus och tid – samt vanliga defekter.",
    siteName: "3. P. Lackering",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "3. P. Lackering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide: Hur bedömer man kvaliteten på en lackerad yta?",
    description:
      "En expertförklaring av objektiv kvalitetsbedömning av lackerade ytor – avstånd, ljus och tid – samt vanliga defekter.",
    images: ["/icon-512.png"],
  },
};

export default function BlogPostPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <article className="prose prose-neutral max-w-none">
          <Script id="ld-article-kvalitet" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Guide: Hur bedömer man kvaliteten på en lackerad yta?",
              description:
                "En expertförklaring av objektiv kvalitetsbedömning av lackerade ytor – avstånd, ljus och tid – samt vanliga defekter.",
              author: { "@type": "Organization", name: "3. P. Lackering" },
              publisher: {
                "@type": "Organization",
                name: "3. P. Lackering",
                logo: { "@type": "ImageObject", url: "/icon-512.png" },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "/kunskapsbank/guide-bedoma-kvalitet-lackerad-yta",
              },
              image: ["/icon-512.png"],
            })}
          </Script>

          {/* 1. Rubrik och Metainformation */}
          <div className="mb-8 border-b pb-4">
            <p className="text-sm font-semibold text-orange-600">Kunskapsbank</p>
            <h1>Guide: Hur bedömer man kvaliteten på en lackerad yta?</h1>
            <p className="text-slate-500">Publicerad: 15 oktober 2025 • 4 min läsning</p>
          </div>

          {/* 2. Feature-bild */}
          <div className="relative my-8 aspect-[16/9] w-full">
            <Image
              src="/images/blog/kvalitetsbedomning-lackerad-yta.jpg"
              alt="Närbild av en jämn, högglans lackerad yta som inspekteras"
              fill
              className="rounded-lg object-cover shadow-md"
              priority
            />
          </div>

          {/* 3. "Key Takeaways" -ruta */}
          <div className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mt-0 text-lg font-semibold text-blue-900">I den här guiden lär du dig:</h3>
            <ul className="text-blue-800">
              <li>De 3 grundpelarna för objektiv kvalitetsbedömning: avstånd, ljus och tid.</li>
              <li>Vanliga defekter och vad de betyder för slutresultatet.</li>
              <li>Hur vi säkerställer att ni får exakt den kvalitetsnivå ni beställt.</li>
            </ul>
          </div>

          {/* 4. Brödtext */}
          <p>
            När är &quot;bra nog&quot; verkligen bra nog? Alla vill ha en &quot;bra finish&quot; på sina
            lackerade produkter. Men vad betyder det egentligen? En lackerad yta som
            är perfekt för en dold industridetalj är långt ifrån acceptabel för en
            designmöbel. Utan en gemensam standard blir bedömningen av kvalitet
            subjektiv, vilket lätt leder till missförstånd och kostsamma tvister.
          </p>
          <p>
            För att undvika detta använder proffs inom branschen en objektiv metod
            för att bedöma utseendet på lackerade ytor. I den här guiden bryter vi ner
            den branschpraxis som används i Sverige, så att du förstår hur en expert
            bedömer kvalitet – och hur vi säkerställer att du får exakt den nivå du
            har beställt.
          </p>

          <h2>De 3 grundpelarna för en objektiv bedömning</h2>
          <p>
            För att en visuell inspektion ska vara rättvis och repeterbar måste den
            ske under kontrollerade former. Standarden definierar tre kritiska
            faktorer: Avstånd, Ljus och Tid.
          </p>

          <h3>Rätt Avstånd – Allt beror på hur nära du tittar</h3>
          <p>
            En liten defekt som är osynlig på tre meters håll kan vara uppenbar på en
            halvmeters avstånd. Därför specificerar standarden olika
            betraktningsavstånd beroende på vilken kravnivå produkten har. Avståndet
            bestäms med hjälp av en syntavla (liknande den hos en optiker) för att
            säkerställa att alla bedömer från samma förutsättningar. Principen är
            enkel: ju högre krav på ytan, desto närmare granskar man.
          </p>

          <h3>Rätt Ljus – Inga skuggor får dölja sanningen</h3>
          <p>
            Fel belysning kan både dölja och överdriva defekter. Standarden kräver
            därför en belysningsstyrka på 800–1000 lux och ett neutralt dagsljus
            (6500 K), fritt från skuggor. Detta säkerställer att ytan bedöms ärligt,
            utan att ljuset förvränger resultatet.
          </p>

          <h3>Rätt Tid – En snabb men effektiv granskning</h3>
          <p>
            Man ska inte behöva leta efter fel. En inspektion av en yta ska gå
            snabbt, normalt högst 10 sekunder. Om en defekt inte är synlig under
            denna tid vid rätt avstånd och ljus, anses den generellt inte vara ett
            problem enligt standarden.
          </p>

          <h2>Vanliga defekter: Vad letar man efter?</h2>
          <p>
            Standarden definierar ett antal typiska defekter. Att känna till dessa
            hjälper dig att specificera dina krav och förstå en inspektionsrapport.
          </p>

          {/* Expert-tips callout */}
          <div className="my-6 border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-900">Expert-tips från 3P Lackering:</p>
            <p className="text-yellow-800">
              Många kunder underskattar hur viktigt det är att specificera rätt kravnivå från början. Vi hjälper er att välja rätt nivå baserat på slutanvändning och budget.
            </p>
          </div>

          <ul>
            <li>
              <strong>Kratrar/Porer:</strong> Små skålformade gropar eller nålstick i
              färgskiktet.
            </li>
            <li>
              <strong>Fasta föroreningar:</strong> Damm eller andra partiklar som
              fastnat på ytan och bildar en upphöjning.
            </li>
            <li>
              <strong>Fiskögon:</strong> En krater där färgen har dragit sig undan så
              att underlaget syns. Ofta orsakat av silikon eller olja.
            </li>
            <li>
              <strong>Blåsor:</strong> Små bubblor i färgen, ofta orsakade av
              instängd luft eller fukt.
            </li>
            <li>
              <strong>Dropp/Gardin:</strong> Färg som har runnit på en vertikal yta.
            </li>
            <li>
              <strong>Apelsinskal:</strong> En ojämn yta som liknar skalet på en
              apelsin.
            </li>
            <li>
              <strong>Friställen:</strong> Små fläckar där färgen inte har täckt
              underlaget.
            </li>
            <li>
              <strong>Överryk:</strong> Ett tunt, strävt lager av färgdimma som
              landat på en redan lackerad yta.
            </li>
          </ul>
          <p>
            För varje defekt finns ett maximalt tillåtet antal per ytenhet (ofta
            storleken av ett A4‑papper), beroende på vilken av de fyra kravnivåerna
            som avtalats. Kravnivå 1 är den högsta (ofta noll fel tillåtna), medan
            Kravnivå 4 är den lägsta.
          </p>

          <h2>Hur 3P Lackering säkerställer er kvalitet</h2>
          <p>
            Att förstå och tillämpa denna standard är kärnan i vårt arbete som er
            oberoende expertpartner. För dig som kund innebär det tre konkreta
            fördelar:
          </p>
          <ul>
            <li>
              <strong>Tydlighet från start:</strong> Innan projektet startar hjälper vi
              er att definiera och avtala om rätt kravnivå. Behöver ni en perfekt yta
              (Nivå 1) eller räcker det med ett funktionellt skydd (Nivå 3)? Genom att
              specificera detta i förväg undviker vi alla oklarheter.
            </li>
            <li>
              <strong>Optimal matchning:</strong> Vi väljer inte bara en lackerare, vi
              väljer en partner som vi vet kan leverera enligt den specificerade
              kravnivån.
            </li>
            <li>
              <strong>Oberoende kontroll:</strong> Vi agerar som er
              kvalitetskontrollant. Vi genomför inspektioner enligt branschstandarden
              för att säkerställa att slutprodukten uppfyller det vi har kommit överens
              om. Ni får tryggheten i att en expert övervakar ert projekt och
              garanterar resultatet.
            </li>
          </ul>
        </article>

        {/* CTA */}
        <div className="my-16 rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Behöver ni garanterad kvalitet?</h2>
          <p className="mt-2 text-slate-300">
            Vi säkerställer att ni får exakt den kvalitetsnivå ni beställt – enligt branschens alla regler.
          </p>
          <Link href="/#quote" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-slate-100">
            Få en offertförfrågan
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


