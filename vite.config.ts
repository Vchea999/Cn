import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// A1
// vite.config.js
export default defineConfig({
  base: '/Cn/', // Adjust this based on your GitHub repository name
  plugins: [vue()],
});
