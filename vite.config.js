import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    // Only model slots are published. Legacy assets remain outside the production
    // public directory while their removal is coordinated with the asset owner.
    publicDir: 'public/models',
    plugins: [react()]
});
