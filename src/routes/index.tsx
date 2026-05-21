import { createFileRoute } from "@tanstack/react-router";
import heroBook from "../assets/hero-book.jpg";
import gothicWindow from "../assets/gothic-window.jpg";
import conceptBooks from "../assets/concept-books.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Întâlnire pe nevăzute cu o carte — Lasă destinul să-ți aleagă următoarea lectură" },
      {
        name: "description",
        content:
          "O surpriză literară misterioasă și gotică. Fiecare carte este învelită cu grijă, sigilată cu ceară și livrată cu un bilet scris de mână și un mic suvenir.",
      },
      { property: "og:title", content: "Întâlnire pe nevăzute cu o carte" },
      {
        property: "og:description",
        content:
          "Lasă destinul să-ți aleagă următoarea lectură. Învelită cu grijă și o notă de întuneric.",
      },
    ],
  }),
});

const PURCHASE_URL = "https://yourbookshop.com/blind-date";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="ornament flex-1 max-w-[6rem]" aria-hidden />
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        className="text-gold animate-flicker"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M12 2l1.6 4.9L18.5 8l-4 3.4 1.3 5.1L12 13.9 8.2 16.5l1.3-5.1L5.5 8l4.9-1.1L12 2z"
        />
      </svg>
      <span className="ornament flex-1 max-w-[6rem]" aria-hidden />
    </div>
  );
}

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Top nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 animate-fade-in">
        <a href="#top" className="font-display text-lg tracking-widest text-gold">
          ✦ BDWAB
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex">
          <a href="#concept" className="transition-colors hover:text-gold">Ritualul</a>
          <a href="#inside" className="transition-colors hover:text-gold">Ce conține</a>
          <a href="#order" className="transition-colors hover:text-gold">Comandă</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-8 pb-24 md:grid-cols-2 md:pt-16 md:pb-32">
          <div className="relative z-10">
            <p className="animate-fade-up text-xs uppercase tracking-[0.45em] text-gold/80">
              O ședință literară
            </p>
            <h1 className="animate-fade-up delay-100 mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Întâlnire <span className="italic text-gold">pe nevăzute cu o</span> Carte
            </h1>
            <p className="animate-fade-up delay-200 mt-6 max-w-md font-serif text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Lasă destinul să-ți aleagă următoarea lectură. Învelită cu grijă
              <span className="text-foreground/90"> și o notă de întuneric.</span>
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-5">
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-gold/70 bg-gradient-to-b from-[oklch(0.36_0.13_15)] to-[oklch(0.22_0.08_15)] px-8 py-4 font-display text-base tracking-[0.2em] text-foreground uppercase shadow-[0_8px_40px_-12px_oklch(0.74_0.12_80/0.4)] transition-all duration-500 hover:border-gold hover:shadow-[0_8px_50px_-8px_oklch(0.74_0.12_80/0.7)] hover:-translate-y-0.5"
              >
                <span className="relative">Surprinde-mă</span>
                <span
                  aria-hidden
                  className="relative transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </a>
              <a
                href="#concept"
                className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-gold"
              >
                Descoperă ritualul
              </a>
            </div>

            <Ornament className="mt-12 max-w-sm" />
          </div>

          <div className="animate-fade-in delay-200 relative">
            <div className="vignette relative overflow-hidden rounded-sm border border-gold/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <img
                src={heroBook}
                alt="A book wrapped in aged kraft paper, tied with a dusty violet velvet ribbon and sealed with a muted gold wax seal, surrounded by dried roses and candlelight."
                width={1536}
                height={1536}
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.74_0.12_80/0.18),transparent_70%)] blur-2xl" />
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="relative border-y border-gold/10 bg-[oklch(0.12_0.02_20/0.6)] backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">The Ritual</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
            You won't know the title <em className="text-gold">until it arrives.</em>
          </h2>
          <Ornament className="mt-10" />
          <p className="mx-auto mt-10 max-w-2xl font-serif text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Each book is hand-selected by candlelight and bound in brown paper.
            Whispered cues hint at its soul — a mood, a season, a single line —
            but the title remains a secret until the wax seal is broken.
          </p>
        </div>
      </section>

      {/* Inside the parcel */}
      <section id="inside" className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="relative order-2 md:order-1">
            <div className="vignette relative overflow-hidden rounded-sm border border-gold/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <img
                src={conceptBooks}
                alt="Antique leather-bound books with gold gilt, a handwritten note, a pressed black rose and a brass key on burgundy velvet."
                width={1536}
                height={1152}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Inside the Parcel</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              A small ceremony, <em className="text-gold">delivered.</em>
            </h2>

            <ul className="mt-10 space-y-7 font-serif text-lg text-muted-foreground sm:text-xl">
              {[
                {
                  title: "A curated novel",
                  body: "Chosen for its atmosphere — gothic, romantic, strange, or beautifully unsettling.",
                },
                {
                  title: "A handwritten note",
                  body: "Penned by candlelight on aged parchment, offering a single clue.",
                },
                {
                  title: "A ribboned bookmark",
                  body: "Velvet ribbon and brass charm, to keep your place between worlds.",
                },
                {
                  title: "A small gothic keepsake",
                  body: "A pressed flower, a wax-sealed letter, or a celestial trinket.",
                },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className="group flex gap-5 transition-colors"
                  style={{ animation: `fadeUp 0.9s ease-out ${0.1 + i * 0.1}s both` }}
                >
                  <span className="mt-3 inline-block h-px w-8 flex-shrink-0 bg-gold/60 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                  <div>
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="mt-1 text-base leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA with gothic window */}
      <section id="order" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={gothicWindow}
            alt=""
            width={1280}
            height={1600}
            loading="lazy"
            aria-hidden
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Step Into the Library</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
            Will you trust <em className="text-gold">fate</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl text-muted-foreground sm:text-2xl">
            Your next obsession is waiting in the dark.
          </p>

          <a
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden rounded-sm border border-gold/70 bg-gradient-to-b from-[oklch(0.36_0.13_15)] to-[oklch(0.22_0.08_15)] px-10 py-5 font-display text-base tracking-[0.25em] text-foreground uppercase shadow-[0_10px_50px_-12px_oklch(0.74_0.12_80/0.5)] transition-all duration-500 hover:border-gold hover:shadow-[0_10px_60px_-8px_oklch(0.74_0.12_80/0.8)] hover:-translate-y-0.5"
          >
            <span>Get Your Blind Date</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>

          <Ornament className="mt-14" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gold/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Blind Date with a Book
          </p>

          {/* Raven silhouette */}
          <svg
            viewBox="0 0 64 32"
            width="56"
            height="28"
            className="text-gold/70 transition-colors hover:text-gold"
            aria-label="Raven"
          >
            <path
              fill="currentColor"
              d="M2 22c4-1 7-2 10-5 1 3 4 5 8 5 3 0 5-1 7-3 1 4 5 6 10 6 6 0 11-3 13-8-3 2-7 3-10 2 3-2 5-5 5-9-2 3-5 5-9 5-2 0-4-1-5-3-1 2-3 4-6 4-2 0-4-1-5-2-1 3-4 6-8 7-3 1-7 1-10 1z"
            />
          </svg>

          <p className="font-serif text-sm italic text-muted-foreground">
            "Books are a uniquely portable magic." ✦
          </p>
        </div>
      </footer>
    </main>
  );
}
