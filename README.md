# Coach Lee Vibe - Static Website

A modern, responsive static website for Coach Lee - an AI-powered personal training assistant platform.

## 📋 Project Structure

```
Coach_Lee_Vibe/
├── index.html              # Main landing page
├── README.md              # This file
├── css/
│   └── main.css           # Custom styles and animations
├── js/
│   └── main.js            # JavaScript functionality
├── pages/
│   ├── about.html         # About page
│   └── contact.html       # Contact page
└── assets/
    ├── images/            # Image files
    └── icons/             # Icon files
```

## 🚀 Features

- **Fully Responsive Design** - Works beautifully on mobile, tablet, and desktop
- **Modern UI/UX** - Bold, distinctive design with lime-green and black color scheme
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Material Icons** - Google Material Symbols for consistent iconography
- **Thai Language Support** - Full Thai language support with Kanit font
- **Accessible** - WCAG compliant markup and keyboard navigation
- **Performance Optimized** - Fast-loading static HTML/CSS/JS
- **SEO Ready** - Proper semantic HTML and meta tags

## 📄 Pages

### index.html (Landing Page)
Main landing page featuring:
- Header with navigation and CTA buttons
- Hero section with value proposition
- Brand carousel
- Pain points section
- How it works (3-step process)
- Features grid (6 features)
- Founder testimonial
- Pricing section (3 tiers)
- FAQ section
- Footer with links

### pages/about.html (About Page)
Company information including:
- About headline
- Founder story
- Mission statement
- Core values (3 principles)
- Team member profiles

### pages/contact.html (Contact Page)
Contact information and form:
- Contact form with validation
- Email, phone, and location information
- Social media links

## 🎨 Design System

### Color Palette
- **Primary**: Lime-400 (#a3e635)
- **Secondary**: Black (#000000)
- **Background**: Slate-50 (#f8fafc)
- **Text**: Black (#000000)

### Typography
- **Font Family**: Kanit (Thai-optimized font)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)

### Shadows & Borders
- **Hard Shadow**: `4px 4px 0px #000000` (distinctive hard shadow effect)
- **Border Width**: 2px on interactive elements
- **Border Radius**: 0.5rem (default), 0.75rem (lg), 1rem (xl)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles and animations
- **Tailwind CSS** - Utility CSS framework (CDN)
- **JavaScript (Vanilla)** - No dependencies
- **Google Fonts** - Kanit and Material Symbols
- **Google Material Symbols** - Icon library

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Edit the Tailwind config in HTML files:
```javascript
tailwind.config = {
  theme: {
    extend: {
      // Add custom colors here
    }
  }
}
```

### Fonts
Change font in `css/main.css`:
```css
body {
  font-family: 'Kanit', sans-serif;
}
```

### Content
Simply edit the HTML files directly. No build process required!

## ⚡ Performance

- **Zero Dependencies** - No npm packages or build tools needed
- **Static Hosting** - Can be deployed anywhere (GitHub Pages, Netlify, etc.)
- **Fast Load Time** - Optimized for quick loading
- **Lightweight** - Minimal CSS and JavaScript

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch as source

### Option 2: Netlify
1. Connect GitHub repository
2. Set build command: (leave empty for static)
3. Set publish directory: ./

### Option 3: Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

Then visit: `http://localhost:8000`

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for interactive elements
- Color contrast compliance
- Mobile touch-friendly buttons

## 📈 SEO Optimization

- Proper title and meta description tags
- Semantic HTML structure
- Open Graph meta tags ready
- Mobile-friendly viewport configuration
- Fast page load times
- Clean URL structure

## 🔒 Security

- No external scripts (except Tailwind and Google Fonts)
- Content Security Policy friendly
- No sensitive data storage
- Safe form handling (client-side validation shown)

## 📝 Code Standards

- Clean, commented code
- Consistent naming conventions
- Responsive design patterns
- Mobile-first approach
- DRY (Don't Repeat Yourself) principles

## 🐛 Known Limitations

- Contact form requires backend integration for actual email sending
- Image placeholders need replacement with actual images
- Some animations disabled on reduced-motion preferences
- JavaScript tracking is console-only (needs analytics service)

## 🔄 Future Enhancements

- [ ] Blog section
- [ ] Case studies page
- [ ] Integration guides
- [ ] Video tutorials section
- [ ] Newsletter signup
- [ ] Live chat widget
- [ ] Dark mode toggle
- [ ] Multi-language support (English)

## 📧 Contact & Support

For questions or issues with the website:
- Email: support@coachlee.th
- Phone: +66 (81) 234-5678
- Location: Bangkok, Thailand

## 📄 License

© 2024 Coach Lee. All rights reserved.

## 🙌 Credits

- Built with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Google Material Symbols](https://fonts.google.com/icons)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Last Updated**: November 2024
**Version**: 1.0.0
