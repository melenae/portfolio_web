import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="about" id="about">
      <div className="container">
        <h1 className="about-title">{t('about.title')}</h1>
      </div>
      <div className="header-bottom">
        <span>{t('about.figma')}</span>
        <span>{t('about.role')}</span>
        <span>{t('about.year')}</span>
      </div>
    </section>
  );
};

export default About;

