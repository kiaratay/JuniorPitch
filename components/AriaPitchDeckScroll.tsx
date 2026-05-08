"use client";

import Link from "next/link";
import { PitchLiveDemo } from "./PitchLiveDemo";
import { useCallback, useEffect, useRef, useState } from "react";

type SlideContent = {
  headline: string;
  body: string[];
  variant?: "default" | "sleek-mock" | "live-demo";
};

export const ariaPitchSlides: SlideContent[] = [
  {
    headline: "When we think of personal healthcare apps…",
    body: [
      "We think of something like this: accessible, colourful, data-rich.",
      "But how well do you think your grandma could navigate the system? Would she find it intuitive to log each symptom in an app and do standard healthcare admin?",
      "Most products assume comfort with glass and English. Our users start from a different posture: limited English, unfamiliar NHS pathways, and leaning on family for every step."
    ],
    variant: "sleek-mock"
  },
  {
    headline: "This is why we made Aria.",
    body: [
      "Aria is an AI health companion centred on older people. The UI and UX are tuned for their primary healthcare journey.",
      "It also lets older people offload a lot of healthcare admin to their children. We are always booking appointments and tracking medication for our grandparents anyway, so Aria optimises and consolidates that into one app."
    ]
  },
  {
    headline: "Profile: Ms Lim",
    body: [
      "Test scenario: I am Ms Lim, 60, with diabetes complications. I am not confident in English and have little experience with the NHS. I rely on my 26-year-old child to book appointments and help with primary care.",
      "I have had headaches and heartache (chest discomfort) and want to know if I should go to hospital. I am not fluent in English or medical terms, so checking symptoms on the NHS app is hard, and the process feels too long."
    ]
  },
  {
    headline: "Live demo start",
    body: [
      "LIVE DEMO START: open Aria’s voice agent and talk for around 10 minutes.",
      "Use “上火” as the cultural example: keep the term and context (Kleinman, 1978), show the symptom log line, then summary and actionables to your child/carer with transcript cross-check and booking help.",
      "At the GP, record in Aria: translate and simplify the doctor’s words. LIVE DEMO END: send visit summary and medicines to the carer too.",
      "On the next slide, use Next and Back in the card to match this script, then continue to ethics if you need the PubMed screenshots on stage."
    ]
  },
  {
    headline: "Embedded script walkthrough",
    body: [
      "Match your narration to each step. When you finish the story, continue to ethics for the four principles and citations."
    ],
    variant: "live-demo"
  },
  {
    headline: "Market and dignity",
    body: [
      "We think Aria is a valuable addition to health tech: an underserved group gets support while older people navigate primary health with dignity.",
      "Thank you."
    ]
  }
];

/** Decorative “young fitness app” card for contrast */
export function SleekHealthMockCard() {
  return (
    <div
      style={{
        marginTop: "0.85rem",
        borderRadius: 16,
        border: "1px solid var(--line)",
        background:
          "linear-gradient(155deg,#e8fbf3 0%,#f2f9ff 40%,#fff 100%), repeating-linear-gradient(90deg,#00000006 0 1px,transparent 1px 8px)",
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.65rem",
        maxWidth: 420,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 24px 50px -32px rgba(20,26,33,0.25)"
      }}
    >
      <div style={{ gridColumn: "1 / -1", fontWeight: 700, fontSize: "0.85rem", color: "var(--text)" }}>
        Today
      </div>
      <div style={{ padding: "0.55rem 0.65rem", borderRadius: 10, background: "#fff", border: "1px solid var(--line)" }}>
        <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Steps</div>
        <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>14,892</div>
      </div>
      <div style={{ padding: "0.55rem 0.65rem", borderRadius: 10, background: "#fff", border: "1px solid var(--line)" }}>
        <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Sleep</div>
        <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>92%</div>
      </div>
      <div style={{ gridColumn: "1 / -1", height: 8, borderRadius: 999, background: "#e9eef5" }}>
        <div style={{ width: "68%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#1ad4a9,#2196f3)" }} />
      </div>
      <div
        style={{
          gridColumn: "1 / -1",
          fontSize: "0.75rem",
          color: "var(--muted)",
          textAlign: "center",
          fontStyle: "italic"
        }}
      >
        Imagined “default” persona · not grandma’s realities
      </div>
    </div>
  );
}

export type AriaPitchDeckScrollProps = {
  headerKicker: string;
  backHref: string;
  backLabel: string;
  /** `pitch`: cross-subtle backdrop. `demo`: warm neutral (matches former /demo page). */
  tone?: "pitch" | "demo";
  slideDomIdPrefix?: string;
};

