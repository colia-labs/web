# colia.org

Website of [ColIA](https://colia.org), an open-source AI lab and community from Colombia. Built with [Astro](https://astro.build) and published on Cloudflare Pages.

[Versión en español](#español)

## Run it

You need Node 22.23 or later.

```sh
npm install
npm run dev      # http://localhost:4321, with draft posts
npm run build    # the site goes to dist/, without drafts
npm test         # tests for the language redirect
```

## How it's organized

| Path | What it is |
|---|---|
| `src/i18n/textos.ts` | Every text on the site, in English and Spanish |
| `src/content/blog/<language>/` | Blog posts in Markdown. The same post in both languages shares its file name |
| `src/components/`, `src/layouts/` | The pieces of each page |
| `src/styles/global.css` | All styles. The values come from `DESIGN.md` |
| `public/_redirects` | Short links on Cloudflare Pages, like `colia.org/discord` |
| `functions/_middleware.js` | Cloudflare function that sends people to `/es/` when their browser prefers Spanish |
| `herramientas/` | Scripts that generate the share image and the icons in `public/` |

## Writing a post

1. Add `src/content/blog/en/<name>.md` and `src/content/blog/es/<name>.md`.
2. Leave `borrador: true` while you write. Drafts only show with `npm run dev`.
3. Change it to `borrador: false` to publish. The Blog link appears in the menu once there's at least one published post.

The design rules are in [`DESIGN.md`](DESIGN.md). The brand rules are in the `colia-labs/colia` repo.

## License

Each part of this repo has its own terms:

| Part | License |
|---|---|
| Code: everything in `src/` except `src/content/` and `src/assets/`, plus `functions/`, `herramientas/` and the config files | [MIT](LICENSE) |
| Texts: the blog posts in `src/content/` and the texts in `src/i18n/textos.ts` | [CC BY 4.0](LICENSE-CONTENT). You can copy, translate and adapt them if you credit ColIA |
| The ColIA name, the logo and the vueltiao weave | All rights reserved. They are not covered by either license |
| The illustrations in `src/assets/` and `public/og.png` | Not licensed for reuse. They were generated with Canva |
| The Atkinson Hyperlegible fonts in `public/fuentes/` | [SIL Open Font License 1.1](public/fuentes/), by their authors |
| The social network logos | Trademarks of their owners. The drawings come from [Simple Icons](https://simpleicons.org) (CC0) |

## Español

Web de [ColIA](https://colia.org), un laboratorio y una comunidad colombiana de IA abierta. Hecha con [Astro](https://astro.build) y publicada en Cloudflare Pages.

- **Para ejecutarla:** `npm install` y `npm run dev`. Necesitas Node 22.23 o posterior.
- **Textos:** todos están en `src/i18n/textos.ts`, en inglés y en español.
- **Blog:** cada entrada va en `src/content/blog/en/` y `src/content/blog/es/`, con el mismo nombre de archivo. Con `borrador: true` solo se ve en `npm run dev`.
- **Diseño:** las reglas están en [`DESIGN.md`](DESIGN.md).
- **Licencias:** el código va con MIT; los textos, con CC BY 4.0. El nombre ColIA, el logo y el tejido del vueltiao no tienen licencia libre, y las ilustraciones tampoco. Los detalles están en la sección «License».
