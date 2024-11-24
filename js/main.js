import { setupNavbar } from '../components/navbar/Navbar.js';
import { renderLoansPage } from './LoansRenderer.js';
import { renderRepaymentsPage } from './RepaymentsRenderer.js';

// Get the base directory dynamically
const BASE_DIR = document.querySelector('base').getAttribute('href') || '/';

const renderComponent = async (selector, path) => {
  const fullPath = `${BASE_DIR}${path.replace(/^\//, '')}`;
  const response = await fetch(fullPath).catch((error) => console.error(`Error loading ${fullPath}:`, error));
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

document.addEventListener('DOMContentLoaded', async () => {
  await setupNavbar(BASE_DIR); // Setup the navbar
  await loadPage();
  await renderComponent('#footer', `${BASE_DIR}components/Footer.html`);
});

window.addEventListener('hashchange', loadPage);

if (import.meta.hot) import.meta.hot.accept(() => location.reload());
