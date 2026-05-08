"use client";

import Link from "next/link";
import Image from "next/image";
import { PitchStudyCitations } from "./PitchStudyCitations";
import { Fragment, useEffect, useRef, useState } from "react";

function cn(...parts: (string | false | undefined | null)[]) {
  return parts.filter(Boolean).join(" ");
}

const monoFont = {
  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace"
} as const;

const borderSoft = "border border-[rgba(0,0,0,0.08)]";
const sectionTint = "bg-[#EFEDE7] rounded-[12px] border border-[rgba(0,0,0,0.08)]";
const btnPrimary =
  "inline-flex items-center justify-center rounded-[6px] bg-[#1A1A1A] px-4 py-1.5 text-[12px] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50";

function ChapterHead({
  index,
  slug,
  title,
  subtitle,
  subtitleAlign = "left"
}: {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  subtitleAlign?: "left" | "center";
}) {
  return (
    <div className="mb-5 px-3">
      <p
        className="m-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A8A]"
        style={monoFont}
      >
        {index} · {slug}
      </p>
      <h2 className="mt-3 m-0 max-w-[40ch] text-[clamp(1.35rem,3.8vw,1.95rem)] font-medium leading-snug tracking-[-0.02em] text-[#1A1A1A]">
        {title}
      </h2>
      <p
        className={cn(
          "mt-3 m-0 max-w-[42rem] text-[clamp(0.95rem,2vw,1.05rem)] leading-[1.6] text-[#5C5C5C]",
          subtitleAlign === "center" && "mx-auto text-center"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}

const ETHICS_PILLARS_CONCISE: { k: string; title: string; line: string }[] = [
  { k: "01", title: "Bias", line: "Keep cultural wording and context in the symptom log." },
  { k: "02", title: "Transparency", line: "Original audio and transcript stay next to AI output. GP can verify translation and summary." },
  { k: "03", title: "Accountability", line: "Humans approve booking and escalations. The product nudges, it does not silently replace judgment." },
  { k: "04", title: "Data privacy", line: "Least-privilege sharing: only delegated carers get summaries and visit artefacts." }
];

function EthicsPillarGrid() {
  return (
    <div className="mx-2">
      <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A8A]" style={monoFont}>
        Four pillars · Verma et al. (see prior slide)
      </p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {ETHICS_PILLARS_CONCISE.map((p) => (
          <div
            key={p.title}
            className="flex gap-3 rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-white p-3.5 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          >
            <span
              className="flex h-7 min-w-[1.85rem] items-center justify-center rounded-md bg-[#EFEDE7] font-mono text-[10px] font-semibold tabular-nums text-[#5C5C5C]"
              style={monoFont}
              aria-hidden
            >
              {p.k}
            </span>
            <div className="min-w-0">
              <p className="m-0 text-[13px] font-semibold tracking-[-0.01em] text-[#1A1A1A]">{p.title}</p>
              <p className="mt-1 m-0 text-[11.5px] leading-[1.5] text-[#5C5C5C]">{p.line}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-0 mt-3 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-[#A3A3A3]" style={monoFont}>
        Grounded in &lsquo;Ethical AI: what urologists need to know&rsquo;
      </p>
    </div>
  );
}

const BEATS = ["User case", "Live demo start", "KinLink Wearable", "Literature review", "Ethics"] as const;

const PERSONA_ID_BARCODE = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 2, 3] as const;

const PERSONA_NON_KINLINK_STEPS = [
  "First sign of symptom",
  "Explain symptoms to daughter",
  "Daughter books appointment",
  "Daughter accompanies her to an appointment"
] as const;

function PersonaPipelineStep({ index, label, className }: { index: number; label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[3.5rem] min-w-0 flex-col justify-center rounded border border-[#B8C4D6] bg-white px-2.5 py-2 text-left shadow-[0_1px_0_rgba(255,255,255,0.95)]",
        className
      )}
    >
      <span className="font-mono text-[6.5px] font-bold uppercase tracking-[0.16em] text-[#6B7F98]" style={monoFont}>
        Step {String(index + 1).padStart(2, "0")}
      </span>
      <p className="mt-1.5 m-0 text-[10px] font-semibold leading-snug tracking-[-0.01em] text-[#152432] sm:text-[10.5px]">{label}</p>
    </div>
  );
}

function PersonaFlowArrowDownCompact() {
  return (
    <div className="flex shrink-0 justify-center py-1 text-[#5F728A]" aria-hidden>
      <svg className="h-6 w-5" viewBox="0 0 20 32" fill="none">
        <path d="M10 4v17M7 17l3 8 3-8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    </div>
  );
}

const WEARABLE_GALLERY: {
  key: string;
  label: string;
  src: string;
  w: number;
  h: number;
  alt: string;
}[] = [
  {
    key: "lineup",
    label: "Product lineup",
    src: "/kinlink-wearable-lineup.png",
    w: 1024,
    h: 571,
    alt: "KinLink Wearable lineup: four ear-cuff devices in yellow gold, rose gold, matte black, and polished silver, showing sensor channels along the inner curve."
  },
  {
    key: "rose-elder",
    label: "On-body · rose gold",
    src: "/kinlink-wearable-ear-gold-elder.png",
    w: 810,
    h: 1024,
    alt: "Older man smiling, wearing a rose-gold KinLink ear-cuff wearable with sensor accents along the inner curve."
  },
  {
    key: "rose-profile",
    label: "On-body · profile",
    src: "/kinlink-wearable-ear-rose-midlife.png",
    w: 810,
    h: 1024,
    alt: "Man in profile smiling, wearing a rose-gold KinLink ear-cuff that follows the helix of the ear."
  },
  {
    key: "gold-outdoor",
    label: "On-body · outdoor",
    src: "/kinlink-wearable-ear-gold-outdoor.png",
    w: 679,
    h: 1024,
    alt: "Older woman outdoors, wearing a gold KinLink ear-cuff wearable with sensor detail along the inner edge."
  }
];

function KinLinkWearableSlide() {
  const galleryShellRef = useRef<HTMLDivElement>(null);
  const [galleryIx, setGalleryIx] = useState(0);
  const current = WEARABLE_GALLERY[galleryIx]!;
  const n = WEARABLE_GALLERY.length;

  const goPrev = () => setGalleryIx((i) => (i - 1 + n) % n);
  const goNext = () => setGalleryIx((i) => (i + 1) % n);

  useEffect(() => {
    const shell = galleryShellRef.current;
    if (!shell) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setGalleryIx((i) => (i - 1 + WEARABLE_GALLERY.length) % WEARABLE_GALLERY.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setGalleryIx((i) => (i + 1) % WEARABLE_GALLERY.length);
      }
    };
    shell.addEventListener("keydown", onKeyDown);
    return () => shell.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[920px] overflow-hidden rounded-[20px] border border-[rgba(60,52,137,0.22)] bg-gradient-to-br from-[#F4F0FF] via-white to-[#E5FAF4] px-3 py-5 shadow-[0_28px_70px_-34px_rgba(60,52,137,0.4)] md:px-6 md:py-7">
      <div className="pointer-events-none absolute -left-28 -top-20 h-56 w-56 rounded-full bg-[#FFD6A8]/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#7CD7FF]/35 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD]/20 blur-3xl" aria-hidden />

      <div className="relative mb-5 flex flex-wrap items-end justify-between gap-3 px-1">
        <div>
          <p
            className="m-0 inline-flex rounded-full bg-gradient-to-r from-[#3C3489] to-[#2057A8] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white"
            style={monoFont}
          >
            Chapter 03 · Hardware
          </p>
          <h2 className="mt-3 m-0 text-[clamp(2rem,6.8vw,2.85rem)] font-bold leading-[1.03] tracking-[-0.04em]">
            <span className="bg-gradient-to-r from-[#5E3EAD] via-[#2D7BC8] to-[#159D8C] bg-clip-text text-transparent">
              KinLink Wearable
            </span>
          </h2>
        </div>
        <span
          className="rounded-xl border border-[rgba(217,164,59,0.45)] bg-gradient-to-br from-[#FFF6E8] to-[#FFE8CC] px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#8B5C1A]"
          style={monoFont}
        >
          Finishes · gold · rose · black · silver
        </span>
      </div>

      <p className="relative m-0 max-w-[44ch] px-1 text-[12.5px] leading-relaxed text-[#4A5260]">
        Vitals stay close to the body in an ear-cuff form—{" "}
        <span className="font-semibold text-[#3C3489]">jewelry-first</span>, not ward-first, so daily wear feels natural on and off the phone.
      </p>

      <div
        ref={galleryShellRef}
        className="relative mt-5 rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#3C3489]/40 focus-visible:ring-offset-2"
        tabIndex={0}
      >
        <div
          id="wearable-gallery-viewport"
          aria-roledescription="carousel"
          aria-label="KinLink Wearable photography"
          aria-live="polite"
          className="relative flex min-h-[200px] max-h-[min(52vh,420px)] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-[#FAFAFA] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.15)] sm:min-h-[240px] sm:max-h-[min(56vh,460px)]"
        >
          <Image
            key={current.key}
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            className="max-h-[min(52vh,420px)] w-auto max-w-full object-contain sm:max-h-[min(56vh,460px)]"
            sizes="(max-width:920px) 100vw, 920px"
            priority={galleryIx === 0}
          />
          <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
            <span
              className="rounded-full bg-[#1A1A1A]/75 px-2.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
              style={monoFont}
            >
              {galleryIx + 1} / {n}
            </span>
          </div>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white/95 text-[#1A1A1A] shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3C3489]/50 sm:left-2.5"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 6l-6 6 6 6" strokeLinecap="square" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white/95 text-[#1A1A1A] shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3C3489]/50 sm:right-2.5"
            aria-label="Next image"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 6l6 6-6 6" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        <div
          className="mt-3 flex flex-wrap justify-center gap-2 px-0.5"
          role="tablist"
          aria-label="KinLink Wearable images"
        >
          {WEARABLE_GALLERY.map((item, i) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={galleryIx === i}
              id={`wearable-tab-${item.key}`}
              aria-controls="wearable-gallery-viewport"
              onClick={() => setGalleryIx(i)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.1em] transition-colors",
                galleryIx === i
                  ? "border-[#3C3489] bg-[#3C3489] text-white shadow-sm"
                  : "border-[rgba(0,0,0,0.1)] bg-white/90 text-[#5C5C5C] hover:border-[#3C3489]/35 hover:text-[#1A1A1A]"
              )}
              style={monoFont}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MsLimPersonaPlayground() {
  return (
    <div className="mx-2 mt-1">
      <div
        className="relative mx-auto max-w-[min(52rem,calc(100vw-1rem))] overflow-hidden rounded-[14px] border-[2.5px] border-[#1A1A1A] bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.85)]"
        role="group"
        aria-label="Persona profile card, Ms Lim"
      >
        <div
          className="pointer-events-none absolute left-4 top-3 z-10 h-3.5 w-3.5 rounded-full border-[2.5px] border-[#1A1A1A] bg-[#E5E4E0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] sm:left-[min(2rem,8%)]"
          aria-hidden
        />

        <div className="flex items-end justify-between gap-3 bg-[#3C3489] px-4 pb-2 pt-5 text-white sm:pl-7 sm:pt-4">
          <p className="m-0 shrink-0 font-mono text-[8.5px] font-bold uppercase tracking-[0.22em]" style={monoFont}>
            KinLink · Persona card
          </p>
          <p className="m-0 min-w-0 truncate font-mono text-[8px] uppercase tracking-[0.12em] text-white/75" style={monoFont}>
            ID MS-LIM-01
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[rgba(0,0,0,0.12)]">
          <div className="flex flex-col items-center gap-3 p-4 md:items-stretch md:p-5">
            <div className="relative h-[128px] w-[100px] shrink-0 overflow-hidden rounded-[8px] border-2 border-[#1A1A1A] bg-[#0b0b0b] md:h-[140px] md:w-[108px]">
              <Image
                src="/ms-lim-persona.png"
                alt="Illustrated portrait of Ms Lim, the scenario holder."
                fill
                className="object-contain object-[center_85%]"
                sizes="108px"
              />
            </div>
            <p className="m-0 font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-[#969696] md:text-center" style={monoFont}>
              Holder
            </p>

            <div className="w-full border-b border-dashed border-[rgba(0,0,0,0.1)] pb-2.5 md:text-left">
              <p className="m-0 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#898989]" style={monoFont}>
                Printed name
              </p>
              <p
                className="mt-0.5 m-0 text-center font-mono text-[clamp(1.25rem,4vw,1.65rem)] font-bold uppercase leading-none tracking-[0.04em] text-[#141414] md:text-left"
                style={monoFont}
              >
                Ms Lim
              </p>
            </div>

            <dl className="mb-0 mt-1 w-full space-y-2.5 md:mt-2">
              <div>
                <dt className="m-0 font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]" style={monoFont}>
                  Age
                </dt>
                <dd className="mt-0.5 m-0 text-[15px] font-bold tabular-nums leading-none text-[#1A1A1A]">60</dd>
              </div>
              <div>
                <dt className="m-0 font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]" style={monoFont}>
                  Health status
                </dt>
                <dd className="mt-0.5 m-0 text-[12.5px] font-semibold leading-snug text-[#1A1A1A]">Diabetes patient</dd>
              </div>
              <div>
                <dt className="m-0 font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]" style={monoFont}>
                  Healthcare use
                </dt>
                <dd className="mt-0.5 m-0 text-[11.5px] leading-[1.45] text-[#3D3D3D]">
                  Regular appointments + Surgery updates
                </dd>
              </div>
              <div>
                <dt className="m-0 font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A9A]" style={monoFont}>
                  Languages
                </dt>
                <dd className="mt-0.5 m-0 text-[11.5px] leading-[1.45] text-[#3D3D3D]">
                  Mandarin (native), English (not fluent)
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col border-t-2 border-dashed border-[#1A1A1A]/20 bg-[#E8EDF3] p-4 md:min-h-[min(100%,22rem)] md:border-t-0 md:p-5">
            <p className="m-0 text-center font-mono text-[7.5px] font-bold uppercase tracking-[0.2em] text-[#3D4F66]" style={monoFont}>
              Without KinLink—usual flow
            </p>
            <div className="mt-3 flex w-full flex-col items-stretch" aria-label="Usual pathway without KinLink">
              {PERSONA_NON_KINLINK_STEPS.map((label, i) => (
                <Fragment key={label}>
                  {i > 0 ? <PersonaFlowArrowDownCompact /> : null}
                  <PersonaPipelineStep className="w-full" index={i} label={label} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(0,0,0,0.08)] bg-white px-4 pb-3 pt-2.5 sm:pb-3.5">
          <div className="flex h-6 items-end justify-center gap-[1px] opacity-[0.92] sm:h-7" aria-hidden>
            {PERSONA_ID_BARCODE.map((w, i) => (
              <span key={i} className="inline-block bg-[#1A1A1A]" style={{ width: `${w}px`, height: i % 5 === 0 ? 22 : i % 3 === 0 ? 18 : 15 }} />
            ))}
          </div>
          <p className="mt-1.5 m-0 text-center font-mono text-[7px] font-medium uppercase tracking-[0.35em] text-[#BBBBBB]" style={monoFont}>
            Pitch demo • not clinically valid
          </p>
        </div>
      </div>
    </div>
  );
}

export function KinLinkDemoWidget() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scrollBeat, setScrollBeat] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const secs = [...root.querySelectorAll<HTMLElement>("[data-demo-beat-ix]")];
    if (!secs.length) return;

    const scrollRoot = root.closest<HTMLElement>("[data-demo-scroll-root]");

    const obs = new IntersectionObserver(
      (entries) => {
        let bestIx = 0;
        let bestRatio = 0;
        for (const e of entries) {
          const el = e.target as HTMLElement;
          const ix = Number(el.dataset.demoBeatIx);
          if (Number.isNaN(ix)) continue;
          if (e.intersectionRatio >= bestRatio) {
            bestRatio = e.intersectionRatio;
            bestIx = ix;
          }
        }
        if (bestRatio >= 0.11) setScrollBeat(bestIx);
      },
      {
        root: scrollRoot ?? null,
        rootMargin: "-30% 0px -38% 0px",
        threshold: [0.05, 0.11, 0.22, 0.4]
      }
    );

    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollToBeat = (ix: number) => {
    const sel = rootRef.current?.querySelector<HTMLElement>(`[data-demo-beat-ix="${ix}"]`);
    sel?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jumpDots = () => (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Jump to section">
      {BEATS.map((label, ix) => (
        <button
          key={label}
          type="button"
          role="tab"
          aria-selected={scrollBeat === ix}
          aria-label={`Jump to section ${label}`}
          title={label}
          onClick={() => scrollToBeat(ix)}
          className={cn(
            "rounded-full transition-all",
            scrollBeat === ix ? "h-2 w-8 bg-[#1A1A1A]" : "h-2 w-2 bg-[#CFCFCF] hover:bg-[#9E9E9E]"
          )}
        />
      ))}
    </div>
  );

  return (
    <>
      <div
        ref={rootRef}
        data-demo-scroll-root
        className={cn(
          "kinlink-demo-root mx-auto w-full max-w-[1000px] px-4",
          "h-dvh min-h-0 snap-y snap-mandatory overflow-y-auto overscroll-y-contain scroll-pb-[7.5rem]",
          "pb-28 text-[13px] leading-normal text-[#1A1A1A] antialiased selection:bg-[#E8E3FA]"
        )}
        style={{ fontFamily: "inherit", backgroundColor: "#F7F6F3" }}
      >
        <header className="snap-start snap-always box-border flex min-h-dvh flex-col justify-center border-b border-[rgba(0,0,0,0.08)] px-3 pb-14 pt-12 md:pb-20 md:pt-14">
          <p className="m-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A8A]" style={monoFont}>
            Live demo · KinLink
          </p>
          <h1 className="mt-5 m-0 max-w-[20ch] text-[clamp(3.25rem,15vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.05em]">
            <span className="bg-gradient-to-r from-[#3C3489] via-[#2D9CDB] to-[#1AB8A8] bg-clip-text text-transparent">KinLink</span>{" "}
            <span className="text-[#141414]">pitch</span>
          </h1>
          <p className="mt-6 m-0 max-w-[45ch] text-[clamp(1.15rem,3.5vw,1.65rem)] font-medium leading-snug tracking-[-0.02em] text-[#1A1A1A]">
            When we think of personal healthcare apps, we picture something like this:
          </p>
          <div className="relative mt-5 w-full max-w-[min(920px,calc(100vw-2rem))] mx-auto overflow-hidden rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
            <Image
              src="/kinlink-nhs-app-reference.png"
              alt="Official NHS app: three screens showing Prescriptions, Appointments, and Your health tabs with dense list navigation."
              width={1024}
              height={639}
              className="h-auto w-full object-cover object-center"
              sizes="(max-width:920px) 100vw, 920px"
              priority
            />
          </div>
          <div className="mt-6 max-w-[44ch] border-l-[3px] border-[#3C3489] pl-4">
            <p className="m-0 text-[clamp(1.05rem,2.35vw,1.2rem)] font-medium leading-snug tracking-[-0.02em] text-[#4A4A4A]">
              Can you see{" "}
              <span className="font-semibold text-[#3C3489]">your grandma</span>
              <span className="text-[#6B6B6B]"> or </span>
              <span className="bg-gradient-to-r from-[#2D9CDB] to-[#1AB8A8] bg-clip-text font-semibold text-transparent">
                an older person you know
              </span>
              {" "}
              <span className="text-[#1A1A1A]">easily navigating this system?</span>
            </p>
          </div>

          <h2 className="mt-8 m-0 max-w-[42ch] border-t border-[rgba(0,0,0,0.08)] pt-8 text-[clamp(1.5rem,4.8vw,2.35rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#1A1A1A]">
            KinLink: voice-first AI companion for older people—with carers kept in sync.
          </h2>

          <div className="mt-5 grid w-full max-w-[min(920px,calc(100vw-2rem))] grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-4">
            <figure className="m-0 min-w-0">
              <p className="m-0 mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]" style={monoFont}>
                Patient view
              </p>
              <div className="overflow-hidden rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-gradient-to-b from-[#E8F3FA] to-[#F6FAFD] shadow-[0_10px_36px_-20px_rgba(40,80,120,0.35)]">
                <Image
                  src="/kinlink-ui-patient-view.png"
                  alt="KinLink patient screen: greeting Hi I am KinLink, tap the microphone to talk, with quick actions I feel sick and I am at a GP appointment, and Start consultation."
                  width={1009}
                  height={1024}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width:768px) 100vw, 45vw"
                />
              </div>
            </figure>
            <figure className="m-0 min-w-0">
              <p className="m-0 mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]" style={monoFont}>
                Child / carer view
              </p>
              <div className="overflow-hidden rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-[#F5F7FA] shadow-[0_10px_36px_-20px_rgba(40,80,120,0.25)]">
                <Image
                  src="/kinlink-ui-carer-view.png"
                  alt="KinLink carer dashboard: Mum's dashboard with AI voice session summary in Mandarin, suggested actions, medications and appointments."
                  width={1024}
                  height={754}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width:768px) 100vw, 45vw"
                />
              </div>
            </figure>
          </div>

          <p className="mt-5 m-0 max-w-[40ch] text-[clamp(0.95rem,2vw,1.05rem)] font-normal leading-[1.5] text-[#3D3D3D]">
            Softer UI, clearer hand-offs, shared notes so bookings and GP follow-ups do not stall in the family chat.
          </p>

          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A8A]" style={monoFont}>
            Scroll: User case → live demo → wearable → literature review → ethics
          </p>
          {jumpDots()}
        </header>

        <section data-demo-beat-ix={0} className="snap-start snap-always box-border flex min-h-dvh flex-col justify-center px-1 py-8">
          <ChapterHead
            index="Chapter 01"
            slug="User case"
            title="User case"
            subtitle="Printed as a persona card: who she is today, and her usual pathway without KinLink."
          />
          <div className="mt-2">
            <MsLimPersonaPlayground />
          </div>
          {jumpDots()}
        </section>

        <section data-demo-beat-ix={1} className="snap-start snap-always box-border flex min-h-dvh flex-col items-center justify-center px-4 py-16">
          <p className="m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A]" style={monoFont}>
            Chapter 02
          </p>
          <h2 className="mt-5 m-0 bg-gradient-to-r from-[#3C3489] via-[#2D9CDB] to-[#1AB8A8] bg-clip-text text-center text-[clamp(2.75rem,12vw,5rem)] font-bold leading-none tracking-[-0.04em] text-transparent">
            LIVE DEMO START
          </h2>
          {jumpDots()}
        </section>

        <section data-demo-beat-ix={2} className="snap-start snap-always box-border flex min-h-dvh flex-col justify-start px-1 py-10 sm:py-12">
          <KinLinkWearableSlide />
          {jumpDots()}
        </section>

        <section data-demo-beat-ix={3} className="snap-start snap-always box-border flex min-h-dvh flex-col justify-center px-1 py-8">
          <ChapterHead
            index="Chapter 04"
            slug="Literature review"
            title="Literature Review"
            subtitle="Our project is informed by these two leading studies in medicine."
          />
          <div className="mx-auto w-full max-w-[960px] px-2">
            <PitchStudyCitations />
          </div>
          {jumpDots()}
        </section>

        <section data-demo-beat-ix={4} className="snap-start snap-always box-border flex min-h-dvh flex-col justify-center px-1 py-8">
          <ChapterHead
            index="Chapter 05"
            slug="Ethics & close"
            title="Ethical integration"
            subtitle="Four design pillars aligned with Verma et al.: bias, transparency, accountability, privacy."
          />
          <EthicsPillarGrid />
          <div className="mx-3 mt-8">
            <p className="m-0 text-center text-[clamp(1.05rem,2.8vw,1.2rem)] font-medium leading-snug text-[#1A1A1A]">
              Kinlink. Allowing our elders to navigate primary care with dignity.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/pitch-deck" className={cn(btnPrimary)} style={{ textDecoration: "none" }}>
                Full pitch slides
              </Link>
            </div>
          </div>
          {jumpDots()}
        </section>
      </div>
    </>
  );
}
