import React from "react"

const DISCIPLINES = [
  {
    title: "Game design",
    body: "We specialize in crafting compelling and immersive stories, creating memorable characters, intricate plotlines, and unique worlds that capture the player's imagination and keep them engaged.",
  },
  {
    title: "Code",
    body: "We harness the power of React Native, along with JavaScript and TypeScript, to develop immersive mobile games with seamless user experiences across both iOS and Android platforms.",
  },
  {
    title: "Epic",
    body: "We push the boundaries of what's possible in gaming, delivering out-of-this-world experiences that challenge players and redefine the industry.",
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="craft">
      <div className="wrap craft__grid">
        <h2 className="craft__title">We build amazing mobile games</h2>
        <ul className="craft__list">
          {DISCIPLINES.map(({ title, body }) => (
            <li className="craft__item" key={title}>
              <h3 className="craft__name">{title}</h3>
              <p className="craft__body">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
