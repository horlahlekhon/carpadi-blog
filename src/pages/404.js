import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../styles/404.css"

const NotFoundPage = () => {

  return (
    <Layout>
      <div className="four_div">
      <h2>Sorry, this page isn't available.</h2>
      <h6>You may have mistyped the address or the page may have moved.</h6>
      <Link to="/">Go to homepage</Link>

      </div>
      
    </Layout>
  )
}

export const Head = () => <Seo title="Page Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
