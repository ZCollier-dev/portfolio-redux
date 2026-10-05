import "../styles/components/LangTechList.css"

import LangTechEntry from "./entries/LangTechEntry"

import HTML5Logo from "../assets/html5-logo.svg"
import CSS3Logo from "../assets/css3-logo.svg"
import JSLogo from "../assets/javascript-logo.png"
import TSLogo from "../assets/typescript-logo.svg"

import PythonLogo from "../assets/python-logo.svg"
import JavaLogo from "../assets/java-logo.svg"

export default function LangList() {
  return <div className="lang-list">
    <LangTechEntry name="HTML5" image={HTML5Logo} />
    <LangTechEntry name="CSS3" image={CSS3Logo} />
    <LangTechEntry name="JavaScript" image={JSLogo} />
    <LangTechEntry name="TypeScript" image={TSLogo} />
    <LangTechEntry name="Python" image={PythonLogo} />
    <LangTechEntry name="Java" image={JavaLogo}/>
  </div>
}
