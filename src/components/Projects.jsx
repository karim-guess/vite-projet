import { useState } from "react";
import { Dialog } from "@headlessui/react";

const projectList = [
  {
    id: 1,
    title: "Portfolio React",
    description:
      "Un portfolio moderne fait avec React, Tailwind, et React-Bits.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    ],
    technologies: ["React", "Tailwind", "Vite"],
  },
  {
    id: 2,
    title: "App de Chat",
    description:
      "Une application de messagerie en temps réel avec Socket.io et Node.js.",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    ],
    technologies: ["Node.js", "React", "Socket.io"],
  },
  {
    id: 3,
    title: "E-commerce moderne",
    description: "Site de e-commerce avec gestion complète du panier.",
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
    ],
    technologies: ["React", "Stripe", "Tailwind"],
  },
];

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
    setCurrentIndex((i) =>
      i === 0 ? selected.images.length - 1 : i - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((i) =>
      i === selected.images.length - 1 ? 0 : i + 1
    );
  };

  return (
    <section id="projets" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-violet-500">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105"
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {project.description.length > 60
                    ? project.description.slice(0, 60) + "..."
                    : project.description}
                </p>
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

        <Dialog.Panel className="
  fixed top-4 left-1/2 transform -translate-x-1/2
  z-50 w-[90%] max-w-5xl
  bg-white/10 backdrop-blur-lg
  shadow-xl rounded-2xl
  px-6 py-3
  flex flex-col items-center
  text-white
">
  <Dialog.Title className="text-3xl font-bold mb-4 text-violet-400 text-center w-full">
    {selected?.title}
  </Dialog.Title>
  <p className="mb-6 text-gray-300 text-center max-w-3xl">
    {selected?.description}
  </p>

  {/* Carousel */}
  <div className="relative w-full max-w-4xl">
    <img
      src={selected?.images[currentIndex]}
      alt={`${selected?.title} image ${currentIndex + 1}`}
      className="rounded-lg max-h-[400px] w-full object-cover"
    />
    <button
      onClick={prevImage}
      className="absolute top-1/2 left-2 -translate-y-1/2 bg-violet-600/80 hover:bg-violet-600 text-white rounded-full p-2 transition"
      aria-label="Image précédente"
    >
      ‹
    </button>
    <button
      onClick={nextImage}
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-violet-600/80 hover:bg-violet-600 text-white rounded-full p-2 transition"
      aria-label="Image suivante"
    >
      ›
    </button>
  </div>

  <div className="flex flex-wrap gap-2 mt-6 justify-center">
    {selected?.technologies.map((tech) => (
      <span
        key={tech}
        className="bg-violet-700 text-white px-3 py-1 rounded-full text-sm"
      >
        {tech}
      </span>
    ))}
  </div>

  <button
    onClick={closeModal}
    className="mt-8 bg-violet-500 hover:bg-violet-600 transition text-white py-2 px-6 rounded-lg"
  >
    Fermer
  </button>
</Dialog.Panel>

      </Dialog>
    </section>
  );
}
