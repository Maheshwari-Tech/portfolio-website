import React, { useState, useEffect } from 'react';

function ProfessionalExperience() {
  const [experience, setExperience] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/storage/experience.json')
      .then(response => response.json())
      .then(data => setExperience(data))
      .catch(error => console.error('Error fetching experience:', error));
  }, []);

  useEffect(() => {
    if (experience.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % experience.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [experience]);

  const currentJob = experience[currentIndex];

  return (
    <section id="professional-experience">
      <h2>Professional Work Experience</h2>
      <div className="download-resume">
        <a href="resume.pdf" download>Download Resume</a>
      </div>
      <div className="experience-carousel">
        {currentJob && (
          <div className="job">
            <h3>{currentJob.title}</h3>
            <p>{currentJob.period}</p>
            <ul>
              {currentJob.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="carousel-indicators">
          {experience.map((_, i) => (
            <span
              key={i}
              className={i === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
