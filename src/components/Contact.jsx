export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-base-200 text-base-content overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Prêt à créer quelque chose d'unique ?</h2>
          <p className="max-w-xl mx-auto mt-4 text-base-content/80 text-lg leading-relaxed">
            Vous avez un projet en tête ? Parlons-en ! J'aime relever de nouveaux défis et collaborer avec des équipes passionnées.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Gauche : Contacts agrandis et arrondis */}
          <div className="flex flex-col gap-8 items-center md:items-start max-w-md w-full mx-auto md:mx-0">
            <a
              href="mailto:karim.guessab@hotmail.com"
              className="w-full px-10 py-5 rounded-2xl border border-primary text-primary font-semibold text-xl text-center hover:bg-primary hover:text-white transition"
            >
              ✉️ Email
            </a>
            <a
              href="tel:+33123456789"
              className="w-full px-10 py-5 rounded-2xl border border-primary text-primary font-semibold text-xl text-center hover:bg-primary hover:text-white transition"
            >
              📞 Téléphone
            </a>
            <a
              href="https://linkedin.com/in/karimguessab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-10 py-5 rounded-2xl border border-primary text-primary font-semibold text-xl text-center hover:bg-primary hover:text-white transition"
            >
              🔗 LinkedIn
            </a>
            <div className="w-full px-10 py-5 rounded-2xl border border-primary text-primary font-semibold text-xl text-center cursor-default select-none">
              📍 Lille, France
            </div>
          </div>

          {/* Droite : Carte Mac simplifiée + glow */}
          <div className="relative group max-w-lg mx-auto md:mx-0">
            {/* Glow derrière (flou et couleur avec transition) */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 ease-in-out -z-10" />

            {/* Carte Mac */}
            <div className="bg-base-100 backdrop-blur-md rounded-3xl border border-base-300 shadow-md overflow-hidden">
              {/* Barre Mac */}
              <div className="flex items-center gap-2 px-5 py-3 bg-base-300 border-b border-base-300 rounded-t-3xl">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>

              {/* Contenu */}
              <div className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-8">
                  💡 Pourquoi travailler avec moi ?
                </h3>

                <ul className="space-y-8 text-base-content/90 text-lg leading-relaxed max-w-[480px] mx-auto">
                  <li>
                    <strong>Performance et optimisation</strong><br />
                    Code propre et optimisé pour une rapidité et une scalabilité maximales.
                  </li>
                  <li>
                    <strong>Solutions sur-mesure et évolutives</strong><br />
                    Développement adaptable, facile à maintenir et à faire évoluer avec votre croissance.
                  </li>
                  <li>
                    <strong>Communication transparente</strong><br />
                    Suivi régulier et disponibilité assurée durant tout le projet.
                  </li>
                  <li>
                    <strong>Expérience multi-secteurs</strong><br />
                    E-learning, SaaS, e-commerce, gestion administrative — je m’adapte à vos besoins.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
