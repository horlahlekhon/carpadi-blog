import { Link } from "gatsby"
import React from "react"
import twitterLogo from "../images/twitter.svg"
import instagramLogo from "../images/instagram.svg"
import worldLogo from "../images/world.svg"
import "../styles/team.css"

function Team({
  name,
  author_image,
  job,
  bio,
  expertise,
  ig,
  twitter,
  site,
  removeButton

}) {
  // const author_image = require("../images/jane-smith-lg.webp").default
  return (
    <div className="team_ctn">
      <Link to={`/author/${(name).toLowerCase().replace(" ", "-")}`} className="view_posts" style={{display: `${removeButton}`}}>
        View Posts
      </Link>

      <section className="author-section">
        <div className="author_img">
          <div className="circle-bg"></div>
          <img src={author_image} alt="author" />
          <div className="curve"></div>
        </div>
      </section>

      <div className="author_text">
        <Link to={`/author/${(name).toLowerCase().replace(" ", "-")}`}>{name}</Link>
        <p>{job}</p>
        <span>
         {bio}
        </span>
      </div>

      <div className="author_other_info">
        <ul>
          <h2>Expertise</h2>
          {expertise.map(exp => (
            <li key={Math.random()}>{exp}</li>
          ))}
          {/* <li>Advertising</li>
          <li>Business</li>
          <li>Designer</li> */}
        </ul>
        <ul>
          <h2>Social Media</h2>
          <a href={ig}>
          <img src={instagramLogo} alt="twitter"/>
           
            instagram</a>
          <a href={twitter}>
          <img src={twitterLogo} alt="instagram"/>
            twitter</a>
          <a href={site}>
          <img src={worldLogo} alt="world"/>
            website</a>
        </ul>

      </div>
    </div>
  )
}

export default Team


Team.defaultProps = {
  removeButton: "inline-block"
}