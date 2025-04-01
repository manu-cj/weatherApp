import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',  // Définit l'environnement jsdom pour simuler le DOM
  },
});
