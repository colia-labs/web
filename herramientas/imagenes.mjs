#!/usr/bin/env node
// Genera las imágenes fijas de public/: la de compartir enlaces, el favicon en PNG y el icono para iPhone.
// Uso: node herramientas/imagenes.mjs   (necesita playwright y un Chromium; ver README)
//   CHROMIUM apunta al navegador; PLAYWRIGHT, a la carpeta de módulos donde está playwright.
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = new URL("../", import.meta.url);
const modulos = process.env.PLAYWRIGHT ?? execSync("npm root -g").toString().trim();
const { chromium } = createRequire(modulos + "/")("playwright");
const navegador = await chromium.launch({ executablePath: process.env.CHROMIUM, headless: true });

async function capturar(html, ancho, alto, salida, escala = 1) {
  const pagina = await navegador.newPage({ viewport: { width: ancho, height: alto }, deviceScaleFactor: escala });
  if (html.startsWith("file:")) await pagina.goto(html, { waitUntil: "networkidle" });
  else await pagina.setContent(html, { waitUntil: "networkidle" });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.screenshot({ path: fileURLToPath(new URL(salida, raiz)), omitBackground: true });
  await pagina.close();
  console.log(`Generada: ${salida}`);
}

// El SVG va dentro de la página: Chromium no carga archivos locales desde una página en blanco.
const svg = (archivo, lado) => readFileSync(fileURLToPath(new URL(archivo, raiz)), "utf8").replace('width="64" height="64"', `width="${lado}" height="${lado}"`);
const sola = (contenido) => `<html><body style="margin:0;background:transparent">${contenido}</body></html>`;

try {
  await capturar(pathToFileURL(fileURLToPath(new URL("herramientas/compartir.html", raiz))).href, 1200, 630, "public/og.png");
  await capturar(sola(svg("public/favicon.svg", 32)), 32, 32, "public/favicon-32.png");
  // iOS redondea las esquinas por su cuenta: el icono va cuadrado, como avatar.svg de la marca.
  await capturar(sola(svg("herramientas/avatar.svg", 180).replace("<svg ", '<svg shape-rendering="crispEdges" ')), 180, 180, "public/apple-touch-icon.png");
} finally {
  await navegador.close();
}
