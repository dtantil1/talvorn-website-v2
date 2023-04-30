import React from "react"
import twitter_icon from "../images/twitter_icon.svg"
export default function AboutSection() {
  const twitter_link = "https://twitter.com/talvorncorp"
  return (
    <>
      <div className="footer wf-section" id="about">
        <div className="w-container">
          <div className="w-row">
            <div className="spc w-col w-col-6">
              <h5>about Talvorn</h5>
              <div>
                <div>
                  <p>
                    The Talvorn Corporation is a video game company founded on
                    August 30th, 2022.
                  </p>
                  <address>
                    GENERAL INFO:
                    <p>
                      TALVORN CORPORATION
                      <br />
                      1251 Avenue of the Americas
                      <br />
                      New York, New York 10020
                      <br />
                      <a href="mailto:info@talvorn.io?subject=Talvorn%20Question">
                        info@talvorn.io
                      </a>{" "}
                      / <a href="tel:2024809612">202-480-9612</a>
                    </p>
                  </address>
                </div>
              </div>
            </div>
            <div className="spc w-clearfix w-col w-col-6">
              <h5>social</h5>
              <img src={twitter_icon} width="20" alt="" className="info-icon" />
              <a href={twitter_link} className="footer-link with-icon">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
