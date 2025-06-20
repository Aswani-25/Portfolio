import React from 'react';

const skills = ['React', 'Java', 'Flask', 'MySQL', 'Postman', 'HTML', 'CSS', 'JavaScript'];

function Skills() {
  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Skills</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
        {skills.map(skill => (
          <li key={skill} style={{
            background: '#e0e0e0',
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '14px'
          }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
