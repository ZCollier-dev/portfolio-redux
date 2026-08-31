import '../styles/Head.css'

import Button from "./buttons/HeadNavButton"

export default function Head() {
  return (
    <header>
      <div className="header-title-group">
        <div className="header-title">Collier's Code Cove</div>
        <div className="header-subscript">Portfolio of Zachary Collier</div>
      </div>
      <nav className="nav-top-bar">
        <Button name="Home" link="/" />
        <Button name="About" link="/about" />
        <Button name="Projects" link="/projects" />
        <Button name="Contact" link="/" />
      </nav>
    </header>
  )
}
