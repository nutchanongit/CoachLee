# 📂 File Guide - Coach Lee Vibe

Quick reference for all files in the Coach Lee Vibe website.

---

## 📋 File Directory

```
Coach_Lee_Vibe/
├── 📄 index.html                Main landing page (START HERE!)
├── 📄 README.md                Complete documentation
├── 📄 QUICK_START.md           5-minute quick start guide
├── 📄 DEPLOYMENT.md            Deployment guides
├── 📄 PROJECT_SUMMARY.md       Project overview
├── 📄 FILE_GUIDE.md            This file
│
├── 📁 pages/                    Additional pages
│   ├── 📄 about.html           About company and team
│   └── 📄 contact.html         Contact form and info
│
├── 📁 css/                     Stylesheets
│   └── 📄 main.css             Custom CSS styles
│
├── 📁 js/                      JavaScript code
│   └── 📄 main.js              Functionality and interactions
│
└── 📁 assets/                  Media and resources (ready for use)
    ├── 📁 images/              Add your images here
    └── 📁 icons/               Add custom icons here
```

---

## 📄 HTML Files (3 Pages)

### 1. **index.html** (29 KB) - Main Landing Page
**What's on it:**
- Header with navigation
- Hero section
- Brand carousel
- Pain points section
- How it works (3 steps)
- Features (6 features)
- Founder testimonial
- Pricing (3 tiers)
- FAQ (4 questions)
- Footer

**Edit for:**
- Company name & branding
- Hero text and CTA
- Features and benefits
- Pricing and plans
- FAQ content

**Key sections:**
```html
<!-- Hero Section (line ~95) -->
<section class="py-16 md:py-24">
  <h1>Edit your main headline here</h1>
</section>

<!-- Pricing Section (line ~384) -->
<section id="pricing">
  Edit prices: ฿990, ฿1,990
</section>

<!-- FAQ Section (line ~490) -->
<section id="faq">
  Edit questions and answers
</section>
```

---

### 2. **pages/about.html** (11 KB) - About Company Page
**What's on it:**
- About headline
- Company story
- Mission statement
- Core values (3 principles)
- Team member profiles

**Edit for:**
- Company history
- Founder story
- Mission & values
- Team information

**Key sections:**
```html
<!-- Story Section (line ~54) -->
Edit founder story and background

<!-- Team Section (line ~94) -->
Edit team member names, titles, descriptions
```

---

### 3. **pages/contact.html** (11 KB) - Contact Page
**What's on it:**
- Contact form
- Contact information
- Email, phone, location
- Social media links

**Edit for:**
- Contact email
- Phone number
- Physical address
- Social media URLs

**Key sections:**
```html
<!-- Form Fields (line ~60-90) -->
Update form fields and validation

<!-- Contact Info (line ~145) -->
Edit email: support@coachlee.th
Edit phone: +66812345678
Edit address: Bangkok, Thailand

<!-- Social Links (line ~167) -->
Update Facebook, Instagram, X URLs
```

---

## 🎨 CSS Files (1 File)

### **css/main.css** (1.9 KB) - Custom Styles
**What it does:**
- Material icon styling
- Scroll animation
- Smooth transitions
- Card hover effects
- Responsive typography
- Accessibility improvements
- Print styles

**Edit for:**
- Change colors (search & replace)
- Add new animations
- Modify fonts
- Adjust spacing
- Custom effects

**Key sections:**
```css
/* Animations */
@keyframes scroll { ... }

/* Color overrides */
.lime-400 { /* Edit lime color */ }

/* Responsive media queries */
@media (max-width: 768px) { ... }

/* Accessibility */
@media (prefers-reduced-motion: reduce) { ... }
```

**How to change colors:**
```css
/* Current */
.bg-lime-400 { background-color: #a3e635; }

/* To change, edit here: */
.custom-primary { background-color: #YOUR_COLOR; }
```

---

## ⚡ JavaScript Files (1 File)

### **js/main.js** (4.5 KB) - Functionality
**What it does:**
- Smooth scroll behavior
- Mobile menu toggle
- CTA tracking
- FAQ accordion
- Header scroll effects
- Intersection observer (fade-in animation)
- Utility functions

**Edit for:**
- Add analytics tracking
- Add form validation
- Add new interactions
- Modify animations
- Add functionality

**Key functions:**
```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Smooth scroll logic
  });
});

// Mobile menu toggle
const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
if (menuButton) {
  menuButton.addEventListener('click', function() {
    // Toggle menu
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('details');
faqItems.forEach((item, index) => {
  item.addEventListener('toggle', function() {
    // Close other items when one opens
  });
});

// Utilities (at bottom)
window.Coach = {
  trackEvent: trackEvent,
  isInViewport: isInViewport,
  throttle: throttle,
  debounce: debounce
};
```

---

## 📚 Documentation Files (4 Files)

### 1. **README.md** (5.8 KB) - Full Documentation
**Contains:**
- Project overview
- Complete structure
- Features list
- Design system
- Technologies
- Customization guide
- Deployment options
- Browser support
- Accessibility features
- SEO optimization
- Security info
- Future enhancements

**Read this for:** Complete project information

---

### 2. **QUICK_START.md** (6.7 KB) - 5-Minute Guide
**Contains:**
- Local setup (python http.server)
- Instant deployment (Netlify)
- Files to edit
- Customization quick guide
- FAQ troubleshooting
- Pro tips

**Read this for:** Getting started quickly

---

