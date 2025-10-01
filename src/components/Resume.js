import React, { useState, useEffect } from 'react';

function Resume() {
  const [resumeData, setResumeData] = useState({ about: '', experience: [] });

  useEffect(() => {
    fetch('/storage/experience.json')
      .then(response => response.json())
      .then(data => setResumeData({ experience: data }))
      .catch(error => console.error('Error fetching experience:', error));
  }, []);

  return (
    <section id="resume">
      <h2>Resume & Work History</h2>
      <div className="download-resume">
        <a href="resume.pdf" download>Download Resume</a>
      </div>
      <div className="work-history">
        <h3>Experience</h3>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="job">
            <h4>{job.title}</h4>
            <p>{job.period}</p>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
