import "../../styles/buttons/BodyNavButton.css"

export default function BodyNavButton(props: {name: string, link: string}) {
  return <a className="body-button" href={props.link}>
    <button>{props.name}</button>
  </a>
}
