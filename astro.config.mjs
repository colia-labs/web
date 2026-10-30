// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://colia.org",
  // Cada página sale como carpeta con index.html: /blog/ en vez de /blog.html.
  build: { format: "directory" },
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
