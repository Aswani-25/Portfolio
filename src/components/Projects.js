import React from 'react';

const projects = [
  {
    title: 'Infosysy',
    description: 'Full-stack project using React, Flask, MySQL, and Postman.',
    link: 'https://github.com/Aswani-25/Infosysy'
  },
  {
    title: 'emart',
    description: 'Frontend eCommerce app built using React.',
    link: 'https://github.com/Aswani-25/emart'
  },
  {
    title: 'CTS Drive Practice',
    description: 'Java backend practice repository.',
    link: 'https://github.com/Aswani-25/mypracticerepo'
  }
];

function Projects() {
  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Projects</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {projects.map(project => (
          <li key={project.title} style={{ marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>{project.title}</h3>
            <p style={{ margin: '5px 0' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
