# 🚀 Quick Start Guide - Coach Lee Vibe

Get up and running with Coach Lee Vibe in minutes!

## ⚡ 5-Minute Setup

### 1️⃣ Open the Website Locally

**Windows:**
```bash
# Open Command Prompt in the Coach_Lee_Vibe folder
# Then run:
python -m http.server 8000
# Open http://localhost:8000 in browser
```

**Mac/Linux:**
```bash
cd /path/to/Coach_Lee_Vibe
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

### 2️⃣ Deploy to Web (30 seconds!)

**Easiest Option - Netlify:**
1. Go to [drop.netlify.com](https://drop.netlify.com)
2. Drag and drop the entire Coach_Lee_Vibe folder
3. Get instant live URL! 🎉

**Other Options:**
- GitHub Pages (5 mins)
- Vercel (2 mins)
- FTP Upload (10 mins)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides.

---

## 📝 Files You Need to Edit

### Update Company Info:

**Contact Email:**
- Edit in `pages/contact.html` (search: `support@coachlee.th`)
- Edit in `pages/contact.html` (href: `mailto:support@coachlee.th`)

**Phone Number:**
- Edit in `pages/contact.html` (search: `+66812345678`)
- Edit in `pages/contact.html` (href: `tel:+66812345678`)

**Social Media Links:**
- Edit footer in all HTML files
- Replace `#` with actual URLs

**Pricing & Features:**
- Edit in `index.html`
- Search for: "฿990", "฿1,990" etc.

**Team Members:**
- Edit in `pages/about.html`
- Update names, titles, descriptions

---

## 🎨 Customization Guide

### Change Colors

**Primary Color (Lime Green):**
- Current: `#a3e635` (lime-400)
- Change in any file: Replace all `lime-400` with your color

**Secondary Color (Black):**
- Current: `#000000`
- Change in any file: Replace all `black` with your color

**Example - Change to Blue Theme:**
```html
<!-- Find: -->
bg-lime-400

<!-- Replace with: -->
bg-blue-500
```

### Change Fonts

In `css/main.css`:
```css
body {
  font-family: 'Kanit', sans-serif;  /* Change Kanit to any Google Font */
}
```

### Add New Pages

1. Copy `pages/about.html`
2. Rename to `pages/newpage.html`
3. Edit content
4. Add link in header navigation:

```html
<a href="pages/newpage.html">New Page</a>
```

---

## 📂 File Structure Explained

```
Coach_Lee_Vibe/
│
├── index.html           ← Main page (edit company info here)
├── README.md           ← Full documentation
├── DEPLOYMENT.md       ← How to deploy
├── QUICK_START.md      ← This file
│
├── pages/
│   ├── about.html      ← About page (edit team/mission)
│   └── contact.html    ← Contact page (edit contact info)
│
├── css/
│   └── main.css        ← Custom styles (edit for design changes)
│
└── js/
    └── main.js         ← JavaScript (add functionality here)
```

---

## ✅ What's Included

✨ **Features:**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ 3 pages (home, about, contact)
- ✅ Beautiful animations
- ✅ Thai language ready
- ✅ SEO optimized
- ✅ No build process needed
- ✅ Fast loading

📄 **Pages:**
- Home (index.html) - Landing page with all sections
- About (pages/about.html) - Company story and team
- Contact (pages/contact.html) - Contact form and info

🎯 **Sections on Home:**
1. Navigation header
2. Hero section
3. Brand carousel
4. Pain points (3 cards)
5. How it works (3 steps)
6. Features (6 features)
7. Testimonial
8. Pricing (3 tiers)
9. FAQ (4 questions)
10. Footer

---

## 🔧 Common Edits

### Edit Hero Text
File: `index.html` (line 95)
```html
<h1>ผู้ช่วย AI สำหรับเทรนเนอร์ส่วนตัวยุคใหม่</h1>
```

### Edit Features
File: `index.html` (line 267+)
Look for `<h3 class="text-2xl font-bold">` sections

### Edit Pricing
File: `index.html` (line 384+)
Update prices: `฿990`, `฿1,990`

### Edit FAQ
File: `index.html` (line 490+)
Edit questions and answers

### Edit Footer
File: All HTML files
Update links in the footer section

---

## 🚀 Deployment Quick Links

| Platform | Time | Cost | Link |
|----------|------|------|------|
| Netlify | 30 sec | Free | [drop.netlify.com](https://drop.netlify.com) |
| GitHub Pages | 5 min | Free | [pages.github.com](https://pages.github.com) |
| Vercel | 2 min | Free | [vercel.com](https://vercel.com) |
| Surge | 2 min | Free/Paid | [surge.sh](https://surge.sh) |

**Recommended:** Netlify (easiest)

---

## 🐛 Troubleshooting

**Styles look broken?**
- Clear browser cache (Ctrl+Shift+Del)
- Make sure all files are uploaded

**Links not working?**
- Check file paths are correct
- Use relative paths: `pages/about.html`

**Images not showing?**
- Add images to `assets/images/` folder
- Update image paths in HTML

**Mobile looks weird?**
- Zoom out in browser (Ctrl+Minus)
- Check viewport meta tag in HTML

---

## 📚 Resources

- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Material Icons**: [fonts.google.com/icons](https://fonts.google.com/icons)
- **Google Fonts**: [fonts.google.com](https://fonts.google.com)
- **HTML Reference**: [developer.mozilla.org/html](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## 💡 Pro Tips

1. **Always test locally first**
   ```bash
   python -m http.server 8000
   ```

2. **Use browser DevTools**
   - Right-click → Inspect (or F12)
   - Use mobile view to test responsive design

3. **Keep backups**
   - Before making changes, copy files
   - Use version control (Git)

4. **Test on real devices**
   - Doesn't look the same on phone vs computer?
   - Test on actual iPhone/Android

5. **Monitor performance**
   - Use Google PageSpeed Insights
   - Optimize images if needed

---

## 🎓 Learning Path

1. **Just get it online** → Use Netlify drop
2. **Custom domain** → Buy domain, point DNS
3. **Add content** → Edit HTML files
4. **Custom design** → Modify CSS colors
5. **Add pages** → Create new HTML files
6. **Add forms** → Use Formspree or Netlify Forms
7. **Add database** → Learn Node.js/PHP

---

## ❓ FAQ

**Q: Do I need to code?**
A: No! Just edit HTML with a text editor. VS Code recommended.

**Q: Can I use on my own domain?**
A: Yes! Works on any domain. See DEPLOYMENT.md

**Q: Is it mobile friendly?**
A: Yes! Fully responsive. Test on your phone.

**Q: Can I add a contact form?**
A: Yes! Use Formspree.io (free, no code needed)

**Q: How do I add images?**
A: Upload to `assets/images/`, then reference in HTML:
```html
<img src="assets/images/photo.jpg" alt="Description">
```

---

## 🚀 Next Steps

1. ✅ Read this Quick Start
2. ✅ Test locally (python -m http.server 8000)
3. ✅ Deploy to Netlify (drop.netlify.com)
4. ✅ Edit content (update company info)
5. ✅ Buy custom domain
6. ✅ Share with world!

---

**Questions?** Check [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md)

**Ready?** [Go live in 30 seconds! 🚀](https://drop.netlify.com)
