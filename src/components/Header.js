import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import LanguageContext from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { toggleLanguage, language } = useContext(LanguageContext);

  // Закрываем меню при изменении роута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  // Извлекаем ID проекта из пути
  const projectIdMatch = location.pathname.match(/\/project\/(\d+)/);
  const projectId = projectIdMatch ? parseInt(projectIdMatch[1]) : null;
  const project = projectId ? getProjectById(projectId) : null;
  
  // Определяем цвет navbar: черный для проектов 2 и 4, белый для остальных
  const navbarColor = project && (project.id === 2 || project.id === 4) ? '#000' : '#fff';

  const scrollToTop = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#header';
      setTimeout(() => {
        const element = document.getElementById('header');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById('header');
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar" style={{ color: navbarColor }}>
        <button onClick={scrollToTop} className="navbar-brand" style={{ color: navbarColor }}>
          {t('header.name')}
        </button>
        <div className="navbar-controls">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            style={{ color: navbarColor }}
            aria-label="Toggle language"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
          <button 
            className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            style={{ color: navbarColor }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button
            onClick={() => scrollToSection('projects')}
            className="navbar-link"
            style={{ color: navbarColor }}
          >
            {t('header.projects')}
          </button>
          <a
            href="https://www.instagram.com/art_youmorist_14/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
            style={{ color: navbarColor }}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('header.instagram')}
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-link"
            style={{ color: navbarColor }}
          >
            {t('header.contact')}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

