import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const sectionStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
};

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: 'auto', color: '#2c3e50', backgroundColor: '#f9f9f9', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.8 }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'black' }}>Kunapareddy Aswani</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', color: '#555' }}>Ex-Intern at Infosys Springboard | Full Stack Developer</p>
      <div style={sectionStyle}><About /></div>
      <div style={sectionStyle}><Projects /></div>
      <div style={sectionStyle}><Skills /></div>
      <div style={sectionStyle}><Certifications /></div>
      <div style={sectionStyle}><Contact /></div>
    </div>
  );
}

export default App;