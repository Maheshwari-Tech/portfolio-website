import React, { useState, useEffect } from 'react';

function Footer() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch('/storage/contact.json')
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact:', error));
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Sanjay Gandhi</h3>
          <p>Software Engineer & Full Stack Developer</p>
        </div>
        <div className="footer-links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={`mailto:${contact.email}`} title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{contact.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
