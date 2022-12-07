import NavBar from "../src/components/layout/navbar/NavBar";
import Intro from "../src/components/layout/intro/Intro";
import AboutMe from '../src/components/layout/about/About'
import WorksDeveloped from "../src/components/works/Works";
import Education from "../src/components/layout/Education/Education";
import ContactSession from "../src/components/layout/contact/Contact";
import Footer from "../src/components/footer/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="works">
      <WorksDeveloped />
      </div>
      <div id="certificado">
        <Education />
      </div>
      <div id="contato">
        <ContactSession />
        <Footer />
      </div>
      
    </>
  )
}

export default HomePage