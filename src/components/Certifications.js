import React, { useState, useEffect } from 'react';

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch('/storage/certifications.json')
      .then(response => response.json())
      .then(data => setCertifications(data))
      .catch(error => console.error('Error fetching certifications:', error));
  }, []);

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
