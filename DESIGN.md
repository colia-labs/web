---
version: alpha
name: colia.org
description: Web del laboratorio y la comunidad ColIA. Una sola página, en inglés y en español, con ilustraciones de Colombia, colores de la tierra y el tejido del sombrero vueltiao. Solo modo claro.
---

# colia.org

> **Borrador.** Sale de la maqueta C («Tierra»), elegida por Rubén el 30 de octubre de 2026.

Este archivo manda sobre la interfaz de la web: colores, tipografía, espacios y componentes. La marca (nombre, logo, colores de marca y voz) es de `marca/MARCA.md`, en el repo `colia-labs/colia`. Si los dos dicen cosas distintas, manda `MARCA.md` y hay que avisar a Rubén.

## Overview

colia.org presenta ColIA: qué es, qué hace, cómo trabaja y cómo unirse. Detrás de la IA está Colombia, y la web lo muestra con ilustraciones de su paisaje y su biodiversidad, y con los colores de su tierra.

- **Personalidad:** cálida y sobria. Colombia se ve en las ilustraciones y los colores, no en adornos.
- **Sin «IA slop»:** sin degradados, sin sombras, sin cuadrículas de tarjetas y sin iconos decorativos. La jerarquía la dan la tipografía, el espacio y las líneas finas.
- **Forma:** una sola página larga, con secciones apiladas y la cabecera fija arriba.
- **Tema:** solo claro.
- **Idiomas:** inglés en `/` y español en `/es`, con la misma estructura. El español es nativo, no una traducción.
- **Tecnología:** Astro, publicada en Cloudflare.

## Colors

Tres familias de color, cada una con su papel.

**Base, como ColIA-Local**

