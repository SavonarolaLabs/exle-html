const renderComponent = async (selector, path) => {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${path}:`, error);
  }
};

const routes = {
  '/': '/components/Landing.html',
  '/loans': '/components/Loans.html',
};

const loadPage = async () => {
  const hash = window.location.hash.replace('#', '') || '/';
  const pagePath = routes[hash] || '/components/404.html';
  await renderComponent('#content', pagePath);
};

const loadComponents = async () => {
  await renderComponent('#navbar', '/components/Navbar.html');
  await loadPage(); // Load the page based on the route
  await renderComponent('#footer', '/components/Footer.html');
};

document.addEventListener('DOMContentLoaded', loadComponents);

// Listen for hash changes to load the corresponding page
window.addEventListener('hashchange', loadPage);

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept(['/components/Loans.html', '/components/Navbar.html', '/components/Landing.html', '/components/Footer.html'], () => {
    loadComponents();
  });
}

// Theme toggle functionality
document.addEventListener('click', (event) => {
  if (event.target.id === 'theme-toggle') {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    event.target.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  }
});
