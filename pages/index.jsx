import NavBar from "../src/components/layout/navbar/NavBar";
import Intro from "../src/components/layout/intro/Intro";
import AboutMe from '../src/components/layout/about/About'
import WorksDeveloped from "../src/components/works/Works";

function HomePage() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <WorksDeveloped />
    </>
  )
}

export default HomePage