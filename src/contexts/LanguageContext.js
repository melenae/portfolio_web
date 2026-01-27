import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Получаем сохраненный язык из localStorage или используем русский по умолчанию
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'ru';
  });

  useEffect(() => {
    // Сохраняем выбор языка в localStorage
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

