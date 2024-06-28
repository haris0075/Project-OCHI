import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Features from './components/Features'
// import Navbar1 from './components/Navbar1'
import Client_Reviews from './components/Client_Reviews'
import CardsSection from './components/CardsSection'
import ProjectStartSection from './components/ProjectStartSection'
import Footer from './components/Footer'
import ButtonMain from './components/ButtonMain'
import LocomotiveScroll from 'locomotive-scroll';
import ImgHoverSection from './components/ImgHoverSection'
import StickySections from './components/StickySections'
import AnimatedButton from './components/AnimatedButton'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll-container className='w-full box-border m-0 p-0 relative bg-[#F1F1F1]'>
      <Navbar/>
      <Landingpage/>
      <Marquee />
      <About/>
      <Eye/>
      <Features/>
      <Client_Reviews/>
      <CardsSection/>
      <ProjectStartSection/>
      <Footer/>
      <AnimatedButton/>
      <ImgHoverSection/>
      {/* <StickySections/> */}
      {/* <ButtonMain/> */}
      
    </div>
  )
}

export default App