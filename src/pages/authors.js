import React from "react"
import Layout from "../components/Layout"
import "../styles/team.css"
import Team from "../components/Team"
import Seo from "../components/Seo"

const Authors = () => {
  return (
    <Layout>
      <div className="auth_ctn">
        <h2>Team Members</h2>
        <h6>
          FlexiBlog theme comes with a pre-made contact form component. You can
          integrate this form with serverless services such as Formspree,
          Getform, FormKeep and others to receive form submissions via email.
        </h6>

        <Team />
        <Team />
        <Team />
        <Team />
      </div>
    </Layout>
  )
}

export default Authors

export const Head = () => <Seo title="Our Team" />
