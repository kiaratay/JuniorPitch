"use client";

import Image from "next/image";
import { publicAsset } from "@/utils/public-asset";

const SOURCES = [
  {
    src: "/pitch-studies/ethics-ai-urology.png",
    alt: "Abstract excerpt: Ethical aspects of artificial intelligence: what urologists need to know. Authors include Verma, Macaskill, Kim, Raison, Dasgupta. PMID 40114646.",
    caption: "Verma et al. Ethical aspects of artificial intelligence: what urologists need to know (PMID 40114646).",
    href: "https://pubmed.ncbi.nlm.nih.gov/40114646/"
  },
  {
    src: "/pitch-studies/kleinman-culture-illness-care.png",
    alt: "Abstract excerpt: Culture, illness, and care: clinical lessons from anthropologic and cross-cultural research. Kleinman, Eisenberg, Good. PMID 626456.",
    caption: "Kleinman, Eisenberg & Good. Culture, illness, and care: clinical lessons from anthropologic and cross-cultural research (PMID 626456).",
    href: "https://pubmed.ncbi.nlm.nih.gov/626456/"
  }
] as const;

export function PitchStudyCitations() {
  return (
    <div
      className="mx-auto grid w-full max-w-[940px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-5"
      style={{ marginTop: "0.5rem" }}
    >
      {SOURCES.map((s) => (
        <figure
          key={s.src}
          className="min-w-0"
          style={{
            margin: 0,
            textAlign: "left",
            border: "1px solid var(--line, rgba(0,0,0,0.1))",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--panel, #fff)"
          }}
        >
          <Image
            src={publicAsset(s.src)}
            alt={s.alt}
            width={1200}
            height={780}
            sizes="(max-width: 768px) 100vw, 440px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderBottom: "1px solid var(--line, rgba(0,0,0,0.1))"
            }}
          />
          <figcaption
            style={{
              padding: "0.65rem 0.85rem",
              fontSize: "0.8rem",
              lineHeight: 1.5,
              color: "var(--muted, #6B6B6B)"
            }}
          >
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text, #1A1A1A)", fontWeight: 650, textDecoration: "underline" }}
            >
              Source on PubMed
            </a>
            <span style={{ display: "block", marginTop: 4 }}>{s.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
