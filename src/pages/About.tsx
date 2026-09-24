import "../styles/About.css"

import LangList from "../components/LangList"
import TechList from "../components/TechList"

export default function About() {
  return <main>
    <section className="about-section">
      <div className="page-heading">
        <h1>About Me</h1>
        <h2>and what I am capable of</h2>
      </div>
      <p>
        My name is Zachary Collier, though I typically go by "Zack". I am a Junior Software Developer recently graduated from Keyin College. Through coursework, I have acquired a knowledge and appreciation for the inner complexities of an application. Or, in many cases, two or more separate programs and APIs working together in tandem to create a powerful, clean, and secure service for its end users.
      </p>
      <br />
      <p>
        Through study, both in and out of college, I have picked up on multiple programming languages and technologies, including the following...
      </p>
      <LangList />
      <TechList />
      <p>
        I am always looking to expand my horizons, whether that be through programming or another related skill, especially when more project requirements manifest as work continues onward. I like to take some time to figure out what code, API, or component may be required for a project, understanding why the project needs said item, and ensuring everyone involved understands the plan of action.
      </p>
      <br />
      <p>
        My preferred specialization, as one could imagine, tends to reside on the back-end - the oft unseen but always felt part of many an app or service - though I am fully willing and capable of performing work on the entire stack, front-end and database included. Such as with the website you're on right now.
      </p>
      <br />
      <p>
        In learning more and more about computers and the technology behind them, I landed on Linux as a daily driver within the past few years. It has been a satisfying, enjoyable, and ongoing process, learning a whole new operating system with little prior knowledge, through thick and thin, whether through the terminal or a GUI. I find it's useful for development work, too, as many servers tend to run the OS.
      </p>
      <br />
      <p>
        The tech landscape is evolving at a dizzying pace. It can be overwhelming at times, with endless pressure to keep up with one's peers or the bleeding edge of new hardware and software. I aim to have a more brisk pace of learning new technologies - not so fast that it becomes overwhelming and the rush causes new concepts to fail to stick, though not so slow that I become incapable of implementing relevant new techniques and technologies as they come. A pace that will deliver consistent, measurable, meaningful progress.
      </p>
      <br />
      <p className="stylized">
        So join me - or welcome me aboard - as we create, understand, and prosper. Together.
      </p>
    </section>
  </main>
}
