import { Link } from "gatsby"
import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import styled from "styled-components"
import Author from "./Author"
import SmallCard from "./SmallCard"
// import CategoryHeading from "./CategoryHeading"

const CardComponent = ({
  cardType,
  data,
  removeBadge,
  changeFlex,
  smallCardData,
}) => {
  const image = require("../images/programmer-thumb.webp").default

  const Div = styled.div`
    /* padding: 0 14px; */

    .card-div {
      display: ${cardType === "case-studies" || cardType === "management"
        ? "none"
        : "flex"};
      margin: 14px 0;
      background-color: var(--theme-ui-colors-contentBg);
      border-radius: 1rem;
      transition: transform 250ms ease 0s, box-shadow 250ms ease 0s,
        color 250ms ease 0s;
      box-shadow: rgba(1, 1, 1, 0.05) 1px 1px 5px 0px;
      padding: 0.5rem 0;
      flex-direction: row !important;
      box-shadow: 1px 1px 5px 0 rgba(1, 1, 1, 0.05);
      border: none;
    }

    .card-div:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(46, 41, 51, 0.08) 0px 2px 4px,
        rgba(71, 63, 79, 0.16) 0px 5px 10px;
    }

    .card-div .image-ctn {
      display: block;
      flex-basis: 40%;
      margin: 0 0.5rem;
    }

    .card-div .image-ctn .card-img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }

    .card-div .card-body {
      flex-basis: 60%;
      padding: 7px 13.6px 13px 5px;
    }

    .card-div .card-body .card-title a {
      font-weight: bold;
      line-height: 1.33;
      display: block;
      color: var(--theme-ui-colors-heading);
      -webkit-text-decoration: none;
      text-decoration: none;
      margin-bottom: 13.6px;
      font-size: 17px;
    }

    .card-div .card-body .badge-div {
      display: ${removeBadge ? "none" : "block"};
      /* display: block; */
      margin-bottom: 13.6px;
    }

    .card-div .card-body .badge {
      transition: all 250ms ease 0s;
      background-color: rgb(233, 216, 253) !important;
      color: rgb(45, 55, 72) !important;
      font-size: 10px;
      padding: 0.4rem 13.6px;
    }

    .card-div .card-body #case_bg {
      background-color: rgb(198, 246, 213) !important;
    }

    .card-div .card-body #case_bg:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    .card-div .card-body #innov_bg {
      background-color: rgb(254, 252, 191) !important;
    }

    .card-div .card-body #innov_bg:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    .card-div .card-body #manage_bg {
      background-color: rgb(190, 227, 248) !important;
    }

    .card-div .card-body #manage_bg:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    .card-div .card-body .badge:hover {
      color: var(--theme-ui-colors-omegaLight) !important;
      background-color: var(--theme-ui-colors-omegaDark) !important;
    }

    .card-div .card-body .card-text {
      display: none;
    }

    .card-div .card-body .author_ctn {
      display: none;
    }

    .card-div .card-body .auth_link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      text-decoration: none;
    }
    .card-div .card-body .auth_link a {
      text-decoration: none;
      font-weight: bold;
      color: var(--theme-ui-colors-omegaDark);
    }

    .card-div .card-body .auth_link a:hover {
      color: var(--theme-ui-colors-alpha);
    }

    .card-div .card-body .auth_link span {
      color: var(--theme-ui-colors-omega);
    }

    @media (min-width: 576px) {
      .card-div {
        align-items: center;
      }

      .card-div .image-ctn {
        width: 40%;
      }

      .card-div .card-body {
        padding: 7px 13.6px 0px 5px;
      }
    }

    @media (min-width: 640px) {
      padding: 7px 15px;

      .card-div {
        display: flex;
      }

      .card-div:nth-child(2) {
        order: ${cardType === "case-studies" || cardType === "management"
          ? "3"
          : "unset"};
      }

      //change later....
      .card-div:nth-child(3) {
        display: ${cardType === "case-studies" || cardType === "management"
          ? "none"
          : "flex"};
      }

      .card-div .card-body {
        padding: 29px;
      }

      .card-div .card-body .badge {
        padding: 0.48rem 13.6px;
        font-size: 10.8px;
      }

      .card-div .card-body .card-text {
        display: block;
        font-size: 12.6px;
      }

      .card-div .image-ctn {
        width: 80%;
        height: 283px;
      }

      .card-div .image-ctn .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .card-div .card-body .auth_link {
        display: none;
      }

      .card-div .card-body .author_ctn {
        display: flex;
        margin: 15px 0 0;
      }

      .card-div .card-body .author_link {
        font-size: 12.6px;
        color: var(--theme-ui-colors-omega);
      }

      .card-div .card-body .author_link p {
        margin: 0;
        color: var(--theme-ui-colors-omegaDark);
      }

      .card-div .card-body .author_link p:hover {
        color: var(--theme-ui-colors-alpha);
      }
    }

    @media (min-width: 768px) {
      padding: 7.6px 0;

      .card-div .card-body {
        padding: 25px;
      }

      .card-div .card-body .badge {
        padding: 0.49rem 13.6px;
        font-size: 11.4px;
        line-height: 1.1;
      }

      .card-div .card-body .card-title a {
        margin-bottom: 15px;
        font-size: 19px;
      }

      .card-div .card-body .card-text,
      .card-div .card-body .author_link {
        font-size: 13.3px;
      }
    }

    @media (min-width: 920px) {
      .card-div {
        align-items: start;
      }

      .card-div .image-ctn {
        width: 60%;
        height: 283px;
      }

      .card-div .card-body .card-title a {
        margin-bottom: 30px;
        font-size: 19px;
      }

      .card-div .card-body .card-text {
        margin-bottom: 30px;
      }
    }

    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .card-div {
        margin: 15px 8px 0;
        width: 348px;
        flex: ${changeFlex};
        padding: 0.5rem 0;
        flex-direction: column !important;
      }

      .card-div .image-ctn {
        width: fit-content;
        height: 245px;
      }

      .card-div .image-ctn .card-img {
        width: 100%;
        height: fit-content;
        object-fit: contain;
      }

      .card-div .card-body .badge-div {
        margin-bottom: 16px;
      }

      .card-div .card-body .badge {
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 600px;
      }

      .card-div .card-body {
        padding: 32px;
      }

      .card-div .card-body .card-title a {
        font-size: 20px;
        margin-bottom: 16px;
      }

      .card-div .card-body .card-text,
      .card-div .card-body .author_link {
        font-size: 14px;
      }

      .card-div .card-body .card-text {
        margin-bottom: 16px;
      }
    }

    /* when title === nothing then set image to null  and padding to this  */
    /* 5px 13px */
  `
  return (
    <div>
      <Div>
        {data.map(post => (
          <Card key={post.id} className="card-div">
            <Link className="image-ctn" to={post.fields.slug}>
              <Card.Img src={image} />
            </Link>

            <Card.Body>
              <Link
                className="badge-div"
                to={`/category/${post.frontmatter.category}`}
              >
                {/* <Badge>{ cardType === 'advert' ? "Advertising" : "Innovation"}</Badge> */}

                {post.frontmatter.category === "advertising" && (
                  <Badge>Advertising</Badge>
                )}
                {post.frontmatter.category === "case-studies" && (
                  <Badge id="case_bg">Case studies</Badge>
                )}
                {post.frontmatter.category === "innovation" && (
                  <Badge id="innov_bg">Innovation</Badge>
                )}
                {post.frontmatter.category === "management" && (
                  <Badge id="manage_bg">Management</Badge>
                )}
              </Link>

              <Card.Title>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </Card.Title>

              <Card.Text>{post.excerpt}</Card.Text>

              <div className="auth_link">
                <Link
                  to={`/author/${post.fields.author.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {post.fields.author.name}
                </Link>
                <span>{post.frontmatter.date}</span>
              </div>

              <Author
                authorName={post.fields.author.name}
                date={post.frontmatter.date}
                readTime={post.frontmatter.readtime}
              />

              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}

        <div>
          {(cardType === "case-studies" || cardType === "management") && (
            <SmallCard data={smallCardData} cardType={cardType} />
          )}
        </div>
      </Div>
    </div>
  )
}

export default CardComponent

CardComponent.defaultProps = {
  cardType: "advert",
  changeFlex: "1",
}
