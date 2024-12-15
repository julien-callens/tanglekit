import { defineConfig } from 'vite';
import tanglePlugin from "tangle";

export default defineConfig({
    plugins: [tanglePlugin()],
});
