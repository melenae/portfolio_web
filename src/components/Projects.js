import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Web Design', 'Разработка', 'Брэндинг'];

  const filteredProjects =
    selectedCategory === 'Все'
      ? projectsData
      : projectsData.filter((project) =>
          project.categories?.includes(selectedCategory)
        );

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Проекты</h2>
          <p className="projects-description">
            Подборка проектов, демонстрирующих мой подход к решению задач,
            дизайн и техническую реализацию.
          </p>
        </div>

        <div className="projects-content">
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-divider"></div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="project-card"
              >
                <div className="project-image">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  {project.categories && project.categories.length > 0 && (
                    <div className="project-categories">
                      {project.categories.map((category, index) => (
                        <span key={index} className="project-category">
                          {category}
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

