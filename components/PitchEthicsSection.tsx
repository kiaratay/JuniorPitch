"use client";

import { useState } from "react";

const ETHICS_PILLARS: { title: string; detail: string }[] = [
  {
    title: "Bias",
    detail:
      "A culturally sensitive intake model so differences in idioms and explanatory models are not flattened into misleading Western-only labels."
  },
  {
    title: "Transparency",
    detail:
      "Original voice input and transcripts stay accessible. In the GP encounter, the doctor can audit the translator and summariser against source audio."
  },
  {
    title: "Accountability",
    detail:
      "Clear hand-offs when a human caregiver approves booking or when clinical risk escalates; the system nudges rather than silently replacing judgment."
  },
  {
    title: "Data privacy",
    detail:
      "Least-privilege sharing: only designated family members receive downstream summaries and visit artefacts."
  }
];

type PitchEthicsSectionProps = {
  /** When study screenshots live on the previous slide (e.g. KinLink demo order). */
  studyScreensAbove?: boolean;
};

export function PitchEthicsSection({ studyScreensAbove = false }: PitchEthicsSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ marginTop: "1rem", textAlign: "left", maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
      <p style={{ margin: "0 0 0.75rem", fontSize: "0.95rem", fontWeight: 650, color: "var(--text)" }}>
        Bias, transparency, accountability, data privacy
      </p>
      <p style={{ margin: "0 0 0.65rem", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6 }}>
        Throughout integration we keep four principles from the study &lsquo;Ethical aspects of artificial intelligence:
        what urologists need to know&rsquo;: bias, transparency, accountability, data privacy (Verma et al.,{" "}
        {studyScreensAbove ? "PubMed excerpts on the prior slide" : "PubMed-linked below"}). Cultural framing draws on
        Kleinman et al. on illness versus disease across cultures.
      </p>
      <p style={{ margin: "0 0 0.65rem", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6 }}>
        For transparency we keep original input accessible and human-verifiable, for instance in clinic the GP can check
        the AI translator/summariser. For bias, a culturally sensitive agent keeps cultural wording from collapsing into the
        wrong Western gloss.
      </p>
      {ETHICS_PILLARS.map((p, i) => (
        <div key={p.title} style={{ marginBottom: "0.55rem", border: "1px solid var(--line)", borderRadius: 10 }}>
          <button
            type="button"
            onClick={() => setOpen((v) => (v === i ? null : i))}
            aria-expanded={open === i ? "true" : "false"}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "0.75rem 1rem",
              border: "none",
              borderRadius: 10,
              background: open === i ? "var(--accent)" : "var(--panel)",
              fontWeight: 650,
              fontSize: "0.95rem",
              cursor: "pointer",
              color: "var(--text)",
              transition: "background 0.2s ease"
            }}
          >
            {open === i ? "\u2212 " : "+ "}
            {p.title}
          </button>
          {open === i ? (
            <p style={{ margin: 0, padding: "0 1rem 0.85rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {p.detail}
            </p>
          ) : null}
        </div>
      ))}
      <p style={{ margin: "1rem 0 0", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, fontStyle: "italic" }}>
        Transparency in particular means every AI interpretation can be checked against Ms Lim&apos;s raw words, which
        protects trust in clinic and at home.
      </p>
    </div>
  );
}
