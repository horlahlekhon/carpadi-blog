import { Link } from "gatsby"
import React from "react"
import twitterLogo from "../images/twitter.svg"
import instagramLogo from "../images/instagram.svg"
import worldLogo from "../images/world.svg"

function Team() {
  const author_image = require("../images/jane-smith-lg.webp").default
  return (
    <div className="team_ctn">
      <Link to="" className="view_posts">
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
        <Link to="">Jane Smith</Link>
        <p>Creative Designer</p>
        <span>
          Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in
          varius risus tellus quis lacus. Sed ac bibendum odio.
        </span>
      </div>

      <div className="author_other_info">
        <ul>
          <h2>Expertise</h2>
          <li>Advertising</li>
          <li>Business</li>
          <li>Designer</li>
        </ul>
        <ul>
          <h2>Social Media</h2>
          <Link to="">
          <img src={instagramLogo} alt="twitter"/>
           
            instagram</Link>
          <Link to="">
          <img src={twitterLogo} alt="instagram"/>
            twitter</Link>
          <Link to="">
          <img src={worldLogo} alt="world"/>
            website</Link>
        </ul>

      </div>
    </div>
  )
}

export default Team
