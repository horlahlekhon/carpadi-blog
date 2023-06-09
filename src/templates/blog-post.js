import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../styles/blog-post.css"
import SmallCard from "../components/SmallCard"
import { Fade } from "react-reveal"

const BlogPostTemplate = ({
  data: { previous, next, markdownRemark: post, allMarkdownRemark, mdx },
}) => {


  const related_posts = allMarkdownRemark.nodes

  const categoryType = (
    post.frontmatter.category.charAt(0).toUpperCase() +
    post.frontmatter.category.slice(1)
  ).replace(/-/g, " ");

  const tableOfContent = mdx.tableOfContents.items;

  // let tagList = []

  // post.frontmatter.tags.map(tag => {
  //   tagList.push(
  //     <Link to="" key={Math.random()}>
  //       #{tag}
  //     </Link>
  //   )
  // })

  return (
    <Layout>
      <article className="blog-post">
        <Fade top>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <div className="header-child">
              <p>
                By{" "}
                <Link
                  to={`/author/${post.fields.author.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {post.fields.author.name}
                </Link>
              </p>
              <span>・</span>
              <p>
                Published in{" "}
                <Link to={`/category/${post.frontmatter.category}`}>
                  {categoryType}
                </Link>
              </p>
              <span>・</span>
              <p>May 15 2021</p>
              <p className="read-time">
                <span>・</span> 2 min read
              </p>
            </div>
          </header>
        </Fade>

        <Fade bottom>
          <div className="article_ctn">
            <div className="articleBody">
              <img className="blog-img" src={`${post.frontmatter.featuredImg}`} alt="article" />

              <section className="md-body" dangerouslySetInnerHTML={{ __html: post.html }} />
              {/* <MarkdownRenderer content={post.html} /> */}

              <div className="articleBottom">
                <div className="tags">
                  <p>
                    Tags
                    {post.frontmatter.tags.map(tag => (
                      <Link to={`/tag/${tag}`} key={Math.random()}>
                        #{tag}
                      </Link>
                    ))}
                    {/* <Link to="">#tutorial</Link>
                  <Link to="">#tutorial</Link> */}
                  </p>
                </div>

                <div className="share-links">
                  <p>Share</p>

                  <a
                    href="#"
                    className="share-links-img"
                    style={{ margingLeft: "0px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>

                  <a href="#" className="share-links-img twitter">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>

                  <a href="#" className="share-links-img">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>

                  <a href="#" className="share-links-img">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <nav className="blog-post-nav">
                <ul>
                  <li>
                    {previous && (
                      <div>
                        <p>Previous Article</p>
                        <Link to={previous.fields.slug} rel="prev">
                          {previous.frontmatter.title}
                        </Link>
                      </div>
                    )}
                  </li>
                  <li>
                    {next && (
                      <div>
                        <p>Next Article</p>
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title}
                        </Link>
                      </div>
                    )}
                  </li>
                </ul>
              </nav>
            </div>

            <div className="right-side-bar">
              <section className="author-section">
                <div className="author_img">
                  <div className="circle-bg"></div>
                  <img src={post.fields.author.image} alt="author" />
                  <div className="curve"></div>
                </div>

                <div className="author_text">
                  <Link
                    to={`/author/${post.fields.author.name
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {post.fields.author.name}
                  </Link>
                  <p>{post.fields.author.job}</p>
                </div>

                <div className="share-links">
                
                  <a href={post.fields.author.ig} className="share-links-img">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      color="#C13584"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(193, 53, 132)" }}
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>

                
                </div>
              </section>

              <section className="table-of-contents">
                <h2>Table of Contents</h2>

                <div className="child">
                  {
                    tableOfContent.map((toc, index )=> (
                      <a href={`${toc.url}`} key={Math.random()}>
                      <span>{index + 1}</span>
                      <p>{toc.title}</p>
                    </a>

                    ))
                  }
                 
                  {/* <a href="#">
                    <span>2</span>
                    H2
                  </a>
                  <a href="#">
                    <span>3</span>
                    H3
                  </a> */}
                </div>

                <section className="related-posts">
                  <h2>Related Posts</h2>
                  <SmallCard
                    advertCtn="0"
                    data={related_posts}
                    cardType="advert"
                    removeBadge={true}
                  />
                </section>
              </section>
            </div>
          </div>
        </Fade>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $slug: String
    $previousPostId: String
    $nextPostId: String
    $title: String
    $category: String!
  ) {
    mdx(fields: {slug: {eq: $slug}}) {
      tableOfContents
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        category
        thumbImg
        featuredImg
      }
      fields {
        slug
        author {
          name
          image
          job
          ig
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { title: { ne: $title }, category: { eq: $category } }
      }
      sort: { frontmatter: { date: DESC } }
      skip: 1
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          title
          readtime
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
          author {
            name
            image
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
