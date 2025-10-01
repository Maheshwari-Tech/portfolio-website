import React, { useState, useEffect } from 'react';

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch('/storage/achievements.json')
      .then(response => response.json())
      .then(data => setAchievements(data))
      .catch(error => console.error('Error fetching achievements:', error));
  }, []);

  return (
    <section id="achievements">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
