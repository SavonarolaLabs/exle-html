// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set 'src' as the root directory
  base: '/exle-html/', // Must match your GitHub repository name
  build: {
    outDir: '../dist', // Output build files to 'dist' at the project root
    emptyOutDir: true,
  },
});
