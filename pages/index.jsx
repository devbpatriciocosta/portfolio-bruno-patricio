import NavBar from "../src/components/layout/navbar/NavBar";
import Intro from "../src/components/layout/intro/Intro";
import AboutMe from '../src/components/layout/about/About'
import WorksDeveloped from "../src/components/works/Works";
import Education from "../src/components/layout/education/Education";
import ContactSession from "../src/components/layout/contact/Contact";
import Footer from "../src/components/footer/Footer";

import styled from 'styled-components'
import { useState, useEffect } from 'react'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color:  ${(props) => props.theme.primary};

  p {
    font-size: 21px;
    font-weight: bold;
  }
`

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`


function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <LoaderContainer>
          <Loader />
          <p>Carregando...</p>
        </LoaderContainer>
      ) : (
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
     )}
  </>
  )
}

export default HomePage