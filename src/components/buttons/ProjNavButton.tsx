import "../../styles/buttons/ProjNavButton.css"

export default function ProjNavButton(props: {name: string, link: string}) {
  return <a className="proj-button" href={props.link} target="_blank">
    <button>{props.name}</button>
  </a>
}
