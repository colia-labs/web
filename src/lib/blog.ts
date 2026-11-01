import { getCollection, type CollectionEntry } from "astro:content";
import type { Idioma } from "../i18n/textos";

export type Entrada = CollectionEntry<"blog">;

/** Nombre de la entrada sin el idioma: «en/hola-somos-colia» → «hola-somos-colia». */
export const nombreEntrada = (e: Entrada) => e.id.split("/").slice(1).join("/");

/** Entradas de un idioma, de la más nueva a la más vieja. Los borradores solo se ven con `astro dev`. */
export async function entradas(idioma: Idioma): Promise<Entrada[]> {
  const lista = await getCollection("blog", (e) => e.id.startsWith(`${idioma}/`) && (import.meta.env.DEV || !e.data.borrador));
  return lista.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

/** dd/mm/aaaa, para el móvil, donde la fecha larga no cabe junto a la etiqueta. */
export function fechaCorta(fecha: Date): string {
  const [a, m, d] = fecha.toISOString().slice(0, 10).split("-");
  return `${d}/${m}/${a}`;
}

export function fechaLarga(fecha: Date, idioma: Idioma): string {
  return fecha.toLocaleDateString(idioma === "en" ? "en-US" : "es-CO", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/** Minutos de lectura, a 220 palabras por minuto. */
export function minutosLectura(texto = ""): number {
  return Math.max(1, Math.round(texto.split(/\s+/).filter(Boolean).length / 220));
}
