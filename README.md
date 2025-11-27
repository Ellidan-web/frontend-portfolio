🚀 Frontend Portfolio
A modern, responsive, and highly interactive portfolio website built with HTML, CSS, and vanilla JavaScript. Features smooth animations, EmailJS integration, and a professional design that showcases frontend development skills.

✨ Features
🎨 Modern Design - Clean, professional UI with smooth animations

📱 Fully Responsive - Perfect on desktop, tablet, and mobile

⚡ Performance Optimized - Fast loading with optimized assets

🎯 Interactive Elements - Smooth scroll, hover effects, and animations

📧 Contact Form - EmailJS integration for functional contact forms

♿ Accessible - WCAG compliant with proper semantic HTML

🌙 Modern CSS - CSS variables, Grid, Flexbox, and animations

🛠️ Tech Stack
Frontend: HTML5, CSS3, Vanilla JavaScript

Styling: CSS Variables, Flexbox, CSS Grid

Animations: CSS Keyframes, Scroll-triggered animations

Email Service: EmailJS

Icons: Font Awesome 6

Fonts: Google Fonts (Inter)

Animations: Lottie (JSON)

📁 Project Structure

```
text
frontend-portfolio/
│
├── index.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── skills.css
│   │   ├── resume.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── images/
│   │   ├── hero-portrait.jpg
│   │   ├── about-image.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   ├── json/
│   │   └── Coding.json (Lottie animation)
│   └── pdf/
│       └── ellidan-multo-resume.pdf
│
├── scripts/
│   ├── main.js
│   ├── nav.js
│   ├── scrollAnimations.js
│   ├── email.js
│   └── uiEffects.js
│
└── fonts/
```
🎨 Sections
Header - Sticky navigation with smooth scroll

Hero - Introduction with animated Lottie element

About - Professional bio with highlights

Projects - Featured projects with hover effects

Experience - Timeline layout work history

Skills - Technical skills with progress bars

Resume - Download section with certifications

Contact - EmailJS powered contact form

Footer - Links and copyright

🚀 Quick Start
Prerequisites
Live server (VS Code extension) or any local server

Basic text editor (VS Code recommended)

Installation
Clone or Download the Project

bash
git clone <your-repo-url>
cd frontend-portfolio
Set Up EmailJS (Optional but Recommended)

Sign up at EmailJS

Get your:

Public Key

Service ID

Template ID

Update scripts/email.js with your credentials

Customize Content

Replace placeholder images in assets/images/

Update Lottie animation in assets/json/Coding.json

Update personal information in index.html

Modify color scheme in assets/css/global.css

Run the Project

bash
# Using VS Code Live Server
# Or any local server like:
python -m http.server 8000
# Then visit: http://localhost:8000
⚙️ Configuration
EmailJS Setup
Update scripts/email.js with your credentials:

javascript
emailjs.init("YOUR_PUBLIC_KEY");
// and in sendEmail():
'YOUR_SERVICE_ID',
'YOUR_TEMPLATE_ID',
Lottie Animation
Replace the default animation by:

Creating your animation at LottieFiles

Download the JSON file

Replace assets/json/Coding.json with your file

Update the path in index.html if needed

🎯 Customization
Colors
Edit CSS variables in global.css:

css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --accent-color: #f59e0b;
    /* ... other colors */
}
Content
Update all personal information in index.html:

Name: Ellidan Multo

Job title

Bio descriptions

Work experience

Projects

Skills

Contact information

Images
Replace placeholder images in assets/images/:

hero-portrait.jpg - Your professional photo

about-image.jpg - About section image

project-*.jpg - Project screenshots

📱 Responsive Breakpoints
Mobile: 375px - 600px

Tablet: 600px - 1024px

Desktop: 1024px+

🚀 Deployment
Netlify (Recommended)
Drag and drop your project folder to Netlify

Or connect your GitHub repository

GitHub Pages
Push to GitHub repository

Go to Settings → Pages

Select main branch and root folder

Other Options
Vercel

Firebase Hosting

Any static hosting service

🔧 Scripts Overview
main.js - Initialization and core functionality

nav.js - Navigation and mobile menu

scrollAnimations.js - Scroll-triggered animations

email.js - Contact form with EmailJS

uiEffects.js - Interactive UI effects

🎨 Design Features
Smooth Transitions: 200-400ms animations

Scroll Animations: Fade-in, slide-up effects

Hover Effects: Interactive buttons and cards

Professional Typography: Google Fonts Inter

Consistent Spacing: CSS variable system

📞 Support
For issues or questions:

Check the browser console for errors

Verify file paths and names

Ensure all dependencies are loaded