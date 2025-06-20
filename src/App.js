import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

const containerStyle = {
  maxWidth: '900px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
};

function App() {
  return (
    <div style={containerStyle}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#333' }}>Hi, I'm Aswani</h1>
        <p style={{ color: '#555' }}>Full‑Stack Developer | React • Flask • Java • MySQL</p>
      </header>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
