export const setupNavbar = async (BASE_DIR) => {
  // Render the Navbar
  const renderNavbar = async () => {
    const navbarContainer = document.querySelector('#navbar');
    if (navbarContainer) {
      const fullPath = `${BASE_DIR}components/navbar/Navbar.html`;
      const response = await fetch(fullPath).catch((error) => console.error(`Error loading ${fullPath}:`, error));
      if (response) {
        navbarContainer.innerHTML = await response.text();
        setupThemeToggle(); // Ensure this is called after the navbar is rendered
      }
    }
  };

  // Setup Theme Toggle
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

  // Initialize Navbar
  await renderNavbar();
  // Removed setupThemeToggle() from here, now called after rendering navbar
};
