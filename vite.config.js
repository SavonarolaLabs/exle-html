import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Use 'src' as the root directory
  base: '/exle-html/', // This must match your repository name
  build: {
    outDir: '../dist', // Output the build files to '../dist' relative to 'src'
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