export function AriaPitchDeckScroll({
  headerKicker,
  backHref,
  backLabel,
  tone = "pitch",
  slideDomIdPrefix = "aria-slide"
}: AriaPitchDeckScrollProps) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const indexChangeSource = useRef<"scroll" | "ui" | null>(null);
  const scrollRaf = useRef<number>(0);
  const suppressScrollIndexUntil = useRef(0);

  const goPrev = useCallback(() => {
    suppressScrollIndexUntil.current = performance.now() + 520;
    indexChangeSource.current = "ui";
    setIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    suppressScrollIndexUntil.current = performance.now() + 520;
    indexChangeSource.current = "ui";
    setIndex((prev) => Math.min(ariaPitchSlides.length - 1, prev + 1));
  }, []);

  const goToSlide = useCallback((i: number) => {
    suppressScrollIndexUntil.current = performance.now() + 520;
    indexChangeSource.current = "ui";
    setIndex(i);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    const root = scrollRef.current;
    const el = slideRefs.current[index];
    if (!root || !el) return;
    if (indexChangeSource.current === "scroll") {
      indexChangeSource.current = null;
      return;
    }
    indexChangeSource.current = null;
    const target = el.offsetTop;
    if (Math.abs(root.scrollTop - target) < 2) return;
    root.scrollTo({ top: target, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    function onScroll() {
      cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = window.requestAnimationFrame(() => {
        const scrollRoot = scrollRef.current;
        if (!scrollRoot || performance.now() < suppressScrollIndexUntil.current) return;
        const marker = scrollRoot.scrollTop + scrollRoot.clientHeight * 0.32;
        let best = 0;
        slideRefs.current.forEach((section, i) => {
          if (!section) return;
          if (section.offsetTop <= marker + 1) best = i;
        });
        setIndex((prev) => {
          if (best === prev) return prev;
          indexChangeSource.current = "scroll";
          return best;
        });
      });
    }

    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      root.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  return (
    <main
      data-aria-pitch-scroll
      className={tone === "demo" ? "viewport" : "viewport bg-cross-subtle"}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        maxHeight: "100dvh",
        padding: "clamp(1rem, 3vw, 1.75rem)",
        gap: "0.75rem",
        overflow: "hidden",
        boxSizing: "border-box",
        ...(tone === "demo" ? { backgroundColor: "#f7f6f3" } : null)
      }}
    >
      <header
        className="shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem"
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.6875rem",
            fontWeight: 650,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--muted)"
          }}
        >
          {headerKicker}
        </p>
        <Link className="link-quiet" href={backHref}>
          {backLabel}
        </Link>
      </header>

      <div
        className="shell"
        ref={scrollRef}
        style={{
          flex: 1,
          minHeight: 0,
          overflowX: "hidden",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          overscrollBehaviorY: "contain",
          WebkitOverflowScrolling: "touch",
          borderRadius: 14
        }}
      >
        {ariaPitchSlides.map((slide, i) => {
          const isLiveSlide = slide.variant === "live-demo";
          return (
            <section
              key={slide.headline}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              id={`${slideDomIdPrefix}-${i}`}
              aria-current={i === index ? "true" : undefined}
              aria-label={`Slide ${i + 1} of ${ariaPitchSlides.length}: ${slide.headline}`}
              className="card home-visual"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                flexShrink: 0,
                minHeight: "100%",
                height: "auto",
                boxSizing: "border-box",
                display: "grid",
                placeItems: "start center",
                textAlign: "center",
                padding: "clamp(1.1rem, 3.5vw, 2.25rem)"
              }}
            >
              <div
                style={{
                  maxWidth: 780,
                  width: "100%",
                  display: "grid",
                  gap: "clamp(0.65rem, 2vw, 1rem)",
                  margin: "auto 0"
                }}
              >
                <small style={{ margin: 0, color: "var(--muted)" }}>
                  Slide {i + 1} / {ariaPitchSlides.length}
                </small>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.5rem, 4.2vw, 2.55rem)",
                    fontWeight: 650,
                    lineHeight: 1.12
                  }}
                >
                  {slide.headline}
                </h1>
                <div
                  style={{
                    display: "grid",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)"
                  }}
                >
                  {slide.body.map((line, j) => (
                    <p
                      key={j}
                      style={{
                        margin: 0,
                        color: "var(--muted)",
                        fontSize: "clamp(0.9rem, 2.25vw, 1.04rem)",
                        lineHeight: 1.65
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {slide.variant === "sleek-mock" ? <SleekHealthMockCard /> : null}
                {isLiveSlide ? <PitchLiveDemo /> : null}

                <div
                  role="group"
                  aria-label="Jump to slide"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.45rem",
                    flexWrap: "wrap",
                    marginTop: isLiveSlide ? "0.65rem" : "0.5rem"
                  }}
                >
                  {ariaPitchSlides.map((s, dotI) => (
                    <button
                      key={dotI}
                      type="button"
                      aria-label={`Go to slide ${dotI + 1}: ${s.headline}`}
                      aria-current={dotI === index ? "true" : undefined}
                      onClick={() => goToSlide(dotI)}
                      style={{
                        width: dotI === index ? 22 : 8,
                        height: 8,
                        padding: 0,
                        border: "none",
                        borderRadius: 999,
                        background: dotI === index ? "var(--text)" : "var(--line-strong)",
                        opacity: dotI === index ? 1 : 0.55,
                        cursor: "pointer",
                        transition: "width 0.2s ease, opacity 0.2s ease, background 0.2s ease"
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <p
        className="shell"
        style={{
          margin: 0,
          fontSize: "0.72rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--muted)",
          textAlign: "center",
          opacity: 0.85,
          flexShrink: 0
        }}
      >
        Scroll or use arrows: each slide snaps to the frame. On slide 5, use Next / Back in the card, then Continue to
        ethics.
      </p>

      <footer
        className="shell"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.6rem",
          flexWrap: "wrap",
          paddingBottom: "0.25rem",
          flexShrink: 0
        }}
      >
        <button className="btn" type="button" onClick={goPrev} disabled={index === 0}>
          Previous
        </button>
        <button className="btn" type="button" onClick={goNext} disabled={index === ariaPitchSlides.length - 1}>
          Next
        </button>
      </footer>
    </main>
  );
}
