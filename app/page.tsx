import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Outcomes } from "@/components/site/Outcomes";
import { Steps } from "@/components/site/Steps";
import { MeetBen } from "@/components/site/MeetBen";
import { Programs } from "@/components/site/Programs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Outcomes />
      <Steps />
      <MeetBen />
      <Programs />
      <FinalCTA />
      <Footer />
    </>
  );
}
