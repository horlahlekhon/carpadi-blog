import React from "react"
import Layout from "../components/Layout"
import "../styles/contact.css"
import Seo from "../components/Seo"

const Contact = () => {
  return (
    <Layout>
      <div className="contact_ctn">
        <div className="contact-section">
          <h2>Let's Connect</h2>
          <h6>
            FlexiBlog theme comes with a pre-made contact form component. You
            can integrate this form with serverless services such as Formspree,
            Getform, FormKeep and others to receive form submissions via email.
          </h6>

          <form method="POST" action="YOUR_ACTION_END_POINT">
            <div className="important_infos">
              <div className="contact_input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="contact_input">
                <label htmlFor="company_name">Company Name</label>
                <input type="text" name="company_name" />
              </div>
            </div>
            <div className="important_infos">
              <div className="contact_input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="contact_input">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
            </div>
            <div className="contact_input">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="contact_input">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" />
            </div>
          </form>
        </div>

        <div className="right-side-bar">
          <div className="commitment">
            <h4>Our Commitment</h4>
            <div className="child_div">
              <p>
                We take our commitment to our users seriously. If you need our
                help with your project, have questions about how to use the site
                or are experiencing any technical difficulties, please do not
                hesitate to contact us.
              </p>
            </div>
          </div>
          <div className="advertise">
            <h4>Advertise With Us</h4>
            <div className="child_div">
              <p>
                Interested in working together?
                <br />
                <br />
                Suspendisse potenti. Mauris mollis diam tempus ut.
              </p>
              <div className="contact_info">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                  </div>
                  <span>+1 (888) 888-8888</span>
            
              </div>
              <div className="contact_info">
                <div>
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
                  </div>
                  <span>email@example.com</span>
               
              </div>
              <div className="contact_info">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                  </svg>
                  </div>
                  <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const Head = () => <Seo title="Contact" />
