import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/exle-html/' : '/',
});
