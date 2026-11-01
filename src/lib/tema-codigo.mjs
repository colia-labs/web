// Tema de Shiki con la paleta de ColIA (DESIGN.md), sobre el fondo --gris-suave. Todos los colores pasan 4,5:1 de contraste.
export default {
  name: "colia",
  type: "light",
  colors: { "editor.background": "#EFEFEF", "editor.foreground": "#121212" },
  tokenColors: [
    { settings: { foreground: "#121212" } },
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#666666", fontStyle: "italic" } },
    { scope: ["entity.name.command", "entity.name.function", "support.function", "keyword", "storage"], settings: { foreground: "#2F5D3A", fontStyle: "bold" } },
    { scope: ["constant.other.option", "variable.parameter", "entity.other.attribute-name"], settings: { foreground: "#8A5A0A" } },
    { scope: ["constant.numeric", "constant.language"], settings: { foreground: "#8A5A0A" } },
    { scope: ["string", "markup.inline.raw"], settings: { foreground: "#2F5D3A" } },
    { scope: ["constant.character.escape", "keyword.operator", "punctuation"], settings: { foreground: "#666666" } },
  ],
};
