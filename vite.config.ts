import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: 'dev.admin.santanupradhan.in',
    port: 5173,
  }
});
