import { Link } from "gatsby"
import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import styled from "styled-components"
import { FaRegClock, FaTasks } from "react-icons/fa"
import { AiOutlineFileText } from "react-icons/ai"

const SmallCard = ({ cardType, data, removeBadge, advertCtn }) => {
  /* when cardtype === advert
      then set image to null
      padding
      font sizes
      link to advert link

      and padding to this  */
  /* when cardtype === case-studies
      then set image to case-studies 
      padding
      font sizes
      link to case-studies link */

  /* 5px 13px */
  const designBgImage = require("../images/bg-design.png").default

  const Div = styled.div`
    padding: 0 14px;

    #case_bg {
      background-color: rgb(198, 246, 213) !important;
    }
    

    #innov_bg {
      background-color: rgb(254, 252, 191) !important;
    }

    #manage_bg {
      background-color: rgb(190, 227, 248) !important;
    }

    .small-card-div {
      margin: 14px 0;
      background-color: var(--theme-ui-colors-contentBg);
      border-radius: 1rem;
      transition: transform 250ms ease 0s, box-shadow 250ms ease 0s,
        color 250ms ease 0s;
      box-shadow: rgba(1, 1, 1, 0.05) 1px 1px 5px 0px;
      padding: 0.5rem 0;
      flex-direction: row !important;
      align-items: center;
      box-shadow: 1px 1px 5px 0 rgba(1, 1, 1, 0.05);
      border-left-style: solid;
      border-left-width: 5px;
      border-left-color: var(--theme-ui-colors-alphaLight);
      border-right: none;
      border-top: none;
      border-bottom: none;
    }

    .small-card-div:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(46, 41, 51, 0.08) 0px 2px 4px,
        rgba(71, 63, 79, 0.16) 0px 5px 10px;
    }

    .small-card-div .image-ctn {
      display: block;
      flex-basis: 40%;
      margin: 0 0.5rem;
    }

    .small-card-div .image-ctn .card-img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }

    .small-card-div .card-body {
      flex-basis: 80%;
      padding: 7px 13.6px 0px 5px;
    }

    .small-card-div .card-body .card-title a {
      font-weight: bold;
      line-height: 1.33;
      display: block;
      color: var(--theme-ui-colors-heading);
      -webkit-text-decoration: none;
      text-decoration: none;
      margin-bottom: 6.8px;
      font-size: 13.6px;
    }

    .small-card-div .card-body .badge-div {
      display: block;
      margin-bottom: 13.6px;
    }

    .small-card-div .card-body .badge {
      transition: all 250ms ease 0s;
      background-color: rgb(233, 216, 253) !important;
      color: rgb(45, 55, 72) !important;
      font-size: 10px;
      padding: 0.4rem 13.6px;
    }

    .small-card-div .card-body .badge:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    .small-card-div .card-body .auth_link {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      text-decoration: none;
    }

    .small-card-div .card-body .auth_link a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      color: var(--theme-ui-colors-omegaDark);
    }

    .small-card-div .card-body .auth_link a:hover {
      color: var(--theme-ui-colors-alpha);
    }

    .small-card-div .card-body .auth_link span {
      display: inline-block;
      color: var(--theme-ui-colors-omega);
    }

    //this is only for the advert component

    #advert-card-div {
      padding: 5px 10px 17px 10px;
      border: none;
    }

    #advert-card-div .card-body .card-title a {
      margin-bottom: 13px;
      font-size: 17px;
    }

    #advert-card-div .card-body .auth_link {
      font-size: 12px;
    }

    #advert-card-div .card-body .auth_link span .removed {
      display: none;
    }

    #advert-card-div .card-body .badge-div {
      display: ${removeBadge ? "none" : "block"} !important;
    }

    #advert-card-div .card-body .badge {
      transition: all 250ms ease 0s;
      background-color: rgb(233, 216, 253);
      color: rgb(45, 55, 72) !important;
      font-size: 10px;
      padding: 0.4rem 13.6px;
    }

    #advert-card-div .card-body .badge:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    /* background-color: rgb(254, 252, 191); */

    #case-card-div {
      padding: 0.5rem 0px 0.5rem 0.5rem;
      border: none;
    }

    #case-card-div .image-ctn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 70%;
      background-color: ${cardType === "maintenance-and-tips" ? "#c6f6d5" : "#bee3f8"};
      color: #2d3748;
      height: 100%;
      border-radius: 0.5rem;
      min-height: 112px;
      text-decoration: none;
    }

    #case-card-div .image-bg {
      width: 100%;
      height: 100%;
      background-size: 11rem;
      position: absolute;
      opacity: 0.07;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      content: "";
      background-image: url(${designBgImage});
      opacity: 0.07;

      /* width: 70%;
    height: 116px; */
    }

    #case-card-div .image-ctn .file-type {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      font-weight: 600;
      height: 100%;
      z-index: 2;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      line-height: 1.33;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    #case-card-div .image-ctn .file-type svg {
      width: 48px;
      height: 48px;
    }

    #case-card-div .image-ctn .file-type p {
      display: none;
    }

    #case-card-div .card-body {
      padding: 13px;
    }

    #case-card-div .card-body .card-title a {
      margin-bottom: 13px;
      font-size: 17px;
    }

    #case-card-div .card-body .auth_link {
      font-size: 12px;
    }

    #case-card-div .card-body .auth_link span .removed {
      display: none;
    }

    @media (min-width: 576px) {
      .small-card-div .card-body {
        padding: 7px 13.6px 0px 5px;
      }

      .small-card-div .card-body .badge-div .badge {
        padding: 0.5rem 13.6px;
        font-size: 10.8px;
      }

      .small-card-div .card-body .auth_link {
        font-size: 11px;
      }

      #case-card-div .image-ctn {
        width: 40%;
      }
    }

    @media (min-width: 640px) {
      display: ${removeBadge ? "block" : "flex"};
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 7px;

      .small-card-div {
        flex-basis: 40%;
        flex-grow: 1;
        margin: 7px;
      }

      .small-card-div .card-body {
        padding: 7px 0;
      }

      .small-card-div .card-body .badge-div .badge {
        font-weight: 600;
      }

      .small-card-div .card-body .card-title a {
        font-weight: 600;
        font-size: 14.4px;
        margin-bottom: 7.5px;
      }

      .small-card-div .image-ctn {
        width: 70%;
        height: 160px;
      }

      .small-card-div .image-ctn .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      #advert-card-div {
        border-left-style: solid;
        border-left-width: 5px;
        border-left-color: var(--theme-ui-colors-alphaLight);
      }

      #advert-card-div .card-body .badge {
        padding: 0.49rem 13.6px;
        font-size: 11.4px;
        line-height: 1.1;
      }

      #advert-card-div .card-body .card-title a {
        font-size: 14px;
      }

      #advert-card-div .card-body .auth_link {
        font-size: 11px;
      }

      #case-card-div {
        flex-basis: 100%;
      }

      #case-card-div .image-ctn {
        min-height: 120px;
      }

      #case-card-div .image-ctn .file-type svg {
        margin: 10px auto;
      }

      #case-card-div .image-ctn .file-type p {
        display: block;
        font-size: 14px;
        text-align: center;
      }
    }

    @media (min-width: 768px) {
      padding: 7.6px;

      .small-card-div .card-body {
        padding: 5px;
      }

      .small-card-div .card-body .badge-div .badge {
        padding: 0.49rem 13.6px;
        font-size: 11.4px;
        line-height: 1.1;
      }

      .small-card-div .card-body .card-title a {
        font-size: 15px;
      }

      #advert-card-div .card-body .auth_link span .removed {
        display: inline-block;
      }

      #case-card-div {
        flex-basis: 30%;
        -webkit-box-flex: 1;
        flex-grow: 1;
        margin: 0 7px;
        border-left-style: solid;
        border-left-width: 5px;
        border-left-color: var(--theme-ui-colors-alphaLight);
      }

      #case-card-div .card-body .card-title a {
        font-size: 15px;
      }

      #case-card-div .card-body .auth_link {
        font-size: 11px;
      }

      #case-card-div .card-body .auth_link span .removed {
        display: inline-block;
      }

      #case-card-div .image-ctn .file-type svg {
        width: 30px;
        height: 30px;
      }
    }

    @media (min-width: 920px) {
      
      #advert-card-div {
        flex-basis: 25%;
        flex-grow: 1;
        margin: 7px;
      }



      #advert-card-div .card-body .card-title a {
        font-size: 16px;
      }

      #advert-card-div .card-body .auth_link {
        font-size: 12px;
      }
      #case-card-div .image-ctn {
        width: 100%;
      }
    }

    @media (min-width: 1024px) {
      .small-card-div .image-ctn {
        width: 60%;
        height: -webkit-fill-available;
      }

      .small-card-div .card-body {
        padding: 10px 15px 10px 5px;
      }

      .small-card-div .card-body .badge {
        padding: 0.5rem 16px;
        font-size: 12px;
        font-weight: 600px;
      }

      .small-card-div .card-body .card-title a {
        font-size: 16px;
        margin-bottom: 16px;
      }

      .small-card-div .card-body .auth_link {
        font-size: 12px;
      }

      #advert-card-div .card-body .badge {
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 600px;
      }

      #case-card-div {
        width: 370px;
        margin: 8px auto;
      }

      #case-card-div .image-ctn {
        width: 80%;
        min-height: 150px;
      }

      #case-card-div .card-body .card-title a,
      #case-card-div .image-ctn .file-type p {
        font-size: 16px;
      }

      #case-card-div .card-body .auth_link {
        font-size: 12px;
      }
    }
  `

  return (
    <div>
      {cardType === "default" && (
        <Div>
          {data.map(post => (
            <Card key={post.id} className="small-card-div">
              <Link className="image-ctn"  to={post.fields.slug}>
                <Card.Img
                  src={`${post.frontmatter.thumbImg}`}
                  alt={post.fields.slug}
                />
              </Link>

              <Card.Body>
                <Link
                  className="badge-div"
                  to={`category/${post.frontmatter.category}`}
                >
                  {post.frontmatter.category === "car-reviews" && (
                  <Badge>Car Reviews</Badge>
                )}
                {post.frontmatter.category === "maintenance-and-tips" && (
                  <Badge id="case_bg">Maintenance & Tips</Badge>
                )}
                {post.frontmatter.category === "buying-guide" && (
                  <Badge id="innov_bg">Buying Guide</Badge>
                )}
                {post.frontmatter.category === "car-comparison" && (
                  <Badge id="manage_bg">Car Comparison</Badge>
                )}
                </Link>

                <Card.Title>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Card.Title>

                <div className="auth_link">
                <Link to={`/author/${(post.fields.author.name).toLowerCase().replace(" ", "-")}`}>{post.fields.author.name}</Link>
                  <span>
                    {post.frontmatter.date}・ <FaRegClock />{" "}
                    {post.frontmatter.readtime}
                  </span>
                </div>

                {/* <Author /> */}

                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))}
        </Div>
      )}

      {(cardType === "car-reviews" || cardType === "buying-guide") && (
        <Div id="advert-ctn" style={{ padding: `${advertCtn}` }}>
          {data.map(post => (
            <Card key={post.id} className="small-card-div" id="advert-card-div">
              <Card.Body>
                <Link
                  className="badge-div"
                  to={`category/${post.frontmatter.category}`}
                >
                 {post.frontmatter.category === "car-reviews" && (
                  <Badge>Car Reviews</Badge>
                )}
                  {post.frontmatter.category === "buying-guide" && (
                  <Badge id="innov_bg">Buying Guide</Badge>
                )}
                </Link>

                <Card.Title>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Card.Title>

                <div className="auth_link">
                <Link to={`/author/${(post.fields.author.name).toLowerCase().replace(" ", "-")}`}>{post.fields.author.name}</Link>
                  <span>
                    {post.frontmatter.date}
                    <span className="removed">
                      ・ <FaRegClock /> {post.frontmatter.readtime}
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Div>
      )}

      {(cardType === "maintenance-and-tips" || cardType === "car-comparison") && (
        <Div id="case-studies-ctn" style={{ padding: "0" }}>
          {data.map(post => (
            <Card key={post.id} className="small-card-div" id="case-card-div">
              <Link className="image-ctn" to={post.fields.slug}>
                <div className="file-type">
                  {cardType === "maintenance-and-tips" ? (
                    <AiOutlineFileText />
                  ) : (
                    <FaTasks />
                  )}

                  <p>
                    {(
                      post.frontmatter.category.charAt(0).toUpperCase() +
                      post.frontmatter.category.slice(1)
                    ).replace(/-/g, " ")}
                  </p>
                </div>

                <div className="image-bg"></div>
              </Link>

              <Card.Body>
                <Card.Title>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Card.Title>

                <div className="auth_link">
                  <Link to={`/author/${(post.fields.author.name).toLowerCase().replace(" ", "-")}`}>{post.fields.author.name}</Link>
                  <span>
                    {post.frontmatter.date}
                    <span className="removed">
                      ・ <FaRegClock /> {post.frontmatter.readtime}
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Div>
      )}
    </div>
  )
}

export default SmallCard

SmallCard.defaultProps = {
  cardType: "default",
  removeBadge: false,
  advertCtn: "0 14px"
}
