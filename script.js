console.log("Rim Portfolio Loaded Successfully 🚀");

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
  '.skill-card, .project-card, .achievement-box'
);

animatedElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `all 0.6s ease ${index * 0.1}s`;
  observer.observe(el);
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// FORM SUBMISSION
// ============================================

// The contact form is submitted directly through FormSubmit.co via the form action.
// Removing the JavaScript interception so the email can be delivered correctly.

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 50) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// ACTIVE LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = 'var(--primary-color)';
    } else {
      link.style.color = '';
    }
  });
});

// ============================================
// PARTICLE ANIMATION (Optional Enhancement)
// ============================================

function createParticles() {
  const container = document.querySelector('.hero::before');
  // Particles are created via CSS animations
}

// ============================================
// SKILLS PROGRESS BAR ANIMATION
// ============================================

const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const levelBars = entry.target.querySelectorAll('.level-bar');
      levelBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-out';
          bar.style.width = width;
        }, 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillCards.forEach(card => {
  skillObserver.observe(card);
});

// ============================================
// TYPING EFFECT FOR HERO TEXT
// ============================================

function typeEffect() {
  const titleElement = document.querySelector('.name');
  if (!titleElement) return;
  
  const text = titleElement.textContent;
  titleElement.textContent = '';
  let index = 0;

  const type = () => {
    if (index < text.length) {
      titleElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  };

  // Start typing after a slight delay
  setTimeout(type, 300);
}

// Call typing effect when page loads
window.addEventListener('load', typeEffect);

// ============================================
// DARK MODE / LIGHT MODE TOGGLE (Optional)
// ============================================

function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark' || 
                 (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.body.setAttribute('data-theme', 'dark');
  }
}

function showContactSuccess() {
  const params = new URLSearchParams(window.location.search);
  const success = params.get('success');
  const successBox = document.querySelector('.contact-success-message');

  if (!successBox) return;

  if (success === 'true') {
    successBox.classList.remove('hidden');
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

initTheme();
showContactSuccess();

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
setTimeout(() => {
  document.body.style.opacity = '1';
}, 100);