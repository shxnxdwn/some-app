import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-oxc';
import path from 'path';

export default defineConfig({
  base: '/some-app/src',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
