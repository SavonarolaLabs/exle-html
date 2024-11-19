import { renderLoansPage } from './LoansRenderer.js';

const renderComponent = async (selector, path) => {
  const response = await fetch(path).catch((error) => console.error(`Error loading ${path}:`, error));
  if (response) document.querySelector(selector).innerHTML = await response.text();
};

const routes = {
  '/': '/components/Landing.html',
  '/loans': '/components/Loans.html',
};

const loadPage = async () => {
  const hash = window.location.hash.slice(1) || '/';
  const path = routes[hash] || '/components/404.html';
  await renderComponent('#content', path);

  if (hash === '/loans') renderLoansPage();
};

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#navbar', '/components/Navbar.html');
  loadPage();
  renderComponent('#footer', '/components/Footer.html');
});

window.addEventListener('hashchange', loadPage);

if (import.meta.hot) import.meta.hot.accept(() => location.reload());
