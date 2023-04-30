import React from "react"
import knight_icon from "../images/knight_icon.svg"
import react_icon from "../images/react_icon.svg"
import rocket_icon from "../images/rocket_icon.svg"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"
import Spin from "react-reveal/Spin"
import Bounce from "react-reveal/Bounce"
export default function WhatWeDoSection() {
  return (
    <>
      <div className="section wf-section">
        <div className="w-container">
          <div className="section-title-group">
            <Bounce right>
              <h2 className="section-heading centered">what we do</h2>
              <div className="section-subheading center">
                Build amazing mobile games
              </div>
            </Bounce>
          </div>
          <div className="w-row">
            <div className="w-col w-col-4">
              <Fade left>
                <div
                  data-w-id="270e8437-efa3-df11-d438-de69b23e41e9"
                  style={{ opacity: 1 }}
                  className="white-box"
                >
                  <img src={knight_icon} alt="" className="grid-image" />
                  <h3 className="heading">Game Design</h3>
                  <p className="paragraph-2">
                    We specialize in crafting compelling and immersive stories,
                    creating memorable characters, intricate plotlines, and
                    unique worlds that capture the player&#x27;s imagination and
                    keep them engaged.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="w-col w-col-4">
              <Roll left>
                <div
                  data-w-id="29c25774-570b-ddb2-69b5-f4ddbb194afd"
                  style={{ opacity: 1 }}
                  className="white-box"
                >
                  <img
                    src={react_icon}
                    width="210"
                    alt=""
                    className="grid-image"
                  />
                  <h3 className="heading-2">Code</h3>
                  <p className="paragraph-3">
                    We harness the power of React Native, along with JavaScript
                    and TypeScript, to develop immersive mobile games with
                    seamless user experiences across both iOS and Android
                    platforms.
                  </p>
                </div>
              </Roll>
            </div>

            <div className="w-col w-col-4">
              <Roll right>
                <div
                  data-w-id="49e69b8a-ef40-4d84-1f92-d2617143b8db"
                  style={{ opacity: 1 }}
                  className="white-box"
                >
                  <img
                    src={rocket_icon}
                    alt="rocket icon"
                    className="grid-image"
                  />
                  <h3 className="heading-3">EPIC</h3>
                  <p className="paragraph-4">
                    We push the boundaries of what&#x27;s possible in gaming,
                    delivering out-of-this-world experiences that challenge
                    players and redefine the industry.
                  </p>
                </div>
              </Roll>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
