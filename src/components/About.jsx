import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiVite,
  SiSpring,
  SiSymfony,
} from "react-icons/si";

function About() {
  return (
    
    <div className="relative min-h-screen bg-base-200 overflow-hidden">
      
      {/* Icônes animées de fond avec effet flottant */}
      <SiReact style={{ animation: 'float 6s ease-in-out infinite' }} className="absolute top-[10%] left-[5%] text-primary/20 text-[70px] animate-pulse pointer-events-none" />
      <SiPhp style={{ animation: 'float 5s ease-in-out infinite' }} className="absolute top-[30%] right-[10%] text-secondary/20 text-[60px] animate-pulse pointer-events-none" />
      <SiMysql style={{ animation: 'float 7s ease-in-out infinite' }} className="absolute bottom-[20%] left-[8%] text-accent/20 text-[65px] animate-pulse pointer-events-none" />
      <SiTailwindcss style={{ animation: 'float 6.5s ease-in-out infinite' }} className="absolute bottom-[10%] right-[5%] text-primary/20 text-[70px] animate-pulse pointer-events-none" />
      <SiJavascript style={{ animation: 'float 5.5s ease-in-out infinite' }} className="absolute top-[50%] left-[40%] text-secondary/20 text-[60px] animate-pulse pointer-events-none" />
      <SiVite style={{ animation: 'float 6s ease-in-out infinite' }} className="absolute bottom-[35%] right-[25%] text-accent/20 text-[60px] animate-pulse pointer-events-none" />

      <section className="py-24 px-6 md:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Titre */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">À propos de moi</h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Style éditeur + hover effet */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-xl blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-700 ease-in-out -z-10" />

            <div className="bg-base-100 rounded-xl shadow-xl border border-base-content/10 overflow-hidden">
              {/* Barre façon éditeur VS Code */}
              <div className="flex items-center gap-2 px-4 py-2 bg-base-300 border-b border-base-content/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-12 space-y-6">
                <p className="text-lg text-base-content/90 leading-relaxed">
                  Je suis un <span className="text-primary font-semibold">développeur web</span> passionné par 
                  la création d'expériences numériques <span className="text-secondary">élégantes</span> et 
                  <span className="text-accent font-medium"> fonctionnelles</span>.
                </p>

                <p className="text-lg text-base-content/90 leading-relaxed">
                  Curieux, créatif et rigoureux, je mets l'<span className="text-primary">innovation</span> et 
                  l'<span className="text-secondary">esthétique</span> au cœur de chaque projet.
                </p>

                <p className="text-lg text-base-content/90 leading-relaxed">
                  Côté front-end, je travaille principalement avec <span className="bg-primary/20 text-primary px-2 py-1 rounded">React</span> & 
                  <span className="bg-secondary/20 text-secondary px-2 py-1 rounded mx-2">Tailwind CSS</span>, en y intégrant des 
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded mx-2">animations</span> et un souci fort pour l’accessibilité.
                </p>

                <p className="text-lg text-base-content/90 leading-relaxed">
                  J’ai également une forte compétence back-end avec <span className="bg-primary/20 text-primary px-2 py-1 rounded">Java Spring Boot</span> et 
                  <span className="bg-secondary/20 text-secondary px-2 py-1 rounded mx-2">PHP Symfony</span>, utilisant 
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded mx-2">MySQL</span> comme base de données relationnelle.
                </p>

                {/* Ligne pulse */}
                <div className="flex items-center gap-4 my-8">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />
                </div>

                {/* Citation */}
                <div className="mt-8 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
                  <div className="pl-8 py-4">
                    <p className="text-xl font-medium text-base-content italic">
                      Mon objectif : construire des interfaces qui
                      <span className="text-primary"> marquent</span> et qui
                      <span className="text-secondary"> inspirent</span>.
                    </p>
                  </div>
                </div>

                {/* Décos */}
                <div className="absolute top-10 right-4 opacity-20">
                  <div className="w-8 h-8 border-2 border-primary rounded-full" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <div className="w-6 h-6 bg-secondary/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation keyframes pour l'effet de flottement */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
}

export default About;
