import { renderLoansPage } from './LoansRenderer.js';
import { renderRepaymentsPage } from './RepaymentsRenderer.js';

const renderComponent = async (selector, path) => {
  const response = await fetch(path).catch((error) => console.error(`Error loading ${path}:`, error));
  if (response) document.querySelector(selector).innerHTML = await response.text();
};

const routes = {
  '/': '/components/Landing.html',
  '/loans': '/components/Loans.html',
  '/repayments': '/components/Repayments.html',
};

const loadPage = async () => {
  const hash = window.location.hash.slice(1) || '/';
  const path = routes[hash] || '/components/404.html';
  await renderComponent('#content', path);

  if (hash === '/loans') renderLoansPage();
  if (hash === '/repayments') renderRepaymentsPage();
};

const setupThemeToggle = () => {
  const body = document.body;
  const themeToggleButton = document.querySelector('#theme-toggle');

  const applyTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    if (themeToggleButton) themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  };

  const currentTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(currentTheme);

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await renderComponent('#navbar', '/components/Navbar.html');
  await loadPage();
  await renderComponent('#footer', '/components/Footer.html');
  setupThemeToggle();
});

window.addEventListener('hashchange', loadPage);

if (import.meta.hot) import.meta.hot.accept(() => location.reload());
