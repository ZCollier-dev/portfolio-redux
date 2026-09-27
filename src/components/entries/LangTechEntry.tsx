import "../../styles/components/entries/LangTechEntry.css"

export default function LangTechEntry(props: {
  name: string,
  image: string
}) {
  return <div className="lang-entry">
    <img src={props.image} alt={props.name} />
    <div class="lang-text">
      <p>{props.name}</p>
    </div>
  </div>
}
