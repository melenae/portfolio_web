import React from 'react';
import { useLocation } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  // Извлекаем ID проекта из пути
  const projectIdMatch = location.pathname.match(/\/project\/(\d+)/);
  const projectId = projectIdMatch ? parseInt(projectIdMatch[1]) : null;
  const project = projectId ? getProjectById(projectId) : null;
  
  // Определяем цвет navbar: черный для проектов 2 и 4, белый для остальных
  const navbarColor = project && (project.id === 2 || project.id === 4) ? '#000' : '#fff';

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
      <nav className="navbar" style={{ color: navbarColor }}>
        <button onClick={scrollToTop} className="navbar-brand" style={{ color: navbarColor }}>
          Ермолаев Артем
        </button>
        <div className="navbar-menu">
          <button
            onClick={() => scrollToSection('projects')}
            className="navbar-link"
            style={{ color: navbarColor }}
          >
            Проекты
          </button>
          <a
            href="https://www.instagram.com/art_youmorist_14/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            style={{ color: navbarColor }}
          >
            Instagram
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-link"
            style={{ color: navbarColor }}
          >
            Обратная Связь
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

