import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    fetch('/storage/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        const initialCounts = {};
        Object.keys(data).forEach(category => {
          initialCounts[category] = 6; // Show 6 initially
        });
        setVisibleCounts(initialCounts);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const loadMore = (category) => {
    setVisibleCounts(prev => ({
      ...prev,
      [category]: prev[category] + 6
    }));
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {Object.keys(projects).map(category => (
        <div key={category} className="project-category">
          <h3>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
          <div className="projects-grid">
            {projects[category].slice(0, visibleCounts[category]).map(project => (
              <div key={project.id} className="project">
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">Live Demo</a>
              </div>
            ))}
          </div>
          {visibleCounts[category] < projects[category].length && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={() => loadMore(category)}>Load More</button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
