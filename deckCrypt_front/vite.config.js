import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr';
// const {resolve} = require('path');

export default defineConfig({
  resolve: {    
    // "dev:front": "NODE_ENV=development env-cmd -f .env.dev.front vite",
    // "dev:back": "NODE_ENV=development env-cmd -f .env.dev.back vite",
    // "build": "env-cmd -f .env.prod vite build",
    extensions: ['.js', '.ts', '.json', '.jsx', '.scss', '.svg'],
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@img': '/src/assets/img',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
      '@router': '/src/router',
      '@styles': '/src/styles',
      '@views': '/src/views',
    },
  },
  plugins: [
    react(),
    // svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
});
