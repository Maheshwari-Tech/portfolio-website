import React, { useState, useEffect } from 'react';

function TechnicalSkillsAchievements() {
  const [skills, setSkills] = useState({});
  const [achievements, setAchievements] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [certificationIndex, setCertificationIndex] = useState(0);

  useEffect(() => {
    fetch('/storage/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));

    fetch('/storage/achievements.json')
      .then(response => response.json())
      .then(data => setAchievements(data))
      .catch(error => console.error('Error fetching achievements:', error));

    fetch('/storage/certifications.json')
      .then(response => response.json())
      .then(data => setCertifications(data))
      .catch(error => console.error('Error fetching certifications:', error));
  }, []);

  useEffect(() => {
    if (achievements.length > 0) {
      const interval = setInterval(() => {
        setAchievementIndex(prevIndex => (prevIndex + 1) % achievements.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [achievements]);

  useEffect(() => {
    if (certifications.length > 0) {
      const interval = setInterval(() => {
        setCertificationIndex(prevIndex => (prevIndex + 1) % (certifications.length - 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [certifications]);

  const visibleCertifications = certifications.slice(certificationIndex, certificationIndex + 2);

  return (
    <section id="technical-skills-achievements">
      <h2>Technical Skills and Achievements</h2>

      <div className="skills-section">
        <h3>Technical Skills</h3>
        {Object.keys(skills).map(category => (
          <div key={category} className="skill-category">
            <h4>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
            <div className="skills-list">
              {skills[category].map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h3>Achievements</h3>
        <div className="achievement-carousel">
          <button className="nav-btn prev-btn" onClick={() => setAchievementIndex((achievementIndex - 1 + achievements.length) % achievements.length)}>&larr;</button>
          <div className="achievement-card">
            <p>{achievements[achievementIndex]}</p>
          </div>
          <button className="nav-btn next-btn" onClick={() => setAchievementIndex((achievementIndex + 1) % achievements.length)}>&rarr;</button>
        </div>
      </div>

      <div className="certifications-section">
        <h3>Certifications</h3>
        <div className="certifications-carousel">
          <button className="nav-btn prev-btn" onClick={() => setCertificationIndex(Math.max(0, certificationIndex - 1))}>&larr;</button>
          {visibleCertifications.map((cert, index) => (
            <div key={certificationIndex + index} className="certification-card">
              <p>{cert}</p>
            </div>
          ))}
          <button className="nav-btn next-btn" onClick={() => setCertificationIndex(Math.min(certifications.length - 2, certificationIndex + 1))}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkillsAchievements;
