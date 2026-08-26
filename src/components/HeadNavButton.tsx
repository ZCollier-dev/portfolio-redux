import "../styles/HeadNavButton.css"

export default function HeadNavButton(props: {name: string, link: string}) {
  return <a href={props.link}>
    <button>{props.name}</button>
  </a>
}
