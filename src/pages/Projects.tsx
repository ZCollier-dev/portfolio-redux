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
            projectDesc="The third attempt at a portfolio that I am much more happy with. Simple and gets to the point."
            gitButtonLink="https://github.com/ZCollier-dev/portfolio-redux" />
        </li>
      </ul>
    </section>
  </main>
}
