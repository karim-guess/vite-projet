import React from 'react'
import Beams from './Beams'
import Navbar from './Navbar' 
import { useState, useEffect } from 'react'  
import Magnet from './Magnet'


function Hero  ()  {
 
const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHello(true)
    }, 500) // Délai avant affichage du "Hello"
    return () => clearTimeout(timeout)
  }, [])
 
  return (
    
    <>


<div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Beams background */}
      <Beams
        beamWidth={2}
        beamHeight={25}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={45}
      />

      {/* Gradient bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20" />

      {/* Text on top */}
      <div className="absolute z-30 text-center px-4 ">

        
<Magnet padding={1} disabled={false} magnetStrength={7}>
  
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
          Karim Guessab
        </h1>
        <h2 className="text-xl md:text-3xl mt-4 font-light text-gray-300">
          Développeur Web — Création & Innovation
        </h2>
        {showHello && (
          <div className="mt-6 text-lg md:text-2xl animate-fadeIn text-black-500">
            Hello 👋 bienvenue sur mon portfolio
          </div>
        )}
      
</Magnet>
      </div>
    </div>
   </>

  )
}

export default Hero