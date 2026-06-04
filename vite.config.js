import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/GiftedByHands/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url)
    }
  }
});
