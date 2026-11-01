// Sätteri titula las notas al pie «Footnotes», en inglés y con una clase sr-only que este sitio no define.
// Este plugin traduce el título y los enlaces de vuelta según la carpeta de idioma de la entrada.
const textos = {
  es: { titulo: "Notas", volver: (n) => `Volver a la referencia ${n}` },
  en: { titulo: "Notes", volver: (n) => `Back to reference ${n}` },
};

export default function notasAlPie({ fileURL }) {
  const t = textos[/\/blog\/en\//.test(fileURL?.pathname ?? "") ? "en" : "es"];
  return {
    name: "notas-al-pie",
    element: {
      filter: ["h2", "a"],
      visit(nodo) {
        const p = nodo.properties ?? {};
        if (nodo.tagName === "h2" && p.id === "footnote-label") {
          return { ...nodo, properties: { ...p, className: ["notas-titulo"] }, children: [{ type: "text", value: t.titulo }] };
        }
        if (nodo.tagName === "a" && p.dataFootnoteBackref !== undefined) {
          const n = String(p.href ?? "").replace(/^#user-content-fnref-/, "");
          return { ...nodo, properties: { ...p, ariaLabel: t.volver(n) } };
        }
      },
    },
  };
}
