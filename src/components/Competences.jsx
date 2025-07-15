import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#0d0d0d] text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">✉️ Contact</h2>
      <form
        action="#"
        className="max-w-2xl mx-auto space-y-6 bg-white/5 p-8 rounded-xl backdrop-blur-md shadow-md"
      >
        <div className="flex items-center gap-2">
          <User className="text-white/50" size={20} />
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full bg-transparent border-b border-white/20 focus:outline-none focus:border-white transition text-white placeholder-white/40"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-white/50" size={20} />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full bg-transparent border-b border-white/20 focus:outline-none focus:border-white transition text-white placeholder-white/40"
            required
          />
        </div>
        <div className="flex items-start gap-2">
          <MessageSquare className="text-white/50" size={20} />
          <textarea
            placeholder="Votre message"
            className="w-full bg-transparent border-b border-white/20 focus:outline-none focus:border-white transition text-white placeholder-white/40 resize-none h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
