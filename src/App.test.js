import { render, screen } from "@testing-library/react"
import App from "./App"

describe("site content", () => {
  let text

  beforeEach(() => {
    const { container } = render(<App />)
    text = container.textContent
  })

  test("uses the current company and product names", () => {
    expect(text).toContain("Talvorn Group LLC")
    expect(text).toContain("MobFit")
    expect(text).not.toContain("Mobfit")
    expect(text).not.toMatch(/corporation/i)
    expect(text).not.toMatch(/realms/i)
  })

  test("every sign up button links to mobfit.io", () => {
    const signups = screen.getAllByRole("link", { name: /sign up/i })
    expect(signups.length).toBeGreaterThan(0)
    signups.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://mobfit.io")
    })
  })

  test("shows the current contact details", () => {
    expect(text).toContain("30N Gould St, STE R")
    expect(text).toContain("Sheridan WY, 82801")
    expect(screen.getByRole("link", { name: "307-650-5908" })).toHaveAttribute(
      "href",
      "tel:+13076505908"
    )
    expect(text).not.toContain("Avenue of the Americas")
    expect(text).not.toContain("202-480-9612")
  })

  test("removed sections stay removed", () => {
    expect(text).not.toMatch(/founded/i)
    expect(text).not.toMatch(/privacy/i)
    expect(document.querySelector("form")).toBeNull()
  })
})
