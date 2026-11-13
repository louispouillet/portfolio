import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { sitePlugin } from "./vite/sitePlugin"

export default defineConfig({
  plugins: [react(), tailwindcss(), sitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})