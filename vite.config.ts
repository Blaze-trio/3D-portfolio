import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/3D-portfolio/',
  css: {
    postcss: {},
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.mp3'],
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', '@react-spring/three'],
    force: true
  },
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
