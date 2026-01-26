import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#header';
    } else {
      const element = document.getElementById('header');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <button onClick={scrollToTop} className="navbar-brand">
          Ермолаев Артем
        </button>
        <div className="navbar-menu">
          <button
            onClick={() => scrollToSection('projects')}
            className="navbar-link"
          >
            Проекты
          </button>
          <a
            href="https://www.instagram.com/art_youmorist_14/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
          >
            Instagram
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-link"
          >
            Обратная Связь
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

