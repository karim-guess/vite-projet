import React from "react";
import { ChevronDown } from "lucide-react"; // npm install lucide-react si besoin

const WhyMe = () => {
  return (
    <section id="whyme" className="bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">🤝 Pourquoi me choisir ?</h2>

        <p className="text-lg text-center mb-8">
          🚀 <strong>Vous cherchez un développeur motivé, flexible, à l’écoute et accessible ?</strong>
        </p>

        <p className="text-base text-gray-700 mb-6 text-center">
          Même si je débute en freelance, je m’engage à vous offrir une <strong>expérience fluide, humaine et efficace</strong>. Mon objectif est simple : <strong>vous aider à concrétiser vos idées</strong> tout en progressant à vos côtés.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Carte 1 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">💰 Des tarifs accessibles</h3>
            <p className="text-sm text-gray-600">
              Adaptés aux petits projets comme aux missions plus ambitieuses.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">💬 Communication claire</h3>
            <p className="text-sm text-gray-600">
              Je suis réactif, à l’écoute, et je m’assure de bien comprendre vos besoins.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">🔥 Motivation à 200%</h3>
            <p className="text-sm text-gray-600">
              Chaque projet est une opportunité d’apprendre et de donner le meilleur.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">✅ Engagement sérieux</h3>
            <p className="text-sm text-gray-600">
              Même pour des petites missions, je travaille avec rigueur et respect des délais.
            </p>
          </div>
        </div>

        <p className="text-center text-base text-gray-700 mb-6">
          Je ne suis peut-être pas encore un expert avec 10 ans d’expérience, mais je compense largement par ma <strong>curiosité</strong>, ma <strong>rigueur</strong> et ma <strong>volonté de bien faire</strong>.
        </p>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full">
            Travaillons ensemble
            <ChevronDown className="w-5 h-5 animate-bounce mt-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
