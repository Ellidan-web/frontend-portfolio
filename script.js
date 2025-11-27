// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      // close mobile nav
      if(nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// Reveal on scroll (IntersectionObserver)
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, {threshold: 0.12});
reveals.forEach(r => observer.observe(r));

// EmailJS setup - replace placeholders with your keys
(function(){
  // Replace YOUR_PUBLIC_KEY with the public key from EmailJS dashboard
  if(window.emailjs){
    emailjs.init('YOUR_PUBLIC_KEY');
  }
})();

// Contact form handling
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', function(e){
  e.preventDefault();

  // Basic client-side validation
  const name = form.querySelector('[name="from_name"]').value.trim();
  const email = form.querySelector('[name="reply_to"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();
  if(!name || !email || !message){
    feedback.textContent = 'Please fill in all required fields.';
    feedback.style.color = '#ffb4b4';
    return;
  }

  feedback.textContent = 'Sending...';

  // Send via EmailJS - replace SERVICE_ID and TEMPLATE_ID
  if(window.emailjs){
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        feedback.style.color = '';
        feedback.textContent = 'Message sent — thank you!';
        form.reset();
      }, (err) => {
        console.error('EmailJS error', err);
        feedback.style.color = '#ffb4b4';
        feedback.textContent = 'Something went wrong. Please try again later.';
      });
  } else {
    feedback.style.color = '#ffb4b4';
    feedback.textContent = 'Email service not configured. See README.';
  }
});

// Small accessibility improvement: allow Esc to close nav on mobile
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && nav.classList.contains('open')) nav.classList.remove('open');
});
