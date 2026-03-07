import Footer from "@/components/layout/footer";
import Hero from "./_components/Hero";
import ServicesPreview from "./_components/ServicesPreview";
import TechPreview from "./_components/TechPreview";
import CTASection from "./_components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview/>
      <TechPreview/>
      <CTASection/>
    </>
  );
}