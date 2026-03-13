import React from "react";
import PageFade from "@/components/animation/PageFade";
import Hero from "./(pages)/(home)/_components/Hero";
import ServicesPreview from "./(pages)/(home)/_components/ServicesPreview";
import TechPreview from "./(pages)/(home)/_components/TechPreview";
import CTASection from "./(pages)/(home)/_components/CtaSection";
import HomeInfoSection from "./(pages)/(home)/_components/HomeInfoSection";
import ProjectsPreview from "./(pages)/(home)/_components/ProjectsPreview";

const page = () => {
  return (
    <PageFade>
      <Hero />
      <HomeInfoSection />
      <ServicesPreview />
      <ProjectsPreview />
      <TechPreview />
      <CTASection />
    </PageFade>
  );
};

export default page;