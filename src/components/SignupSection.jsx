import React from "react"
import modern_warrior from "../images/modern_warrior.png"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Bounce from "react-reveal/Bounce"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function SignupSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textArea, setTextArea] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState("")
  const form = useRef(0)

  useEffect(() => {
    emailjs.init("LJOFhAWR9khDJJC5d")
  }, [])

  function submitHandler(event) {
    event.preventDefault() // 👈️ prevent page refresh
    const formName = event.target[0].value
    const formEmail = event.target[1].value
    const formText = event.target[2].value

    emailjs.send("service_r7sdb48", "template_lbkphio", {
      from_name: formName,
      from_email: formEmail,
      message: formText,
      reply_to: "vulkAire",
    })

    setName(formName)
    setEmail(formEmail)
    setMessage(`Welcome ${formName}! You've been signed up using: ${formEmail}`)
    setDisabled(true)
  }
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Helmet>
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
              <Form onSubmit={submitHandler} ref={form}>
                <Form.Group className="mb-3" controlId="Name">
                  {/* <Form.Label style={{ color: "white" }}>Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Full name"
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
                <Form.Group className="mb-3" controlId="Textarea">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
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
          <p style={{ color: "whitesmoke" }}>
            <Link to="/privacy#logo">Privacy Policy</Link>
          </p>
        </Bounce>
      </div>
    </>
  )
}