### 3. **DEPLOYMENT.md** (6.8 KB) - Deployment Guides
**Contains:**
- 6+ deployment options:
  - GitHub Pages
  - Netlify
  - Vercel
  - Traditional hosting
  - AWS S3
  - Docker
- Pre-deployment checklist
- Custom domain setup
- Analytics setup
- Security best practices
- Performance optimization
- Troubleshooting
- Environment variables

**Read this for:** Deploying your website

---

### 4. **PROJECT_SUMMARY.md** (9+ KB) - Overview
**Contains:**
- What was created
- Complete features list
- Design system details
- Technical stack
- File statistics
- Quality checklist
- Getting started steps
- Support resources
- Next steps after deployment

**Read this for:** Project overview and summary

---

## 📂 Assets Folders

### **assets/images/**
**Purpose:** Store your images here

**Usage:**
```html
<img src="assets/images/photo.jpg" alt="Description">
```

**Recommended sizes:**
- Hero image: 1200x800px or larger
- Thumbnails: 400x300px
- Icons: 64x64px minimum

---

### **assets/icons/**
**Purpose:** Store custom icon files

**Usage:**
```html
<img src="assets/icons/icon.svg" alt="Icon">
```

**Supported formats:**
- SVG (recommended)
- PNG
- JPG

---

## 🎯 Where to Edit

### Common Edits by Section

| What | Where | Line # |
|------|-------|--------|
| Company name | index.html | 50-51 |
| Hero headline | index.html | 95-96 |
| Hero text | index.html | 98-100 |
| Brand logos | index.html | 133-144 |
| Features | index.html | 267+ |
| Pricing | index.html | 384+ |
| FAQ | index.html | 490+ |
| Founder | index.html | 370+ |
| Contact email | contact.html | 78-79 |
| Contact phone | contact.html | 156 |
| Team info | about.html | 94+ |
| Colors | css/main.css | 1-50 |
| Fonts | css/main.css | any |

---

## ✏️ Quick Edit Examples

### Change Primary Color (Lime → Blue)
```
Find in all files: lime-400
Replace with: blue-500

Find in all files: bg-lime-400
Replace with: bg-blue-500
```

### Change Hero Text
```html
<!-- Find in index.html (around line 95) -->
<h1>ผู้ช่วย AI สำหรับเทรนเนอร์ส่วนตัวยุคใหม่</h1>

<!-- Replace with your text -->
<h1>Your new headline here</h1>
```

### Add New Feature
```html
<!-- Copy this structure and add to features section -->
<div class="flex flex-col gap-4 p-6 bg-slate-50 rounded-lg border-2 border-black shadow-hard">
  <span class="material-symbols-outlined text-black text-4xl">icon_name</span>
  <h3 class="text-2xl font-bold">Feature Title</h3>
  <p>Feature description goes here</p>
</div>
```

### Update Contact Email
```html
<!-- Find in contact.html -->
<a href="mailto:support@coachlee.th">support@coachlee.th</a>

<!-- Change to -->
<a href="mailto:youremail@yoursite.com">youremail@yoursite.com</a>
```

---

## 🔍 Search & Replace Guide

### Tools to Use
- **VS Code**: Ctrl+H (Find and Replace)
- **Sublime**: Ctrl+H
- **Notepad++**: Ctrl+H
- **Mac**: Cmd+Option+F

### Common Replacements
```
Find: ฿990          Replace: YOUR_PRICE
Find: ฿1,990        Replace: YOUR_PRICE
Find: support@coachlee.th    Replace: YOUR_EMAIL
Find: +66812345678  Replace: YOUR_PHONE
Find: lime-400      Replace: YOUR_COLOR
```

---

## ✅ File Checklist

Before deploying, check these files:

- [ ] index.html - Updated prices, features, testimonial
- [ ] pages/about.html - Updated team, mission, story
- [ ] pages/contact.html - Updated email, phone, address
- [ ] css/main.css - Colors match your brand
- [ ] All links work correctly
- [ ] Images are in correct folders
- [ ] No broken references
- [ ] Footer links are current
- [ ] Social media URLs updated
- [ ] Phone/email are correct

---

## 📞 File Size Reference

```
index.html          29 KB   (Main page)
pages/about.html    11 KB   (About page)
pages/contact.html  11 KB   (Contact page)
css/main.css        1.9 KB  (Styles)
js/main.js          4.5 KB  (JavaScript)
─────────────────────────
TOTAL (site)        57 KB   (Super fast!)
```

Total size is tiny - loads in less than 1 second!

---

## 🚀 Next Steps

1. **Open index.html** in your browser
2. **Read QUICK_START.md** for next steps
3. **Edit content** in HTML files
4. **Test locally** with Python server
5. **Deploy** to Netlify or other platform

---

## 💡 File Tips

- **Always backup** before making changes
- **Use VS Code** for easier editing
- **Test locally** before deploying
- **Validate HTML** at w3c.org/validator
- **Keep version control** with Git
- **Comment your changes** in HTML

---

## ❓ Common Questions

**Q: Which file should I edit?**
A: Start with index.html for main content

**Q: How do I add images?**
A: Put them in assets/images/, then reference in HTML

**Q: Can I change the design?**
A: Edit css/main.css for colors and styles

**Q: Where are fonts defined?**
A: In HTML <head> section and css/main.css

**Q: How do I add a new page?**
A: Copy pages/about.html, rename, and edit content

---

**Need more help?** Check README.md or QUICK_START.md

**Ready to deploy?** See DEPLOYMENT.md
