# Frontend Portfolio

A modern, responsive, and highly interactive portfolio website built with HTML, CSS, and vanilla JavaScript. Features smooth animations, EmailJS integration, and a professional design to showcase frontend development skills.

## Features

Modern Design – Clean, professional UI with smooth animations

Fully Responsive – Works on desktop, tablet, and mobile

Performance Optimized – Fast loading with optimized assets

Interactive Elements – Smooth scroll, hover effects, animations

Contact Form – EmailJS integration for functional contact

Accessible – WCAG-compliant with semantic HTML

Modern CSS – CSS variables, Grid, Flexbox, and keyframe animations

## Tech Stack

Frontend: HTML5, CSS3, Vanilla JavaScript

Styling: CSS Variables, Flexbox, CSS Grid

Animations: CSS Keyframes, Scroll-triggered animations

Email Service: EmailJS

Icons: Font Awesome 6

Fonts: Google Fonts (Inter)

Animations: Lottie (JSON)

## Project Structure
```
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
│   │   └── Coding.json
│   └── pdf/
│       └── ellidan-multo-resume.pdf
├── scripts/
│   ├── main.js
│   ├── nav.js
│   ├── scrollAnimations.js
│   ├── email.js
│   └── uiEffects.js
└── fonts/
```
##  Sections

Header – Sticky navigation with smooth scroll

Hero – Introduction with animated Lottie element

About – Professional bio with highlights

Projects – Featured projects with hover effects

Experience – Timeline layout for work history

Skills – Technical skills with progress bars

Resume – Download section with certifications

Testimonials – Optional credibility section

Contact – EmailJS-powered contact form

Footer – Links and copyright

## Quick Start
Prerequisites

Live server (VS Code extension recommended)

Basic text editor (VS Code recommended)

Installation
git clone <your-repo-url>
cd frontend-portfolio

EmailJS Setup (Optional but Recommended)

Sign up at EmailJS

Get your Public Key, Service ID, and Template ID

Update scripts/email.js with your credentials

Customize Content

Replace placeholder images in assets/images/

Update Lottie animation in assets/json/Coding.json

Modify personal info in index.html

Adjust color scheme in assets/css/global.css

Run the Project
# Using VS Code Live Server
# Or with Python's simple HTTP server:
python -m http.server 8000
# Visit: http://localhost:8000

## Configuration
EmailJS
emailjs.init("YOUR_PUBLIC_KEY");
// Use sendForm with:
'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID'

Lottie Animation

Replace default animation by uploading a JSON from LottieFiles

Update the path in index.html if needed

## Customization
Colors

Edit CSS variables in global.css:

:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --accent-color: #f59e0b;
  /* Add other colors as needed */
}

Content

Update name, job title, bio, experience, projects, skills, contact info in index.html

Images

hero-portrait.jpg – Professional photo

about-image.jpg – About section image

project-*.jpg – Project screenshots

## Responsive Breakpoints

Mobile: 375px – 600px

Tablet: 600px – 1024px

Desktop: 1024px+

## Deployment
Netlify

Drag & drop project folder

Or connect GitHub repository

GitHub Pages

Push to GitHub

Settings → Pages → select main branch & root folder

Other Options

Vercel, Firebase Hosting, or any static host

## Scripts Overview

main.js – Core initialization & functionality

nav.js – Navigation and mobile menu

scrollAnimations.js – Scroll-triggered animations

email.js – Contact form EmailJS integration

uiEffects.js – Interactive UI effects

## Design Features

Smooth transitions: 200–400ms

Scroll animations: fade-in, slide-up

Hover effects: buttons, cards

Professional typography: Google Fonts Inter

Consistent spacing via CSS variables

