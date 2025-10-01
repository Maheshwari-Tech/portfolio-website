import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Content from './components/Content';
import ProfessionalExperience from './components/ProfessionalExperience';
import TechnicalSkillsAchievements from './components/TechnicalSkillsAchievements';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Header />
      <main>
        <About />
        <Content />
        <ProfessionalExperience />
        <TechnicalSkillsAchievements />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
