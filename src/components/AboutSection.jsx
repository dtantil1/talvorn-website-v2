import React from "react"
import { COMPANY } from "../site"

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <div>
          <h2 className="about__title">About Talvorn</h2>
          <p className="about__text">{COMPANY} is a video game company.</p>
        </div>
        <address className="about__contact">
          <p>
            {COMPANY}
            <br />
            30N Gould St, STE R
            <br />
            Sheridan WY, 82801
          </p>
          <p>
            <a href="mailto:info@talvorn.io?subject=Talvorn%20Question">
              info@talvorn.io
            </a>
            <br />
            <a href="tel:+13076505908">307-650-5908</a>
            <br />
            <a href="https://twitter.com/talvorncorp">Twitter</a>
          </p>
        </address>
      </div>
    </section>
  )
}
