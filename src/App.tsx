import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectReports } from './components/ProjectReports';
import { Creativity } from './components/Creativity';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'reports', 'creativity'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="reports">
          <ProjectReports />
        </div>
        
        <div id="creativity">
          <Creativity />
        </div>
      </main>

      <Footer />
    </div>
  );
}