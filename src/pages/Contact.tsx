import "../styles/Contact.css"

import EmailIcon from "../assets/email-logo.svg"
import GitHubLogo from "../assets/github-logo.svg"
import LinkedInLogo from "../assets/linkedin-logo.png"

export default function Contact() {
  return <main>
    <section className="contact-section">
      <div className="page-heading">
        <h1>Contact Info</h1>
        <h2>to talk and ask questions</h2>
      </div>
      <div className="contact-info-box">
        <div className="contact-entry">
          <div>
            <img src={EmailIcon} />
            <h3>zacharycollier36@protonmail.com</h3>
          </div>
        </div>
        <a className="contact-entry" href="https://github.com/ZCollier-dev" target="_blank">
          <div>
            <img src={GitHubLogo} />
            <h3>github.com/ZCollier-dev</h3>
          </div>
        </a>
        <a className="contact-entry" href="https://www.linkedin.com/in/zachary-c-collier/" target="_blank">
          <div>
            <img src={LinkedInLogo} />
            <h3>www.linkedin.com/in/zachary-c-collier/</h3>
          </div>
        </a>
      </div>
    </section>
  </main>
}
