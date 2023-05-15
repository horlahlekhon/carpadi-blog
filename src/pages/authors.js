import React from "react"
import Layout from "../components/Layout"
import "../styles/team.css"
import Team from "../components/Team"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"

const Authors = ({ data }) => {
  const authors = data.allAuthorYaml.nodes
  return (
    <Layout>
      <div className="auth_ctn">
        <Fade top>
          <h2>Team Members</h2>
          <h6>
            FlexiBlog theme comes with a pre-made contact form component. You
            can integrate this form with serverless services such as Formspree,
            Getform, FormKeep and others to receive form submissions via email.
          </h6>
        </Fade>

        <Fade bottom>
          {authors.map(author => (
            <Team
              key={author.id}
              name={author.name}
              job={author.job}
              bio={author.bio}
              expertise={author.expertise}
              ig={author.ig}
              twitter={author.twitter}
              site={author.site}
            />
          ))}
        </Fade>

        {/* <Team />
        <Team />
        <Team /> */}
      </div>
    </Layout>
  )
}

export default Authors

export const Head = () => <Seo title="Our Team" />

export const query = graphql`
  query AuthorPage {
    allAuthorYaml {
      nodes {
        bio
        expertise
        id
        ig
        job
        name
        site
        twitter
      }
    }
  }
`
