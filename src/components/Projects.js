import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, getProjectField } from '../data/projects';
import { useTranslation } from '../hooks/useTranslation';
import './Projects.css';

const Projects = () => {
  const { t, language } = useTranslation();
  const projectsGridRef = useRef(null);

  const categories = [
    t('projects.all'),
    t('projects.webDesign'),
    t('projects.development'),
    t('projects.branding')
  ];

  // Используем индекс для сохранения выбранной категории при смене языка
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const selectedCategory = categories[selectedCategoryIndex];

  // Маппинг категорий для фильтрации
  const categoryMapping = {
    [t('projects.all')]: 'all',
    [t('projects.webDesign')]: 'Web Design',
    [t('projects.development')]: 'Разработка',
    [t('projects.branding')]: 'Брэндинг',
  };

  // Функция для перевода категорий проектов
  const translateCategory = (category) => {
    const categoryTranslations = {
      'Web Design': t('projects.webDesign'),
      'Разработка': t('projects.development'),
      'Брэндинг': t('projects.branding'),
    };
    return categoryTranslations[category] || category;
  };

  const filteredProjects =
    selectedCategory === t('projects.all')
      ? projectsData
      : projectsData.filter((project) => {
          const projectCategories = project.categories || [];
          const mappedCategory = categoryMapping[selectedCategory];
          return projectCategories.includes(mappedCategory);
        });

  // Scroll animation для карточек проектов
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.classList.remove('animated');
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [selectedCategoryIndex]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="projects-description">
            {t('projects.description')}
          </p>
        </div>

        <div className="projects-content">
          <div className="projects-filters">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategoryIndex(index)}
                className={`filter-btn ${
                  selectedCategoryIndex === index ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-divider"></div>

          <div className="projects-grid" ref={projectsGridRef}>
            {filteredProjects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="project-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{getProjectField(project, 'title', language)}</h3>
                  {project.categories && project.categories.length > 0 && (
                    <div className="project-categories">
                      {project.categories.map((category, index) => (
                        <span key={index} className="project-category">
                          {translateCategory(category)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

