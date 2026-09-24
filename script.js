// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when skills section enters
      if (entry.target.classList.contains('skills')) {
        entry.target.querySelectorAll('.fill').forEach((bar, i) => {
          setTimeout(() => bar.classList.add('animate'), i * 120);
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// ===== TYPEWRITER EFFECT =====
const roleText = "And I’m a Frontend & Backend Developer";
const roleEl = document.querySelector('.hero-role');
let idx = 0;

function typeWriter() {
  if (idx === 0) roleEl.textContent = '';
  if (idx < roleText.length) {
    roleEl.textContent += roleText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 80);
  }
}
setTimeout(typeWriter, 600);

// ===== SMOOTH SCROLL FOR NAV LINKS =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== THEME TOGGLE (simple demo) =====
document.querySelector('.theme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  alert('Theme toggle (demo) - bisa dikembangkan lebih lanjut.');
});

// ===== BACKGROUND STAYS FIXED =====
// Background is intentionally fixed and should not move with scroll.