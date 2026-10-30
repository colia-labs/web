// Pruebas de la función de idioma de Cloudflare. Uso: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { onRequest, elegido, preferido } from "../functions/_middleware.js";

test("preferido elige por peso y orden", () => {
  assert.equal(preferido("es-CO,es;q=0.9,en;q=0.8"), "es");
  assert.equal(preferido("en-US,en;q=0.9,es;q=0.8"), "en");
  assert.equal(preferido("fr-FR,fr;q=0.9,es;q=0.8,en;q=0.7"), "es");
  assert.equal(preferido("en;q=0.5,es;q=0.9"), "es");
  assert.equal(preferido("de-DE,fr;q=0.8"), "en");
  assert.equal(preferido(""), "en");
  assert.equal(preferido(null), "en");
  assert.equal(preferido("es;q=0"), "en");
});

test("elegido lee la cookie del selector", () => {
  assert.equal(elegido("idioma=es"), "es");
  assert.equal(elegido("otra=1; idioma=en; x=2"), "en");
  assert.equal(elegido("idioma=fr"), null);
  assert.equal(elegido("miidioma=es"), null);
  assert.equal(elegido(null), null);
});

const contexto = (ruta, cabeceras = {}) => ({
  request: new Request(`https://colia.org${ruta}`, { headers: cabeceras }),
  next: async () => new Response("portada en inglés", { status: 200 }),
});

test("la portada manda al español a quien lo prefiere", async () => {
  const r = await onRequest(contexto("/", { "Accept-Language": "es-CO,es;q=0.9" }));
  assert.equal(r.status, 302);
  assert.equal(r.headers.get("Location"), "/es/");
});

test("la cookie gana al navegador", async () => {
  const r = await onRequest(contexto("/", { "Accept-Language": "es-CO", Cookie: "idioma=en" }));
  assert.equal(r.status, 200);
  assert.match(r.headers.get("Vary"), /Accept-Language/);
});

test("fuera de la portada no hace nada", async () => {
  const r = await onRequest(contexto("/blog/", { "Accept-Language": "es" }));
  assert.equal(r.status, 200);
});
