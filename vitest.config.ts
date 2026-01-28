import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => ({
    plugins: [angular()],
    test: {
        globals: true,
        setupFiles: ['src/test-setup.ts'],
        environment: 'happy-dom',
        include: ['src/**/*.spec.ts'],
        reporters: ['default']
    }
}));
