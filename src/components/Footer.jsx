import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-800 text-gray-100 py-10 border-t border-neutral-700 overflow-hidden">
      {/* Icônes flottantes en fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex justify-center items-center opacity-10 select-none space-x-16"
        style={{ zIndex: 0 }}
      >
        <Mail className="w-24 h-24 animate-float" />
        <Phone className="w-24 h-24 animate-float delay-2000" />
        <Linkedin className="w-24 h-24 animate-float delay-4000" />
        <Github className="w-24 h-24 animate-float delay-6000" />
        <MapPin className="w-24 h-24 animate-float delay-8000" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Bloc gauche : identité */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-primary">Karim Guessab</h3>
          <p className="text-sm text-gray-400">
            Développeur web freelance React & Spring Boot basé à Lille.
          </p>
        </div>

        {/* Bloc centre : contact rapide */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-semibold text-primary">Me contacter</h4>
          <a
  href="mailto:karim.guessab@hotmail.com"
  className="flex w-max items-center gap-2 hover:text-white transition"
>
  <Mail className="w-4 h-4" /> karim.guessab@hotmail.com
</a>
<a
  href="tel:+33666966604"
  className="flex w-max items-center gap-2 hover:text-white transition"
>
  <Phone className="w-4 h-4" /> 06 66 96 66 04
</a>
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" /> Lille, France
          </div>
        </div>

        {/* Bloc droite : réseaux sociaux */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-semibold text-primary">Réseaux</h4>
          <a
  href="https://linkedin.com/in/karimguessab"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-max items-center gap-2 hover:text-white transition"
>
  <Linkedin className="w-4 h-4" /> LinkedIn
</a>
<a
  href="https://github.com/karim-guess"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-max items-center gap-2 hover:text-white transition"
>
  <Github className="w-4 h-4" /> GitHub
</a>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} Karim Guessab — Tous droits réservés.
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.2;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-4000 {
          animation-delay: 4s;
        }
        .delay-6000 {
          animation-delay: 6s;
        }
        .delay-8000 {
          animation-delay: 8s;
        }
      `}</style>
    </footer>
  );
}
