import React, { useState, useEffect } from 'react';

function Education() {
  const [education, setEducation] = useState({});

  useEffect(() => {
    fetch('/storage/education.json')
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education:', error));
  }, []);

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-details">
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
        <p>{education.period}</p>
        <p>CGPA: {education.cgpa}</p>
      </div>
    </section>
  );
}

export default Education;
