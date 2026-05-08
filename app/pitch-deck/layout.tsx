import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch deck · Aria",
  description:
    "Aria: AI health companion for older people — culturally grounded symptom capture and family-aligned care journeys."
};

export default function PitchDeckLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
