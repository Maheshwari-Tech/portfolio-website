import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">Shalini Thebaria</div>
        <ul>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#content" onClick={(e) => { e.preventDefault(); scrollToSection('content'); }}>Content</a></li>
          <li><a href="#professional-experience" onClick={(e) => { e.preventDefault(); scrollToSection('professional-experience'); }}>Experience</a></li>
          <li><a href="#technical-skills-achievements" onClick={(e) => { e.preventDefault(); scrollToSection('technical-skills-achievements'); }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
