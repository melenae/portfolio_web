# Portfolio Website

A modern portfolio website built with React.js. The site showcases projects of a graphic designer and web developer with detailed descriptions, visual materials, and contact functionality.

## 🚀 Features

- **Responsive Design** - Fully adapted for all devices (desktop, tablet, mobile)
- **Multilingual Support** - Russian and English language support with language switcher
- **Smooth Animations** - Scroll animations and hover effects
- **Interactive Contact Form** - EmailJS integration for sending messages
- **Detailed Project Pages** - Comprehensive information about each project with design descriptions, colors, fonts, and visual materials
- **Project Filtering** - Filter projects by categories (Web Design, Development, Branding)
- **Burger Menu** - Convenient navigation on mobile devices
- **Performance Monitoring** - Vercel Speed Insights integration

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - Library for building user interfaces
- **React Router DOM 6.20.0** - Routing and navigation
- **React Scripts 5.0.1** - Tools for creating and building React applications

### Styling
- **CSS3** - Custom styles using Flexbox and Grid
- **CSS Animations** - Smooth animations and transitions
- **Responsive Design** - Media queries for adaptability

### Integrations
- **EmailJS 4.4.1** - Email sending through contact form
- **Vercel Speed Insights 1.3.1** - Performance monitoring

### Fonts
- **Space Grotesk** - Main interface font
- **Google Fonts** - Rethink Sans, Unbounded, Montserrat, Felidae (for projects)

## 📁 Project Structure

```
portfolio_project/
├── public/
│   ├── index.html          # HTML template
│   └── full-moon.png       # Favicon
├── src/
│   ├── assets/             # Images and media files
│   ├── components/         # React components
│   │   ├── About.js        # About section
│   │   ├── Contact.js      # Contact form
│   │   ├── Header.js       # Navigation
│   │   └── Projects.js     # Projects list
│   ├── contexts/           # React Context
│   │   └── LanguageContext.js  # Context for language management
│   ├── data/               # Data
│   │   └── projects.js     # Project data
│   ├── hooks/              # Custom hooks
│   │   ├── useScrollAnimation.js  # Hook for scroll animations
│   │   └── useTranslation.js      # Hook for translations
│   ├── pages/              # Pages
│   │   ├── Home.js         # Home page
│   │   └── ProjectDetail.js  # Project detail page
│   ├── translations/       # Translation files
│   │   ├── ru.js           # Russian language
│   │   └── en.js           # English language
│   ├── App.js              # Main component
│   ├── App.css             # Global application styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## 🎨 Design

### Color Scheme
- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Accents**: Project-dependent (yellow, blue, white)

### Typography
- **Main Font**: Space Grotesk
- **Headings**: 96px - 150px (desktop), adaptive sizes for mobile
- **Text**: 16px - 32px depending on section

### Responsiveness
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Installation and Setup

### Requirements
- Node.js (version 14 or higher)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The application will open in the browser at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Built files will be in the `build/` folder

### Run Tests

```bash
npm test
```

## ⚙️ Configuration

### EmailJS

To enable the contact form functionality, you need to configure EmailJS:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add environment variables to `.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Detailed instructions can be found in `EMAILJS_SETUP.md`

### Languages

Translations are located in the `src/translations/` folder. To add a new language:

1. Create a translation file (e.g., `de.js` for German)
2. Add it to `useTranslation.js`
3. Add a language switcher button in `Header.js`

## 📱 Platforms and Browsers

### Supported Platforms
- Windows
- macOS
- Linux
- iOS
- Android

### Supported Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deployment will happen automatically on push to main branch

### Other Platforms

The project can be deployed on any platform that supports static sites:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📝 Main Components

### Header
- Fixed navigation
- Language switcher (RU/EN)
- Burger menu for mobile devices
- Smooth scrolling to sections

### About
- Main heading with name
- Role and skills information
- Fade-in animation

### Projects
- Project grid (2 columns on desktop)
- Category filtering
- Hover effects on cards
- Responsive grid for mobile

### ProjectDetail
- Detailed project information
- Sections: About Project, Colors, Fonts, Web Design, Identity
- Dynamic background and text color
- Responsive layout

### Contact
- Contact information
- Interactive contact form
- EmailJS integration
- Responsive design

## 🎯 Functionality

### Navigation
- Smooth scrolling to sections
- Navigation to detailed project pages
- Return to home page

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions between pages
- Contact form opening animation

### Internationalization
- Switch between Russian and English
- Translations for all interface texts
- Project description translations
- Language preference saving

## 🔧 Development

### Adding a New Project

Edit the `src/data/projects.js` file:

```javascript
{
  id: 5,
  title: 'Project Title',
  titleEn: 'Project Title',
  description: 'Short description',
  fullDescription: 'Full project description',
  fullDescriptionEn: 'Full project description',
  image: projectImage,
  bgColor: '#000000',
  textColor: '#ffffff',
  // ... other fields
}
```

### Modifying Styles

Styles are located in corresponding `.css` files in `components/` and `pages/` folders. A modular approach is used - each component has its own stylesheet.

## 📄 License

This project is a personal portfolio and is not distributed under any license.

## 👤 Author

**Artem Ermolaev**
- Graphic Designer & Web Developer
- Email: ermo.artem@gmail.com
- Instagram: [@art_youmorist_14](https://www.instagram.com/art_youmorist_14/)

## 🙏 Acknowledgments

- React team for the excellent library
- EmailJS for simple email integration
- Vercel for the deployment platform
- Google Fonts for quality fonts

---

**Version**: 1.0.0  
**Last Updated**: 2024
