import React, { useState, useEffect, useRef } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    fetch('/storage/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-fill');
            fill.style.width = `${fill.dataset.level}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [skills]);

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill"
            ref={(el) => (skillRefs.current[index] = el)}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                data-level={skill.level}
                style={{ width: '0%' }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
