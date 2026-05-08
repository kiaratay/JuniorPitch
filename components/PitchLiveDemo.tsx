"use client";

import { useCallback, useState } from "react";
import { PitchStudyCitations } from "./PitchStudyCitations";
import { PitchEthicsSection } from "./PitchEthicsSection";

const STEP_LABELS = [
  "Voice agent",
  "\u4e0a\u706b in the symptom log",
  "Summary and caregiver",
  "GP recording",
  "Wrap-up"
] as const;

const SHANGHUO_NOTE =
  "Patient reports \u201c\u4e0a\u706b\u201d (\u201cshanghuo,\u201d lit. \u2018rising fire\u2019), a Traditional Chinese Medicine concept describing perceived internal heat imbalance. Common somatic correlates: mouth ulcers, sore throat, dry eyes, constipation, irritability, disrupted sleep.";

type Phase = "walkthrough" | "ethics";

export type PitchLiveDemoProps = {
  /** Product name in narrative copy (e.g. KinLink on the public demo). */
  brandName?: string;
};

export function PitchLiveDemo({ brandName = "Aria" }: PitchLiveDemoProps) {
  const [phase, setPhase] = useState<Phase>("walkthrough");
  const [step, setStep] = useState(0);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1)), []);
  const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
  const resetWalkthrough = useCallback(() => {
    setStep(0);
    setPhase("walkthrough");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 560,
        margin: "1rem auto 0",
        textAlign: "left",
        border: "1px solid var(--line-strong)",
        borderRadius: 14,
        background: "linear-gradient(165deg, #ffffff 0%, #fafbfc 55%, #f4f6f9 100%)",
        padding: "clamp(1rem, 3vw, 1.35rem)",
        boxShadow: "0 24px 48px -28px rgba(20, 26, 33, 0.15)"
      }}
    >
      {phase === "walkthrough" ? (
        <>
          <p
            style={{
              margin: 0,
              fontSize: "0.62rem",
              fontWeight: 650,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)"
            }}
          >
            Live demo (script cues)
          </p>
          <p style={{ margin: "0.45rem 0 0", fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.55 }}>
            Step {step + 1} of {STEP_LABELS.length}:{" "}
            <strong style={{ color: "var(--text)", fontWeight: 650 }}>{STEP_LABELS[step]}</strong>
          </p>

          <div
            role="region"
            aria-label={`Demo step ${step + 1}: ${STEP_LABELS[step]}`}
            style={{
              marginTop: "1rem",
              minHeight: 200,
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: "1rem",
              background: "var(--panel)"
            }}
          >
            {step === 0 && (
              <>
                <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 650, color: "var(--text)" }}>
                  I click into {brandName}&apos;s voice agent
                </p>
                <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  Ms Lim talks about her problems for around 10 minutes: headaches and chest discomfort (she describes it
                  as heartache / tightness); she wants to know if she should go to hospital; expressing this in fluent
                  medical English feels impossible on the NHS app.
                </p>
                <div
                  style={{
                    marginTop: "0.85rem",
                    padding: "0.75rem 0.85rem",
                    borderRadius: 8,
                    background: "var(--accent)",
                    fontSize: "0.875rem",
                    color: "var(--text)",
                    lineHeight: 1.55
                  }}
                >
                  <strong style={{ fontWeight: 650 }}>Session capture cue (Cantonese)</strong>
                  <span style={{ display: "block", marginTop: 6, opacity: 0.9 }}>
                    {
                      "\u201c\u982d\u75db \u2026 \u5728\u5fc3\u80f8\u53e3\u95f7\u95f7\u5480 \u2026 \u6211\u4e0a\u5497\u706b \u2026 \u5514\u77e5\u8981\u5514\u8981\u53bb\u533b\u9662\u2026\u201d"
                    }
                  </span>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 650, color: "var(--text)" }}>
                  {"\u201c\u4e0a\u706b\u201d (shanghuo): keep original term plus context"}
                </p>
                <p style={{ margin: "0.45rem 0 0", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  She uses phrases like{" "}
                  {"\u201c\u4e0a\u706b\u201d"}
                  {" "}
                  that do not cleanly translate into Western medicine.
                  Rather than inaccurate labels such as inflammation or dehydration, we follow Kleinman (1978) and preserve
                  the original term with surrounding cultural context in the symptom log.
                </p>
                <p style={{ margin: "0.5rem 0 0", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.55 }}>
                  Symptom log entry (show in demo):
                </p>
                <p
                  style={{
                    margin: "0.55rem 0 0",
                    padding: "0.85rem 1rem",
                    borderLeft: "3px solid #6b4fbb",
                    background: "#f8f7fc",
                    fontSize: "0.875rem",
                    lineHeight: 1.62,
                    color: "var(--text)"
                  }}
                >
                  {SHANGHUO_NOTE}
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 650 }}>Summary, actionables, caregiver</p>
                <p style={{ margin: "0.45rem 0 0", color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  From this symptom check, the AI produces a symptom summary and actionable items, for example whether
                  she should book an appointment. The same outputs go to her child/carer so they compare the{' '}
                  <strong>original transcript</strong> to the summary for speech and cultural accuracy, then help her
                  book.
                </p>
                <ul
                  style={{
                    margin: "0.7rem 0 0",
                    paddingLeft: "1.1rem",
                    color: "var(--muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.6
                  }}
                >
                  <li>Summary plus suggested next actions (clinical risk framed for review).</li>
                  <li>Shared view for the carer alongside the transcript she can sanity-check.</li>
                </ul>
                <button
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{
                    marginTop: "0.75rem",
                    display: "inline-block",
                    pointerEvents: "none",
                    fontSize: "0.82rem",
                    padding: "0.45rem 0.9rem",
                    borderRadius: 8,
                    border: "none",
                    background: "#1a2733",
                    color: "#eef2f6",
                    fontWeight: 550
                  }}
                >
                  Confirm GP booking (delegated)
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <p style={{ margin: 0, fontWeight: 650 }}>At the GP appointment</p>
                <p style={{ margin: "0.45rem 0 0", color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  Ms Lim opens {brandName} and starts recording. Besides translating between languages, the assistant simplifies
                  the doctor&apos;s words so she can follow. Original input stays available so a clinician can verify
                  translations and summaries.
                </p>
                <div style={{ marginTop: "0.75rem", display: "grid", gap: "0.5rem", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "0.6rem 0.7rem", borderRadius: 8, border: "1px solid var(--line)", fontSize: "0.8rem" }}>
                    <strong>GP (dense):</strong>
                    <br />
                    <span style={{ color: "var(--muted)" }}>ECG today, bloods including HbA1c, safety-net return if worse…</span>
                  </div>
                  <div
                    style={{
                      padding: "0.6rem 0.7rem",
                      borderRadius: 8,
                      border: "1px solid #cfc4f0",
                      background: "#faf9fe",
                      fontSize: "0.8rem"
                    }}
                  >
                    <strong>{brandName} (plain):</strong>
                    <br />
                    <span style={{ color: "var(--muted)" }}>Heart trace today, blood sugar check, who to call if symptoms change.</span>
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <p style={{ margin: 0, fontWeight: 650 }}>Live demo end</p>
                <p style={{ margin: "0.45rem 0 0", color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  After the visit, an appointment summary is generated with any medicines prescribed and next steps. That
                  is sent to her caregiver/kid too so the household stays aligned.
                </p>
                <div style={{ marginTop: "0.75rem", fontSize: "0.84rem", lineHeight: 1.55, color: "var(--text)" }}>
                  <div style={{ padding: "0.55rem 0.65rem", borderRadius: 8, background: "var(--btn-hover)" }}>
                    • Summary + prescribed medicines to Ms Lim and carer
                    <br />• Results follow-up booked (example: GP review window)
                  </div>
                </div>
              </>
            )}
          </div>

          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            <button className="btn" type="button" onClick={prev} disabled={step === 0}>
              Back
            </button>
            <button className="btn" type="button" onClick={next} disabled={step === STEP_LABELS.length - 1}>
              Next
            </button>
            <button className="btn" type="button" onClick={() => setStep(0)} style={{ opacity: 0.85 }}>
              Back to voice agent step
            </button>
          </div>

          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <button className="btn" type="button" onClick={() => setPhase("ethics")}>
              Continue to ethics (after live demo)
            </button>
          </div>
        </>
      ) : null}

      {phase === "ethics" ? (
        <div style={{ marginTop: "0.25rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.62rem",
              fontWeight: 650,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "center"
            }}
          >
            Finally
          </p>
          <p style={{ margin: "0.75rem 0 0", fontSize: "0.95rem", fontWeight: 650, color: "var(--text)", textAlign: "center" }}>
            Four ethical principles + literature
          </p>
          <PitchStudyCitations />
          <PitchEthicsSection />
          <div style={{ marginTop: "1.1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            <button className="btn" type="button" onClick={resetWalkthrough}>
              Back to live demo script
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
