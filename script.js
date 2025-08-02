// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const sunIcon = toggleBtn.querySelector('.sun');
const moonIcon = toggleBtn.querySelector('.moon');

function updateToggleIcon() {
  if (document.body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  }
}



toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleIcon();

  // Save theme preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
updateToggleIcon();

// Resume Modal Logic
const resumeModal = document.getElementById('resumeModal');
const openModalBtn = document.querySelector('.btn-resume');
const closeModalBtn = resumeModal.querySelector('.close');

openModalBtn.addEventListener('click', () => {
  resumeModal.style.display = 'flex';
  resumeModal.setAttribute('aria-hidden', 'false');
});

closeModalBtn.addEventListener('click', () => {
  resumeModal.style.display = 'none';
  resumeModal.setAttribute('aria-hidden', 'true');
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
    resumeModal.setAttribute('aria-hidden', 'true');
  }
});

// Scroll to Top Button Logic
const scrollBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});


VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});


const texts = ["MERN Stack Developer "];
let count = 0, index = 0, currentText = '', letter = '';
function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else setTimeout(type, 200);
}
type();


      const body = document.querySelector('body')
      const button = document.querySelector('.switch');

      button.addEventListener('change', () => {
        if(button.checked) {
          body.classList.add('dark-mode')
        } else {
          body.classList.remove('dark-mode')
        }
      });
    



      