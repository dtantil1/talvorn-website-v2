import React from "react"
import warrior from "../images/modern_warrior.webp"
import { PRODUCT, PRODUCT_URL } from "../site"

export default function MottoSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__art">
        <img
          src={warrior}
          width="1024"
          height="1536"
          alt="Armored warrior in a golden cape with a glowing blue visor, holding a long sword"
        />
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">Talvorn</h1>
        <p className="hero__motto">Unleash your inner hero</p>
        <p className="hero__intro">
          We build mobile games. Right now that means {PRODUCT}: team fitness
          challenges and weekly boss fights.
        </p>
        <div className="hero__actions">
          <a className="button" href={PRODUCT_URL}>
            Sign up at mobfit.io
          </a>
          <a className="text-link" href="#mobfit">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
