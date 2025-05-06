import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: "./src/js/atomic.js",
            name: "NumaxLab Atomic",
            fileName: "main",
            formats: ["es"],
        }
    },
});
