import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { ClarityAssessment } from "@/components/assessment/ClarityAssessment";

export const metadata: Metadata = {
  title: "The Clarity Assessment — Ben Walther",
  description:
    "A free 5-minute self-assessment. Score where you are across clarity, momentum, and self-trust — and get your personalized first move. No email required.",
};

export default function ClarityAssessmentPage() {
  return (
    <>
      <PageHeader
        kicker="Free tool · 5 minutes"
        title={
          <>
            Where&apos;s the gap, <span className="bw-em">really?</span>
          </>
        }
        lead="Twelve quick questions across the three things that decide whether you move: clarity, momentum, and self-trust. You'll get a personalized read and the single best next step — no email needed to see your result."
        back={{ href: "/resources", label: "All resources" }}
        wide
      />
      <section style={{ padding: "72px 0 110px" }}>
        <div className="bw-container">
          <ClarityAssessment />
        </div>
      </section>
    </>
  );
}
