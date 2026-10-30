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
      local: "An app that runs AI models on your computer. No account, no cloud, no terminal.",
      sibundoy: "A small model that translates English into Spanish.",
      origen: "It's named after Sibundoy, a town in the Sibundoy Valley, Putumayo, where ColIA's founder was born. Our models take the names of places in Colombia.",
    },
    principios: {
      titulo: "How we work",
      lista: [
        ["Open.", "Code, models and recipes are published under open licenses."],
        ["Measured.", "Every claim comes with numbers, measured on modest hardware."],
        ["Bilingual.", "Everything ships in English and Spanish. The Spanish is native, not a translation."],
        ["Local.", "What we make runs on your computer, without depending on a cloud."],
        ["Community.", "Anyone who wants to learn, explore or contribute is welcome, whatever they know."],
      ],
    },
    comunidad: {
      titulo: "Join us",
      texto: "You don't need to be an expert. ColIA started as one person learning in the open. If you want to learn, find people to build with, or make small things that help, there's room for you.",
      discussions: "Talk to us in GitHub Discussions",
      guia: "Read the contributing guide",
      normas: "Read the code of conduct",
      normasNota: "— it's short",
      discord: "Discord — coming soon",
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
      cierreTitulo: "Tried it on your computer?",
      cierreTexto: "Share your results, your translations or your questions. Your numbers help other people choose.",
      cierreEnlace: "Talk to us in GitHub Discussions",
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
      local: "Una app que pone modelos de IA en tu equipo. Sin cuenta, sin nube y sin terminal.",
      sibundoy: "Un modelo pequeño que traduce de inglés a español.",
      origen: "Lleva el nombre de Sibundoy, un pueblo del valle de Sibundoy, en el Putumayo, donde nació quien fundó ColIA. Nuestros modelos llevan nombres de lugares de Colombia.",
    },
    principios: {
      titulo: "Cómo trabajamos",
      lista: [
        ["Abierto.", "El código, los modelos y las recetas se publican con licencia abierta."],
        ["Medido.", "Cada afirmación lleva cifras, medidas en hardware modesto."],
        ["Bilingüe.", "Todo sale en inglés y en español. El español es nativo, no una traducción."],
        ["Local.", "Lo que hacemos funciona en tu equipo, sin depender de una nube."],
        ["Comunidad.", "Quien quiera aprender, explorar o aportar es bienvenido, sepa mucho o poco."],
      ],
    },
    comunidad: {
      titulo: "Únete",
      texto: "No hace falta saberlo todo. ColIA empezó como una persona aprendiendo en público. Si quieres aprender, encontrar con quién construir o hacer cosas pequeñas que aporten, aquí hay sitio para ti.",
      discussions: "Habla con nosotros en GitHub Discussions",
      guia: "Lee la guía para aportar",
      normas: "Lee las normas de convivencia",
      normasNota: "— son cortas",
      discord: "Discord — próximamente",
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
      cierreTitulo: "¿Lo probaste en tu equipo?",
      cierreTexto: "Comparte tus resultados, tus traducciones o tus preguntas. Tus cifras ayudan a otras personas a elegir.",
      cierreEnlace: "Habla con nosotros en GitHub Discussions",
      etiquetas: { modelo: "Modelo", app: "App", laboratorio: "Laboratorio" },
    },
    noExiste: {
      titulo: "Esta página no existe.",
      texto: "Puede que se haya movido o que la dirección tenga un error.",
      enlace: "Ir a la portada",
    },
  },
} satisfies Record<Idioma, unknown>;
