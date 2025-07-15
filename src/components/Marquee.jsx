const Marquee = () => {
  const keywords = [
    "Développeur Frontend",
    "Développeur Backend",
    "Base de données",
    "Méthodes Agile",
    "React",
    "Node.js",
    "MongoDB",
    "TailwindCSS",
    "API REST",
    "Express.js"
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-4 border-y border-white/10">
      <div className="whitespace-nowrap animate-marquee text-white text-xl font-medium tracking-wide flex gap-12">
        {keywords.map((word, idx) => (
          <span key={idx}>{word}</span>
        ))}
        {/* on le répète une 2e fois pour la boucle */}
        {keywords.map((word, idx) => (
          <span key={idx + 100}>{word}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
