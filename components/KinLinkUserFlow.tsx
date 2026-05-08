import { type ReactNode } from "react";

function cn(...parts: (string | false | undefined | null)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Inline SVG visuals for caregiver flows */

function DecoPhoneBlocked() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <rect x="18" y="8" width="28" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M28 54h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M24 43h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M44 12l12 44" stroke="#A32D2D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function DecoFamilyChat() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <circle cx="22" cy="24" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 52c0-8 8-14 22-14s22 6 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M38 52c0-5 4.5-10 13-11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M42 34h14v7l-5-4H42z"
        fill="#EFEDE7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

function DecoCalendar() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <rect x="10" y="16" width="44" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10 28h44" stroke="currentColor" strokeWidth="2" />
      <path d="M22 14v10M42 14v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="36" width="10" height="8" rx="1" fill="#E8E3FA" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DecoAccompany() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <circle cx="40" cy="18" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M40 54V30M32 54l8-24 8 24M28 54h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="22" r="6" stroke="currentColor" strokeWidth="2" opacity="0.75" />
      <path d="M12 54c3-14 13-17 21-17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <circle cx="18" cy="50" r="2" fill="#6B4FBB" opacity="0.85" />
    </svg>
  );
}

function DecoSignup() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <rect x="14" y="10" width="36" height="44" rx="5" stroke="currentColor" strokeWidth="2" />
      <path d="M24 52h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="28" r="10" stroke="#6B4FBB" strokeWidth="2" />
      <path d="M32 34v10M26 42h12" stroke="#6B4FBB" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="16" r="8" fill="#DCFCE7" stroke="#15803d" strokeWidth="1.5" />
      <path d="M45 16l3 3 6-7" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecoAISuggest() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <circle cx="20" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M8 54c4-13 17-17 26-17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="34" y="18" width="22" height="36" rx="3" stroke="#6B4FBB" strokeWidth="2" />
      <path d="M40 26h14M40 34h14M40 42h10" stroke="#6B4FBB" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 14l8-6 8 14-6 2z" fill="#F5EBFF" stroke="#6B4FBB" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function DecoNotifyKid() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <path
        d="M10 42h44L32 54z"
        fill="#FAF9FE"
        stroke="#6B4FBB"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="18" y="12" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M24 28h16M24 34h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <circle cx="48" cy="22" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M32 58c8-22 34-38 54-54" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.35" />
      <path d="M24 41h14l4 6" stroke="#6B4FBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecoApprove() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <rect x="14" y="12" width="36" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M22 52h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="30" r="14" stroke="#15803d" strokeWidth="2" />
      <path d="M26 30l6 6 14-14" stroke="#15803d" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecoIndependent() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden fill="none">
      <circle cx="32" cy="18" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M32 54V30M26 54l6-26 6 26M24 54h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M43 42c6-14 22-21 44-34" stroke="#6B4FBB" strokeWidth="1.5" opacity="0.45" />
      <rect x="6" y="28" width="18" height="28" rx="2" stroke="#6B4FBB" strokeWidth="2" opacity="0.9" />
      <path d="M10 36h11M10 43h14M10 50h11" stroke="#6B4FBB" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15" cy="32" r="2.5" fill="#6B4FBB" />
    </svg>
  );
}

function FlowArrowDown() {
  return (
    <div className="flex justify-center py-0.5" aria-hidden>
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-[#B8B8B8]">
        <path d="M10 2v11M10 13l6-5M10 13l-6-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function FlowCard({
  icon,
  title,
  body,
  accent
}: {
  icon: ReactNode;
  title: string;
  body: string;
  accent?: "kinlink";
}) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-[10px] border p-3",
        accent === "kinlink" ? "border-[#DDD6FA] bg-[#FAF9FE]" : "border-[rgba(0,0,0,0.08)] bg-white"
      )}
    >
      <div className={cn("shrink-0", accent === "kinlink" ? "text-[#4C3D91]" : "text-[#5C5C5C]")}>{icon}</div>
      <div className="min-w-0">
        <p className="m-0 text-[12.5px] font-semibold leading-snug text-[#1A1A1A]">{title}</p>
        <p className="mt-1 m-0 text-[11.5px] leading-[1.55] text-[#5C5C5C]">{body}</p>
      </div>
    </div>
  );
}

export function KinLinkUserFlowDiagram() {
  const withoutKinLink = [
    { icon: <DecoPhoneBlocked />, title: "Parent can’t navigate the app", body: "Tiny type, jargon, SSO loops — intake never starts." },
    { icon: <DecoFamilyChat />, title: "Talks to kid about symptoms", body: "Details get lost playing telephone between kitchens." },
    { icon: <DecoCalendar />, title: "Kid books appointment", body: "Booking happens off-system; no shared clinical snapshot." },
    { icon: <DecoAccompany />, title: "Kid accompanies them", body: "Time off work, travel, translating in the corridor." }
  ] as const;

  const withKinLink = [
    { icon: <DecoSignup />, title: "Parent signs up for KinLink", body: "One guided setup with voice-forward capture when needed." },
    {
      icon: <DecoAISuggest />,
      title: "App suggests next steps",
      body: "Symptom capture drives structured summaries and urgency-aware prompts."
    },
    { icon: <DecoNotifyKid />, title: "Suggestions sent to kid", body: "Delegate gets the same artefacts — nothing hidden." },
    { icon: <DecoApprove />, title: "Kid approves booking", body: "One tap to confirm GP / clinic slot when everyone agrees." },
    {
      icon: <DecoIndependent />,
      title: "Parent goes independently",
      body: "Live translation and plain-language cues in KinLink mean fewer chaperoned visits."
    }
  ] as const;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className={cn("rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-[#F3F2EE] p-4")}>
        <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[#A32D2D]">Without KinLink</p>
        <p className="mt-1 m-0 text-[13px] font-semibold text-[#1A1A1A]">Status-quo caregiver relay</p>
        <div className="mt-4 grid gap-0">
          {withoutKinLink.map((step, i) => (
            <div key={step.title}>
              <FlowCard icon={step.icon} title={step.title} body={step.body} />
              {i < withoutKinLink.length - 1 ? <FlowArrowDown /> : null}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[12px] border border-[#CFC4F0] bg-gradient-to-br from-[#FAF9FE] to-[#F3EFFB] p-4">
        <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[#4C3D91]">With KinLink</p>
        <p className="mt-1 m-0 text-[13px] font-semibold text-[#1A1A1A]">Coordinated loop + autonomy</p>
        <div className="mt-4 grid gap-0">
          {withKinLink.map((step, i) => (
            <div key={step.title}>
              <FlowCard icon={step.icon} title={step.title} body={step.body} accent="kinlink" />
              {i < withKinLink.length - 1 ? <FlowArrowDown /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
