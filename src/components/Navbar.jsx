import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Projets", href: "#projets" },
    { label: "Compétences", href: "#whyme" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
      setScrolled(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-2xl px-4 py-2 transition-colors duration-500 flex items-center justify-between ${
        scrolled
          ? "bg-black/60 shadow-2xl backdrop-blur-lg"
          : "bg-white/10 shadow-xl backdrop-blur-lg"
      }`}
    >
      {/* Nom centré sur mobile */}
      <div className="block md:hidden absolute left-1/2 -translate-x-1/2 text-white font-semibold text-lg pointer-events-none">
        Karim.<span className="text-primary">G</span>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex justify-center gap-10 w-full text-white text-[1.125rem] font-medium">
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="relative group transition">
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Mobile burger menu */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/70 backdrop-blur-md rounded-b-2xl mt-2 py-4 flex flex-col items-center md:hidden z-50">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="py-2 text-[1.125rem] text-white hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
