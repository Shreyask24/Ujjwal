import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // Use 'brotliCompress' for Brotli
      threshold: 10240, // Compress files larger than 10KB
      deleteOriginFile: false, // Set true to remove original files after compression
    }),
  ],
})
