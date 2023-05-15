import React from "react"
import "../styles/category.css"
import { Badge } from "react-bootstrap"
import Layout from "../components/Layout"
import CardComponent from "../components/Card"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import { Fade } from "react-reveal"

const TagPosts = ({ data, pageContext }) => {
  const tagPosts = data.allMarkdownRemark.nodes
  const prev = pageContext.prev
  const next = pageContext.next
  const totalPage = pageContext.totalPage
  const currentPage = pageContext.currentPage
  //   const currentCategory = pageContext.category

  return (
    <Layout>
      <div className="category_ctn">
        <Fade top>
          <h2>
            #{pageContext.tag}{" "}
            <Badge>{data.allMarkdownRemark.totalCount}</Badge>
          </h2>
        </Fade>

        <Fade bottom>
          <CardComponent data={tagPosts} changeFlex="0 0 31%" />

          <div
            className="paginator"
            style={{
              display: `${
                data.allMarkdownRemark.totalCount < 7 ? "none" : "flex"
              }`,
            }}
          >
            <Link
              to={prev}
              className="prev_btn"
              style={{ visibility: prev === null ? "hidden" : "visible" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
              Previous
            </Link>

            <div>
              Page
              <strong>{currentPage}</strong>
              of
              <strong>{totalPage}</strong>
            </div>

            <Link
              to={next}
              className="next_btn"
              style={{ visibility: next === null ? "hidden" : "visible" }}
            >
              Next
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </Link>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default TagPosts

export const Head = ({ pageContext }) => <Seo title={pageContext.tag} />

export const query = graphql`
  query TagPostsPage($limit: Int!, $skip: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          readtime
          category
          thumbImg {
            relativePath
          }
        }
        excerpt
        fields {
          slug
          author {
            name
          }
        }
        id
      }
    }
  }
`
