import CoreValuesSection from "./_components/CoreValuesSection";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import StatsSection from "./_components/StatsSection";
import StorySection from "./_components/StorySection";


export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <StatsSection />
      <CoreValuesSection />
      <CTASection />
    </>
  );
}