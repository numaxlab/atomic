import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: "./src/css/atomic.css",
            name: "NumaxLab Atomic",
            fileName: "atomic",
            formats: ["es"],
        },
        cssCodeSplit: true
    },
});
