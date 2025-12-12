import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: "./src/js/atomic.ts",
            name: "NumaxLab Atomic",
            fileName: "main",
            formats: ["es"],
        },
        minify: 'terser',
        sourcemap: true,
    },
});
