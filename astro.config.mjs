import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jazgamarra.github.io',
  base: '/class-of-2026',
  output: 'static',
  build: {
    format: 'directory',
  },
});
