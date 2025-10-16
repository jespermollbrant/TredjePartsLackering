import Link from "next/link";
import Image from "next/image";
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
  imageUrl: string;
  imageAlt: string;
  readTime: string;
  publishDate: string;
};

const posts: Post[] = [
  {
    slug: "guide-bedoma-kvalitet-lackerad-yta",
    title: "Guide: Hur bedömer man kvaliteten på en lackerad yta?",
    excerpt:
      "Vad betyder 'bra finish'? När är en defekt acceptabel? Vi går igenom branschpraxis som ger objektiva svar på subjektiva frågor.",
    imageUrl: "/images/blog/kvalitetsbedomning-lackerad-yta.jpg",
    imageAlt: "Närbild av en jämn, högglans lackerad yta",
    readTime: "4 min läsning",
    publishDate: "15 oktober 2025",
  },
  {
    slug: "ylk-1-den-dolda-spelboken",
    title: "YLK-1: Den dolda spelboken för industrilackering",
    excerpt:
      "Vad YLK-1 betyder i praktiken: ansvarsfördelning, kravställning och hur du undviker tvister.",
    imageUrl: "/images/blog/ylk-1-dokumentation.jpg",
    imageAlt: "Dokument och checklista för kravställning",
    readTime: "6 min läsning",
    publishDate: "14 oktober 2025",
  },
  {
    slug: "bakom-kulisserna-automatiserad-pulverlackeringsanlaggning",
    title: "Bakom kulisserna: Så fungerar en automatiserad pulverlackeringsanläggning",
    excerpt:
      "Steg-för-steg genom förbehandling, sprutkabin, härdning, återvinning och säkerhet.",
    imageUrl: "/images/blog/pulverlackeringsanlaggning.jpg",
    imageAlt: "Automatiserad sprutkabin med conveyor",
    readTime: "5 min läsning",
    publishDate: "16 oktober 2025",
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

      <section aria-label="Lista av artiklar" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center gap-2 text-sm text-neutral-500">
                <span>{post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors">
                <Link href={`/kunskapsbank/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 line-clamp-3 text-neutral-700">{post.excerpt}</p>
              <div className="mt-6">
                <Link
                  href={`/kunskapsbank/${post.slug}`}
                  className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 hover:shadow-md"
                >
                  Läs mer
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


