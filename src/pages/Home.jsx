import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar' 
import Beams from '../components/Beams'
import Projects from '../components/Projects'   
import Marquee from '../components/Marquee'
import About from '../components/About'
import Formation from '../components/Formation'
import Competences from '../components/Competences'


function Home  ()  {
  return (
    <>
    <Navbar/> 
    <Hero />
    <Marquee />
    <About />
    <Projects />
    <Formation />
    <Competences/>
    

    </>
  )
}

export default Home