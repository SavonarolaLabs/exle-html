import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src',
  base: process.env.NODE_ENV === 'production' ? '/exle-html/' : '/',
});
