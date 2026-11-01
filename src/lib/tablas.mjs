// Envuelve cada tabla en un div.tabla. En móvil, el div se desplaza de lado y la página no se ensancha.
// La marca dataEnvuelta evita volver a envolver la misma tabla si el procesador la visita otra vez.
export default function tablas() {
  return {
    name: "tablas",
    element: {
      filter: ["table"],
      visit(nodo) {
        const p = nodo.properties ?? {};
        if (p.dataEnvuelta !== undefined) return;
        return {
          type: "element",
          tagName: "div",
          properties: { className: ["tabla"] },
          children: [{ ...nodo, properties: { ...p, dataEnvuelta: "" } }],
        };
      },
    },
  };
}
