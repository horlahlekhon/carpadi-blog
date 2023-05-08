import { Link } from "gatsby"
import React from "react"
import "../styles/author.css"
import { FaRegClock } from "react-icons/fa"

const Author = () => {
  // props needed are image, name, date, time
  const imgUrl = require("../images/jane-smith-slideimg.webp").default

  return (
    <div className="author_ctn">
      <Link to="" className="author_img">
        <img src={imgUrl} alt="" />
      </Link>
      <Link to="" className="author_link">
        <p>Jane Smith</p>
        <span>
          April 16, 2020 ・ <FaRegClock /> 1 min
        </span>
      </Link>
    </div>
  )
}

export default Author
