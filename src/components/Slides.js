import { Link } from "gatsby"
import React from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Slider from "react-slick"
import styled from "styled-components"
import Author from "./Author"

const Slides = ({ slidesData }) => {
  const slider = React.useRef(null)

  console.log(slidesData)

  const Div = styled.div`
    display: block;
    margin: 15px;

    .slick-dots {
      position: absolute;
      text-align: center;
      width: auto;
      top: auto;
      bottom: 1rem;
      left: 0.5rem;
      padding: 0;
      margin-left: 1rem;
    }

    .slick-dots li {
      cursor: pointer;
      display: inline-block;
      margin: 0 5px;
      padding: 0;
      position: relative;
    }

    .slick-dots li.slick-active button:before {
      color: var(--theme-ui-colors-alpha);
    }

    .slick-dots li button:before {
      font-size: 14px;
      color: #a0aec0;
      opacity: 1;
    }

    .slide-arrows {
      display: none;
    }

    @media (min-width: 640px) {
      .slick-dots {
        display: flex !important;
        flex-direction: column;
        top: 4rem;
        bottom: auto;
        left: 2rem;
      }

      .slide-arrows {
        display: flex;
        position: relative;
        top: 17rem;
        left: 0rem;
        padding: 0;
        margin-left: 8rem;
        z-index: 100;
      }

      .slide-arrows .slide-prev {
        display: block;
        border-radius: 50%;
        cursor: pointer;
        border-width: 3px;
        border-style: solid;
        -webkit-transition: all 250ms ease;
        transition: all 250ms ease;
        box-sizing: initial;
        color: var(--theme-ui-colors-omega);
        border-color: transparent;
        width: 24px;
        height: 24px;
        padding: 0.5rem;
        background-color: var(--theme-ui-colors-omegaLighter);
        margin-right: 20px;
      }

      .slide-arrows .slide-prev:hover {
        background-color: var(--theme-ui-colors-alpha);
        color: var(--theme-ui-colors-white);
      }

      .slide-arrows .slide-next {
        display: block;
        border-radius: 50%;
        cursor: pointer;
        border-width: 3px;
        border-style: solid;
        -webkit-transition: all 250ms ease;
        transition: all 250ms ease;
        box-sizing: initial;
        color: var(--theme-ui-colors-omega);
        border-color: transparent;
        width: 24px;
        height: 24px;
        padding: 0.5rem;
        background-color: var(--theme-ui-colors-omegaLighter);
      }

      .slide-arrows .slide-next:hover {
        background-color: var(--theme-ui-colors-alpha);
        color: var(--theme-ui-colors-white);
      }
    }

    @media (min-width: 768px) {
      .slide_card .title {
        font-size: 22px;
        margin: 43px 0 0;
      }
    }

    @media (min-width: 920px) {
      .slide_card {
        height: 333px;
      }
    }

    @media (min-width: 1024px) {
      .slide_card {
        height: 400px;
      }

      .slide_card .title {
        font-size: 36px;
        margin: 43px 0 0;
      }

      .slide-arrows {
        top: 22rem;
      }
    }
  `

  const SlideCard = styled.div`
    .slide_card {
      position: relative;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      /* background-image: ; */
      background-size: cover;
      /* background-position: 100%; */
      background-image: linear-gradient(
          120deg,
          rgb(45, 55, 72) 0%,
          transparent 180%
        ),
        ${(props) => `url(${props.bgImg})`};
      border-radius: 1rem;
      background-repeat: no-repeat;
      padding: 2rem 2rem 10rem;
      height: 232px;
    }

    .slide_card .title {
      margin: auto 0px 13px;
      line-height: 1.33;
      display: block;
      font-weight: bold;
      text-decoration: none;
      font-size: 20px;
      text-shadow: rgb(45, 55, 72) 1px 1px 0px;
      color: var(--theme-ui-colors-white);
      width: 100%;
    }

    @media (min-width: 576px) {
      .slide_card {
        height: 288px;
      }

      .slide_card .title {
        margin: 43px 0px;
      }
    }

    @media (min-width: 640px) {
      .slide_card {
        padding: 2rem 2rem 0 8rem;
      }

      .slide_card .title {
        margin: 30px 0px;
      }
    }

    @media (min-width: 768px) {
      .slide_card .title {
        font-size: 22px;
        margin: 43px 0 0;
      }
    }

    @media (min-width: 920px) {
      .slide_card {
        height: 333px;
      }
    }

    @media (min-width: 1024px) {
      .slide_card {
        height: 400px;
      }

      .slide_card .title {
        font-size: 36px;
        margin: 43px 0 0;
      }
    }
  `
  const settings = {
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Div>
      <div className="slide-arrows">
        <button
          className="slide-prev"
          onClick={() => slider?.current?.slickPrev()}
        >
          <FaChevronLeft style={{ fontSize: "24px" }} />
        </button>
        <button
          className="slide-next"
          onClick={() => slider?.current?.slickNext()}
        >
          <FaChevronRight style={{ fontSize: "24px" }} />
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {slidesData.map(post => (
       
          <SlideCard key={post.id} bgImg={`${post.frontmatter.featuredImg}`} >
            <div className="slide_card">
              <Link to={post.fields.slug} className="title">
                {post.frontmatter.title}
              </Link>

              <Author
                authorName={post.fields.author.name}
                authorImg={post.fields.author.image}
                date={post.frontmatter.date}
                readTime={post.frontmatter.readtime}
              />
            </div>
          </SlideCard>
        ))}
      </Slider>
    </Div>
  )
}

export default Slides
