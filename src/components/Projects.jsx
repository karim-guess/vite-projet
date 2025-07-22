import { useState } from "react";
import { Dialog } from "@headlessui/react";

const bigProjects = [
  {
    id: 1,
    title: "Owner Technology",
    description: "Site vitrine moderne pour Owner Technology avec présentation des services, FAQ interactive et formulaire de contact avancé",
    images: [
      "/images/Owner1.png",
      "/images/Owner2.png",
      "/images/Owner3.png",
      "/images/Owner4.png",
    ],
    technologies: ["Symfony", "Php", "JavaScript","MySQL"],
    url: "https://ownertechnology.com/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Portfolio personnel réalisé pour présenter mes projets, compétences et expériences. Il intègre une section dynamique de réalisations, un système de contact par formulaire ainsi qu’un design responsive moderne.",
    images: [
      "/images/Portfolio1.png",
      "/images/Portfolio2.png",
      "/images/Portfolio3.png",
      "/images/Portfolio4.png",
    ],
    technologies: ["Symfony", "AssetMapper", "Twig","JavaScript","Bootstrap"],
    url: "https://karimguessab.fr/",
  },
];

const smallProjects = [
  {
    id: 3,
    title: "CritCarteGrise",
    description: "Développement d'une application web moderne pour la gestion des démarches administratives liées aux cartes grises. Le projet utilise Symfony avec l'intégration de Turbo et Stimulus pour offrir une expérience utilisateur exceptionnelle avec des formulaires intelligents ultra-réactifs. Cette architecture permet des validations en temps réel, des mises à jour dynamiques sans rechargement de page et une navigation fluide.",
    images: [
      "/images/Ccg1.png",
      "/images/Ccg2.png",
      "/images/Ccg3.png",
      "/images/Ccg4.png",
    ],
    technologies: ["Symfony", "Php", "Turbo", "Stimulus", "MariaDB", "Api Rest"],
    url: "https://www.critcartegrise.fr/",
  },
  {
    id: 4,
    title: "Al Dirassa",
    description: "Développement d'une solution e-learning sur mesure pour l'Institut Al Dirassa, utilisant les toutes dernières technologies du marché. Le projet est construit avec PHP 8.4 et Symfony 7.3, intégrant Turbo et Stimulus pour offrir une expérience utilisateur moderne et réactive sans la complexité d'un framework JavaScript lourd. Cette architecture cutting-edge permet des interactions fluides, des mises à jour partielles de page et une performance exceptionnelle, tout en maintenant la simplicité et la maintenabilité du code Symfony.",
    images: [
      "/images/aldirass-accueil.png",
      "/images/aldirass-reserve.png",
      "/images/aldirass-student-calendar.png",
      "/images/aldirass-new-order.png",
    ],
    technologies: ["Php 8.4", "Symfony 7.3", "Turbo", "Stimulus","MariaDB", "Asset-map","Bootstrap"],
  },
  {
    id: 5,
    title: "Cinéma Explorer Api Tmdb",
    description: "Une application web PHP permettant de rechercher des informations sur des films via l'API The Movie Database (TMDb).",
    images: [
      "/images/tmdb1.png",
      "/images/tmdb2.png",
      "/images/tmdb3.png",
      "/images/tmdb4.png",
    ],
    technologies: ["Php", "Html", "Css", "JavaScript"],
    url: "https://tmdb.karimguessab.fr/",
  },
  {
    id: 6,
    title: "ENI-enchères",
    description: "Cette plateforme d’enchères en ligne a été développée dans le cadre d’un projet à l’ENI École Informatique. Conçue avec Java EE, elle permet aux utilisateurs de mettre en vente des objets et de participer à des enchères en temps réel.",
    images: [
      "/images/eni1.png",
      "/images/eni2.png",
      "/images/eni3.png",
      "/images/eni4.png",
    ],
    technologies: ["Java EE","Servlets ", "SQL Server", "Booststrap"],
  },
];

