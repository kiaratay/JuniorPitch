import type { Metadata } from "next";
import { KinLinkDemoWidget } from "../../components/KinLinkDemoWidget";

export const metadata: Metadata = {
  title: "KinLink · Live demo",
  description:
    "Interactive walkthrough: KinLink — AI health companion for older people and their families across language and culture."
};

export default function DemoPage() {
  return (
    <div className="min-h-dvh bg-[#F7F6F3]">
      <KinLinkDemoWidget />
    </div>
  );
}
