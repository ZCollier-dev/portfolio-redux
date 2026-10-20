import "../styles/Home.css"

import Button from "../components/buttons/BodyNavButton"

import BaseRoute from "../constants/BaseRoute"

export default function Home() {
  return <main>
    <section className="home-section">
      <h1>Collier's Code Cove</h1>
      <h2>Stability in the era of Haste</h2>
      <p>
        Hi! My name is Zachary Collier, though most simply call me "Zack". I am a junior software developer that fairly recently graduated with Honours from Keyin College's Software Development program. There, I studied a slice of all ends of development, from Front-end to Back-end, Databases to Data Structures to DevOps.<br />
        <br />
        Looking for a greenhorn who enjoys learning and understanding new concepts, techniques, and ways of working, who is eager to get his foot in the door? A newbie happy to solve problems both mundane and novel? A novice willing to sit, listen, offer new ideas and more?<br />
        <br />
        Yes? Then read on. Perhaps we can prosper together in the rapidly-changing world we find ourselves in.
      </p>
      <div className="home-button-area">
        <Button name="Learn More About Me" link={BaseRoute + '/about'} />
        <Button name="My Projects" link={BaseRoute + '/projects'} />
        <Button name="Contact Me" link={BaseRoute + '/contact'} />
      </div>
    </section>
  </main>

}
