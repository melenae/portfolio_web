import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHome = () => {
    navigate('/');
  };

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h2>Проект не найден</h2>
          <button onClick={handleHome} className="back-link">
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-detail"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="container">
        <button onClick={handleBack} className="back-link">
          ← Назад к проектам
        </button>
        <div className="project-detail-content">
          <div className="project-detail-header">
            <h1>{project.title}</h1>
            <p className="project-intro">{project.description}</p>
          </div>
          {project.image && (
            <div className="project-detail-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="project-detail-body">
            <div className="project-description">
              <h2>О проекте</h2>
              <p>{project.fullDescription}</p>
            </div>
            {project.technologies && project.technologies.length > 0 && (
              <div className="project-technologies">
                <h2>Технологии</h2>
                <div className="technologies-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

