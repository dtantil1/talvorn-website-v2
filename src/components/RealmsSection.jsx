import React from "react"
import wizard from "../images/wizard.png"
import knight_runners from "../images/knight_runners.png"
import Zoom from "react-reveal/Zoom"
export default function RealmsSection() {
  return (
    <>
      <div id="realms" className="section accent wf-section">
        <div className="w-container">
          <div className="section-title-group">
            <Zoom left>
              <h2 className="section-heading centered white">REALMS</h2>
              <div className="section-subheading center off-white">
                realms is a mobile fitness RPG Developed By Talvorn
              </div>
            </Zoom>
          </div>
          <div className="w-row">
            <div className="w-col w-col-6">
              <div className="white-box transparent">
                <Zoom right>
                  <img
                    src={wizard}
                    sizes="(max-width: 479px) 85vw, (max-width: 767px) 89vw, (max-width: 991px) 324px, 430px"
                    alt="wizard with staff"
                    className="fullwidth-image"
                  />

                  <h3 className="white-text">New Approach</h3>
                  <p className="white-text">
                    In REALMS, players must physically workout to level up their
                    characters, adding a unique and exciting twist to the
                    traditional gaming experience.
                  </p>

                  <a href="/contact" className="hollow-button">
                    Sign Up
                  </a>
                </Zoom>
              </div>
            </div>
            <div className="w-col w-col-6">
              <div className="white-box transparent">
                <Zoom bottom>
                  <img
                    src={knight_runners}
                    sizes="(max-width: 479px) 85vw, (max-width: 767px) 89vw, (max-width: 991px) 324px, 430px"
                    alt="knights running"
                    className="fullwidth-image"
                  />
                  <h3 className="white-text">improve yourself</h3>
                  <p className="white-text">
                    By combining fitness with fantasy, players are fully
                    immersed in a world where their own personal strength
                    directly correlates to the power of their in-game character,
                    creating a truly interactive and engaging gameplay
                    experience.
                  </p>
                  <a href="/contact" className="hollow-button all-caps">
                    SIGN UP
                  </a>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
