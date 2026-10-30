// Función de Cloudflare Pages: manda a cada persona a su idioma cuando entra por la portada.
// public/_routes.json limita esta función a «/», así que no se ejecuta en ninguna otra página.
//
// 1. Si eligió idioma a mano, la cookie «idioma» manda.
// 2. Si no, se mira el idioma que pide su navegador (cabecera Accept-Language).
// 3. Si prefiere español, va a /es/. Si no, se queda en la portada en inglés.

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname !== "/") return context.next();

  const idioma = elegido(context.request.headers.get("Cookie")) ?? preferido(context.request.headers.get("Accept-Language"));
  if (idioma === "es") {
    return new Response(null, {
      status: 302,
      headers: { Location: "/es/", Vary: "Accept-Language, Cookie", "Cache-Control": "private, no-store" },
    });
  }

  const respuesta = await context.next();
  const copia = new Response(respuesta.body, respuesta);
  copia.headers.append("Vary", "Accept-Language, Cookie");
  return copia;
}

/** Idioma guardado por el selector de la web, o null. */
export function elegido(cookie) {
  const m = /(?:^|;\s*)idioma=(en|es)(?:;|$)/.exec(cookie ?? "");
  return m ? m[1] : null;
}

/** El primero de «en» o «es» en las preferencias del navegador, por orden de peso. Si no aparece ninguno, inglés. */
export function preferido(cabecera) {
  const opciones = (cabecera ?? "")
    .split(",")
    .map((parte, orden) => {
      const [etiqueta, ...params] = parte.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { base: etiqueta.split("-")[0], peso: q ? Number(q.slice(2)) : 1, orden };
    })
    .filter((o) => o.base && !Number.isNaN(o.peso) && o.peso > 0)
    .sort((a, b) => b.peso - a.peso || a.orden - b.orden);
  const primero = opciones.find((o) => o.base === "en" || o.base === "es");
  return primero ? primero.base : "en";
}
