import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kunskapsbank – 3. P. Lackering",
  description:
    "Guider och insikter om industrilackering. Lär dig om metoder, standarder och kvalitetsbedömning.",
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  imageAlt: string;
};

const posts: Post[] = [
  {
    slug: "guide-bedoma-kvalitet-lackerad-yta",
    title: "Guide: Hur bedömer man kvaliteten på en lackerad yta?",
    excerpt:
      "Vad betyder 'bra finish'? När är en defekt acceptabel? Vi går igenom branschpraxis som ger objektiva svar på subjektiva frågor.",
    imageAlt: "Närbild av en jämn, högglans lackerad yta",
  },
  {
    slug: "ylk-1-den-dolda-spelboken",
    title: "YLK-1: Den dolda spelboken för industrilackering",
    excerpt:
      "Vad YLK-1 betyder i praktiken: ansvarsfördelning, kravställning och hur du undviker tvister.",
    imageAlt: "Dokument och checklista för kravställning",
  },
  {
    slug: "bakom-kulisserna-automatiserad-pulverlackeringsanlaggning",
    title: "Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning",
    excerpt:
      "Steg-för-steg genom förbehandling, sprutkabin, härdning, återvinning och säkerhet.",
    imageAlt: "Automatiserad sprutkabin med conveyor",
  },
];

export default function KunskapsbankPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Kunskapsbank: Er guide i lackeringsdjungeln
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700">
          Industrilackering är en komplex värld av metoder, standarder och tekniska
          krav. För att hjälpa er att fatta bättre beslut och förstå vad som ligger
          bakom ett högkvalitativt resultat delar vi här med oss av vår expertis. Vi
          bryter ner komplicerade ämnen till konkreta guider och insikter.
        </p>
      </header>

      <section aria-label="Lista av artiklar" className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[16/9] w-full bg-neutral-100" aria-hidden="true" />
            <div className="p-5">
              <h2 className="text-lg font-medium text-neutral-900">
                <Link href={`/kunskapsbank/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-neutral-700">{post.excerpt}</p>
              <div className="mt-4">
                <Link
                  href={`/kunskapsbank/${post.slug}`}
                  className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
                >
                  Läs mer
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


