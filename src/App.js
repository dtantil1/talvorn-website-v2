import "./styles/styles.css"
import "animate.css/animate.min.css"
import React from "react"
import TopNavigation from "./components/TopNavigation"
import MottoSection from "./components/MottoSection"
import WhatWeDoSection from "./components/WhatWeDoSection"
import RealmsSection from "./components/RealmsSection"
import AboutSection from "./components/AboutSection"
import FooterSection from "./components/FooterSection"
import SignupSection from "./components/SignupSection"
function App() {
  return (
    <>
      <TopNavigation />
      <MottoSection />
      <WhatWeDoSection />

      <RealmsSection />
      <SignupSection />
      <AboutSection />
      <FooterSection />
    </>
  )
}

export default App
