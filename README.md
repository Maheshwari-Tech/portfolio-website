# Sanjay Gandhi - Portfolio Website

A modern, responsive portfolio website built with React showcasing software engineering skills, projects, and professional experience.

## 🚀 Features

### Core Sections
- **About**: Personal introduction and professional summary
- **Content**: YouTube videos and blog articles with search functionality
- **Experience**: Professional work history and achievements
- **Skills**: Technical skills organized by categories with color-coded tags
- **Projects**: Showcase of web, mobile, ML, and software engineering projects
- **Services**: Offered consulting services and mentorship
- **Contact**: Combined feedback and appointment booking forms

### Interactive Features
- **Dynamic Content Loading**: All data loaded from JSON files for easy maintenance
- **Responsive Design**: Mobile-first approach with smooth animations
- **Search Functionality**: Real-time blog search and filtering
- **Carousels**: Auto-advancing content carousels with manual navigation
- **Form Handling**: Anonymous feedback toggle and appointment scheduling
- **Progress Tracking**: Scroll progress bar

### Technical Highlights
- **React Architecture**: Component-based structure with hooks
- **Dynamic Styling**: CSS animations and transitions
- **FontAwesome Icons**: Professional iconography throughout
- **Gradient Backgrounds**: Modern visual design
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **CSS3** - Styling with animations
- **FontAwesome** - Icons
- **JavaScript (ES6+)** - Logic and interactions

### Backend (Optional)
- **Node.js** - Server runtime
- **Express.js** - API framework
- **File System** - Data storage

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── images/          # Project screenshots and assets
│   ├── storage/         # JSON data files
│   │   ├── about.json
│   │   ├── blogs.json
│   │   ├── contact.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── videos.json
│   └── index.html
├── src/
│   ├── components/      # React components
│   │   ├── About.js
│   │   ├── Content.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Projects.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   └── index.js
├── backend/             # Optional backend server
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maheshwari-tech/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Optional: Start the backend server**
   ```bash
   cd backend
   npm install
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Data Management

All content is stored in JSON files in the `public/storage/` directory:

- **about.json**: Personal information and social links
- **blogs.json**: Blog posts with search functionality
- **contact.json**: Contact information and links
- **projects.json**: Portfolio projects by category
- **skills.json**: Technical skills organized by type
- **videos.json**: YouTube video content

### Adding New Content

1. Edit the appropriate JSON file in `public/storage/`
2. Follow the existing data structure
3. The website will automatically reflect changes

## 🎨 Customization

### Styling
- Main styles are in `src/App.css`
- Component-specific styles are inline or in the main CSS file
- Color schemes can be modified in the CSS custom properties

### Content
- Update personal information in the JSON files
- Add new projects, blogs, or videos by extending the JSON arrays
- Modify contact information centrally in `contact.json`

### Features
- Enable/disable sections by commenting out components in `App.js`
- Add new sections by creating new components and JSON data files

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 Sanjay Gandhi. All rights reserved.

## 🌐 Live Demo

**Portfolio Website**: [https://online-sanju.netlify.app](https://online-sanju.netlify.app)

## 📞 Contact

- **Email**: sanjaymaheshwari.work@gmail.com
- **LinkedIn**: [linkedin.com/in/snjumaheshwari](https://linkedin.com/in/snjumaheshwari)
- **GitHub**: [github.com/snjumaheshwari](https://github.com/snjumaheshwari)

## 🙏 Acknowledgments

- Images sourced from Pexels
- Icons provided by FontAwesome
- Built with Create React App
