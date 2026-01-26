import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Если есть хэш в URL, скроллим к секции
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;


