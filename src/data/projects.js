import surfingbg from '../assets/surfingbg.png';
import erptoolsbg from '../assets/erptoolsbg.png';
import asterosbg from '../assets/asterosbg.png';
import museumbg from '../assets/museumbg.png';
import mockupsf from '../assets/mockupsf.png';
import prototypesf from '../assets/prototypesf.png';
import imgsf from '../assets/imgsf.png';
import img1sf from '../assets/img1sf.png';
import mockupet from '../assets/mockupet.png';
import prototypeet from '../assets/prototypeet.png';
import footeret from '../assets/footeret.png';
import mockupas from '../assets/mockupas.png';
import prototypeas from '../assets/prototypeas.png';
import prototypeas1 from '../assets/prototypeas1.png';
import mockupas1 from '../assets/mockupas1.png';
import mockupms from '../assets/mockupms.png';
import prototypems from '../assets/prototypems.png';
import imgms from '../assets/imgms.png';
import img1ms from '../assets/img1ms.png';
import errorms from '../assets/404ms.png';

// Данные проектов - здесь вы можете добавить свои проекты
export const projectsData = [
  {
    id: 1,
    title: 'Веб дизайн и разработка Surfing School',
    titleEn: 'Web Design and Development of Surfing School',
    description: 'Краткое описание первого проекта',
    fullDescription: 'Современный одностраничный сайт для школы серфинга в Виламуре, Португалия. Дизайн отражает динамику серфинга и атмосферу побережья Алгарве. Фокус на простоте навигации, визуальной иерархии и удобстве использования.',
    fullDescriptionEn: 'A modern single-page website for a surfing school in Vilamoura, Portugal. The design reflects the dynamics of surfing and the atmosphere of the Algarve coast. Focus on navigation simplicity, visual hierarchy, and usability.',
    image: surfingbg,
    bgColor: '#000000', // черный
    textColor: '#ffffff', // белый
    logo: 'Surfing School',
    concept: 'Проект адаптивен и корректно отображается на всех устройствах: от десктопов до мобильных. Дизайн сохраняет визуальную целостность и функциональность на разных разрешениях, обеспечивая удобство использования на любом экране.',
    conceptEn: 'The project is responsive and displays correctly on all devices: from desktops to mobile. The design maintains visual integrity and functionality at different resolutions, ensuring usability on any screen.',
    colors: [
      { code: '#0A507A' },
      { code: '#157AB3' },
      { code: '#2B2A29' },
      { code: '#FFFFFF' },
    ],
    colorsDescription: 'Цветовая палитра отражает морскую тематику и атмосферу побережья Алгарве. Основной акцент — морской , создающий ассоциацию с океаном. Темно-серый используется для текста и футера, обеспечивая читаемость и контраст. Светло-синий (#157ab3) применяется в hover-состояниях для визуальной обратной связи. Белый и полупрозрачный белый используются для фонов и карточек, создавая ощущение легкости и чистоты. Палитра поддерживает визуальную иерархию и улучшает восприятие контента.',
    colorsDescriptionEn: 'The color palette reflects the maritime theme and atmosphere of the Algarve coast. The main accent is marine blue, creating an association with the ocean. Dark gray is used for text and footer, ensuring readability and contrast. Light blue (#157ab3) is applied in hover states for visual feedback. White and semi-transparent white are used for backgrounds and cards, creating a sense of lightness and purity. The palette supports visual hierarchy and improves content perception.',
    fonts: [
      {
        name: 'Rethink Sans',
        label: 'RS',
        cardBg: '#0A507A',
      },
    ],
    fontsDescription: 'Для типографики выбран шрифт Rethink Sans (Google Fonts) — современный гротеск с хорошей читаемостью. Используются веса от 400 до 800, что позволяет выстраивать визуальную иерархию. Заголовки набраны крупным кеглем (64px) с весом 800 и uppercase, что придает им выразительность. Подзаголовки — 32px, основной текст — 16–18px с весом 600 для комфортного чтения. Навигация — 20px, 700. Такая система обеспечивает четкую структуру и читаемость на всех устройствах.',
    fontsDescriptionEn: 'Rethink Sans (Google Fonts) was chosen for typography — a modern grotesque with good readability. Weights from 400 to 800 are used, allowing for visual hierarchy. Headings are set in large size (64px) with weight 800 and uppercase, giving them expressiveness. Subheadings are 32px, main text is 16–18px with weight 600 for comfortable reading. Navigation is 20px, 700. This system ensures clear structure and readability on all devices.',
    webDesign: true,
    webDesignDescription: 'Дизайн выполнен в современном минималистичном стиле с акцентом на контент и удобство использования. Используются крупные заголовки, достаточные отступы и четкая визуальная иерархия. Hero-секция с полноэкранным фоновым изображением создает сильное первое впечатление. Карточки услуг и тарифов оформлены с тенями и скруглениями для глубины. Интерактивные элементы имеют плавные hover-эффекты для обратной связи.',
    webDesignDescriptionEn: 'The design is executed in a modern minimalist style with emphasis on content and usability. Large headings, sufficient spacing, and clear visual hierarchy are used. The hero section with a full-screen background image creates a strong first impression. Service and pricing cards are designed with shadows and rounded corners for depth. Interactive elements have smooth hover effects for feedback.',
    mockup: mockupsf,
    prototypes: [prototypesf],
    identity: true,
    identityDescription: 'Визуальная идентичность проекта отражает динамику серфинга и атмосферу побережья Алгарве. Морская цветовая палитра и современная типографика формируют узнаваемый образ школы. Дизайн передает активность, профессионализм и доступность. Визуальные элементы — крупные заголовки, плавные формы, морские оттенки — создают единый стиль, который ассоциируется с серфингом и приключениями. Идентичность поддерживается на всех точках контакта: от навигации до формы обратной связи, обеспечивая целостное восприятие бренда и укрепляя доверие к школе.',
    identityDescriptionEn: 'The visual identity of the project reflects the dynamics of surfing and the atmosphere of the Algarve coast. The maritime color palette and modern typography form a recognizable image of the school. The design conveys activity, professionalism, and accessibility. Visual elements — large headings, smooth shapes, marine tones — create a unified style associated with surfing and adventure. Identity is maintained at all touchpoints: from navigation to the contact form, ensuring holistic brand perception and strengthening trust in the school.',
    identityImages: [imgsf, img1sf],
    technologies: ['React', 'Node.js', 'MongoDB'],
    categories: ['Web Design', 'Разработка'],
  },
  {
    id: 2,
    title: 'Веб дизайн и релиз сайта Erp-Tools на Tilda',
    titleEn: 'Web Design and Release of Erp-Tools Website on Tilda',
    description: 'Краткое описание второго проекта',
    fullDescription: 'ERP-tools.ru — это корпоративный веб-проект, направленный на представление программных решений для автоматизации бизнес-процессов. Основной задачей дизайна было создать понятный, структурированный и визуально надёжный интерфейс, который подчёркивает экспертность продукта и упрощает восприятие сложных ERP-инструментов для разных категорий пользователей.',
    fullDescriptionEn: 'ERP-tools.ru is a corporate web project aimed at presenting software solutions for business process automation. The main design task was to create a clear, structured, and visually reliable interface that emphasizes the product\'s expertise and simplifies the perception of complex ERP tools for different user categories.',
    image: erptoolsbg,
    bgColor: '#E3FF04', // желтый
    textColor: '#000000', // черный
    logo: 'Erp Tools',
    concept: 'В основе дизайн-концепции лежит идея системности, прозрачности и контроля. Интерфейс построен на чёткой модульной сетке, отражающей логику ERP-систем. Минимализм и акцент на функциональность позволяют пользователю быстро ориентироваться в продукте и концентрироваться на ключевых возможностях сервиса без визуального шума.',
    conceptEn: 'The design concept is based on the idea of systematicity, transparency, and control. The interface is built on a clear modular grid reflecting the logic of ERP systems. Minimalism and focus on functionality allow users to quickly navigate the product and concentrate on key service capabilities without visual noise.',
    colors: [
      { code: '#E3FF04' },
      { code: '#0A0C00' },
      { code: '#FFFFFF' },
    ],
    colorsDescription: 'Цветовая палитра проекта выдержана в спокойных технологичных оттенках. Основные цвета ассоциируются с надёжностью, стабильностью и профессионализмом, а акцентные элементы используются для выделения ключевых действий и смысловых блоков. Такое сочетание усиливает доверие к продукту и поддерживает деловой характер бренда.',
    colorsDescriptionEn: 'The project\'s color palette is maintained in calm technological tones. The main colors are associated with reliability, stability, and professionalism, while accent elements are used to highlight key actions and semantic blocks. This combination enhances trust in the product and maintains the business character of the brand.',
    fonts: [
      {
        name: 'Unbounded',
        label: 'UB',
        cardBg: '#000000',
      },
    ],
    fontsDescription: 'В проекте используются современные гротескные шрифты, обеспечивающие хорошую читаемость как на десктопных, так и на мобильных устройствах. Типографика подчёркивает технологичность сервиса и помогает выстроить визуальную иерархию между заголовками, текстами и интерфейсными элементами.',
    fontsDescriptionEn: 'The project uses modern grotesque fonts that ensure good readability on both desktop and mobile devices. Typography emphasizes the service\'s technological nature and helps build visual hierarchy between headings, texts, and interface elements.',
    webDesign: true,
    webDesignDescription: 'Дизайн сайта ориентирован на удобство пользователя и логичную навигацию. Страницы структурированы таким образом, чтобы последовательно знакомить пользователя с продуктом, его возможностями и преимуществами. Особое внимание уделено адаптивности и консистентности интерфейса на разных устройствах.',
    webDesignDescriptionEn: 'The website design is focused on user convenience and logical navigation. Pages are structured to sequentially introduce users to the product, its capabilities, and advantages. Special attention is paid to adaptability and interface consistency across different devices.',
    mockup: mockupet,
    prototypes: [prototypeet],
    identity: true,
    identityDescription: 'Брэндинг ERP-tools.ru формирует образ современного и надёжного IT-продукта для бизнеса. Визуальные элементы, стиль графики и тон коммуникации объединены в единую систему, которая усиливает узнаваемость бренда и подчёркивает его экспертную позицию в сфере ERP-решений.',
    identityDescriptionEn: 'The branding of ERP-tools.ru forms the image of a modern and reliable IT product for business. Visual elements, graphic style, and communication tone are united into a single system that enhances brand recognition and emphasizes its expert position in the ERP solutions sphere.',
    identityImages: [footeret],
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    categories: ['Web Design', 'Разработка'],
  },
  {
    id: 3,
    title: 'Брэндинг сайта компании Астерос',
    titleEn: 'Branding of Asteros Company Website',
    description: 'Краткое описание третьего проекта',
    fullDescription: 'Корпоративный сайт компании «Астерос» — одного из ведущих системных интеграторов — разработан как имиджевая и информационная платформа, отражающая масштаб, опыт и экспертизу компании. Проект ориентирован на крупный бизнес и государственный сектор, поэтому ключевой задачей стало формирование доверия и подчёркивание многолетнего присутствия на рынке.',
    fullDescriptionEn: 'The corporate website of Asteros — one of the leading system integrators — was developed as an image and information platform reflecting the company\'s scale, experience, and expertise. The project is focused on large businesses and the public sector, so the key task was to build trust and emphasize the company\'s long-term market presence.',
    image: asterosbg,
    bgColor: '#0089B7', // синий
    textColor: '#ffffff', // белый
    logo: 'Астерос',
    concept: 'Дизайн-концепция строится вокруг идеи надёжности, стабильности и технологического лидерства. Визуальные решения строгие и сдержанные, с акцентом на структуру, цифры и факты. Крупные заголовки, модульная сетка и выверенные отступы формируют ощущение порядка и системного подхода, что напрямую перекликается с деятельностью компании.',
    conceptEn: 'The design concept is built around the idea of reliability, stability, and technological leadership. Visual solutions are strict and restrained, with emphasis on structure, numbers, and facts. Large headings, modular grid, and precise spacing create a sense of order and systematic approach, which directly resonates with the company\'s activities.',
    colors: [
      { code: '#00659F' },
      { code: '#32373A' },
      { code: '#FFFFFF' },
    ],
    colorsDescription: 'Основу цветовой палитры составляют холодные оттенки синего и серого, ассоциирующиеся с технологиями, уверенностью и профессионализмом. Светлый фон используется для контентных блоков, а тёмные секции — для смысловых акцентов и подвала сайта. Акцентные цвета применяются дозированно и подчёркивают ключевые элементы интерфейса.',
    colorsDescriptionEn: 'The color palette is based on cool shades of blue and gray, associated with technology, confidence, and professionalism. Light background is used for content blocks, while dark sections are for semantic accents and site footer. Accent colors are applied sparingly and highlight key interface elements.',
    fonts: [
      {
        name: 'Montserrat',
        label: 'MR',
        cardBg: '#32373A',
      },
    ],
    fontsDescription: 'Типографика проекта выполнена на базе современного гротескного шрифта, который хорошо читается и подходит для большого объёма корпоративного контента. Контраст между заголовками и основным текстом помогает выстроить чёткую иерархию и облегчает восприятие информации на многоуровневых страницах.',
    fontsDescriptionEn: 'The project\'s typography is based on a modern grotesque font that reads well and is suitable for large volumes of corporate content. The contrast between headings and main text helps build a clear hierarchy and facilitates information perception on multi-level pages.',
    webDesign: true,
    webDesignDescription: 'Сайт спроектирован с фокусом на удобную навигацию и быстрый доступ к ключевым разделам: решениям, отраслям, проектам и партнёрам. Использование карточек, иконок и визуальных блоков упрощает работу с большим массивом информации. Интерфейс адаптивен и сохраняет целостность дизайна на разных устройствах.',
    webDesignDescriptionEn: 'The website is designed with a focus on convenient navigation and quick access to key sections: solutions, industries, projects, and partners. The use of cards, icons, and visual blocks simplifies working with large amounts of information. The interface is adaptive and maintains design integrity across different devices.',
    mockup: mockupas,
    prototypes: [prototypeas, prototypeas1],
    identity: true,
    identityDescription: 'Визуальный стиль сайта органично продолжает корпоративный брендинг «Астерос». Графика, иконки и фотоконтент поддерживают образ крупной, устойчивой компании с сильной экспертизой. Дизайн усиливает узнаваемость бренда и формирует единое визуальное пространство для коммуникации с клиентами и партнёрами.',
    identityDescriptionEn: 'The website\'s visual style organically continues the corporate branding of Asteros. Graphics, icons, and photo content support the image of a large, stable company with strong expertise. The design enhances brand recognition and forms a unified visual space for communication with clients and partners.',
    identityImages: [mockupas1],
    technologies: ['Angular', 'Python', 'Django'],
    categories: ['Web Design', 'Брэндинг'],
  },
  {
    id: 4,
    title: 'Веб дизайн сайта Музея КФУ',
    titleEn: 'Web Design of KFU Museum Website',
    description: 'Краткое описание четвертого проекта',
    fullDescription: 'Проект представляет собой концептуальный дизайн-макет, направленный на создание целостного визуального образа и удобной пользовательской среды. Основная идея — объединить эстетику, функциональность и смысловую нагрузку, подчеркнув характер бренда и его ценности. В работе уделено внимание структуре, визуальной иерархии и пользовательскому опыту.',
    fullDescriptionEn: 'The project is a conceptual design mockup aimed at creating a holistic visual image and a convenient user environment. The main idea is to combine aesthetics, functionality, and semantic load, emphasizing the brand\'s character and its values. Attention is paid to structure, visual hierarchy, and user experience.',
    image: museumbg,
    bgColor: '#ffffff', // белый
    textColor: '#000000', // черный
    logo: 'ЭТНОГРАФИЧЕСКИЙ',
    concept: 'Концепция дизайна строится на идее визуального повествования, где каждый элемент работает как часть единой системы. Дизайн сочетает современную графику с отсылками к культурному и визуальному контексту проекта, создавая атмосферу погружения. Основной акцент сделан на балансе между эстетикой и функциональностью.',
    conceptEn: 'The design concept is built on the idea of visual storytelling, where each element works as part of a unified system. The design combines modern graphics with references to the cultural and visual context of the project, creating an immersive atmosphere. The main emphasis is on the balance between aesthetics and functionality.',
    colors: [
      { code: '#000000' },
      { code: '#FFFFFF' },
    ],
    colorsDescription: 'Цветовая палитра построена на сочетании сдержанных базовых оттенков и акцентных цветов. Такое решение помогает создать атмосферу визуального баланса, подчеркнуть ключевые элементы интерфейса и задать нужное эмоциональное восприятие. Цвета работают как инструмент навигации и усиливают общее настроение проекта.',
    colorsDescriptionEn: 'The color palette is built on a combination of restrained base tones and accent colors. This solution helps create an atmosphere of visual balance, highlight key interface elements, and set the desired emotional perception. Colors work as a navigation tool and enhance the overall mood of the project.',
    fonts: [
      {
        name: 'Felidae',
        label: 'FD',
        cardBg: '#000000',
      },
    ],
    fontsDescription: 'В проекте использована типографика, которая поддерживает характер бренда и улучшает читаемость контента. Основной шрифт отвечает за информативность и комфорт восприятия, а акцентный — добавляет выразительности и визуального ритма. Типографическая система выстроена с учетом иерархии и адаптивности.',
    fontsDescriptionEn: 'The project uses typography that supports the brand\'s character and improves content readability. The main font is responsible for informativeness and comfortable perception, while the accent font adds expressiveness and visual rhythm. The typographic system is built considering hierarchy and adaptability.',
    webDesign: true,
    webDesignDescription: 'Веб-дизайн ориентирован на интуитивное взаимодействие пользователя с контентом. Продуманная сетка, логичная навигация и акценты на ключевых блоках помогают легко воспринимать информацию. Дизайн адаптирован под разные устройства и сочетает современный подход с визуальной выразительностью.',
    webDesignDescriptionEn: 'The web design is focused on intuitive user interaction with content. A thoughtful grid, logical navigation, and accents on key blocks help easily perceive information. The design is adapted for different devices and combines a modern approach with visual expressiveness.',
    mockup: mockupms,
    prototypes: [prototypems],
    identity: true,
    identityDescription: 'Брендинг проекта формирует узнаваемый и цельный визуальный образ. Все элементы — от цветовой палитры до графических деталей — работают на создание единого стиля и поддерживают идею бренда. Такой подход позволяет выстроить эмоциональную связь с аудиторией и усилить идентичность проекта.',
    identityDescriptionEn: 'The project\'s branding forms a recognizable and cohesive visual image. All elements — from the color palette to graphic details — work to create a unified style and support the brand idea. This approach allows building an emotional connection with the audience and strengthening the project\'s identity.',
    identityImages: [imgms, img1ms, errorms],
    technologies: ['React', 'TypeScript'],
    categories: ['Web Design'],
  },
];

// Функция для получения проекта по ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};

// Функция для получения переведенного значения поля проекта
export const getProjectField = (project, field, language = 'ru') => {
  if (!project) return '';
  
  // Если есть перевод для поля, используем его
  const translatedField = `${field}${language === 'en' ? 'En' : ''}`;
  if (project[translatedField] !== undefined && project[translatedField] !== '') {
    return project[translatedField];
  }
  
  // Иначе используем оригинальное поле
  return project[field] || '';
};
