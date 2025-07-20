import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar' 
import Beams from '../components/Beams'
import Projects from '../components/Projects'   
import About from '../components/About'
import Contact from '../components/Contact'
import WhyMe from '../components/WhyMe'
import Footer from '../components/Footer'




function Home  ()  {
  return (
    <>
    <Navbar/> 
    <Hero />
    <About/>
 <div className="relative">
  <svg
    className="absolute top-0 left-0 w-full h-24 text-base-200"
    preserveAspectRatio="none"
    viewBox="0 0 1440 320"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,160C672,160,768,128,864,117.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      fill="currentColor"
    />
  </svg>
</div>


    <Projects />
    <WhyMe />
    <Contact/>
    <Footer />
    

    </>
  )
}

export default Home