- **Tinta (#121212):** texto principal sobre papel y sobre crudo.
- **Papel (#F4F4F4):** fondo de las secciones neutras.
- **Línea (#E0E0E0) y línea marcada (#C9C9C9):** separadores y subrayado de enlaces.
- **Texto secundario (#666666):** descripciones sobre papel. Nunca sobre crudo.

**Tierra colombiana**

- **Crudo (#E8D9B3):** la caña flecha del vueltiao. Cabecera, panel de la portada y sección de comunidad.
- **Verde cafetal (#2F5D3A):** sección de principios y botón principal. También el color de los enlaces sobre crudo.
- **Ocre claro (#E0B35E):** los números de los principios, sobre verde cafetal. Solo en cifras de 24 px o más.
- **Negro vueltiao (#1A1714):** el pie y el tejido de las franjas.
- **Terracota (#B5573A):** solo en las ilustraciones. Sobre crudo no llega al contraste para texto.

**Bandera, solo en dos sitios**

- Dentro del logo.
- En la línea bajo cada proyecto: 4 px de alto, amarillo `#FCD116`, azul `#003893` y rojo `#CE1126` en proporción 2 : 1 : 1. Es la excepción que recoge `MARCA.md`.

**Estado**

- **Ámbar (#C27C0E):** el punto de 6 px de «Coming soon». Es el único color de estado de la web.

### Combinaciones de texto

Todas pasan el 4,5 : 1 de WCAG AA, salvo las marcadas como texto grande, que pasan el 3 : 1.

| Texto | Fondo | Contraste |
|---|---|---|
| Tinta | Papel | 17,0 : 1 |
| Texto secundario | Papel | 5,2 : 1 |
| Tinta | Crudo | 13,4 : 1 |
| Verde cafetal | Crudo | 5,5 : 1 |
| Crudo | Verde cafetal | 5,5 : 1 |
| Blanco | Verde cafetal | 7,6 : 1 |
| Ocre claro, solo texto grande | Verde cafetal | 3,9 : 1 |
| Crudo | Negro vueltiao | 12,8 : 1 |

```yaml
colors:
  ink: "#121212"
  paper: "#F4F4F4"
  outline: "#E0E0E0"
  outline-strong: "#C9C9C9"
  on-paper-variant: "#666666"
  raw: "#E8D9B3"
  coffee-green: "#2F5D3A"
  ochre-light: "#E0B35E"
  vueltiao-black: "#1A1714"
  terracotta: "#B5573A"
  flag-yellow: "#FCD116"
  flag-blue: "#003893"
  flag-red: "#CE1126"
  state-amber: "#C27C0E"
```

## Typography

Las mismas familias que la marca y ColIA-Local, servidas desde la propia web, sin Google Fonts:

- **Atkinson Hyperlegible Next** para todo el texto.
- **Atkinson Hyperlegible Mono** para el correo, los números de los principios y cualquier dato que se copie.

Los tamaños son de web, más grandes que los de la app.

```yaml
typography:
  display:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: clamp(36px, 4.6vw, 54px)
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  lead:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.5
  section-title:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  item-title:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 22px
    fontWeight: 600
  body:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 17px
  small:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 15px
  principle-number:
    fontFamily: Atkinson Hyperlegible Mono
    fontSize: 28px
    lineHeight: 1
```

## Layout

**Ancho.** El contenido mide 1080 px como máximo, con 24 px de margen a los lados. Los párrafos no pasan de 64 caracteres por línea.

**Secciones.** Desde 860 px de ancho, cada sección tiene dos columnas: el título a la izquierda (260 px) y el contenido a la derecha, separados 48 px. El texto arranca en la misma línea base que el título. Por debajo de 860 px, una sola columna.

**De arriba abajo:**

1. **Cabecera fija** de 72 px, en crudo: logo con nombre a la izquierda; menú y selector de idioma a la derecha.
2. **Portada:** la ilustración del Eje Cafetero a todo el ancho, de 420 a 640 px de alto. Encima, abajo a la izquierda, el panel crudo con el título, la frase y las acciones.
3. **What we make:** los proyectos en filas, cada una con la línea de la bandera debajo.
4. **Franja tejida.**
5. **How we work:** los cinco principios sobre verde cafetal.
6. **Join us:** la banda de biodiversidad y debajo el texto sobre crudo.
7. **Contact:** sobre papel.
8. **Franja tejida** en negro vueltiao y **pie**.

**Ritmo vertical.** 72 px arriba y abajo de cada sección (56 px en móvil).

**Móvil (hasta 720 px).** El menú muestra solo el selector de idioma. La ilustración de la portada baja a 300 px y el panel va debajo, a todo el ancho, sin solaparse.

```yaml
spacing:
  content-max-width: 1080px
  gutter: 24px
  header-height: 72px
  section-padding: 72px
  section-padding-mobile: 56px
  section-title-column: 260px
  section-column-gap: 48px
  breakpoint-columns: 860px
  breakpoint-mobile: 720px
  measure: 64ch
```

## Elevation & Depth

Plana. Nada tiene sombra. La profundidad sale de los fondos: papel, crudo, verde cafetal y negro vueltiao. Lo único que se superpone es el panel de la portada sobre la ilustración, con fondo crudo liso.

## Shapes

- **8 px:** botones.
- **10 px:** imágenes dentro del contenido.
- **14 px:** el panel de la portada.

```yaml
rounded:
  button: 8px
  image: 10px
  panel: 14px
```

## Ilustraciones

- **Estilo:** plano, como serigrafía o papel recortado: 6 o 7 capas de color, grano de papel suave, sin degradados ni contornos, con algún detalle escalonado que recuerde al tejido.
- **Colores:** los de la tierra (verdes, ocres, terracota, crudo, negro vueltiao y gris azulado de neblina). Nunca la bandera.
- **Texto:** nunca va encima de una ilustración. Va en un panel liso o al lado. El logo tampoco va encima, como pide `MARCA.md`.
- **Lugares reales:** si una ilustración muestra un sitio concreto, Rubén revisa que no tenga detalles inventados.
- **Archivos actuales**, generados con Canva:
  - `portada.png`: el Eje Cafetero, con cafetales, palmas de cera y un nevado.
  - `biodiversidad.png`: frailejones, orquídea, colibrí, cóndor, café, heliconias y helechos, sobre crudo.
  - `sibundoy.png`: el valle de Sibundoy. Reservada para la entrada del blog que presente Sibundoy-Translate-1.7B; no va en la página principal.

Son ilustraciones generadas con IA. Para la web final se pueden sustituir por fotos reales con licencia libre, fotos propias o ilustraciones encargadas.

## Iconography

- **Sin iconos de interfaz** salvo los de las redes.
- **Redes:** logos oficiales de Simple Icons, en un solo color, el del texto, a 20 px. Hoy: GitHub, Hugging Face, X y LinkedIn. Discord se añade cuando exista.
- **Logo de ColIA:** `logo-sobre-crudo.svg` en la cabecera, porque va sobre crudo. Con nombre, a 32 px: nombre a 19 px y separado 10 px, como pide `MARCA.md`.

## Components

**Cabecera.** Crudo, fija arriba. Enlaces del menú en tinta. Selector «EN · ES»: el idioma activo en negrita.

**Panel de la portada.** Crudo, radio de 14 px, hasta 780 px de ancho, 36 px de relleno arriba y 44 px a los lados. Título en `display`, frase en `lead` y, debajo, las acciones.

**Botón principal.** Verde cafetal con texto blanco, radio de 8 px y 12 × 20 px de relleno. Uno solo en toda la página: «Join the community».

**Enlaces.** Subrayados con la línea marcada; al pasar el ratón, el subrayado toma el color del texto. Sobre crudo, en verde cafetal y en negrita.

**Fila de proyecto.** Nombre en `item-title`, estado a la derecha, descripción en texto secundario y, debajo, la línea de la bandera.

**Estado «Coming soon».** Punto ámbar de 6 px y texto secundario de 14 px.

**Lista de principios.** Número de dos cifras en Atkinson Hyperlegible Mono, a 28 px y en ocre claro; nombre del principio en negrita blanca; explicación en crudo.

**Franja tejida.** 30 px de alto. Rombos escalonados en celdas de 6 px que se repiten en horizontal, en negro vueltiao sobre crudo. En el pie se invierte: crudo sobre negro vueltiao.

**Banda de biodiversidad.** La ilustración a todo el ancho, 260 px de alto (160 px en móvil). Su fondo debe ser el mismo crudo de la sección, sin franja visible.

**Pie.** Negro vueltiao. A la izquierda, «ColIA · Colombia». A la derecha, los iconos de las redes y el selector de idioma, en crudo.

## Do's and Don'ts

- Do mostrar Colombia con ilustraciones y colores de la tierra, no con la bandera.
- Do usar la bandera solo en el logo y en la línea bajo cada proyecto.
- Do poner el texto siempre sobre un fondo liso de la tabla de combinaciones.
- Do mantener el contraste WCAG AA en todo el texto.
- Do probar cada cambio en escritorio y en móvil, y en inglés y en español.
- Do usar siempre tokens de este archivo. Si falta uno, se añade aquí antes de usarlo.
- Don't usar degradados, sombras ni cuadrículas de tarjetas.
- Don't añadir iconos decorativos ni emojis.
- Don't poner texto ni el logo encima de una ilustración.
- Don't usar el texto secundario gris sobre crudo: no pasa el contraste.
- Don't usar la terracota ni el ocre en texto pequeño.
- Don't añadir un modo oscuro.
