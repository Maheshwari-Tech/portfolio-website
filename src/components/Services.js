import React, { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/storage/services.json')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <section id="services">
      <h2>Services I Provide</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