// Composant pour icônes flottantes
function FloatingIcon({ icon, style }) {
  return (
    <div
      style={style}
      className="absolute animate-floating select-none pointer-events-none"
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project) => {
    setSelected(project);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelected(null);
    setCurrentIndex(0);
  };

  const prevImage = () => {
    if (!selected || !selected.images?.length) return;
    setCurrentIndex((i) => (i === 0 ? selected.images.length - 1 : i - 1));
  };

  const nextImage = () => {
    if (!selected || !selected.images?.length) return;
    setCurrentIndex((i) =>
      i === selected.images.length - 1 ? 0 : i + 1
    );
  };

  return (
    <section
      id="projets"
      className="relative py-20 bg-base-200 text-base-content overflow-hidden"
    >
      {/* Icônes flottantes */}
      <FloatingIcon
  icon={
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
      alt="Java"
      className="w-16 h-16"
    />
  }
  style={{ top: "10%", left: "5%", opacity: 0.3 }}
/>
      <FloatingIcon
        icon="🛠️"
        style={{ top: "40%", right: "10%", fontSize: "2.5rem", opacity: 0.25 }}
      />
      <FloatingIcon
        icon="🌐"
        style={{ bottom: "15%", left: "15%", fontSize: "3.5rem", opacity: 0.2 }}
      />
      <FloatingIcon
        icon="💻"
        style={{ bottom: "30%", right: "20%", fontSize: "3rem", opacity: 0.15 }}
      />
      <FloatingIcon
        icon="⚡"
        style={{ top: "60%", left: "50%", fontSize: "2rem", opacity: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Petit trait gris stylisé */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-1 w-16 rounded-full bg-base-300/50 z-10" />

        {/* Contenu avec barre style mac */}

        <div className="relative max-w-4xl mx-auto mb-16 group">
          {/* Glow en fond (moins fort) */}
          
          <div className="absolute inset-x-0 bottom-0 rounded-2xl bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 blur-3xl opacity-20 group-hover:opacity-80 transition-opacity duration-700 ease-in-out z-0 h-42" />

          {/* Conteneur style éditeur */}
          <div className="bg-base-100 backdrop-blur-md rounded-2xl border border-base-300 shadow-md overflow-hidden relative z-10">
            {/* Barre style VS Code (boutons Mac) */}
            <div className="flex items-center gap-2 px-4 py-2 bg-base-300 border-b border-base-300">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Contenu principal */}
            <div className="text-center px-6 py-8">
              <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
              <p className="max-w-xl mx-auto text-lg leading-relaxed text-base-content/80">
                Voici mes projets réalisés, une sélection qui illustre mes compétences en
                développement et mon goût pour l'innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Gros projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-5xl mx-auto">
          {bigProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="relative cursor-pointer rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-103 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.15)] bg-base-300"
              style={{ height: "320px" }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-110 saturate-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-3xl">
  <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent" />
  <div className="relative z-10">
    <h3 className="text-3xl font-semibold">{project.title}</h3>
    <p className="text-base-content/70 mt-2">
      {project.description.length > 100
        ? project.description.slice(0, 100) + "..."
        : project.description}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>

        {/* Petits projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {smallProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-103 hover:shadow-[0_0_8px_1.5px_rgba(255,255,255,0.12)] bg-base-300"
              style={{ height: "220px" }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-110 saturate-110"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end rounded-2xl">
  <div className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-transparent to-transparent" />
  <div className="relative z-10">
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-base-content/70 text-sm mt-1">
      {project.description.length > 60
        ? project.description.slice(0, 60) + "..."
        : project.description}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selected}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
          onClick={closeModal}
        />

        <Dialog.Panel
          className="fixed top-4 left-1/2 transform -translate-x-1/2
          z-50 w-[90%] max-w-5xl bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl px-6 py-3
          flex flex-col items-center text-white"
        >
          <Dialog.Title className="text-3xl font-bold mb-4 text-violet-400 text-center w-full">
            {selected?.title}
          </Dialog.Title>
          <p className="mb-6 text-gray-300 text-center max-w-3xl">{selected?.description}</p>

          {/* Carousel */}
          {selected && selected.images && selected.images.length > 0 && (
            <div className="relative w-full max-w-4xl">
              <img
                src={selected.images[currentIndex]}
                alt={`${selected.title} image ${currentIndex + 1}`}
                className="rounded-lg max-h-[400px] w-full object-cover"
              />
              {selected.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {selected?.technologies.map((tech) => (
              <span
                key={tech}
                className="badge badge-primary text-white bg-violet-600"
              >
                {tech}
              </span>
            ))}
          </div>
{selected?.url && (
  <a
    href={selected.url}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 btn btn-outline btn-accent hover:bg-accent hover:text-white transition-all"
  >
    Voir le site
  </a>
)}
          <button
            onClick={closeModal}
            className="mt-8 btn btn-primary bg-violet-600 hover:bg-violet-700 border-none text-white"
          >
            Fermer
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
