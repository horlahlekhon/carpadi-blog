import React from "react"
import githubLogo from "../images/github.svg"
import twitterLogo from "../images/twitter.svg"
import instagramLogo from "../images/instagram.svg"
import { Link } from "gatsby"
import lightLogo from "../images/logo-light.webp"
import darkLogo from "../images/logo-dark.webp"
import "../styles/footer.css"

const Footer = ({ dark }) => {
  return (
    <footer>
      {/* for smaller device up */}
      <div className="d-block d-md-none">
        <div className="footer-social-icons">
          <a href="https://github.com/">
            <img src={githubLogo} alt="github-logos" />

            <span>github</span>
          </a>

          <a href="https://twitter.com/">
            <img src={twitterLogo} alt="twitter-logos" />
            <span>twitter</span>
          </a>

          <a href="https://instagram.com/">
            <img src={instagramLogo} alt="instagram-logos" />

            <span>instagram</span>
          </a>
        </div>

        <div className="footer-links">
          <div>
            <Link to="">Privacy Notice</Link>
            <Link to="">Cookie Policy</Link>
            <Link to="">Terms of Use</Link>
          </div>
          <div>
            <Link to="">Advertise with us</Link>
            <Link to="">About Us</Link>
            <Link to="">Contact Us</Link>
          </div>
        </div>

        <div className="footer-logo">
          <div>
            <Link to="/">
              {dark === "dark" ? (
                <img src={darkLogo} alt="nav-light-logo" />
              ) : (
                <img src={lightLogo} alt="nav-light-logo" />
              )}
            </Link>
          </div>

          <p>© 2023, All Rights Reserved.</p>
        </div>
      </div>

      {/* for medium device up */}

      <div className="d-none d-md-flex justify-content-between">
        <div className="footer-logo">
          <div>
            <Link to="/">
              {dark === "dark" ? (
                <img src={darkLogo} alt="nav-light-logo" />
              ) : (
                <img src={lightLogo} alt="nav-light-logo" />
              )}
            </Link>
          </div>

          <p>© 2023, All Rights Reserved.</p>
        </div>

        <div className="footer-links">
          <div>
            <p>Quick Links</p>
            <Link to="">Advertise with us</Link>
            <Link to="/authors">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p>Legal Stuff</p>
            <Link to="">Privacy Notice</Link>
            <Link to="">Cookie Policy</Link>
            <Link to="">Terms of Use</Link>
          </div>
        </div>

        <div className="footer-social-icons">
        <p>Social Media</p>
          <a href="https://github.com/">
            <img src={githubLogo} alt="github-logos" />

            <span>github</span>
          </a>

          <a href="https://twitter.com/">
            <img src={twitterLogo} alt="twitter-logos" />
            <span>twitter</span>
          </a>

          <a href="https://instagram.com/">
            <img src={instagramLogo} alt="instagram-logos" />

            <span>instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
