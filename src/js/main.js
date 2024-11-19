const renderComponent = async (selector, path) => {
  const response = await fetch(path).catch((error) => console.error(`Error loading ${path}:`, error));
  if (response) document.querySelector(selector).innerHTML = await response.text();
};

const routes = {
  '/': '/components/Landing.html',
  '/loans': '/components/Loans.html',
};

const loadPage = () => {
  const hash = window.location.hash.slice(1) || '/';
  renderComponent('#content', routes[hash] || '/components/404.html');
};

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#navbar', '/components/Navbar.html');
  loadPage();
  renderComponent('#footer', '/components/Footer.html');
});

window.addEventListener('hashchange', loadPage);

if (import.meta.hot) import.meta.hot.accept(() => location.reload());

document.addEventListener('click', (e) => {
  if (e.target.id === 'theme-toggle') {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    e.target.textContent = isDark ? '☀️' : '🌙';
  }
});
