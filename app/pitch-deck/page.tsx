"use client";

import { AriaPitchDeckScroll } from "../../components/AriaPitchDeckScroll";

export default function PitchDeckPage() {
  return (
    <AriaPitchDeckScroll
      headerKicker="Aria · Pitch deck"
      backHref="/"
      backLabel="← Back to home"
      tone="pitch"
      slideDomIdPrefix="pitch-slide"
    />
  );
}
