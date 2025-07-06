import React from 'react';

function Skills() {
  const skills = ['Java', 'Python', 'JavaScript', 'C++', 'HTML', 'CSS', 'React.js', 'Flask', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'SQLite', 'Postman', 'Git', 'GitHub'];
  return (
    <section>
      <h2>Technical Skills</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
        {skills.map((skill, i) => (
          <li key={i} style={{ marginRight: '10px', padding: '6px 10px', borderRadius: '8px', marginBottom: '10px' }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;