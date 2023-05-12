import { Link } from "gatsby"
import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import styled from "styled-components"
import Author from "./Author"
import SmallCard from "./SmallCard"
// import CategoryHeading from "./CategoryHeading"

const CardComponent = ({cardType,data, removeBadge, removeLink}) => {
  const image = require("../images/programmer-thumb.webp").default

  const Div = styled.div`
    /* padding: 0 14px; */

    .card-div {
      display:${(cardType === "case-studies" || cardType === "management") ? "none" : 'flex'} ;
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
      display:${removeBadge ? "none" : 'block'} ;
      /* display: block; */
      margin-bottom: 13.6px;
    }

    .card-div .card-body .badge {
      transition: all 250ms ease 0s;
      background-color: ${cardType === "advert" ? "rgb(233, 216, 253)" : "rgb(254, 252, 191)"}  !important;
      color: rgb(45, 55, 72) !important;
      font-size: 10px;
      padding: 0.4rem 13.6px;
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

      .card-div{
        display: flex;
      }

      .card-div:nth-child(2){
        order: 3;
      }

      //change later....
      .card-div:nth-child(3){
        display: ${(cardType === "case-studies" || cardType === "management") ? "none" : 'flex'} ;
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
      justify-content: center;

      .card-div {
        margin: 0 8px;
        width: 348px;

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
            <Link className="image-ctn" to="">
              <Card.Img src={image} />
            </Link>
  
            <Card.Body>
              <Link className="badge-div" to={removeLink ? "" : `category/${post.frontmatter.category}` }>

                <Badge>{ cardType === 'advert' ? "Advertising" : "Innovation"}</Badge>
              </Link>
  
              <Card.Title>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </Card.Title>
  
              <Card.Text>
                Markdown is a lightweight markup language with
                plain-text-formatting syntax. Its design allows it to…
              </Card.Text>
  
              <div className="auth_link">
                <Link to="">{post.frontmatter.author}</Link>
                <span>{post.frontmatter.date}</span>
              </div>
  
              <Author 
              authorName={post.frontmatter.author}
              date={post.frontmatter.date}
              />
  
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>   

        ))}
      
        <div>
        {(cardType === "case-studies" || cardType === "management") && 
        <SmallCard cardType={cardType} />}
        </div>

      </Div>
    </div>
  )
}

export default CardComponent

CardComponent.defaultProps = {
  cardType: "advert",
  removeLink: false
}