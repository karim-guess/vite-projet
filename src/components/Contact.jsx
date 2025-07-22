import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import useInView from "./useInView"; // adapte le chemin

export default function Contact() {
  const [ref, isVisible] = useInView(0.1); // seuil de déclenchement du scroll

  return (
    <section
      id="contact"
      className="relative py-20 bg-base-200 text-base-content overflow-hidden transition-all duration-1000"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Titre */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Me contacter
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-transparent" />
        </div>

        {/* Sous-titre */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium mb-2">
            Disponible
          </span>
          <p className="text-base text-base-content/70">
            Réponse sous 24h garantie. Aucun engagement, juste un échange humain.
          </p>
        </div>

        {/* Bloc animé */}
        <div
          ref={ref}
          className={`relative group max-w-2xl mx-auto transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
        >
          {/* Glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 ease-in-out -z-10" />

          {/* Carte */}
          <div className="bg-base-100/80 backdrop-blur-md rounded-3xl border border-base-300 shadow-md transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 px-5 py-3 bg-base-300 border-b border-base-300 rounded-t-3xl">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-400" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>

            <div className="p-10 text-center">
              <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
                <a
                  href="mailto:karim.guessab@hotmail.com"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-primary text-primary font-medium text-lg transition-all hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02]"
                >
                  <Mail className="w-5 h-5" /> karim.guessab@hotmail.com
                </a>
                <a
                  href="tel:+33666966604"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-primary text-primary font-medium text-lg transition-all hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5" /> 06 66 96 66 04
                </a>
                <a
                  href="https://linkedin.com/in/karimguessab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-primary text-primary font-medium text-lg transition-all hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02]"
                >
                  <Linkedin className="w-5 h-5" /> linkedin.com/in/karimguessab
                </a>
                <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-primary text-primary font-medium text-lg cursor-default select-none">
                  <MapPin className="w-5 h-5" /> Lille, France
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
