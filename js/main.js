// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});

// WhatsApp form
document.getElementById('whatsappForm').addEventListener('submit', e => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  const [name, number, message] = [...inputs].map(i => i.value);

  const text = `Hello Irya Pharmaceuticals,%0AName: ${name}%0AContact: ${number}%0AQuery: ${message}`;
  window.open(`https://wa.me/918097336135?text=${text}`, '_blank');
});
