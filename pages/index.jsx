import NavBar from "../src/components/layout/navbar/NavBar";
import Intro from "../src/components/layout/intro/Intro";
import AboutMe from '../src/components/layout/about/About'

function HomePage() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
    </>
  )
}

export default HomePage