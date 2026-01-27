import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactimg from '../assets/contactimg.png';
import { useTranslation } from '../hooks/useTranslation';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_q8xyo7h',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_olaq9fj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ermo.artem@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '3BITopua9qO4DaMSw'
      );

      alert(t('contact.success'));
      setFormData({ name: '', email: '', message: '' });
      setIsFormOpen(false);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert(t('contact.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div 
          className="contact-image"
          style={{
            backgroundImage: `url(${contactimg})`,
          }}
        >
        </div>
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-group">
              <div className="contact-item"><a href="tel:+4915225149209">+49 15225149209</a></div>
              <div className="contact-item"><a href="mailto:ermo.artem@gmail.com">ermo.artem@gmail.com</a></div>
            </div>
            <div className="contact-group">
              <a
                href="https://www.instagram.com/art_youmorist_14/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-link"
              >
                INSTAGRAM
              </a>
              <a
                href="https://wa.me/79169419004"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-link"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-form-section">
            <button
              className="contact-toggle-btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              {t('contact.writeMessage')}
            </button>

            <form className={`contact-form ${isFormOpen ? 'open' : ''}`} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.name')}
                    className="form-input"
                  />
                  <div className="form-line"></div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.email')}
                    className="form-input"
                  />
                  <div className="form-line"></div>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.message')}
                    className="form-input"
                    rows="4"
                  ></textarea>
                  <div className="form-line"></div>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
          </div>
        </div>
        <h2 className="contact-title">{t('contact.title')}</h2>
      </div>
    </section>
  );
};

export default Contact;
