import * as React from "react"
import { Link, graphql } from "gatsby"
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
import { Fade } from "react-reveal"

const BlogIndex = ({ data }) => {
  const slidesPosts = data.slidesData.nodes
  const headerPosts = data.headerData.nodes
  const advertBigDataPosts = data.advertBigCardData.nodes
  const advertSmallDataPosts = data.advertSmallCardData.nodes
  const caseStudiesBigDataPosts = data.caseStudiesBigCardData.nodes
  const caseStudiesSmallDataPosts = data.caseStudiesSmallCardData.nodes
  const innovationBigDataPosts = data.innovationBigCardData.nodes
  const innovationSmallDataPosts = data.innovationSmallCardData.nodes
  const managementBigDataPosts = data.managementBigCardData.nodes
  const managementSmallDataPosts = data.managementSmallCardData.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout>
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout removeTopics={false}>
      <CategoryMenu />

      <Row style={{ margin: "0" }}>
        <Col md={9} style={{ padding: "0 1px" }}>
          <Slides slidesData={slidesPosts} />

          <SmallCard data={headerPosts} />

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

      <Fade bottom>
        <CategoryHeading category="car-reviews" />
        <div style={{ padding: "0 14px" }}>
          <Card data={advertBigDataPosts} cardType="car-reviews" />
        </div>

        <SmallCard data={advertSmallDataPosts} cardType="car-reviews" />
      </Fade>

      {/* <div className="analysis">
        <div>
          <h2>The latest IT market analysis report - May 2020</h2>
          <p>This month's analysis is a must see.</p>
        </div>

        <Link to="">Download Report</Link>
      </div> */}

      <Fade bottom>
        <CategoryHeading category="maintenance-and-tips" />
        <div style={{ padding: "0 14px" }}>
          <Card
            smallCardData={caseStudiesSmallDataPosts}
            data={caseStudiesBigDataPosts}
            cardType="maintenance-and-tips"
            removeBadge={true}
          />
        </div>
      </Fade>

      <Fade bottom>
        <CategoryHeading category="buying-guide" />
        <div style={{ padding: "0 14px" }}>
          <Card data={innovationBigDataPosts} cardType="buying-guide" />
        </div>
        <SmallCard data={innovationSmallDataPosts} cardType="buying-guide" />
      </Fade>

      <Fade bottom>
        <CategoryHeading category="car-comparison" />
        <div style={{ padding: "0 14px" }}>
          <Card
            smallCardData={managementSmallDataPosts}
            data={managementBigDataPosts}
            cardType="car-comparison"
            removeBadge={true}
          />
        </div>
      </Fade>

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
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query HomePage {
    slidesData: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    headerData: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    advertBigCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "car-reviews" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    advertSmallCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "car-reviews" } } }
      sort: { frontmatter: { date: DESC } }
      skip: 3
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
        }
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    caseStudiesBigCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "maintenance-and-tips" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 2
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    caseStudiesSmallCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "maintenance-and-tips" } } }
      sort: { frontmatter: { date: DESC } }
      skip: 2
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
        }
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    innovationBigCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "buying-guide" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    innovationSmallCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "buying-guide" } } }
      sort: { frontmatter: { date: DESC } }
      skip: 3
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
        }
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    managementBigCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "car-comparison" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 2
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg
          featuredImg
        }
        excerpt
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }

    managementSmallCardData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "car-comparison" } } }
      sort: { frontmatter: { date: DESC } }
      skip: 2
      limit: 3
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
        }
        fields {
          slug
          author {
            name
            image
          }
        }
        id
      }
    }
  }
`
