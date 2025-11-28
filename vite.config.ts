import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Force all 'three' imports to use the same instance from node_modules
      three: resolve(__dirname, 'node_modules/three')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});