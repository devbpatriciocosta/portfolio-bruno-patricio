import NavBar from "../src/components/layout/navbar/NavBar";
import Intro from "../src/components/layout/intro/Intro";
import AboutMe from '../src/components/layout/about/About'
import WorksDeveloped from "../src/components/works/Works";
import Education from "../src/components/layout/Education/Education";

function HomePage() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <WorksDeveloped />
      <Education />
    </>
  )
}

export default HomePage