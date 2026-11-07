import React, { useEffect, useRef, useState } from "react"
import knightRunners from "../images/knight_runners.webp"
import wizard from "../images/wizard.webp"
import { COMPANY, PRODUCT, PRODUCT_URL } from "../site"

export default function MobfitSection() {
  const versus = useRef(null)
  const [struck, setStruck] = useState(false)

  // The two sides clash once, the first time the versus panel scrolls into view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setStruck(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStruck(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(versus.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mobfit" id="mobfit">
      <div className="wrap mobfit__intro">
        <h2 className="mobfit__title">{PRODUCT}</h2>
        <div>
          <p className="mobfit__lede">
            A workout tracker with a monster at the end of the week. Your reps
            and minutes are the stats you fight it with.
          </p>
          <p className="mobfit__byline">
            {PRODUCT} is a mobile fitness RPG developed by {COMPANY}.
          </p>
        </div>
      </div>

      <div className="versus" ref={versus} data-struck={struck}>
        <div className="versus__side versus__side--crew">
          <img
            src={knightRunners}
            width="640"
            height="640"
            loading="lazy"
            alt="Armored knights with red-cross shields sprinting down a sandy road, away from a castle"
          />
          <p className="versus__label">Your crew</p>
        </div>
        <div className="versus__side versus__side--boss">
          <img
            src={wizard}
            width="816"
            height="1456"
            loading="lazy"
            alt="Hooded wizard with a long blue beard and glowing eyes, gripping a gnarled staff"
          />
          <p className="versus__label">This week's boss</p>
        </div>
        <div className="versus__badge">
          <svg viewBox="0 0 100 120" aria-hidden="true">
            <path d="M0 0H100V62C100 96 50 120 50 120C50 120 0 96 0 62Z" />
          </svg>
          <span>vs</span>
        </div>
      </div>

      <div className="wrap mobfit__details">
        <div>
          <h3 className="mobfit__heading">New approach</h3>
          <p className="mobfit__text">
            In {PRODUCT}, players must physically work out to level up their
            characters, adding a unique and exciting twist to the traditional
            gaming experience.
          </p>
        </div>
        <div>
          <h3 className="mobfit__heading">Improve yourself</h3>
          <p className="mobfit__text">
            By combining fitness with fantasy, players are fully immersed in a
            world where their own personal strength directly correlates to the
            power of their in-game character, creating a truly interactive and
            engaging gameplay experience.
          </p>
        </div>
        <div className="mobfit__cta">
          <a className="button" href={PRODUCT_URL}>
            Sign up at mobfit.io
          </a>
          <p className="mobfit__note">Free. No App Store required.</p>
        </div>
      </div>
    </section>
  )
}
