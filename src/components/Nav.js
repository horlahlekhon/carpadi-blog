import { Link } from "gatsby"
import React, { useState } from "react"
import {
  Navbar,
  Container,
  Nav as Navigation,
  Offcanvas,
} from "react-bootstrap"
import { FaMoon, FaSearch, FaSun } from "react-icons/fa"
import lightLogo from "../images/logo-light.webp"
import darkLogo from "../images/logo-dark.webp"
import "../styles/nav.css"

export default function Nav({ dark, setDark, modalShow, input, removeTopics }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // will contain function to change theme

  const handleTheme = () => {
    setDark(dark === "dark" ? "light" : "dark")
  }

  return (
    <div>
      <Navbar className="navbar">
        <Container className="d-block px-0 navbar-ctn">

          {/* for smaller device up */}
          <div className="d-flex d-md-none align-items-center justify-content-between">
            <Navbar.Brand style={{ flexBasis: "100%" }}>
              <Link to="/">
                {dark === "dark" ? (
                  <img src={darkLogo} alt="nav-light-logo" />
                ) : (
                  <img src={lightLogo} alt="nav-light-logo" />
                )}
              </Link>
            </Navbar.Brand>

            <Navigation>
              <div className="nav-icons" onClick={handleTheme}>
                {dark === "dark" ? (
                  <FaSun style={{ fontSize: "24px" }} />
                ) : (
                  <FaMoon style={{ fontSize: "24px" }} />
                )}
              </div>

              <div className="nav-icons" onClick={modalShow}>
                <FaSearch style={{ fontSize: "24px" }} />
              </div>

              <div className="nav-icons" onClick={handleShow}>
                {/* this is the menu icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </div>

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                responsive="md"
              >
                {/* close offcanvas icon */}
                <div
                  className="nav-icons offcanvas-cls-btn"
                  onClick={handleClose}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 352 512"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                </div>
                {/* <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                  <div className="canvas-body">
                    <h2>Main Menu</h2>
                    <div className="canvas-links split-canvas">
                      <p>
                        <Link to="/">Home</Link>
                      </p>
                      <p>
                        <Link to="/authors">Our Team</Link>
                      </p>
                      <p>
                        <Link to="/contact">Contact</Link>
                      </p>
                    </div>

<div style={{display: `${removeTopics ? "none" : "block"}`}}>
                    <h2 className="scn-h2">Topics</h2>
                    <div className="canvas-links">
                      <p>
                        <Link to="/category/advertising">Advertising</Link>
                      </p>
                      <p>
                        <Link to="/category/case%20studies">Case Studies</Link>
                      </p>
                      <p>
                        <Link to="/category/innovation">Innovation</Link>
                      </p>
                      <p>
                        <Link to="/category/management">Management</Link>
                      </p>
                    </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Navigation>
          </div>


{/* for medium device up - 768px */}
          <div className="d-none d-md-flex align-items-center">
            <Navbar.Brand style={{ flexBasis: "30%" }}>
              <Link to="/">
                {dark === "dark" ? (
                  <img src={darkLogo} alt="nav-light-logo" />
                ) : (
                  <img src={lightLogo} alt="nav-light-logo" />
                )}
              </Link>
            </Navbar.Brand>

            <div className="nav-search" onClick={modalShow}>
              <span aria-label="Search">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Discover news, articles and more..."
                aria-label="Search"
                className="nav-search-input"
                value={input}
                disabled
              />
            </div>

            <Navigation className="nav-links-md">
              <Link to="/">Home</Link>
              <Link to="/authors">Our Team</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>

            <div
              className={`theme-toggler ${
                dark === "dark" ? "rc-switch" : "rc-switch-checked"
              }`}
              onClick={handleTheme}
            >
              <span className="rc-switch-inner">
                <span className="rc-switch-inner-checked">
                  {/* moon icon */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="theme-icons"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                  </svg>
                </span>

                <span className="rc-switch-inner-unchecked">
                  {/* sun icon  */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="theme-icons"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}


Nav.defaultProps = {
  removeTopics: true
}

