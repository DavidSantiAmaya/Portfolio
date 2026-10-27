import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', 'VITE_');
    return {
        base: env.VITE_BASE_PATH || '/',
        // Only model slots are published. Legacy assets remain outside the production
        // public directory while their removal is coordinated with the asset owner.
        publicDir: 'public/models',
        plugins: [react()]
    };
});
