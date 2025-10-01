import React, { useState, useEffect } from 'react';

function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    fetch('/storage/about.json')
      .then(response => response.json())
      .then(data => setAbout(data))
      .catch(error => console.error('Error fetching about:', error));
  }, []);

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={about.image} alt="Sanjay Gandhi" />
        </div>
        <div className="about-text">
          <p>{about.introduction}</p>
          <div className="social-profiles">
            <h3>Social Profiles</h3>
            <a href={about.socialProfiles?.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={about.socialProfiles?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={about.socialProfiles?.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={`mailto:${about.socialProfiles?.email}`}>Email</a>
          </div>
          <div className="coding-profiles">
            <h3>Coding Profiles</h3>
            <div className="coding-links">
              <a href={about.socialProfiles?.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode">
                <i className="fas fa-code"></i> LeetCode
              </a>
              <a href={about.socialProfiles?.codechef} target="_blank" rel="noopener noreferrer" title="CodeChef">
                <i className="fas fa-utensils"></i> CodeChef
              </a>
              <a href={about.socialProfiles?.hackerrank} target="_blank" rel="noopener noreferrer" title="HackerRank">
                <i className="fas fa-trophy"></i> HackerRank
              </a>
              <a href={about.socialProfiles?.codeforces} target="_blank" rel="noopener noreferrer" title="Codeforces">
                <i className="fas fa-chess"></i> Codeforces
              </a>
              <a href={about.socialProfiles?.spoj} target="_blank" rel="noopener noreferrer" title="SPOJ">
                <i className="fas fa-terminal"></i> SPOJ
              </a>
              <a href={about.socialProfiles?.kaggle} target="_blank" rel="noopener noreferrer" title="Kaggle">
                <i className="fas fa-chart-line"></i> Kaggle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
