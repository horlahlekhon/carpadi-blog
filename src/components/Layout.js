import * as React from "react"
// import { Link } from "gatsby"
import Nav from "./Nav"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import Seo from "./Seo"
import { Link } from "gatsby"

const Layout = ({ children, removeTopics }) => {
  // will contain theme functions and variables

  //set a local storage for the theme
  const getDefaultTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    //return either dark or light
    return savedTheme ? savedTheme : "light"
  }

  const [isDark, setIsDark] = useState(getDefaultTheme())
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleModalClose = () => setShowModal(false)
  const handleModalShow = () => setShowModal(true)

  showModal
    ? document.body.classList.add("disable-scroll")
    : document.body.classList.remove("disable-scroll")

  console.log(isDark)

  useEffect(() => {
    //set theme to current theme type
    localStorage.setItem("theme", isDark)

    isDark === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark")
  }, [isDark])

  return (
    <div className="global-wrapper">
      <div
        className="search-modal"
        style={{ display: `${showModal ? "block" : "none"}` }}
      >
        <div className="nav-search">
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
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>

        <div className="nav-div">
          <h2>Advertising</h2>

          <div className="blog-card">
            <Link to="/">
              Getting to Grips with Digital Advertising Best Practice Guide
            </Link>
            <p>
              ignibus patris auctor arce retexit, undas. Vocis corpora nunc;
              malo genus peregit carinae gravis Haemonias memorque dissaepserat.
              Levem undis Phlegethontide
            </p>
          </div>
        </div>

        {/* close offcanvas icon */}
        <div
          className="nav-icons"
          id="offcanvas-cls-btn"
          onClick={handleModalClose}
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
          <span>ESC</span>
        </div>
      </div>
      <Seo />
      {/* <header className="global-header">{header}</header> */}
      <Nav
        input={inputValue}
        modalShow={handleModalShow}
        dark={isDark}
        setDark={setIsDark}
        removeTopics={removeTopics}
      />
      {/* nav  */}
      <main className="main_ctn">{children}</main>
      <Footer dark={isDark} />
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
