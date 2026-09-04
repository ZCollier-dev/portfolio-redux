import Button from "../buttons/ProjNavButton"

import "../../styles/entries/ProjectEntry.css"

export default function ProjectEntry(props: {
  projectName: string,
  projectLangs: string,
  projectTechs: string,
  projectDesc: string,
  gitButtonLink: string
}) {
  return <div className="proj-entry">
    <div className="proj-entry-top">
      <h2>{props.projectName}</h2>
      <Button name="Git Repo" link={props.gitButtonLink} />
    </div>
    <h3>Languages: {props.projectLangs}</h3>
    <h3>Technologies: {props.projectTechs}</h3>
    <p>{props.projectDesc}</p>
  </div>
}
