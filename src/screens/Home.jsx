import React from "react"
import TopNavigation from "../components/TopNavigation"
import MottoSection from "../components/MottoSection"
import WhatWeDoSection from "../components/WhatWeDoSection"
import MobfitSection from "../components/MobfitSection"
import AboutSection from "../components/AboutSection"
import FooterSection from "../components/FooterSection"

export default function Home() {
  return (
    <>
      <TopNavigation />
      <main>
        <MottoSection />
        <WhatWeDoSection />
        <MobfitSection />
        <AboutSection />
      </main>
      <FooterSection />
    </>
  )
}
