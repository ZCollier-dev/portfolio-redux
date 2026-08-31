import Button from "../components/buttons/BodyNavButton"

import "../styles/Home.css"

export default function Home() {
  return <main>
    <section className="home-section">
      <h1>Collier's Code Cove</h1>
      <h2>Portfolio of Zachary Collier</h2>
      <p>Beneath the waves of an excellent app or service lies a robust back-end system teeming with life.<br />
      Often unseen, they become the backbone of that application's ecosystem.<br />
      I like to tame these back-ends, whether through engineering a new solution, troubleshooting an existing solution, or working with the front-end itself to make the app the best it can be.<br />
      <br /> It shall be tamed.</p>
      <div className="home-button-area">
        <Button name="Learn About Me" link="/about" />
        <Button name="My Projects" link="/projects" />
      </div>
    </section>
  </main>

}
