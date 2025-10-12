"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"powder" | "wet" | "blasting" | "corrosion">("powder");
  // const [partnerSearch] = useState("");
  const [showEndCustomer, setShowEndCustomer] = useState(false);
  const [geminiLoading, setGeminiLoading] = useState(false);
  const [geminiVisible, setGeminiVisible] = useState(false);
  const [geminiHtml, setGeminiHtml] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileListRef = useRef<HTMLParagraphElement | null>(null);
  const selectedFilesRef = useRef<Map<string, File>>(new Map());
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; annotated: boolean }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentTool, setCurrentTool] = useState<"paint" | "mask" | "pan">("paint");
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawingRef = useRef(false);
  const historyRef = useRef<ImageData[]>([]);
  const imageFileIndexRef = useRef<number | null>(null);
  const currentImageNameRef = useRef<string | null>(null);
  const scaleRef = useRef<number>(1);
  const [annotations, setAnnotations] = useState<Record<string, Blob>>({});
  const panStateRef = useRef<{ active: boolean; startX: number; startY: number; startScrollLeft: number; startScrollTop: number }>({
    active: false,
    startX: 0,
    startY: 0,
    startScrollLeft: 0,
    startScrollTop: 0,
  });
  const forceRerenderRef = useRef(0); // used to trigger rerenders when zoom via buttons
  
  function removeUploadedFile(fileName: string) {
    // Update state list
    setUploadedFiles((prev) => prev.filter((u) => u.name !== fileName));
    // Remove any saved annotation for this file
    setAnnotations((prev) => {
      const next = { ...prev };
      delete next[fileName];
      return next;
    });
    // Remove from the internal selected files map and rebuild input files
    selectedFilesRef.current.delete(fileName);
    const input = fileInputRef.current;
    if (input && input.files && input.files.length > 0) {
      const dt = new DataTransfer();
      for (const f of selectedFilesRef.current.values()) {
        dt.items.add(f);
      }
      input.files = dt.files;
    }
  }

  // const partners = useMemo(
  //   () => [
  //     { name: "Ytbehandling AB", services: ["Pulver", "Våt"] },
  //     { name: "ColorPro Industrilack", services: ["Våt"] },
  //     { name: "Malmö Pulverlackering", services: ["Pulver"] },
  //     { name: "Norrlands Ytskydd", services: ["Våt", "Blästring"] },
  //     { name: "Smålands Komponentlack", services: ["Pulver"] },
  //     { name: "Dalarnas Färg & Skydd", services: ["Våt"] },
  //     { name: "Västkustens Lackcenter", services: ["Pulver", "Våt"] },
  //     { name: "Industriell Finish Syd", services: ["Pulver"] },
  //     { name: "Mälardalens Ytbehandling", services: ["Våt"] },
  //     { name: "Gävle Industrifärg", services: ["Pulver"] },
  //     { name: "Linköpings Lackverkstad", services: ["Våt"] },
  //     { name: "Örebro Coating Center", services: ["Pulver", "Våt"] },
  //   ],
  //   []
  // );

  // const filteredPartners = useMemo(() => {
  //   const term = partnerSearch.toLowerCase();
  //   return partners.filter((p) => p.name.toLowerCase().includes(term));
  // }, [partnerSearch, partners]);

  useEffect(() => {
    const canvasEl = canvasRef.current as HTMLCanvasElement | null;
    if (!canvasEl) return;
    const ctx = canvasEl.getContext("2d");
    ctxRef.current = ctx;

    function getPos(e: MouseEvent | TouchEvent) {
      const rect = canvasEl!.getBoundingClientRect();
      const clientX = (e as TouchEvent).touches?.[0]?.clientX ?? (e as MouseEvent).clientX;
      const clientY = (e as TouchEvent).touches?.[0]?.clientY ?? (e as MouseEvent).clientY;
      const scale = scaleRef.current || 1;
      return { x: (clientX - rect.left) / scale, y: (clientY - rect.top) / scale };
    }

    function draw(e: MouseEvent | TouchEvent) {
      // const canvas = canvasEl!;
      if (currentTool === 'pan') return; // drawing disabled while panning
      if (!isDrawingRef.current || !ctxRef.current) return;
      e.preventDefault();
      const pos = getPos(e);
      const ctx2 = ctxRef.current;
      ctx2.lineWidth = 5;
      ctx2.lineCap = "round";
      ctx2.strokeStyle =
        currentTool === "paint" ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)";
      ctx2.lineTo(pos.x, pos.y);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.moveTo(pos.x, pos.y);
    }

    function start(e: MouseEvent | TouchEvent) {
      if (!ctxRef.current) return;
      if (currentTool === 'pan') {
        const clientX = (e as TouchEvent).touches?.[0]?.clientX ?? (e as MouseEvent).clientX;
        const clientY = (e as TouchEvent).touches?.[0]?.clientY ?? (e as MouseEvent).clientY;
        const container = containerRef.current;
        if (container) {
          panStateRef.current = {
            active: true,
            startX: clientX,
            startY: clientY,
            startScrollLeft: container.scrollLeft,
            startScrollTop: container.scrollTop,
          };
          canvasEl!.style.cursor = 'grabbing';
        }
        return;
      }
      isDrawingRef.current = true;
      const pos = getPos(e);
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(pos.x, pos.y);
      draw(e);
    }

    function stop() {
      if (!ctxRef.current) return;
      if (currentTool === 'pan') {
        panStateRef.current.active = false;
        const canvas = canvasEl!;
        canvas.style.cursor = 'grab';
        return;
      }
      if (isDrawingRef.current) {
        historyRef.current.push(
          ctxRef.current.getImageData(0, 0, canvasEl!.width, canvasEl!.height)
        );
      }
      isDrawingRef.current = false;
      ctxRef.current.beginPath();
    }

    const onMouseDown = (e: MouseEvent) => start(e);
    const onMouseUp = () => stop();
    const onMouseOut = () => stop();
    const onMouseMove = (e: MouseEvent) => {
      if (currentTool === 'pan' && panStateRef.current.active) {
        e.preventDefault();
        const container = containerRef.current;
        if (container) {
          const dx = (e as MouseEvent).clientX - panStateRef.current.startX;
          const dy = (e as MouseEvent).clientY - panStateRef.current.startY;
          container.scrollLeft = panStateRef.current.startScrollLeft - dx;
          container.scrollTop = panStateRef.current.startScrollTop - dy;
        }
        return;
      }
      draw(e);
    };
    const onTouchStart = (e: TouchEvent) => start(e);
    const onTouchEnd = () => stop();
    const onTouchMove = (e: TouchEvent) => {
      if (currentTool === 'pan' && panStateRef.current.active) {
        e.preventDefault();
        const container = containerRef.current;
        if (container) {
          const clientX = (e as TouchEvent).touches?.[0]?.clientX ?? 0;
          const clientY = (e as TouchEvent).touches?.[0]?.clientY ?? 0;
          const dx = clientX - panStateRef.current.startX;
          const dy = clientY - panStateRef.current.startY;
          container.scrollLeft = panStateRef.current.startScrollLeft - dx;
          container.scrollTop = panStateRef.current.startScrollTop - dy;
        }
        return;
      }
      draw(e);
    };

    canvasEl.addEventListener("mousedown", onMouseDown);
    canvasEl.addEventListener("mouseup", onMouseUp);
    canvasEl.addEventListener("mouseout", onMouseOut);
    canvasEl.addEventListener("mousemove", onMouseMove);
    canvasEl.addEventListener("touchstart", onTouchStart, { passive: false });
    canvasEl.addEventListener("touchend", onTouchEnd);
    canvasEl.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      canvasEl.removeEventListener("mousedown", onMouseDown);
      canvasEl.removeEventListener("mouseup", onMouseUp);
      canvasEl.removeEventListener("mouseout", onMouseOut);
      canvasEl.removeEventListener("mousemove", onMouseMove);
      canvasEl.removeEventListener("touchstart", onTouchStart);
      canvasEl.removeEventListener("touchend", onTouchEnd);
      canvasEl.removeEventListener("touchmove", onTouchMove);
    };
  }, [currentTool, isModalOpen]);

  // Zoom with mouse wheel on the canvas container
  useEffect(() => {
    const container = containerRef.current as HTMLDivElement | null;
    const canvasEl = canvasRef.current as HTMLCanvasElement | null;
    if (!container || !canvasEl) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      const prev = scaleRef.current || 1;
      const factor = delta > 0 ? 0.9 : 1.1;
      const next = Math.min(5, Math.max(0.5, prev * factor));
      scaleRef.current = next;
      canvasEl.style.transform = `scale(${next})`;
      canvasEl.style.transformOrigin = "top left";
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isModalOpen]);

  function applyZoom(next: number) {
    const canvasEl = canvasRef.current as HTMLCanvasElement | null;
    if (!canvasEl) return;
    scaleRef.current = next;
    canvasEl.style.transform = `scale(${next})`;
    canvasEl.style.transformOrigin = "top left";
    // trigger a re-render so overlay buttons update disabled state if needed
    forceRerenderRef.current++;
  }

  function zoomIn() {
    const prev = scaleRef.current || 1;
    const next = Math.min(5, prev * 1.1);
    applyZoom(next);
  }

  function zoomOut() {
    const prev = scaleRef.current || 1;
    const next = Math.max(0.5, prev * 0.9);
    applyZoom(next);
  }

  // function handleAnalyze() {
  //   setGeminiVisible(true);
  //   setGeminiLoading(true);
  //   setGeminiHtml("");
  //   const quality = (document.getElementById("quality-needs") as HTMLTextAreaElement)?.value || "";
  //   const masking = (document.getElementById("masking-info") as HTMLTextAreaElement)?.value || "";
  //   const pretreatment = (document.getElementById("pretreatment") as HTMLInputElement)?.value || "";
  //   const usageChecked = document.querySelector<HTMLInputElement>('input[name="usage"]:checked');
  //   const usage = usageChecked?.value ?? "ej specificerat";

  //   if (!quality && !masking && !pretreatment) {
  //     setGeminiLoading(false);
  //     setGeminiHtml(
  //       `<p class="text-red-600 font-medium">Vänligen fyll i fälten för kvalitetsbehov, maskering eller förbehandling för att få en analys.</p>`
  //     );
  //     return;
  //   }

  //   const prompt = `En kund fyller i en offertförfrågan för industrilackering. Baserat på informationen nedan, agera som en expert på ytbehandling och ge en kort, punktlista med förslag på förtydliganden eller frågor som hjälper kunden att få en mer exakt offert. Svara på svenska. Håll det vänligt och professionellt.
  // - Användningsområde: ${usage}
  // - Kundens beskrivning av kvalitetsbehov: "${quality}"
  // - Kundens beskrivning av maskering: "${masking}"
  // - Kundens beskrivning av förbehandling: "${pretreatment}"
  // Exempel på bra förslag: Om kunden skriver "hög finish", fråga om specifik glansgrad. Om de nämner "utomhus", föreslå att de specificerar en korrosivitetsklass som C3 eller C4. Formulera svaren som direkta, hjälpsamma tips till kunden.`;

  //   const apiKey = "";
  //   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  //   fetch(apiUrl, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  //   })
  //     .then(async (r) => {
  //       if (!r.ok) throw new Error(String(r.status));
  //       const j = await r.json();
  //       const text = j?.candidates?.[0]?.content?.parts?.[0]?.text as string | undefined;
  //       if (!text) throw new Error("Invalid response");
  //       const html =
  //         "<ul>" +
  //         text
  //           .split(/[\n\r]+/)
  //           .filter((line: string) => line.trim().startsWith("*") || line.trim().startsWith("-"))
  //           .map((line: string) => `<li class="list-disc list-inside mb-1">${line.replace(/[\*\-]\s*/, "")}</li>`)
  //           .join("") +
  //         "</ul>";
  //       setGeminiHtml(html);
  //     })
  //     .catch(() => {
  //       setGeminiHtml(
  //         `<p class="text-red-600 font-medium">Något gick fel vid analysen. Vänligen kontrollera din information och försök igen, eller skicka förfrågan direkt.</p>`
  //       );
  //     })
  //     .finally(() => setGeminiLoading(false));
  // }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const submitBtn = formEl.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    try {
      if (submitBtn) submitBtn.disabled = true;
      const data = new FormData(formEl);
      // attach any saved annotations as additional files
      const filenames = Object.keys(annotations);
      for (const name of filenames) {
        const blob = annotations[name];
        if (!blob) continue;
        const annotatedFile = new File([blob], `${name}.annotated.png`, { type: 'image/png' });
        data.append('drawing-annotations', annotatedFile);
      }
      setGeminiVisible(true);
      setGeminiLoading(true);
      setGeminiHtml('');
      const res = await fetch('/api/quote', { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      setGeminiLoading(false);
      setGeminiHtml(
        '<p class="text-green-600 font-medium">Tack! Din förfrågan är sparad. ID: ' +
          String(json.id || '') +
          '</p>'
      );
      formEl.reset();
      if (fileListRef.current) fileListRef.current.textContent = "";
      setUploadedFiles([]);
      selectedFilesRef.current.clear();
      setShowEndCustomer(false);
    } catch {
      setGeminiLoading(false);
      setGeminiHtml(
        '<p class="text-red-600 font-medium">Kunde inte skicka din förfrågan. Försök igen.</p>'
      );
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  }

  function onFilesChanged(files: FileList | null) {
    if (!files || files.length === 0) {
      if (fileListRef.current) fileListRef.current.textContent = "";
      return;
    }
    // accumulate uploaded files in state and internal map by name (avoid duplicates)
    const incoming = Array.from(files);
    const toAddState: { name: string; annotated: boolean }[] = [];
    for (const f of incoming) {
      if (!selectedFilesRef.current.has(f.name)) {
        selectedFilesRef.current.set(f.name, f);
        if (!uploadedFiles.some((u) => u.name === f.name)) {
          toAddState.push({ name: f.name, annotated: false });
        }
      }
    }
    if (toAddState.length > 0) setUploadedFiles((prev) => [...prev, ...toAddState]);
    // Sync the actual input's FileList so FormData(form) includes ALL selected files
    const input = fileInputRef.current;
    if (input) {
      const dt = new DataTransfer();
      for (const f of selectedFilesRef.current.values()) {
        dt.items.add(f);
      }
      input.files = dt.files;
    }
    // keep legacy text content for any other consumer
    if (fileListRef.current) {
      const names = Array.from(selectedFilesRef.current.keys()).join(", ");
      fileListRef.current.textContent = names ? `Valda filer: ${names}` : "";
    }

    const firstImage = incoming.find((f) => f.type.startsWith("image/"));
    if (!firstImage) return;
    imageFileIndexRef.current = incoming.indexOf(firstImage);
    currentImageNameRef.current = firstImage.name;
    openAnnotateFor(firstImage.name);
  }

  function markFileAsAnnotated() {
    const fileName = currentImageNameRef.current;
    if (!fileName) return setIsModalOpen(false);
    // update annotated status in state
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          setAnnotations((prev) => ({ ...prev, [fileName]: blob }));
          setUploadedFiles((prev) => prev.map((u) => (u.name === fileName ? { ...u, annotated: true } : u)));
        }
        setIsModalOpen(false);
      }, 'image/png');
    } else {
      setUploadedFiles((prev) => prev.map((u) => (u.name === fileName ? { ...u, annotated: true } : u)));
      setIsModalOpen(false);
    }
  }

  function openAnnotateFor(fileName: string) {
    const file = selectedFilesRef.current.get(fileName);
    if (!file) return;
    currentImageNameRef.current = fileName;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const img = new Image();
      img.onload = () => {
        setIsModalOpen(true);
        const tryInit = (attemptsLeft: number) => {
          const canvas = canvasRef.current;
          const container = containerRef.current;
          if (!canvas || !container) {
            if (attemptsLeft > 0) requestAnimationFrame(() => tryInit(attemptsLeft - 1));
            return;
          }
          const maxWidth = container.clientWidth || 800;
          const maxHeight = container.clientHeight || 600;
          const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
          canvas.width = Math.max(1, Math.floor(img.width * ratio));
          canvas.height = Math.max(1, Math.floor(img.height * ratio));
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctxRef.current = ctx;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          historyRef.current = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
          scaleRef.current = 1;
          canvas.style.transform = "scale(1)";
          canvas.style.transformOrigin = "top left";
          const containerEl = containerRef.current;
          if (containerEl) {
            containerEl.scrollLeft = 0;
            containerEl.scrollTop = 0;
          }
          canvas.style.cursor = currentTool === 'pan' ? 'grab' : 'crosshair';
        };
        requestAnimationFrame(() => tryInit(10));
      };
      img.src = String(evt.target?.result);
    };
    reader.readAsDataURL(file);
  }

  function undo() {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    if (historyRef.current.length > 1) {
      historyRef.current.pop();
      ctx.putImageData(historyRef.current[historyRef.current.length - 1], 0, 0);
    }
  }

  function clearAll() {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas || historyRef.current.length === 0) return;
    ctx.putImageData(historyRef.current[0], 0, 0);
    historyRef.current = [historyRef.current[0]];
  }

  return (
    <div className="text-slate-700">
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-brand-orange/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-slate-800 text-brand-orange">
              3. P. Lackering
              <span className="text-slate-800 text-sm"> - Förmedlare & Oberoende Expert av Lackering</span>
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#process" className="text-slate-600 hover:text-brand-orange transition-colors duration-200">
              Så fungerar det
            </a>
            <a href="#services" className="text-slate-600 hover:text-brand-blue transition-colors duration-200">
              Våra Tjänster
            </a>
            <a href="#industries" className="text-slate-600 hover:text-brand-red transition-colors duration-200">
              Branscher
            </a>
            <a href="#why-us" className="text-slate-600 hover:text-brand-yellow transition-colors duration-200">
              Varför Oss?
            </a>
          </div>
          <a
            href="#quote"
            className="btn-brand"
          >
            Offertförfrågan
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="bg-gradient-brand py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
            Industrilackering utan risk eller krångel
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Vi är en oberoende expertpartner och förmedlare av industrilackering. Istället för att lägga tid på att hitta och kvalitetssäkra leverantörer, har vi tillgång till ett nätverk av beprövade specialister. Beskriv ert behov, så hanterar vi hela processen – från analys och offert till logistik och garanterad kvalitet.  </p>
            <a
              href="#quote"
              className="bg-white text-brand-orange font-bold py-4 px-8 rounded-lg text-lg hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Starta din offertförfrågan
            </a>
          </div>
        </section>

        <section id="process" className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="section-title animate-fade-in-up">Från behov till leverans – en garanterat smidig process</h2>
            <p className="section-subtitle animate-fade-in-up">
            Vi har designat en transparent process där vi tar hand om detaljerna, så att ni kan fokusera på er kärnverksamhet. Varje steg är byggt för att maximera pålitlighet och minimera er administration. </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="card-brand p-6">
                  <div className="text-4xl mb-4 text-brand-orange font-bold">{n}.</div>
                  {n === 1 && (
                    <>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Förfrågan & Teknisk Rådgivning
                      </h3>
                      <p className="text-slate-600">
                      Allt börjar med er förfrågan. Istället för att bara ta emot den, agerar vi som er tekniska partner. Vi granskar underlaget, ställer rätt följdfrågor och säkerställer att alla specifikationer är kompletta. Detta minimerar risken för missförstånd och garanterar att jobbet blir rätt från start.   </p>
                    </>
                  )}
                  {n === 2 && (
                    <>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Optimal Matchning & Tydlig Offert
                      </h3>
                      <p className="text-slate-600">
                      Med ett komplett underlag matchar vi ert projekt mot den bäst lämpade specialistlackeraren i vårt kvalitetssäkrade nätverk – baserat på teknik, material och kapacitet. Ni får en enda, tydlig och konkurrenskraftig offert från oss, utan att behöva jämföra och förhandla med flera olika aktörer.  </p>
                    </>
                  )}
                  {n === 3 && (
                    <>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Projektledning & Aktiv Kvalitetskontroll
                      </h3>
                      <p className="text-slate-600">
                      När ni godkänt offerten tar vi fullt projektledaransvar. Vi koordinerar all logistik och agerar som er &quot;kontrollant på plats&quot;. Genom löpande uppföljning och en noggrann slutinspektion säkerställer vi att lackeringen uppfyller era exakta kvalitetskrav.    </p>
                    </>
                  )}
                  {n === 4 && (
                    <>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Punktlig Leverans & Enkel Administration
                      </h3>
                      <p className="text-slate-600">
                      Vi ser till att era färdigbehandlade produkter levereras tillbaka enligt överenskommen tidplan. Ni får en enda faktura från oss och en enda part att förhålla er till. Enkelt, tryggt och effektivt.   </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="services" className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="section-title text-brand-blue">Rätt ytbehandling för varje unikt behov</h2>
            <p className="section-subtitle">
            Att välja rätt metod är avgörande för slutresultatet. Vi analyserar era krav på funktion, estetik och kostnadseffektivitet för att säkerställa att ert projekt får den optimala ytbehandlingen. Genom vårt nätverk erbjuder vi en komplett portfölj av industrins främsta metoder. Nedanför är ett axplock av vanliga ytbehandlingsmetoder.     </p>
            <div className="max-w-4xl mx-auto text-left">
              <div className="flex justify-center border-b border-slate-200 mb-8">
                <button
                  onClick={() => setActiveTab("blasting")}
                  className={`tab-button text-lg py-3 px-6 border-b-2 border-transparent transition-colors duration-200 ${
                    activeTab === "blasting" ? "border-brand-green text-brand-green font-semibold" : "text-slate-500 hover:text-brand-green"
                  }`}
                >
                  Blästring
                </button>
                <button
                  onClick={() => setActiveTab("corrosion")}
                  className={`tab-button text-lg py-3 px-6 border-b-2 border-transparent transition-colors duration-200 ${
                    activeTab === "corrosion" ? "border-brand-yellow text-brand-yellow font-semibold" : "text-slate-500 hover:text-brand-yellow"
                  }`}
                >
                  Korrosionsskydd
                </button>
                <button
                  onClick={() => setActiveTab("powder")}
                  className={`tab-button text-lg py-3 px-6 border-b-2 border-transparent transition-colors duration-200 ${
                    activeTab === "powder" ? "border-brand-orange text-brand-orange font-semibold" : "text-slate-500 hover:text-brand-orange"
                  }`}
                >
                  Pulverlackering
                </button>
                <button
                  onClick={() => setActiveTab("wet")}
                  className={`tab-button text-lg py-3 px-6 border-b-2 border-transparent transition-colors duration-200 ${
                    activeTab === "wet" ? "border-brand-blue text-brand-blue font-semibold" : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Våtlackering
                </button>
                
              </div>

              {activeTab === "blasting" && (
                <div data-content="blasting" className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-green">
                    Blästring: Grundläggande ytförberedelse
                  </h3>
                  <p className="text-slate-600">
                    Blästring är en kritisk förbehandlingsmetod som säkerställer optimal vidhäftning för lackering. Genom att använda abrasiva medel under högt tryck avlägsnas orenheter, rost och gamla beläggningar, vilket skapar en ren och mottaglig yta för vidare behandling.
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Blästring i blästerskåp
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Blästrande bearbetning innesluten i ett skåp där abrasivt medel understödd av tryckluft skjutas ut mot arbetsstycket för att rengöra dess yta.
                    </p>
                    <h5 className="text-lg font-semibold text-brand-orange mb-2">
                      Hur fungerar metoden
                    </h5>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                      <li>
                        <strong>Innesluten process:</strong> Bearbetningen sker innesluten i ett skåp. Genom fast monterade gummihandskar eller styrning vrids antingen arbetsstycket eller sprutmunstycket för att komma åt de ytor som skall blästras.
                      </li>
                      <li>
                        <strong>Abrasiv accelerering:</strong> Ett abrasivt medel tillförs parallellt med tryckluft och accelereras upp i hastighet då det passerar blästermunstycket. Partiklarna slungas på så sätt mot arbetsstyckets yta och avlägsnar orenheter.
                      </li>
                      <li>
                        <strong>Återvinning:</strong> Finare damm som skapas sugs upp medan blästermedlet och tyngre avverkade partiklar faller ner genom gallret och samlas i en behållare i botten. Från behållaren sugs åter igen blästermedlet upp och sprutas genom munstycket.
                      </li>
                      <li>
                        <strong>Underhåll:</strong> Då blästermedlet slits samt att det blandas upp med tyngre avverkade partiklar från detaljen så måste det rengöras eller bytas regelbundet.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Fördelar och tillämpningar
                    </h4>
                    <p className="text-slate-600">
                      Blästring är särskilt effektivt för att förbereda metaller inför lackering, då det skapar en optimal ytstruktur för vidhäftning. Metoden används ofta som försteg inför pulverlackering och våtlackering, och är avgörande för att säkerställa långvarigt korrosionsskydd och hög kvalitet på den slutliga lackeringen.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "corrosion" && (
                <div data-content="corrosion" className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-yellow">
                    Korrosionsskydd: Långsiktigt skydd för alla miljöer
                  </h3>
                  <p className="text-slate-600">
                    Korrosionsskydd är avgörande för att säkerställa att metallkonstruktioner och komponenter bibehåller sin funktion och säkerhet över tid. Valet av material och beläggning påverkas av flera faktorer, där luftfuktighet och salt i luften har stor inverkan.
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Korrosivitetsklasser enligt SS-EN ISO 9223 och SS-EN ISO 12944-2
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-brand-orange pl-4">
                        <h5 className="text-lg font-semibold text-brand-orange mb-1">C1 - Mycket låg korrosion</h5>
                        <p className="text-slate-600 text-sm">
                          Miljö med mycket låg korrosion, exempelvis inomhus i uppvärmda utrymmen med torr luft och obetydliga mängder föroreningar. <strong>Rekommenderade ytbehandlingar:</strong> Elförzinkning, sendzimir, varmförzinkning, zink/nickel.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h5 className="text-lg font-semibold text-brand-blue mb-1">C2 - Låg korrosivitet</h5>
                        <p className="text-slate-600 text-sm">
                          Miljö med låg korrosivitet som icke uppvärmda utrymmen inomhus med varierande temperatur och luftfuktighet. Även utomhus i låga koncentrationer av luftföroreningar, landsbygdsområden. <strong>Rekommenderade ytbehandlingar:</strong> Sendzimir, varmförzinkning, zink/nickel.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand-green pl-4">
                        <h5 className="text-lg font-semibold text-brand-green mb-1">C3 - Måttlig korrosivitet</h5>
                        <p className="text-slate-600 text-sm">
                          Miljöer med måttlig korrosivitet. Inomhusmiljöer med måttlig luftfuktighet och vissa luftföroreningar. Utomhus i måttliga mängder luftföroreningar samt stadsområden och områden med lätt industri. <strong>Rekommenderade ytbehandlingar:</strong> Varmförzinkad, zink/nickel.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand-yellow pl-4">
                        <h5 className="text-lg font-semibold text-brand-yellow mb-1">C4 - Hög korrosivitet</h5>
                        <p className="text-slate-600 text-sm">
                          Miljö med hög korrosivitet – betydande mängder luftföroreningar i utomhusmiljöer eller måttliga mängder salt, industri och kustområden. Inomhusmiljö med hög luftfuktighet och stora mängder luftföroreningar. <strong>Rekommenderade ytbehandlingar:</strong> Varmförzinkad, zink/nickel, rostfri 304L.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand-red pl-4">
                        <h5 className="text-lg font-semibold text-brand-red mb-1">C5-I - Industriell miljö med mycket hög korrosivitet</h5>
                        <p className="text-slate-600 text-sm">
                          Industriområden utomhus med tufft klimat och hög luftfuktighet. Kust- och havsområden med stora mängder salt. Permanent fuktkondensation i inomhusmiljö och stora mängder luftföroreningar. <strong>Rekommenderade ytbehandlingar:</strong> Rostfri 304LK och syrafast 316L.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-600 pl-4">
                        <h5 className="text-lg font-semibold text-red-600 mb-1">C5-M - Marin miljö med mycket hög korrosivitet</h5>
                        <p className="text-slate-600 text-sm">
                          Utomhus miljöer som industri-, kust- och havsområden i subtropiska och tropiska klimat med salt och föroreningar, varvzoner. Inomhusmiljöer med extrem luftfuktighet, kondens och extremt tufft klimat. <strong>Rekommenderad ytbehandling:</strong> syrafast 316L.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Vår expertis
                    </h4>
                    <p className="text-slate-600">
                      Vi hjälper dig att välja rätt korrosionsskydd baserat på din specifika miljö och tillämpning. Genom att följa internationella standarder och använda beprövade metoder säkerställer vi att dina komponenter får optimalt skydd för sin förväntade livslängd.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === "powder" && (
                <div data-content="powder" className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-orange">
                    Pulverlackering: Slitstarkhet och effektivitet
                  </h3>
                  <p className="text-slate-600">
                    En miljövänlig och mycket slitstark metod där ett torrt, färgpigmenterat pulver appliceras elektrostatiskt på ett jordat objekt. Pulvret fäster vid ytan och härdas sedan i ugn, vilket får det att smälta samman till en jämn, hård och extremt tålig finish.
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Processen i detalj
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                      <li>
                        <strong>Förbehandling:</strong> Objektet rengörs noggrant, oftast genom blästring eller kemisk tvätt (t.ex. järnfosfatering), för att avlägsna alla orenheter och skapa en optimal yta för vidhäftning.
                      </li>
                      <li>
                        <strong>Applicering:</strong> Med hjälp av en sprutpistol laddas pulverpartiklarna elektrostatiskt och sprayas mot det jordade objektet. Laddningen gör att pulvret dras till och täcker hela ytan jämnt.
                      </li>
                      <li>
                        <strong>Härdning:</strong> Objektet förs in i en härdugn (ca 160-200°C) där pulvret smälter och flyter samman. Den kemiska reaktionen skapar ett hållbart och korslänkat färgskikt.
                      </li>
                      <li>
                        <strong>Kvalitetskontroll:</strong> Efter avsvalning inspekteras ytan noggrant med avseende på täckning, glans, skikttjocklek och eventuella defekter.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Kvalitet & Standarder
                    </h4>
                    <p className="text-slate-600">
                      Resultatet styrs av noggrann processkontroll. Kvalitetsnivån definieras ofta av krav på korrosionsskydd enligt <strong>ISO 12944</strong> för olika miljöer (C1-C5), samt krav på skikttjocklek (mäts i my, µm), vidhäftning (t.ex. gittersnittprov) och glansgrad.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "wet" && (
                <div data-content="wet" className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-blue">
                    Våtlackering: Flexibilitet och oöverträffad finish
                  </h3>
                  <p className="text-slate-600">
                    En traditionell och extremt mångsidig metod där flytande färg appliceras med sprutpistol. Metoden är idealisk för material som inte tål värme, komplexa geometrier och när specifika estetiska krav på färg, textur och glans måste uppfyllas.
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Processen i detalj
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                      <li>
                        <strong>Förbehandling:</strong> Liksom vid pulverlackering är förbehandlingen kritisk. Metoder som slipning, blästring eller kemisk rengöring används för att säkerställa en ren och mottaglig yta. Ofta appliceras en primer/grundfärg för maximalt skydd och vidhäftning.
                      </li>
                      <li>
                        <strong>Applicering:</strong> Färgen, som kan vara 1- eller 2-komponentsystem (färg + härdare), appliceras i en kontrollerad miljö (sprutbox) för att undvika damm och säkerställa en jämn yta. Flera skikt kan appliceras för att bygga upp önskat skydd och finish.
                      </li>
                      <li>
                        <strong>Torkning/Härdning:</strong> Färgen får torka, antingen lufttorkande eller i en ugn vid låg temperatur. Härdningsprocessen gör att färgskiktet blir hårt och motståndskraftigt.
                      </li>
                      <li>
                        <strong>Kvalitetskontroll:</strong> Finish, glans, kulörnoggrannhet och skikttjocklek kontrolleras noggrant för att säkerställa att resultatet motsvarar specifikationen.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-green mb-2">
                      Kvalitet & Standarder
                    </h4>
                    <p className="text-slate-600">
                      Med våtlackering kan man bygga komplexa färgsystem med flera skikt (grundfärg, mellanstrykning, topplack) för att möta de allra tuffaste kraven, exempelvis för offshore- eller marin miljö enligt <strong>NORSOK</strong> eller <strong>ISO 12944</strong> (klass C5). Ytans finish kan varieras från helmatt till högblank, och även specialeffekter som metallic eller strukturlack är möjliga.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>


        <section id="why-us" className="py-20 bg-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="section-title text-brand-yellow">Varför välja 3P Lackering?</h2>
            <p className="section-subtitle">
              Kunder väljer oss för att vi erbjuder mer än bara lackering. Vi är er strategiska partner som levererar en helhetslösning som sparar tid, minskar risker och garanterar ett resultat av högsta klass.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
              <div className="card-brand p-6 hover:border-brand-orange">
                <h3 className="text-xl font-semibold text-brand-orange mb-2">Riskhantering & Resiliens</h3>
                <p className="text-slate-600">
                  Bygg en motståndskraftig försörjningskedja. Att förlita sig på en enda leverantör är en risk. Vad händer vid kapacitetsbrist eller produktionsstopp? Vi agerar som ert förkvalificerade skyddsnät och säkrar er produktion genom att snabbt kunna matcha ert behov med rätt kapacitet i vårt nätverk. Det minimerar störningar och skapar trygghet.
                </p>
              </div>
              <div className="card-brand p-6 hover:border-brand-blue" style={{borderLeftColor: 'var(--color-blue)'}}>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">Flexibilitet för Specialiserade Behov</h3>
                <p className="text-slate-600">
                  Era behov är sällan statiska. Nya produkter, unika material eller varierande volymer kräver anpassningsförmåga. Vi matchar varje unikt uppdrag – från enstaka prototyper till stora serier – med den specialist som har exakt rätt utrustning och expertis för jobbet.
                </p>
              </div>
              <div className="card-brand p-6 hover:border-brand-green" style={{borderLeftColor: 'var(--color-green)'}}>
                <h3 className="text-xl font-semibold text-brand-green mb-2">Effektivitet & Minskad Administration</h3>
                <p className="text-slate-600">
                  Enkelhet som sparar tid och resurser. Glöm tidskrävande administration och hantering av flera leverantörer. Vi är er enda, kunniga kontaktpunkt som sköter allt från offert och teknisk specifikation till logistik och uppföljning. Ni får en snabb och smidig process så att ni kan fokusera på er kärnverksamhet.
                </p>
              </div>
              <div className="card-brand p-6 hover:border-brand-yellow" style={{borderLeftColor: 'var(--color-yellow)'}}>
                <h3 className="text-xl font-semibold text-brand-yellow mb-2">Kvalitetssäkring & Kontroll</h3>
                <p className="text-slate-600">
                  Garanterad kvalitet i varje steg. Med vår bakgrund inom industrilackering agerar vi som er oberoende expert. Vi kvalitetssäkrar hela processen, från förbehandling till slutinspektion, för att säkerställa att resultatet uppfyller era specifikationer och krav. Det är er trygghet för ett perfekt resultat, varje gång.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="py-20 bg-gradient-to-br from-slate-50 to-white relative">
          <div className="absolute inset-0 heritage-pattern"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="section-title text-brand-blue">Branscher inom industrilackering</h2>
            <p className="section-subtitle">
              Ett axplock av de branscher vi arbetar med
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
              <div className="card-brand p-6 hover:border-brand-orange">
                <h3 className="text-xl font-semibold text-brand-orange mb-3">
                  Verkstad- och Tillverkningsindustri
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Skydd i Krävande Miljöer</strong><br/>
                  Inom verkstads- och tillverkningsindustrin är kraven på slitstyrka och korrosionsskydd ofta extrema. Komponenter till tunga fordon, maskindelar och bärande stålkonstruktioner utsätts dagligen för mekaniskt slitage, kemikalier och varierande väderförhållanden. Här används robusta lackeringssystem, ofta baserade på tvåkomponents epoxi- eller polyuretanlacker, som skapar en motståndskraftig barriär. Förbehandling som blästring är vanligt för att säkerställa optimal vidhäftning och ett långvarigt skydd. Företag som Volvo, Scania och SSAB är exempel på aktörer vars produkter är beroende av högkvalitativ industrilackering för att garantera funktion och säkerhet över tid.
                </p>
              </div>
              
              <div className="card-brand p-6 hover:border-brand-blue" style={{borderLeftColor: 'var(--color-blue)'}}>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">
                  Byggindustrin
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Estetik Möter Funktion</strong><br/>
                  För byggindustrin fyller industrilackering en dubbel funktion: att skydda byggnadselement mot väder och vind samtidigt som den bidrar till det arkitektoniska uttrycket. Detaljer som fasadplåtar, fönsterprofiler i aluminium och undertak i metall genomgår ofta en pulverlackeringsprocess. Denna metod ger en extremt tålig, jämn och reptålig yta med hög kulörbeständighet. Pulverlackering är dessutom ett miljövänligt alternativ då processen inte involverar några lösningsmedel. Resultatet är hållbara och underhållsfria ytor som bibehåller sin lyster år efter år, vilket uppskattas av både fastighetsägare och föreskrivande arkitekter. Företag som Lindab och Ruukki förlitar sig på dessa tekniker för sina byggkomponenter.
                </p>
              </div>
              
              <div className="card-brand p-6 hover:border-brand-green" style={{borderLeftColor: 'var(--color-green)'}}>
                <h3 className="text-xl font-semibold text-brand-green mb-3">
                  Kök och Möbler i Trä
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Ytfinish i Fokus</strong><br/>
                  När det kommer till köksluckor, möbler och andra snickeridetaljer i trä står den estetiska finishen i centrum. Industrilackering inom detta segment handlar om att skapa vackra och hållbara ytor som tål vardagens slitage. Beroende på önskat utseende kan produkterna färglackeras i valfri kulör, betsas för att framhäva träets naturliga ådring eller oljas för en mjuk och levande känsla. Ofta används vattenbaserade och UV-härdande lacker som är både slitstarka och snabbtorkande, vilket effektiviserar produktionsprocessen. Kvalitetskänslan i ett kök från till exempel Marbodal eller en möbel från Lammhults definieras till stor del av den professionella ytbehandlingen.
                </p>
              </div>
              
              <div className="card-brand p-6 hover:border-brand-yellow" style={{borderLeftColor: 'var(--color-yellow)'}}>
                <h3 className="text-xl font-semibold text-brand-yellow mb-3">
                  Arkitektur och Inredning
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Detaljerna som Gör Skillnad</strong><br/>
                  Inom arkitektur och inredning används industrilackering för att förverkliga kreativa visioner och sätta en unik prägel på miljöer. Det kan handla om synliga profiler i en takkonstruktion, specialdesignade inredningsdetaljer i metall, eller konstnärliga installationer i offentliga rum. Här är kraven på ytfinish och kulörprecision av yttersta vikt. Ofta efterfrågas en bred palett av färger och effekter, från matt till högblankt, för att matcha en specifik design. En professionell lackeringspartner kan agera bollplank åt arkitekter och designers för att säkerställa att det slutgiltiga resultatet både är estetiskt tilltalande och har en hållbarhet som lämpar sig för den tänkta miljön.
                </p>
              </div>
              
              <div className="card-brand p-6 hover:border-brand-red" style={{borderLeftColor: 'var(--color-red)'}}>
                <h3 className="text-xl font-semibold text-brand-red mb-3">
                  Medicinteknik och Elektronik
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Precision och Renhet</strong><br/>
                  För medicinteknisk utrustning och känsliga elektronikkomponenter ställs helt unika krav på ytbehandlingen. Lacken måste inte bara skydda, utan kan även behöva ha specifika egenskaper såsom att vara biokompatibel, lätt att sterilisera eller avskärmande mot elektromagnetisk strålning. Appliceringen kräver extrem precision för att inte påverka komponenternas funktion. Ytorna måste vara släta och fria från orenheter för att uppfylla de stränga hygienkrav som råder inom medicinteknik. Företag som Getinge Group och Siemens Healthineers är beroende av specialiserade lackeringsprocesser för att deras produkter ska vara säkra och tillförlitliga.
                </p>
              </div>
              
              <div className="card-brand p-6 hover:border-brand-orange">
                <h3 className="text-xl font-semibold text-brand-orange mb-3">
                  Additiv Tillverkning
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Från Prototyp till Färdig Produkt</strong><br/>
                  Additiv tillverkning, eller 3D-printing, har revolutionerat produktutvecklingen. För att en 3D-printad detalj ska gå från en rå prototyp till en fullt funktionell och estetiskt tilltalande slutprodukt krävs ofta en efterbehandling. Industrilackering spelar här en nyckelroll för att släta ut ytor, dölja lagerlinjer och ge produkten önskad färg, glans och skyddande egenskaper. Lackeringen kan förbättra både den visuella kvaliteten och de mekaniska egenskaperna, såsom UV-resistens och reptålighet. Detta öppnar upp för nya möjligheter att använda 3D-printade delar i allt från fordonsindustrin till konsumentprodukter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Starta din förfrågan idag</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                Fyll i formuläret nedan så noggrant du kan. Ju mer information vi får, desto snabbare och mer exakt blir din offert. Vi återkommer normalt inom 24 timmar.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto bg-white text-slate-800 p-8 rounded-lg shadow-2xl space-y-6"
            >
              <fieldset className="border-t border-slate-200 pt-6">
                <legend className="text-lg font-semibold text-slate-800 mb-4">
                  Kundinformation
                </legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-slate-700">
                      Företagsnamn
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      name="company-name"
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
                        Kontaktperson
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="contact-name"
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className="block text sm font-medium text-slate-700">
                        Roll
                      </label>
                      <input
                        type="text"
                        id="contact-role"
                        name="contact-role"
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                        name="contact-email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="border-t border-slate-200 pt-6">
                <legend className="text-lg font-semibold text-slate-800 mb-4">
                  Produktinformation
                </legend>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">
                        Antal objekt (denna order)
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="volume-half-year" className="block text-sm font-medium text-slate-700">
                        Förväntad volym/halvår
                      </label>
                      <input
                        type="number"
                        id="volume-half-year"
                        name="volume-half-year"
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="color" className="block text-sm font-medium text-slate-700">
                      Färgkulör (Färg, RAL, NCS, etc.)
                    </label>
                    <input
                      type="text"
                      id="color"
                      name="color"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="surface-treatment-type" className="block text-sm font-medium text-slate-700">
                      Typ av Ytbehandling
                    </label>
                    <input
                      type="text"
                      id="surface-treatment-type"
                      name="surface-treatment-type"
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      placeholder="Ex: Pulverlackering, Våtlackering, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Användningsområde
                    </label>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="usage" value="indoor" className="form-radio text-blue-600" />
                        <span className="ml-2">Inomhus</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="usage" value="outdoor" className="form-radio text-blue-600" />
                        <span className="ml-2">Utomhus</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="usage" value="both" className="form-radio text-blue-600" />
                        <span className="ml-2">Båda</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="usage" value="unknown" className="form-radio text-blue-600" />
                        <span className="ml-2">Vet ej</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="finish-level" className="block text-sm font-medium text-slate-700">
                      Önskad ytfinish
                    </label>
                    <select
                      id="finish-level"
                      name="finish-level"
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm form-input"
                    >
                      <option>Välj nivå...</option>
                      <option value="low">Lägre nivå (t.ex. industri, dold yta)</option>
                      <option value="medium">Medium (t.ex. standard, synlig yta)</option>
                      <option value="high">Hög nivå (t.ex. premium, design)</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <fieldset className="border-t border-slate-200 pt-6">
                <legend className="text-lg font-semibold text-slate-800 mb-4">
                  Specifikation & Ritningar
                </legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="quality-needs" className="block text-sm font-medium text-slate-700">
                      Kvalitetsbehov & Korrosivitetsklass (eller annat önskemål)
                    </label>
                    <textarea
                      id="quality-needs"
                      name="quality-needs"
                      rows={2}
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      placeholder="Ex: Hög finish, klass C4, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="masking-info" className="block text-sm font-medium text-slate-700">
                      Ytor som ska och inte ska lackeras (maskering)
                    </label>
                    <textarea
                      id="masking-info"
                      name="masking-info"
                      rows={3}
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      placeholder="Beskriv vilka ytor som ska målas, och vilka ytor som eventuellt ska maskeras, t.ex. gängade hål, anliggningsytor..."
                    />
                  </div>
                  <div>
                    <label htmlFor="pretreatment" className="block text-sm font-medium text-slate-700">
                      Är objektet förbehandlat?
                    </label>
                    <input
                      type="text"
                      id="pretreatment"
                      name="pretreatment"
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      placeholder="Ex: blästrat, galvat, oljigt..."
                    />
                  </div>
                  <div>
                    <label htmlFor="drawing-upload" className="block text-sm font-medium text-slate-700">
                      Ladda upp ritningar
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="drawing-upload"
                      name="drawing-upload"
                      multiple
                      onChange={(e) => onFilesChanged(e.target.files)}
                      className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p ref={fileListRef} className="text-xs text-slate-500 mt-2"></p>
                    {uploadedFiles.length > 0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {uploadedFiles.map((f) => (
                          <li key={f.name} className="flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: f.annotated ? '#16a34a' : '#94a3b8' }} />
                              <span className="text-slate-700 truncate" title={f.name}>{f.name}</span>
                              {f.annotated && <span className="text-green-600" aria-label="annoterad">(annoterad)</span>}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeUploadedFile(f.name)}
                              title="Ta bort fil"
                              className="text-slate-500 hover:text-red-600 px-2 py-1 rounded border border-transparent hover:border-red-200"
                            >
                              Ta bort
                            </button>
                            {!f.annotated && (
                              <button
                                type="button"
                                onClick={() => openAnnotateFor(f.name)}
                                title="Annotera fil"
                                className="text-slate-600 hover:text-blue-700 px-2 py-1 rounded border border-transparent hover:border-blue-200"
                              >
                                Annotera
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="text-xs text-slate-500 mt-1">
                      Du kan markera ytor som ska lackeras direkt på bilduppladdningar (PNG/JPG) efter att du valt fil.
                    </p>
                  </div>
                </div>
              </fieldset>

              <fieldset className="border-t border-slate-200 pt-6">
                <legend className="text-lg font-semibold text-slate-800 mb-4">Leverans</legend>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="delivery-date" className="block text-sm font-medium text-slate-700">
                        Önskat leveransdatum
                      </label>
                      <input
                        type="date"
                        id="delivery-date"
                      name="delivery-date"
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Behov av leveransflexibilitet?
                        <span className="tooltip text-blue-600 font-normal">
                          (?)
                          <span className="tooltiptext">
                            En leverantörs förmåga att anpassa sig till kundens önskemål gällande leveranstid, plats och andra villkor.
                          </span>
                        </span>
                      </label>
                      <div className="mt-2 flex gap-4">
                        <label className="inline-flex items-center">
                          <input type="radio" name="flexibility" value="yes" className="form-radio text-blue-600" />
                          <span className="ml-2">Ja</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="flexibility" value="no" className="form-radio text-blue-600" />
                          <span className="ml-2">Nej</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Ska leverans ske direkt till slutkund?
                    </label>
                    <div className="mt-2 flex gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="end-customer-delivery"
                          value="yes"
                          onChange={() => setShowEndCustomer(true)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Ja</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="end-customer-delivery"
                          value="no"
                          defaultChecked
                          onChange={() => setShowEndCustomer(false)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Nej</span>
                      </label>
                    </div>
                  </div>
                  {showEndCustomer && (
                    <div className="space-y-4 pt-2">
                      <div>
                        <label htmlFor="end-customer-name" className="block text-sm font-medium text-slate-700">
                          Slutkundens namn
                        </label>
                        <input
                          type="text"
                          id="end-customer-name"
                          name="end-customer-name"
                          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="end-customer-address" className="block text-sm font-medium text-slate-700">
                          Slutkundens adress
                        </label>
                        <textarea
                          id="end-customer-address"
                          name="end-customer-address"
                          rows={2}
                          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm form-input"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </fieldset>

              <div id="gemini-result-container" className={`${geminiVisible ? "" : "hidden"} bg-slate-50 p-6 rounded-lg my-6 border border-slate-200`}>
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <span className="text-lg mr-2">✨</span> Svar från vår AI-assistent
                </h4>
                {geminiLoading && (
                  <div>
                    <p className="animate-pulse text-slate-600">
                      Analyserar din förfrågan, ett ögonblick...
                    </p>
                  </div>
                )}
                {!geminiLoading && (
                  <div
                    id="gemini-result-text"
                    className="text-slate-600 space-y-2"
                    dangerouslySetInnerHTML={{ __html: geminiHtml }}
                  />
                )}
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-4">
                
                <button
                  type="submit"
                  className="w-full btn-brand text-lg py-3 px-6"
                >
                  Begär Offert
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-12 border-t border-brand-orange/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <p className="font-bold text-white text-lg">3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering</p>
          </div>
          <p> Telefon: 0708214708</p>
          <div className="mt-4 space-x-6">
            <a href="#process" className="hover:text-brand-orange transition-colors duration-200">
              Process
            </a>
            <a href="#services" className="hover:text-brand-blue transition-colors duration-200">
              Tjänster
            </a>
            <a href="#industries" className="hover:text-brand-red transition-colors duration-200">
              Branscher
            </a>
            <a href="#quote" className="hover:text-brand-yellow transition-colors duration-200">
              Offert
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            &copy; 2025 - 3. P. Lackering - Oberoende Förmedlare & Expert av Industrilackering
          </p>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">Markera ytor på ritning</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-800">
                &times;
              </button>
            </div>
            <div className="p-4 flex-grow overflow-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow" style={{ width: '100%' }}>
                  <div
                    id="canvas-container"
                    ref={containerRef}
                    className="border rounded-lg overflow-auto flex items-start justify-start bg-slate-100"
                    style={{ minHeight: '50vh', maxHeight: '70vh', width: '100%' }}
                  >
                    <canvas id="drawing-canvas" ref={canvasRef} />
                  </div>
                  <div className="absolute top-2 right-2 z-30 flex flex-col gap-2 pointer-events-auto">
                    <button
                      type="button"
                      onClick={zoomIn}
                      aria-label="Zooma in"
                      className="w-8 h-8 rounded bg-white/90 border border-slate-300 shadow hover:bg-white text-slate-800 flex items-center justify-center"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={zoomOut}
                      aria-label="Zooma ut"
                      className="w-8 h-8 rounded bg-white/90 border border-slate-300 shadow hover:bg-white text-slate-800 flex items-center justify-center"
                    >
                      −
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-56 flex-shrink-0">
                  <h4 className="font-semibold mb-2">Verktyg</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setCurrentTool("pan")}
                      className={`w-full text-left p-2 rounded ${
                        currentTool === "pan"
                          ? "border-2 border-slate-500 bg-slate-50 text-slate-800 font-semibold"
                          : "border border-slate-300"
                      }`}
                    >
                      Förflytta (hand)
                    </button>
                    <button
                      onClick={() => setCurrentTool("paint")}
                      className={`w-full text-left p-2 rounded ${
                        currentTool === "paint"
                          ? "border-2 border-green-500 bg-green-50 text-green-800 font-semibold"
                          : "border border-slate-300"
                      }`}
                    >
                      Markera för lackering
                    </button>
                    <button
                      onClick={() => setCurrentTool("mask")}
                      className={`w-full text-left p-2 rounded ${
                        currentTool === "mask"
                          ? "border-2 border-red-500 bg-red-50"
                          : "border border-slate-300"
                      }`}
                    >
                      Markera för maskering
                    </button>
                    <button onClick={undo} className="w-full text-left p-2 rounded border border-slate-300 mt-4">Ångra senaste</button>
                    <button onClick={clearAll} className="w-full text-left p-2 rounded border border-slate-300">Rensa allt</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button onClick={markFileAsAnnotated} className="btn-brand">
                Spara och stäng
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .section-title { font-size: 2.25rem; font-weight: 700; color: #1e293b; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.125rem; color: #475569; max-width: 600px; margin: 0 auto 3rem auto; }
        .tooltip { position: relative; display: inline-block; }
        .tooltip .tooltiptext { visibility: hidden; width: 220px; background-color: #334155; color: #fff; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -110px; opacity: 0; transition: opacity 0.3s; font-size: 0.875rem; font-weight: 400; }
        .tooltip:hover .tooltiptext { visibility: visible; opacity: 1; }
        #drawing-canvas { cursor: crosshair; touch-action: none; }
        #canvas-container { touch-action: none; }
      `}</style>
    </div>
  );
}


