// Todos los textos de la web, en inglés y en español. El español se escribe nativo, no traducido palabra por palabra.

export type Idioma = "en" | "es";
export const idiomas: Idioma[] = ["en", "es"];

/** Ruta de una página en el idioma pedido. `ruta` va sin prefijo de idioma, empezando y terminando en «/». */
export function enIdioma(idioma: Idioma, ruta = "/"): string {
  return idioma === "en" ? ruta : `/es${ruta}`;
}

export const enlaces = {
  github: "https://github.com/colia-labs",
  huggingface: "https://huggingface.co/colia-labs",
  x: "https://x.com/colialabs",
  linkedin: "https://www.linkedin.com/company/colia-labs",
  discord: "https://discord.gg/aMwvMETXAf",
  discussions: "https://github.com/orgs/colia-labs/discussions",
  guia: "https://github.com/colia-labs/.github/blob/main/CONTRIBUTING.md",
  normas: "https://github.com/colia-labs/.github/blob/main/CODE_OF_CONDUCT.md",
  correo: "hola@colia.org",
};

export const textos = {
  en: {
    descripcion: "ColIA is an open-source AI lab and community from Colombia. We learn by building, and show that Latin America creates too.",
    menu: { proyectos: "Work", principios: "How we work", unete: "Join", blog: "Blog" },
    otroIdioma: "Español",
    portada: {
      titulo: "An open-source AI lab and community from Colombia.",
      frase: "We learn by building, and show that Latin America creates too.",
      boton: "Join the community",
      github: "See our work on GitHub",
      alt: "Illustration of the Colombian coffee mountains with wax palms and a snow-capped volcano",
    },
    proyectos: {
      titulo: "What we make",
      pronto: "Coming soon",
      local: "An app built on llama.cpp that runs AI models on your computer with recipes: models with settings measured on real hardware. One click measures your computer and shares the results, so anyone can help improve the recipes.",
      sibundoy: "A model that translates English into Spanish on your own computer, so your texts never leave it. Trained on text pairs from open sources.",
      origen: "Named in honor of the Sibundoy Valley, in Putumayo, Colombia.",
    },
    principios: {
      titulo: "How we work",
      lista: [
        ["Open.", "Code, models and recipes are published under open licenses."],
        ["Measured.", "Every claim comes with numbers, measured on real hardware: from a laptop without a graphics card to a workstation with several."],
        ["Bilingual.", "Everything ships in English and Spanish. The Spanish is native, not a translation."],
        ["Local.", "What we make runs on your computer, without depending on a cloud."],
        ["Community.", "Anyone who wants to learn, explore or contribute is welcome, whatever they know."],
        ["Places.", "Our models are named after places in Colombia that deserve to be better known: beautiful, diverse and full of talent."],
      ],
    },
    comunidad: {
      titulo: "Join us",
      texto: "You don't need to be an expert. ColIA is starting with one person learning in the open. If you want to learn, find people to build with, or make small things that help, there's room for you.",
      discussions: "Talk to us in GitHub Discussions",
      guia: "Read the contributing guide",
      normas: "Read the code of conduct",
      normasNota: "— it's short",
      discord: "Chat with us on Discord",
      alt: "Illustration of Colombian plants and birds: frailejones, an orchid, a hummingbird, a condor, coffee and heliconias",
    },
    contacto: { titulo: "Contact", antes: "Write to", despues: "We read every message." },
    pie: "ColIA · Colombia",
    blog: {
      titulo: "Blog",
      frase: "News from the lab: our models, our apps and what we learn along the way.",
      vacio: "The first post is on its way.",
      volver: "← Blog",
      lectura: "min read",
      copiar: "Copy",
      copiado: "Copied",
      cierreTitulo: "Tried it on your computer?",
      cierreTexto: "Share your results, your translations or your questions. Your numbers help other people choose.",
      cierreEnlace: "Talk to us in GitHub Discussions",
      sumarseTitulo: "Want to join?",
      sumarseTexto: "Ask a question, share an idea or tell us what you're building. You don't need to be an expert.",
      etiquetas: { modelo: "Model", app: "App", laboratorio: "Lab" },
    },
    noExiste: {
      titulo: "This page doesn't exist.",
      texto: "It may have moved, or the address has a typo.",
      enlace: "Go to the home page",
    },
  },
  es: {
    descripcion: "ColIA es un laboratorio y una comunidad colombiana de IA abierta, donde se aprende construyendo y se demuestra que en Latinoamérica también se crea.",
    menu: { proyectos: "Proyectos", principios: "Cómo trabajamos", unete: "Únete", blog: "Blog" },
    otroIdioma: "English",
    portada: {
      titulo: "Un laboratorio y una comunidad colombiana de IA abierta.",
      frase: "Aprendemos construyendo y demostramos que en Latinoamérica también se crea.",
      boton: "Únete a la comunidad",
      github: "Mira nuestro trabajo en GitHub",
      alt: "Ilustración del Eje Cafetero, con palmas de cera y un nevado al fondo",
    },
    proyectos: {
      titulo: "Lo que hacemos",
      pronto: "Próximamente",
      local: "Una app sobre llama.cpp que pone modelos de IA en tu equipo con recetas: modelos con ajustes medidos en equipos reales. Con un clic mides tu equipo y compartes los resultados, para que cualquiera ayude a mejorar las recetas.",
      sibundoy: "Un modelo que traduce de inglés a español en tu propio equipo, así que tus textos nunca salen de él. Entrenado con pares de textos de fuentes abiertas.",
      origen: "Lleva el nombre en honor al valle de Sibundoy, en el Putumayo.",
    },
    principios: {
      titulo: "Cómo trabajamos",
      lista: [
        ["Abierto.", "El código, los modelos y las recetas se publican con licencia abierta."],
        ["Medido.", "Cada afirmación lleva cifras, medidas en equipos reales: desde un portátil sin tarjeta gráfica hasta una estación de trabajo con varias."],
        ["Bilingüe.", "Todo sale en inglés y en español. El español es nativo, no una traducción."],
        ["Local.", "Lo que hacemos funciona en tu equipo, sin depender de una nube."],
        ["Comunidad.", "Quien quiera aprender, explorar o aportar es bienvenido, sepa mucho o poco."],
        ["Lugares.", "Nuestros modelos llevan el nombre de lugares de Colombia que merecen ser más conocidos: hermosos, diversos y llenos de talento."],
      ],
    },
    comunidad: {
      titulo: "Únete",
      texto: "No hace falta saberlo todo. ColIA empieza con una persona aprendiendo en público. Si quieres aprender, encontrar con quién construir o hacer cosas pequeñas que aporten, aquí hay sitio para ti.",
      discussions: "Habla con nosotros en GitHub Discussions",
      guia: "Lee la guía para aportar",
      normas: "Lee las normas de convivencia",
      normasNota: "— son cortas",
      discord: "Charla con nosotros en Discord",
      alt: "Ilustración de plantas y aves de Colombia: frailejones, una orquídea, un colibrí, un cóndor, café y heliconias",
    },
    contacto: { titulo: "Contacto", antes: "Escríbenos a", despues: "Leemos todos los mensajes." },
    pie: "ColIA · Colombia",
    blog: {
      titulo: "Blog",
      frase: "Noticias del laboratorio: nuestros modelos, nuestras apps y lo que aprendemos por el camino.",
      vacio: "La primera entrada está en camino.",
      volver: "← Blog",
      lectura: "min de lectura",
      copiar: "Copiar",
      copiado: "Copiado",
      cierreTitulo: "¿Lo probaste en tu equipo?",
      cierreTexto: "Comparte tus resultados, tus traducciones o tus preguntas. Tus cifras ayudan a otras personas a elegir.",
      cierreEnlace: "Habla con nosotros en GitHub Discussions",
      sumarseTitulo: "¿Quieres sumarte?",
      sumarseTexto: "Pregunta, propón una idea o cuéntanos qué estás construyendo. No hace falta ser experto.",
      etiquetas: { modelo: "Modelo", app: "App", laboratorio: "Laboratorio" },
    },
    noExiste: {
      titulo: "Esta página no existe.",
      texto: "Puede que se haya movido o que la dirección tenga un error.",
      enlace: "Ir a la portada",
    },
  },
} satisfies Record<Idioma, unknown>;
