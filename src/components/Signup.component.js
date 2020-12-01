import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-text">
            Sign up now! You can get free videos.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="footer-input"
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button buttonStyle="btn--outline">Sign Up</Button>
            </form>
            <p className="signup-text">
              Do you have an account already? <Link to="/">Sign in here</Link>{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;
