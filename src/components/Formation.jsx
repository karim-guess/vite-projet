import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Formation = () => {
  const formations = [
    {
      diplome: "Master en Développement Web",
      ecole: "École Supérieure d'Informatique",
      annee: "2023-2025",
      lieu: "Paris, France",
      description: "Spécialisation en développement full-stack et technologies modernes",
      niveau: "Bac+5"
    },
    {
      diplome: "Licence Informatique",
      ecole: "Université de Technologie",
      annee: "2020-2023",
      lieu: "Lyon, France",
      description: "Formation générale en informatique et programmation",
      niveau: "Bac+3"
    },
    {
      diplome: "Baccalauréat Scientifique",
      ecole: "Lycée Jules Verne",
      annee: "2020",
      lieu: "Nantes, France",
      description: "Mention Bien - Spécialité Mathématiques et NSI",
      niveau: "Bac"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl mb-6 shadow-xl">
            <GraduationCap className="text-white" size={40} />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Formation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-xl max-w-2xl mx-auto">
            Mon parcours académique et professionnel
          </p>
        </div>

        <div className="space-y-8">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/30 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mr-4"></div>
                    <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                      {formation.niveau}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {formation.diplome}
                  </h3>
                  
                  <p className="text-orange-400 text-xl font-medium mb-4 flex items-center">
                    <Award className="mr-2 text-orange-500" size={20} />
                    {formation.ecole}
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {formation.description}
                  </p>
                </div>
                
                <div className="mt-8 xl:mt-0 xl:ml-8 flex flex-col space-y-4 xl:items-end">
                  <div className="flex items-center text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Calendar className="mr-2 text-purple-400" size={18} />
                    <span className="font-medium">{formation.annee}</span>
                  </div>
                  <div className="flex items-center text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full">
                    <MapPin className="mr-2 text-violet-400" size={18} />
                    <span>{formation.lieu}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;