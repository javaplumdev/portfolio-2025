import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dynamicImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 8080,
  },
});
