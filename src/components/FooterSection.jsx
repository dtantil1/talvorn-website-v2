import React from "react"
import { COMPANY } from "../site"

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="wrap">
        © {new Date().getFullYear()} {COMPANY}
      </div>
    </footer>
  )
}
