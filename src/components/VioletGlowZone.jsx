import React, { useState } from 'react'

function VioletGlowZone() {
  const [hover, setHover] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div
        className={`relative w-72 h-72 rounded-xl border border-neutral-800 overflow-hidden 
        transition-all duration-700
        ${hover ? 'bg-gradient-to-br from-purple-500/30 via-purple-700/40 to-purple-900/30 shadow-[0_0_60px_10px_rgba(168,85,247,0.3)]' : 'bg-[#0f0f0f]'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Carrés flottants */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded rotate-45 animate-floatingDot"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Logo ou texte au centre */}
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold text-xl">
          DEV WEB
        </div>
      </div>
    </div>
  )
}

export default VioletGlowZone
