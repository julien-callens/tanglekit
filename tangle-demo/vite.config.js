import { defineConfig } from 'vite';
import tanglePlugin from "tanglekit";

export default defineConfig({
    plugins: [tanglePlugin()],
});
