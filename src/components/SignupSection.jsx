import React from "react"
import modern_warrior from "../images/modern_warrior.png"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Bounce from "react-reveal/Bounce"
export default function SignupSection() {
  return (
    <>
      <div
        className="section wf-section"
        style={{ backgroundColor: "#112442" }}
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
              <Form>
                <Form.Group className="mb-3" controlId="Name">
                  {/* <Form.Label style={{ color: "white" }}>Name</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label style={{ color: "white" }}>
                  Email address
                </Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                {/* <input
                type="text"
                className="form-field w-input"
                maxLength={256}
                name="Name"
                data-name="Name"
                placeholder="Enter your name..."
                id="Name"
                required
              />
              <input
                type="email"
                className="form-field w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder="Enter your email..."
                id="Email"
                required
              />
              <textarea
                id="field-2"
                name="field-2"
                placeholder="Message"
                maxLength={5000}
                data-name="Field 2"
                className="form-field text-area w-input"
              ></textarea> */}
                <Button
                  type="submit"
                  style={{ backgroundColor: "blue" }}
                  data-wait="Please wait..."
                  className="button full-width w-button"
                >
                  Send Carrier Pigeon
                </Button>
              </Form>
              {/* <div className="w-form-done">
              <p>Thank you! Your submission has been received!</p>
            </div>
            <div className="w-form-fail">
              <p>Oops! Something went wrong while submitting the form :(</p>
            </div> */}
            </div>
          </div>
        </Bounce>
      </div>
    </>
  )
}
