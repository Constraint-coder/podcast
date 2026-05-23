import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import path from 'path';

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
   alias: {
      '@': path.resolve( './src'),
    },
  session: {
    driver: 'fs',
    options: {
      cookie: {
        maxAge: 30 * 60, // 30 minutos en segundos
        httpOnly: true,
        secure: false, // Cambia a true en producción con HTTPS
        sameSite: 'lax'
      }
    }
  },

});
