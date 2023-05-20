import { Link } from "gatsby"
import React from "react"
import "../styles/author.css"
import { FaRegClock } from "react-icons/fa"

const Author = ({authorName, authorImg, date, readTime}) => {
  // props needed are image, name, date, time

  return (
    <div className="author_ctn">
      <Link to={`/author/${(authorName).toLowerCase().replace(" ", "-")}`} className="author_img">
        <img src={authorImg} alt={`${authorName}`} />
      </Link>
      <Link to={`/author/${authorName.toLowerCase().replace(" ", "-")}`} className="author_link">
        <p>{authorName}</p>
        <span>
          {date} ・ <FaRegClock /> {readTime}
        </span>
      </Link>
    </div>
  )
}

export default Author
