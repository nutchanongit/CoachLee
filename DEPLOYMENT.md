# Deployment Guide - Coach Lee Vibe

This guide explains how to deploy the Coach Lee Vibe static website to various hosting platforms.

## 🚀 Quick Start

Since this is a static website, you can deploy it anywhere with minimal setup!

### Local Testing

Before deploying, test locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server (VS Code extension)
# Just right-click index.html and select "Open with Live Server"
```

Then open your browser to: `http://localhost:8000`

---

## 📦 Deployment Options

### Option 1: GitHub Pages (Free & Easy) ⭐

**Best for**: Portfolio, small projects, free hosting

#### Steps:
1. Create a GitHub repository
2. Push your Coach_Lee_Vibe folder to the repo
3. Go to **Settings → Pages**
4. Select **Main branch** as source
5. Your site will be live at: `https://yourusername.github.io/Coach_Lee_Vibe`

#### Tips:
- Use a custom domain in Pages settings
- Enable HTTPS (automatic)
- No build step needed

---

### Option 2: Netlify (Recommended) ⭐⭐

**Best for**: Fast deploys, custom domain, analytics

#### Via GitHub (Recommended):
1. Sign up at [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure:
   - **Base directory**: `Coach_Lee_Vibe`
   - **Build command**: (leave empty)
   - **Publish directory**: `.`
5. Click Deploy
6. Your site will be live in seconds!

#### Via Drag & Drop:
1. Go to [drop.netlify.com](https://drop.netlify.com)
2. Drag and drop the entire Coach_Lee_Vibe folder
3. Get an instant live URL!

#### Benefits:
- Automatic HTTPS
- Custom domain support
- Form handling (needs backend)
- Analytics dashboard
- Unlimited deployments

---

### Option 3: Vercel (Modern Hosting) ⭐⭐

**Best for**: High performance, serverless functions later

#### Steps:
1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Project settings:
   - **Framework**: Other (Static)
   - **Root Directory**: `Coach_Lee_Vibe`
5. Deploy!

#### Benefits:
- Fastest CDN globally
- Edge caching
- Automatic deployments
- Analytics
- Serverless functions support

---

### Option 4: Traditional Web Hosting (cPanel, etc.)

**Best for**: Existing hosting provider

#### Steps:
1. Connect to your server via FTP/SFTP
2. Navigate to public_html or www folder
3. Upload all Coach_Lee_Vibe files
4. Ensure index.html is in the root
5. Visit your domain!

#### FTP Tools:
- FileZilla (free, all platforms)
- WinSCP (Windows)
- Cyberduck (Mac)
- VS Code FTP extension

---

### Option 5: AWS S3 + CloudFront (Scalable)

**Best for**: High traffic, enterprise needs

#### Steps:
1. Create S3 bucket for your site
2. Enable "Static website hosting"
3. Upload all files
4. Set bucket policy to public read
5. Create CloudFront distribution
6. Point domain to CloudFront

#### Cost: $0-5/month (usually)

---

### Option 6: Docker Container (Advanced)

**Best for**: Production environments, consistency

Create `Dockerfile`:
```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t coach-lee-vibe .
docker run -p 80:80 coach-lee-vibe
```

---

## 🔧 Pre-Deployment Checklist

- [ ] Test all links work locally
- [ ] Check responsive design on mobile
- [ ] Validate HTML (use W3C validator)
- [ ] Test forms work (if backend exists)
- [ ] Optimize images (if any)
- [ ] Update contact email/phone if needed
- [ ] Update social media links
- [ ] Check favicon is present
- [ ] Test on multiple browsers
- [ ] Update copyright year if needed

---

## 🔗 Custom Domain Setup

### For Netlify/Vercel:
1. Domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS settings
3. Update nameservers to point to Netlify/Vercel
4. OR add custom CNAME records
5. Wait 24-48 hours for propagation

### For GitHub Pages:
1. Add CNAME file to repo root with your domain
2. Update DNS to point to GitHub's servers
3. Enable HTTPS in Settings → Pages

---

## 📊 Analytics Setup

### Google Analytics:
1. Create property at [analytics.google.com](https://analytics.google.com)
2. Add this code before closing `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Netlify Analytics:
- Built-in, just enable in dashboard
- No code needed

---

## 🔒 Security Best Practices

1. **Enable HTTPS** (all platforms do this by default now)
2. **Security Headers** - Netlify adds these automatically
3. **No Sensitive Data** - Don't commit API keys or secrets
4. **Content Security Policy** - Configure if needed
5. **Regular Updates** - Keep dependencies current

---

## 📈 Performance Optimization

### Image Optimization:
```bash
# Use ImageOptim, TinyPNG, or similar
# Install imagemin CLI
npm install -g imagemin imagemin-mozjpeg imagemin-pngquant

imagemin assets/images/* --out-dir=assets/images
```

### Cache Busting:
Add version to CSS/JS files:
```html
<link rel="stylesheet" href="css/main.css?v=1.0.0">
```

### Minification:
- Netlify does this automatically
- Or use online minifiers

---

## 🚨 Troubleshooting

### 404 Errors on Pages
- Ensure page paths are relative (e.g., `../`)
- Check file names match exactly

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths
- Verify CSS file is deployed

### Images Not Showing
- Ensure image paths are correct
- Upload image files to assets/images/
- Use relative paths: `assets/images/photo.jpg`

### Forms Not Working
- Forms need backend (Node, PHP, etc.)
- Use service like Formspree, Basin, or Netlify Forms
- For Netlify Forms, add `name="contact"` to form tag

---

## 📝 Environment Variables

For future backend integration:

**.env file example:**
```
CONTACT_EMAIL=contact@coachlee.th
SITE_URL=https://coachlee.th
```

Never commit `.env` files to git!

---

## 🔄 Continuous Deployment

### Netlify/Vercel:
Automatic! Every push to main branch deploys

### GitHub Pages:
Automatic! Every push updates the site

### Manual Deployments:
Use FTP/SSH to upload files when ready

---

## 💡 Tips for Success

1. **Start with Netlify** - Easiest to get started
2. **Use GitHub** - Version control + free CI/CD
3. **Monitor Performance** - Check Core Web Vitals
4. **Mobile First** - Test on real devices
5. **Keep It Simple** - No build step = fewer issues

---

## 📞 Getting Help

- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Support**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

**Happy Deploying! 🚀**
