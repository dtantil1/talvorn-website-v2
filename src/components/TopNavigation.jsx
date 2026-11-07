import React from "react"
import knightIcon from "../images/knight_icon.svg"
import { COMPANY, PRODUCT, PRODUCT_URL } from "../site"

export default function TopNavigation() {
  return (
    <header className="nav">
      <a className="nav__brand" href="/">
        <img className="nav__mark" src={knightIcon} alt="" />
        {COMPANY}
      </a>
      <nav className="nav__links" aria-label="Main">
        <a href="#mobfit">{PRODUCT}</a>
        <a href="#about">About</a>
        <a className="nav__signup" href={PRODUCT_URL}>
          Sign up
        </a>
      </nav>
    </header>
  )
}
