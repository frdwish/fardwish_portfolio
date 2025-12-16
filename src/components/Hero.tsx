import { Github, Linkedin, Mail } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';
import profileImage from 'figma:asset/IMG_20251206_222915 2.jpeg';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#FFC700]">
            <img src={profileImage} alt="Md Fardwish Ali" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-[#FFC700]">Frdwish</span>
        </h1>
        
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
          A passionate developer, researcher, and creative mind. I craft meaningful digital experiences
          through code, design, and storytelling. Welcome to my digital space where I share my journey,
          projects, and creative expressions.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/frdwish"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFC700] text-white hover:text-black transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/frdwish"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFC700] text-white hover:text-black transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://in.pinterest.com/iamfrdshso/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFC700] text-white hover:text-black transition-all"
          >
            <FaPinterest size={24} />
          </a>
          <a
            href="mailto:mdfardwish120@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFC700] text-white hover:text-black transition-all"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFC700] transition-colors">
            <div className="text-[#FFC700] mb-2 text-3xl font-bold">5+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFC700] transition-colors">
            <div className="text-[#FFC700] mb-2 text-3xl font-bold">4+</div>
            <div className="text-gray-400">Case Studies</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFC700] transition-colors">
            <div className="text-[#FFC700] mb-2 text-3xl font-bold">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}