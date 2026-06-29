import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
