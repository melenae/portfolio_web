import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, getProjectField } from '../data/projects';
import { useTranslation } from '../hooks/useTranslation';
import arrowIcon from '../assets/arrow.svg';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
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

  if (!project) {
    return (
      <div className="project-detail" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container">
          <h2>Project not found</h2>
          <button onClick={handleBack} className="back-btn">
            <img src={arrowIcon} alt="arrow" /> {t('header.back')}
          </button>
        </div>
      </div>
    );
  }

  const textColor = project.textColor || (project.bgColor === '#E3FF04' || project.bgColor === '#ffffff' ? '#000' : '#fff');

  // Функция для определения, нужна ли граница для карточки цвета
  const getColorCardStyle = (colorCode) => {
    const normalizedBgColor = project.bgColor.toUpperCase().trim();
    const normalizedColorCode = colorCode.toUpperCase().trim();
    
    // Проверяем, совпадает ли цвет карточки с фоном
    if (normalizedColorCode === normalizedBgColor) {
      // Определяем контрастный цвет для границы
      const borderColor = textColor === '#000000' || textColor === '#000' ? '#000000' : '#FFFFFF';
      return {
        border: '1.5px solid',
        borderColor: borderColor,
      };
    }
    return {};
  };

  return (
    <div
      className="project-detail"
      style={{ backgroundColor: project.bgColor, color: textColor }}
    >
      {/* Header Section */}
      <section className="project-header">
        <button onClick={handleBack} className="back-btn">
          <img src={arrowIcon} alt="arrow" /> {t('header.back')}
        </button>
        <div className="header-content">
          <div className="header-main">
            {project.logo && (
              <div className="project-logo">{project.logo}</div>
            )}
            <div className="header-text">
              <h1 className="project-title">{t('projectDetail.about')}</h1>
              <p className="project-description">{getProjectField(project, 'fullDescription', language)}</p>
            </div>
          </div>
          {project.concept && (
            <div className="concept-section">
              <h3 className="concept-subtitle">{t('projectDetail.concept')}</h3>
              <p className="concept-text">{getProjectField(project, 'concept', language)}</p>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Colors Section */}
      {project.colors && project.colors.length > 0 && (
        <>
          <section className="project-section">
            <div className="section-header">
              <h2 className="section-title">{t('projectDetail.colors')}</h2>
              <span className="section-number">01</span>
            </div>
            <div className="section-content">
              <h3 className="section-subtitle">{t('projectDetail.colorsLower')}</h3>
              <p className="section-text">{getProjectField(project, 'colorsDescription', language)}</p>
            </div>
            <div className="colors-grid">
              {project.colors.map((color, index) => (
                <div key={index} className="color-card">
                  <div 
                    className="color-swatch" 
                    style={{ 
                      backgroundColor: color.code,
                      ...getColorCardStyle(color.code)
                    }}
                  ></div>
                  <div className="color-code">{color.code}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>
        </>
      )}

      {/* Fonts Section */}
      {project.fonts && project.fonts.length > 0 && (
        <>
          <section className="project-section">
            <div className="section-header">
              <h2 className="section-title">{t('projectDetail.fonts')}</h2>
              <span className="section-number">02</span>
            </div>
            <div className="section-content">
              <h3 className="section-subtitle">{t('projectDetail.fontsLower')}</h3>
              <p className="section-text">{getProjectField(project, 'fontsDescription', language)}</p>
            </div>
            <div className="fonts-container">
              {project.fonts.map((font, index) => (
                <div key={index} className="font-group">
                  <div className="font-info">
                    <h4 className="font-name" style={{ fontFamily: `'${font.name}', sans-serif` }}>{font.name}</h4>
                    <div className="font-examples">
                      <p className="font-example" style={{ fontFamily: `'${font.name}', sans-serif` }}>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                      <p className="font-example" style={{ fontFamily: `'${font.name}', sans-serif` }}>0 1 2 3 4 5 6 7 8 9</p>
                      <p className="font-example" style={{ fontFamily: `'${font.name}', sans-serif` }}>! # @ % & * ? / , .</p>
                    </div>
                  </div>
                  <div className="font-card" style={{ backgroundColor: font.cardBg || '#0A507A' }}>
                    <p className="font-card-top">{t('projectDetail.forHeaders')}</p>
                    <div className="font-card-label" style={{ fontFamily: `'${font.name}', sans-serif` }}>{font.label}</div>
                    <p className="font-card-name" style={{ fontFamily: `'${font.name}', sans-serif` }}>{font.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>
        </>
      )}

      {/* Web Design Section */}
      {project.webDesign && (
        <>
          <section className="project-section">
            <div className="section-header">
              <h2 className="section-title">{t('projectDetail.webDesign')}</h2>
              <span className="section-number">03</span>
            </div>
            <div className="section-content">
              <h3 className="section-subtitle">{t('projectDetail.website')}</h3>
              <p className="section-text">{getProjectField(project, 'webDesignDescription', language)}</p>
            </div>
            {project.mockup && (
              <div className="mockup-container">
                <img src={project.mockup} alt="Mockup" className="mockup-image" />
              </div>
            )}
            {project.prototypes && project.prototypes.length > 0 && (
              <div className="prototypes-container">
                {project.prototypes.map((prototype, index) => (
                  <img key={index} src={prototype} alt={`Prototype ${index + 1}`} className="prototype-image" />
                ))}
              </div>
            )}
          </section>

          <div className="section-divider"></div>
        </>
      )}

      {/* Identity Section */}
      {project.identity && (
        <section className="project-section">
            <div className="section-header">
              <h2 className="section-title">{t('projectDetail.identity')}</h2>
              <span className="section-number">04</span>
            </div>
            <div className="section-content">
              <h3 className="section-subtitle">{t('projectDetail.branding')}</h3>
              <p className="section-text">{getProjectField(project, 'identityDescription', language)}</p>
            </div>
          {project.identityImages && project.identityImages.length > 0 && (
            <div className={`identity-images ${project.identityImages.length === 1 ? 'single' : project.identityImages.length === 3 ? 'three' : ''}`}>
              {project.identityImages.map((img, index) => (
                <img key={index} src={img} alt={`Identity ${index + 1}`} className="identity-image" />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
