import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { MediaStrip } from "@/components/site/MediaStrip";
import { Outcomes } from "@/components/site/Outcomes";
import { Steps } from "@/components/site/Steps";
import { MeetBen } from "@/components/site/MeetBen";
import { Programs } from "@/components/site/Programs";
import { SocialProof } from "@/components/site/SocialProof";
import { Podcast } from "@/components/site/Podcast";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MediaStrip />
      <Outcomes />
      <Steps />
      <MeetBen />
      <Programs />
      <SocialProof />
      <Podcast />
      <FinalCTA />
      <Footer />
    </>
  );
}
