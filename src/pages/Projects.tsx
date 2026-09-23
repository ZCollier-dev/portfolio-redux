import Entry from "../components/entries/ProjectEntry"

import "../styles/Projects.css"

export default function Projects() {
  return <main>
    <section className="proj-section">
      <div className="proj-page-top">
        <h1>Projects</h1>
        <h2>that I am proud of.</h2>
      </div>
      <p>Ordered reverse-chronologically.</p>
      <ul className="proj-entries">
        <li>
          <Entry
            projectName="This Portfolio"
            projectLangs="HTML, CSS, TypeScript"
            projectTechs="Preact"
            projectDesc="The third attempt at building a portfolio from scratch. Not a complex set of webpages (yet), but certainly gets the job done."
            gitButtonLink="https://github.com/ZCollier-dev/portfolio-redux" />
        </li>
        <li>
          <Entry
            projectName="Blackjack"
            projectLangs="Python"
            projectTechs="PySide6, uv"
            projectDesc="A simple PySide6 card game made to learn the ins and outs of the technology. Uses Queue data structures in the form of Linked Lists for the deck of cards."
            gitButtonLink="https://github.com/ZCollier-dev/blackjack-app" />
        </li>
        <li>
          <Entry
            projectName="Airport Backend API"
            projectLangs="Java"
            projectTechs="Maven, Spring Boot, JUnit, Mockito, MySQL, BCrypt, Docker, AWS"
            projectDesc="The backend for the SDAT course's Midterm and Final Sprints during the final semester at Keyin College's Software Development program. A system created by my team of three that sends and receives data about airports, aircrafts, arrivals, departures, and more. SQL database tables connect all data together. Includes tests and all wrapped in a Docker container. Originally hosted on AWS as part of the Final Sprint's requirements, but has since been taken down. A link to a video describing how the full project worked is in the project's README - I recorded the final part with AWS."
            gitButtonLink="https://github.com/ZCollier-dev/sdat-devops-zss-sprint-api" />
        </li>
      </ul>
    </section>
  </main>
}
