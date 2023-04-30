import React from "react"
import Zoom from "react-reveal/Zoom"
export default function MottoSection() {
  const handleClickScroll = () => {
    const element = document.getElementById("realms")
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <div className="hero-section centered wf-section" id="home">
        <div
          data-w-id="e464d218-f801-55d1-1f50-7da00b5bfb8f"
          style={{ opacity: 1 }}
          className="w-container"
        >
          <Zoom bottom>
            <h1 data-ix="fade-in-bottom-page-loads" className="hero-heading">
              Talvorn
            </h1>

            <div
              data-ix="fade-in-bottom-page-loads"
              className="hero-subheading"
            >
              unleash your inner hero
            </div>

            <div data-ix="fade-in-bottom-page-loads">
              <a href="#signup" className="button">
                sign up
              </a>
              <button
                style={{ backgroundColor: "transparent" }}
                className="hollow-button all-caps"
                onClick={handleClickScroll}
              >
                learn more
              </button>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  )
}
