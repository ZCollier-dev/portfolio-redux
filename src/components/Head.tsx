import '../styles/components/Head.css'

import AnchorB from "../assets/anchor-hc.png"
import AnchorW from "../assets/anchor-hcw.png"
import Button from "./buttons/HeadNavButton"
import { DarkModeButton as ThemeButton } from "./buttons/DarkModeButton"

import { useContext } from "preact/hooks";

import { ThemeContext } from "../utils/ThemeContext";

export default function Head() {
  const theme = useContext(ThemeContext)

  return (
    <header>
      <div className="header-left-group">
        {theme?.theme.value === 'dark'? <img src={AnchorW} alt="Logo" /> : <img src={AnchorB} alt="Logo" />}

        <div className="header-title-group">
          <div className="header-title">Collier's Code Cove</div>
          <div className="header-subscript">Portfolio of Zachary Collier</div>
        </div>
      </div>
      <nav className="nav-top-bar">
        <ThemeButton />
        <Button name="Home" link="/" />
        <Button name="About" link="/about" />
        <Button name="Projects" link="/projects" />
        <Button name="Contact" link="/contact" />
      </nav>
    </header>
  )
}
