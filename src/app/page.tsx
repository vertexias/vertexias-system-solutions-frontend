import React from 'react'
import PageFade from '@/components/animation/PageFade'
import Hero from './(pages)/(home)/_components/Hero'
import ServicesPreview from './(pages)/(home)/_components/ServicesPreview'
import TechPreview from './(pages)/(home)/_components/TechPreview'
import CTASection from './(pages)/(home)/_components/CtaSection'


const page = () => {
  return (
    <PageFade>
      <Hero />
      <ServicesPreview />
      <TechPreview />
      <CTASection />
    </PageFade>
  )
}

export default page
