import React from 'react'
import ScrollReveal from './ScrollReveal'

function About() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          À propos de moi
        </h2>
       

        <p className="text-lg text-gray-300 leading-relaxed">
          Je suis une développeuse web passionnée par la création d’expériences numériques élégantes et fonctionnelles. Curieuse, créative et rigoureuse, je mets l’innovation et l’esthétique au cœur de chaque projet. 
          <br /><br />
          Spécialisée en front-end avec React et Tailwind CSS, je m’intéresse aussi aux animations interactives, à l’accessibilité et au design system. Mon objectif : construire des interfaces qui marquent et qui inspirent.
        </p>

      
      </div>
    </section>

    
  )
}

export default About
