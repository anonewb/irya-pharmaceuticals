// Theme toggle
const html = document.documentElement;
const themeToggles = document.querySelectorAll('.theme-toggle');

function updateThemeIcons(isDark) {
  const emoji = isDark ? '☀️' : '🌙';
  themeToggles.forEach(btn => {
    const icon = btn.querySelector('.theme-icon');
    if (icon) icon.textContent = emoji;
    else btn.textContent = emoji;
  });
}

if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  updateThemeIcons(true);
}

themeToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    updateThemeIcons(isDark);
  });
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// WhatsApp form
document.getElementById('whatsappForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const number = form.phone.value;
  const message = form.message.value;

  const text = encodeURIComponent(`Hello Irya Pharmaceuticals,\nName: ${name}\nContact: ${number}\nQuery: ${message}`);
  window.open(`https://wa.me/919156444882?text=${text}`, '_blank');
});
