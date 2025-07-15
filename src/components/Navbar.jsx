// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Accueil", "Projets", "Compétences", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl px-6 py-3 flex items-center justify-between text-white">
      <h1 className="text-2xl font-bold tracking-wide">Karim.G</h1>
      
    

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative group text-lg transition"
          >
            {link}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Burger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg rounded-b-2xl mt-2 py-4 flex flex-col items-center md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="py-2 text-lg hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
