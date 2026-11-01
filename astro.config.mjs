// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import notasAlPie from "./src/lib/notas-al-pie.mjs";
import temaCodigo from "./src/lib/tema-codigo.mjs";
import tablas from "./src/lib/tablas.mjs";

export default defineConfig({
  site: "https://colia.org",
  // Cada página sale como carpeta con index.html: /blog/ en vez de /blog.html.
  build: { format: "directory" },
  trailingSlash: "always",
  devToolbar: { enabled: false },
  markdown: {
    // El tema oscuro por defecto dejaba el código casi ilegible sobre el fondo claro.
    shikiConfig: { theme: temaCodigo },
    processor: satteri({ hastPlugins: [notasAlPie, tablas] }),
  },
});
