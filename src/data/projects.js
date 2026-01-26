import surfingbg from '../assets/surfingbg.png';
import erptoolsbg from '../assets/erptoolsbg.png';
import asterosbg from '../assets/asterosbg.png';
import museumbg from '../assets/museumbg.png';

// Данные проектов - здесь вы можете добавить свои проекты
export const projectsData = [
  {
    id: 1,
    title: 'Веб дизайн и разработка Surfing School',
    description: 'Краткое описание первого проекта',
    fullDescription: 'Это более подробное описание проекта. Вы можете добавить информацию о процессе разработки, используемых технологиях, сложностях, с которыми столкнулись, и о том, что вы узнали в процессе работы над проектом.',
    image: surfingbg,
    bgColor: '#667eea',
    technologies: ['React', 'Node.js', 'MongoDB'],
    categories: ['Web Design', 'Разработка'],
  },
  {
    id: 2,
    title: 'Веб дизайн и релиз сайта Erp-Toolsна Tilda',
    description: 'Краткое описание второго проекта',
    fullDescription: 'Детальное описание второго проекта с информацией о функциональности, технологиях и результатах.',
    image: erptoolsbg,
    bgColor: '#764ba2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    categories: ['Web Design', 'Разработка'],
  },
  {
    id: 3,
    title: 'Брэндинг сайта компании Астерос',
    description: 'Краткое описание третьего проекта',
    fullDescription: 'Детальное описание третьего проекта с информацией о функциональности, технологиях и результатах.',
    image: asterosbg,
    bgColor: '#f093fb',
    technologies: ['Angular', 'Python', 'Django'],
    categories: ['Web Design', 'Брэндинг'],
  },
  {
    id: 4,
    title: 'Веб дизайн сайта Музея КФУ',
    description: 'Краткое описание четвертого проекта',
    fullDescription: 'Детальное описание четвертого проекта.',
    image: museumbg,
    bgColor: '#4facfe',
    technologies: ['React', 'TypeScript'],
    categories: ['Web Design'],
  },
];

// Функция для получения проекта по ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};


