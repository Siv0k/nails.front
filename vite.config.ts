import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
      icons: path.resolve(__dirname, 'src/icons'),
      img: path.resolve(__dirname, 'src/img'),
    }
  }
})
