import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import CategoryMenu from "../components/CategoryMenu"
import Slides from "../components/Slides"
import { Box, Typography } from "@mui/material"
import { Col, Row } from "react-bootstrap"
import { FaRegHandshake, FaRegPaperPlane, FaWind } from "react-icons/fa"
import Card from "../components/Card"
import SmallCard from "../components/SmallCard"
import CategoryHeading from "../components/CategoryHeading"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <CategoryMenu />

      <Row style={{ margin: "0" }}>
        <Col md={9} style={{ padding: "0 1px" }}>
          <Slides />

          <SmallCard />

          {/* <Row style={{ margin: "0" }}>
              <Col xs={12}>
              <SmallCard />
              </Col>
              <Col xs={12}>
              <SmallCard />
              </Col>
            </Row> */}
        </Col>
        <Col
          md={3}
          className="d-none d-md-block"
          style={{ padding: "0 1px", marginTop: "60px" }}
        >
          <Box
            sx={{
              flexDirection: "column",
              backgroundColor: "var(--theme-ui-colors-omegaLighter)",
              borderRadius: "1rem",
              width: "100%",
              padding: "32px",
              display: "flex",
            }}
          >
            <FaRegHandshake
              style={{
                color: "var(--theme-ui-colors-beta)",
                width: "64px",
                height: "64px",
                display: "block",
                marginBottom: "1rem",
              }}
            />

            <Typography
              sx={{
                display: "block",
                fontFamily: "'Inter',sans-serif",
                lineHeight: "1.33",
                fontWeight: "bold",
                textDecoration: "none",
                marginBottom: "1rem",
                fontSize: "1.5rem",
                color: "var(--theme-ui-colors-omegaDark)",
                wordSpacing: "500px",
              }}
            >
              Best Networking Workshops
            </Typography>

            <Typography
              sx={{
                lineHeight: "1.33",
                display: "block",
                fontFamily: "'Inter',sans-serif",
                textDecoration: "none",
                marginBottom: "1rem",
                fontSize: "1rem",
                color: "var(--theme-ui-colors-omegaDark)",
                fontWeight: "normal",
              }}
            >
              In this workshop, learn when and how to network with modern best
              practices.
            </Typography>

            <ul className="listed-items">
              <li>Explain the importance of networking for career-building</li>
              <li>Practice modern tips for effective networking</li>
              <li>Understand the steps towards building your own network</li>
            </ul>

            <Link to="" style={{ textDecoration: "none" }}>
              <Typography
                className="home-net-card-btn"
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  fontSize: "inherit",
                  padding: "0.5rem 1rem",
                  color: "var(--theme-ui-colors-white)",
                  border: "0",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  outline: "0",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  borderWidth: "3px",
                  borderStyle: "solid",
                  transition: "all 250ms ease",
                  backgroundColor: "var(--theme-ui-colors-alpha)",
                  borderColor: "var(--theme-ui-colors-alpha)",
                  display: "block",

                  "&:hover": {
                    color: "var(--theme-ui-colors-omegaLighter)",
                    backgroundColor: "var(--theme-ui-colors-omegaDark)",
                    borderColor: "var(--theme-ui-colors-omegaDark)",
                  },
                }}
              >
                Learn More
              </Typography>
            </Link>
          </Box>
        </Col>
      </Row>

      <CategoryHeading category="advertising"/>
      <Card cardType="advert"/>
      <SmallCard cardType="advert" />

      
      <div className="analysis">
        <div>
          <h2>The latest IT market analysis report - May 2020</h2>
          <p>This month's analysis is a must see.</p>
        </div>

        <Link to="">Download Report</Link>
      </div>


      <CategoryHeading category="case studies"/>
      <Card cardType="case studies" removeBadge={true}/>
      {/* <SmallCard cardType="case studies" /> */}
      

      <CategoryHeading category="innovation"/>
      <Card cardType="innovation"/>
      <SmallCard cardType="innovation" />
      

      <CategoryHeading category="management"/>
      <Card cardType="management" removeBadge={true}/>




      <div className="newsletter">
        <div className="plane">
          <FaRegPaperPlane className="paper-plane" />
          <FaWind className="wind" />
        </div>

        <h2>Subscribe to our newsletter!</h2>

        <p>
          We'll send you the best of our blog just once a month. We promise.
        </p>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          required=""
        />

        <button type="submit">Subscribe</button>
      </div>

      {/* <Bio /> */}
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = {
            ...post,
            title:
              post.frontmatter.title === "" ? "No img" : post.frontmatter.title,
          }

          console.log(title.title)

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title.title}</span>

                     {title === "" ? 'no img' : "there is a img"}
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
