import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Cada entrada vive en src/content/blog/<idioma>/<nombre>.md. La misma entrada en los dos idiomas comparte <nombre>.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      // Nombre de modelo o producto dentro del título; se pinta sin partir y, si hay bandera, con su línea debajo.
      nombre: z.string().optional(),
      entradilla: z.string(),
      fecha: z.coerce.date(),
      autor: z.string().default("Rubén Salas"),
      etiqueta: z.enum(["modelo", "app", "laboratorio"]),
      portada: image().optional(),
      portadaAlt: z.string().optional(),
      portadaPie: z.string().optional(),
      // Colores de la bandera del lugar que da nombre al modelo, en franjas iguales de izquierda a derecha.
      banderaLugar: z.array(z.string()).optional(),
      borrador: z.boolean().default(false),
    }),
});

export const collections = { blog };
