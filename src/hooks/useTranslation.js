import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { ru } from '../translations/ru';
import { en } from '../translations/en';

const translations = {
  ru,
  en,
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return { t, language };
};


