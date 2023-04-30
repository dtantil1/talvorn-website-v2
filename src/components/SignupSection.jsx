import React from "react"
import modern_warrior from "../images/modern_warrior.png"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Bounce from "react-reveal/Bounce"
import { useState } from "react"
export default function SignupSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState("")

  function submitHandler(event) {
    event.preventDefault() // 👈️ prevent page refresh
    const formName = event.target[0].value
    const formEmail = event.target[1].value
    setName(formName)
    setEmail(formEmail)
    setMessage(`Welcome ${formName}! You've been signed up using: ${formEmail}`)
    setDisabled(true)
  }
  return (
    <>
      <div
        className="section wf-section"
        style={{ backgroundColor: "#112442" }}
        id="signup"
      >
        <Bounce left>
          <img
            src={modern_warrior}
            loading="lazy"
            width="283"
            sizes="(max-width: 479px) 92vw, 283px"
            alt="Modern warrior"
            className="image"
          />
        </Bounce>
        <Bounce right>
          <div className="w-container">
            <div className="section-title-group">
              <h2 className="section-heading centered">SIGNup for Realms</h2>
              <div className="section-subheading center">
                Talvorn needs beta testers
              </div>
            </div>

            <div>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="Name">
                  {/* <Form.Label style={{ color: "white" }}>Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    required
                    disabled={disabled}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    disabled={disabled}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{ backgroundColor: "blue" }}
                  data-wait="Please wait..."
                  className="button full-width w-button"
                  disabled={disabled}
                >
                  Send Carrier Pigeon
                </Button>
                <p style={{ color: "red", marginTop: 10, fontSize: 18 }}>
                  {message}
                </p>
              </Form>
            </div>
          </div>
        </Bounce>
      </div>
    </>
  )
}
