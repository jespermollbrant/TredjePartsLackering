import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guide: Hur bedömer man kvaliteten på en lackerad yta? – 3. P. Lackering",
  description:
    "En expertförklaring av hur kvalitet på lackerade ytor bedöms objektivt – avstånd, ljus och tid – samt vanliga defekter och hur vi säkerställer er kvalitet.",
};

export default function BlogPostPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article className="prose prose-neutral max-w-none">
        <h1>
          Guide: Hur bedömer man kvaliteten på en lackerad yta? En expert
          förklarar.
        </h1>
        <p>
          När är "bra nog" verkligen bra nog? Alla vill ha en "bra finish" på sina
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
        <p>
          Har du ett projekt där kvaliteten är avgörande? Kontakta oss, så ser vi
          till att det blir rätt från början – enligt branschens alla regler.
        </p>
      </article>
    </main>
  );
}


