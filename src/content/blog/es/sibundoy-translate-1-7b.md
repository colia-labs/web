---
titulo: "Presentamos Sibundoy-Translate-1.7B"
nombre: "Sibundoy-Translate-1.7B"
entradilla: "Nuestro primer modelo traduce de inglés a español. Tiene 1.700 millones de parámetros y está pensado para funcionar en tus equipos de hoy. Hacerlo nos enseñó mucho, y esperamos que te sea útil."
autor: "Rubén Salas"
fecha: 2026-11-01
etiqueta: modelo
portada: ../../../assets/sibundoy1.png
portadaAlt: "Ilustración del valle de Sibundoy, en el Putumayo, con campos verdes y montañas con neblina"
portadaPie: "El valle de Sibundoy, en el Putumayo, Colombia. Ilustración."
banderaLugar: ["#1E7B34", "#F2D21B", "#FFFFFF"]
# Borrador: no se publica hasta que Rubén complete los TODO y cambie esto a false. La fecha también es provisional.
borrador: true
---

<p class="aviso">¿Buscas las cifras, la receta para usarlo o cómo lo entrenamos? Está todo en la <a href="#sección-técnica">sección técnica</a>, más abajo.</p>

## En pocas palabras

- **Qué hace:** Sibundoy-Translate-1.7B es un modelo listo para traducir del inglés al español en tu propio equipo, párrafo a párrafo.
- **Dónde funciona:** ocupa unos 1,3 GB de memoria y funciona a buena velocidad con GPU o sin ella.
- **Qué tan rápido:** traduce un artículo de 900 palabras en unos 15 segundos con una GPU de 6 GB, o en un minuto sin GPU.
- **Cuánto mejoró:** traduce mejor que el modelo del que partimos en todos los exámenes. En medicina gana 5,8 puntos de COMET (una medida automática de calidad de traducción).
- **Frente a otros:** todavía no supera a modelos algo más grandes, de 2.000 a 4.000 millones de parámetros. Se queda cerca, pero por detrás.
- **En qué destaca:** respeta el formato de páginas web y documentos, y escribe un español neutro que lo hace útil para cualquier país hispanohablante.
- **Áreas a mejorar:** la literatura, las redes sociales y los textos de varios párrafos enviados de una sola vez aún le cuestan un poco (por ese motivo recomendamos hacer peticiones enviando al modelo párrafo a párrafo).

## Por qué un traductor

Soy Rubén y hago ColIA. **Sibundoy-Translate-1.7B** nace de una necesidad personal. Cada día busco aprender algo nuevo sobre inteligencia artificial y tecnología. Mucho de ese contenido se publica en inglés y no siempre está disponible en español. Adicionalmente, en Colombia y en buena parte de América Latina el nivel de inglés es bajo, incluido el mío.

Quería leer ese contenido sin depender del traductor del navegador ni de servicios de pago, que en nuestras regiones no están al alcance de todos. Entonces me di cuenta de que los modelos de hoy permiten construir software personal para resolver nuestras propias necesidades. Así nació mi lector RSS: traduce artículos, noticias y papers de arXiv al español con un modelo propio, sin conexión a internet.

Pero surgió otro problema: encontrar un modelo lo bastante pequeño para cualquier equipo, sin hardware de última generación. Y a la vez, lo bastante capaz para traducir bien textos con fórmulas, enlaces, menciones o LaTeX.

Así nace Sibundoy-Translate-1.7B: un traductor de inglés a español que cabe en casi cualquier equipo, sin necesidad de GPU, y que ya casi[^1] resuelve el problema principal de mi lector RSS y de mi búsqueda de aprendizaje en otra lengua. Además, me permitió experimentar y aprender, uno de los fines de ColIA.

## Por qué Sibundoy

El nombre viene del valle de Sibundoy, mi lugar de origen. Es una región formada por cuatro hermosos municipios **(Sibundoy, Colón, San Francisco y Santiago)**, en el Putumayo, al sur de Colombia. Con él quiero rendir homenaje a mi hogar, a mi pueblo, a mi gente y a las regiones de Colombia y Latinoamérica que a veces olvidamos.

También quiero mostrar que el valle de Sibundoy, el Putumayo, Colombia y Latinoamérica están llenos de gente talentosa, capaz de construir y crear.

<aside class="nota"><strong>Nota personal:</strong> tú que estás leyendo esto, estoy seguro de que eres una de esas increíbles y talentosas personas. Quiero decirte que luches por tus sueños, construyas con pasión, cumplas lo que te propongas y nos ayudes a hacer de nuestras hermosas regiones un lugar más destacado, reconocible y con más oportunidades para todos. <em>Si quieres unirte y ayudarnos en ColIA, ¡escríbenos a <a href="mailto:hola@colia.org">hola@colia.org</a>!</em></aside>

## Qué aprendimos

Este ha sido uno de los experimentos más interesantes e importantes. Nos deja varias enseñanzas útiles para las siguientes versiones del modelo, que esperamos sean aún mejores.

- **Elegir el profesor con datos:** probamos cuatro modelos grandes antes de usar uno para traducir datos. Eso nos ayudó a elegir el mejor: Gemma 4 31B.
- **El modelo base aprendió mejor que el de chat** para una tarea tan concreta como traducir. Aún no sabemos por qué. Nuestra hipótesis es que el modelo base no trae los hábitos de chat del modelo instruct, así que aprende la tarea sin tener que desaprender nada.
- **Guardar copias por el camino:** en el entrenamiento de la v1 tuvimos un corte y perdimos el 80 % del trabajo, alrededor de una hora. En la v2, Colab apagaba las máquinas a los 20 minutos porque nadie les mandaba órdenes. Como ya habíamos aprendido la lección de la v1, pudimos seguir cada vez desde la última copia guardada.
- **Medir siempre nos dirá la verdad de los fallos:** creíamos que el límite sería la longitud del texto. Al medirlo, vimos que era otro: los saltos de párrafo. El modelo falla con textos que tienen varios párrafos separados por líneas en blanco.
- **Probar la receta tal como la usará otra persona:** en nuestro servidor de siempre todo funcionaba. Con el comando limpio, las respuestas llegaban vacías porque faltaba una opción: sin ella, el modelo enviaba la traducción como razonamiento y no como respuesta.

## Qué sigue

Queremos seguir aprendiendo y mejorando. La siguiente versión traducirá en los dos sentidos, de inglés a español y de español a inglés. Y buscaremos cerrar la diferencia con los modelos más grandes con estos pasos:

- **Limpieza profunda de los datos:** descartar las traducciones humanas demasiado libres, incompletas o de baja calidad que puedan contaminar.
- **Añadir ejemplos de varios párrafos:** así intentaremos resolver los cortes en los saltos de párrafo y la necesidad de enviar un párrafo por petición.
- **Probar un traductor puro, sin chat:** que reciba solo el par de idiomas (de entrada y de salida) y el texto, y devuelva la traducción. Así no hay razonamiento que apagar ni instrucción que recordar, y el modelo es más fácil de usar.
- **Entrenar con preferencias:** enseñarle a preferir la mejor de dos traducciones de la misma frase, para que elija traducciones más naturales y fieles.
- **Adicionales:** más adelante queremos probar una versión más pequeña, para que en un portátil sin GPU vaya el doble de rápido y quizá llegar a teléfonos móviles.

<aside class="nota"><strong>Recordatorio:</strong> <em>si quieres unirte y ayudarnos en ColIA a construir y aprender cómo hacer mejor las cosas, ¡escríbenos a <a href="mailto:hola@colia.org">hola@colia.org</a>! Estaremos encantados de recibirte.</em></aside>

---

## Sección técnica

Desde aquí, los detalles: 
- Qué es exactamente
- Cómo lo entrenamos
- Cómo lo medimos
- La receta para usarlo
- Sus licencias

## Qué es

| | |
|---|---|
| Modelo de partida | LFM3-1.7B-Base, de <a href="https://www.liquid.ai/">Liquid AI</a> |
| Método | LoRA de rango 64 (un ajuste que entrena solo una pequeña parte del modelo), una vuelta a los datos |
| Tarea | Traducción de inglés a español, conservando HTML y Markdown |
| Datos de entrenamiento | 70.605 pares de textos de fuentes abiertas, y otros 500 pares para validar |
| Parámetros | 1.700 millones |
| Tamaño del fichero | 1,1 GB (GGUF Q4_K_M) |
| Licencia | LFM Open License v1.0, heredada de LFM3 (ver [Licencias](#licencias)) |

## Cómo lo hicimos

### Los datos

Reunimos unos 71.000 pares de textos en tres partes casi iguales: noticias, textos generales y ciencia. Queríamos un traductor que sirviera para más que noticias.

- **Noticias:** Wikinews y Global Voices.
- **Textos generales:** FineTranslations y frases de Tatoeba.
- **Ciencia y técnica:** resúmenes de PLOS y SciELO (medicina, biología, psicología, educación…), artículos de arXiv y la documentación de Python en español.

Los pares tienen tres orígenes:

| Origen | Pares | Fuentes |
|---|---|---|
| Traducción humana | 36% | Global Voices, SciELO (los propios autores), documentación de Python y Tatoeba |
| Español escrito por una persona; inglés traducido por una máquina | 28% | FineTranslations: webs en español que Hugging Face tradujo al inglés con Gemma 3 27B. Lo usamos al revés, así que el modelo aprende a escribir un español humano |
| Traducido por un modelo «profesor» | 36% | Wikinews, PLOS y arXiv, traducidos por Gemma 4 31B y, en menor medida, por GLM 5.3 Flash |

Como comentamos anteriormente, antes de elegir el profesor medimos cuatro candidatos con los mismos exámenes, y ganó Gemma 4 31B.

Después limpiamos: quitamos los pares repetidos, los que estaban sin traducir y los que se parecían a los exámenes. Revisamos las traducciones del profesor con comprobaciones automáticas: cifras, enlaces, etiquetas HTML y longitud. Hubo 760 fallos graves, un 0,5 % del total: en su mayoría se corrigieron y el resto se descartaron.

### El entrenamiento

Entrenamos dos versiones a la vez: una sobre el modelo base de LFM3 y otra sobre su versión de chat (instruct). Cada una corrió en una GPU L4 de Google Colab durante unas 6 horas.

**Ganó la versión base en todas las medidas.** Por eso Sibundoy-Translate parte de LFM3-1.7B-Base.

No salió a la primera. Colab apagaba las máquinas a los 20 minutos de entrenar, y tardamos tres intentos en entender por qué. La causa: si nadie le manda órdenes a la máquina, Colab la da por abandonada, aunque esté trabajando. Lo resolvimos mandándole una orden mínima cada dos minutos y guardando una copia del entrenamiento cada 250 pasos. Gracias a esas copias, cada corte solo nos costó unos minutos.

Empezó como una noche que prometía ser larga, por los cortes de Colab. Cuando dimos con la causa, el entrenamiento corrió hasta el final sin más contratiempos.

## Qué tan bien traduce

Usamos dos medidas:

- **COMET:** puntúa de 0 a 100 si la traducción conserva el sentido del original. Es la que más pesa.
- **chrF:** mide cuánto se parece, letra a letra, a una traducción humana.

### Frente a su modelo de partida

| Examen | LFM3-1.7B | Sibundoy-Translate-1.7B | Mejora |
|---|---|---|---|
| WMT24++ (en → es) | 74,9 | **80,4** | +5,5 |
| Nuestro examen (noticias, web y frases con HTML y Markdown) | 84,8 | **87,6** | +2,8 |
| Biomédico (resúmenes de Medline) | 81,1 | **86,9** | **+5,8** |
| Noticias (NTREX) | 81,4 | **86,1** | +4,6 |
| FLORES+ (Wikipedia) | 82,9 | **86,0** | +3,2 |
| Salud (TICO-19) | 85,2 | **88,1** | +2,9 |

Cifras de COMET. WMT24++ es un examen público de Google con redes sociales, literatura, discursos y noticias. Sus referencias están en español de México. Los otros cuatro son exámenes públicos de un tema concreto.

Donde más mejoró fue en medicina: +5,8 puntos. Es justo lo que más abunda en los datos, entre resúmenes de PLOS y SciELO.

### Frente a otros modelos pequeños

Aquí no ganamos, y preferimos contarlo porque en **ColIA** cada derrota también es una victoria, ya que nos permite aprender y mejorar.

| Modelo | WMT24++ | Biomédico | FLORES+ | Noticias (NTREX) | Salud (TICO-19) |
|---|---|---|---|---|---|
| **Sibundoy-Translate-1.7B** | 80,4 | 86,9 | 86,0 | 86,1 | 88,1 |
| Tower+ 2B | 81,7 | 87,2 | 86,8 | 86,8 | **88,9** |
| Gemma 4 E2B | 82,4 | 87,2 | 86,6 | 86,2 | 88,4 |
| TranslateGemma 4B | 82,8 | **87,5** | **87,3** | 86,6 | 88,2 |
| Gemma 4 E4B | **82,9** | 87,4 | 87,1 | **87,0** | 88,7 |

Cifras de COMET. Sibundoy queda entre 0,1 y 2,5 puntos por debajo de modelos de 2 a 4 mil millones de parámetros. Pensábamos que ganaría en ciencia y medicina, porque abundan en sus datos, pero no fue así: también pierde ahí, por poco. Lo que le falta es calidad general de traducción, no un tipo de texto concreto.

Comprobamos que los exámenes no estuvieran en nuestros datos: prácticamente ninguno se repite, salvo el 0,3 % de TICO-19 y el 2,1 % de FLORES+.

### Donde sí ganamos

**Conserva el formato.** Nuestro examen tiene 213 textos, y 47 traen HTML o Markdown. Sibundoy conservó el formato en 210 de los 213; los demás modelos pequeños, entre 179 y 195. Si traduces páginas web o documentación, esto importa tanto como la calidad y es justo nuestro punto fuerte.

**Escribe un español neutro.** En WMT24++ usó formas de España en el 0,4 % de las frases; los demás modelos pequeños, entre el 1,4 % y el 1,9 %. Tampoco usó regionalismos de un solo país, como el voseo o «ahorita». Nuestro detector solo busca palabras concretas, así que un estilo regional más sutil no lo vería.

## Receta recomendada

La medimos en las dos máquinas de nuestras recetas: un sobremesa con una RTX 3050 de 6 GB y un portátil sin GPU (i7-13620H). Usamos llama.cpp b11940 en el portátil y b11946 en el sobremesa.

| | Sobremesa · RTX 3050 6 GB | Portátil · solo CPU |
|---|---|---|
| Generación | **121 tok/s** | **36 tok/s** |
| Lectura del texto de entrada | ~4.600 tok/s | ~215 tok/s |
| Memoria con `-c 4096` | ~1,3 GB de VRAM | ~1,2 GB de RAM |
| Artículo de 923 palabras, párrafo a párrafo | **15,5 s** | **57 s** |

tok/s son tokens por segundo; un token es un trozo de palabra. Va exactamente igual de rápido que LFM3-1.7B: el ajuste no cambia la arquitectura.

**Sobremesa (GPU):**

```sh
llama-server -m Sibundoy-Translate-1.7B-Q4_K_M.gguf \
  -ngl 99 -c 4096 --reasoning off \
  --temp 0.1 --top-k 50 --repeat-penalty 1.1
```

**Portátil (solo CPU):**

```sh
llama-server -m Sibundoy-Translate-1.7B-Q4_K_M.gguf \
  -lm none -t 6 -tb 16 -fa off -c 4096 --reasoning off \
  --temp 0.1 --top-k 50 --repeat-penalty 1.1
```

| Opción | Por qué |
|---|---|
| **Un párrafo por petición** | Lo más importante. Si el texto trae varios bloques separados por líneas en blanco, a menudo traduce el primero y se para, o repite un bloque una y otra vez. Con textos de ~4.000 tokens, ninguno de 6 salió entero. Con un solo bloque, siempre sale entero. |
| `--reasoning off` | **Obligatoria.** Sin ella, llama-server guarda la traducción como «razonamiento» y la respuesta llega vacía. |
| `-c 4096` | Basta para un párrafo largo y su traducción. Caben 32.768 tokens en 1,6 GB, pero no aportan nada: darle más texto de una vez no mejora la traducción. |
| `--repeat-penalty 1.1` | Sin ella sube un poco el parecido con la referencia, pero en una prueba entró en bucle y repitió «¡» cientos de veces. |
| `-lm none -t 6 -tb 16 -fa off` (CPU) | Lo mismo que medimos para LFM3-1.7B en este portátil. Carga el modelo en RAM, usa un hilo por núcleo de rendimiento para generar y todos para leer, y sin FlashAttention va más rápido en esta CPU. |
| Q4_K_M | La versión Q8_0 no tradujo mejor (diferencias de COMET dentro del ruido) y pesa un 70 % más. |

## Pruébalo

El modelo está en Hugging Face, en `colia-labs/Sibundoy-Translate-1.7B`.

Arráncalo con la receta de arriba que corresponda a tu equipo. Después, manda cada párrafo como mensaje de usuario a `/v1/chat/completions`, con su instrucción exacta, una línea en blanco y el texto:

```text
Translate the following text from English into Spanish. Keep any HTML tags and Markdown formatting exactly as they are. Reply with the translation only.

The **new vaccine** reduced hospital admissions by 40% in [the trial](https://example.org).
```

Respuesta:

```text
La **nueva vacuna** redujo las admisiones hospitalarias en un 40% en el [ensayo](https://example.org).
```

Ahí se ve también uno de sus errores: «admisiones hospitalarias» es un calco del inglés. Lo natural sería «ingresos hospitalarios».

## Qué no hace bien

- **Traduce peor que modelos algo más grandes**, como Tower+ 2B, Gemma 4 E2B o TranslateGemma 4B. La diferencia va de 0,1 a 2,5 puntos de COMET.
- **Literatura y redes sociales** son sus puntos más flojos: frases coloquiales, juegos de palabras, ironía.
- **Calcos del inglés**, como «admisiones hospitalarias» por «ingresos hospitalarios».
- **Varios párrafos de una vez.** Con bloques separados por líneas en blanco, a menudo traduce solo el primero o entra en bucle. Hay que darle un párrafo por petición (ver la receta). Se entrenó casi siempre con un párrafo por ejemplo, y aprendió a terminar al acabar uno.
- **Solo de inglés a español.** El sentido contrario no lo aprendió.
- **Necesita su instrucción y `--reasoning off`.** Sin la instrucción se comporta como un chat; sin la opción, la respuesta llega vacía.
- **A veces pierde la etiqueta HTML que envuelve todo el texto**, como un `<p>` inicial, aunque conserva las de dentro.

## Licencias

**El modelo.** Sibundoy-Translate hereda la LFM Open License v1.0 de LFM3, porque contiene ese modelo. Es libre para investigación y para uso comercial de personas y empresas con menos de 10 millones de dólares de ingresos al año. Por encima de esa cifra, el uso comercial no está cubierto y hay que pedir permiso a Liquid AI. No es una licencia de código abierto en sentido estricto: son pesos abiertos con un límite comercial. Con el modelo publicamos el texto de la licencia y avisamos de que es una versión modificada de LFM3-1.7B-Base.

**Los datos.** No publicamos los datos de entrenamiento, solo el modelo. Estas son sus fuentes y licencias:

| Fuente | Qué aporta | Licencia |
|---|---|---|
| Global Voices (también vía OPUS) | Noticias, traducción humana | CC BY 3.0 |
| SciELO | Resúmenes científicos traducidos por sus autores, solo de revistas con licencia CC BY | CC BY |
| Wikinews | Noticias | CC BY 2.5 y 4.0 |
| PLOS | Resúmenes científicos | CC BY 4.0 |
| FineTranslations | Textos web en español | ODC-By 1.0, y las condiciones de uso de Common Crawl |
| Tatoeba | Frases cortas | CC BY 2.0 FR |
| arXiv | Títulos y resúmenes | CC0 (metadatos de arXiv) |
| Documentación de Python en español | Documentación técnica | CC0 (traducción) y licencia de la PSF |

**Los modelos que tradujeron parte de los datos:** Gemma 4 31B (Apache 2.0), GLM 5.3 Flash (MIT) y, en unos 1.300 pares de arXiv, DeepSeek V4.1 Flash (MIT) o MiniMax M3 (MiniMax Community License).

## Aviso

Sibundoy-Translate-1.7B es nuestro primer modelo, y es nuevo: puedes encontrar errores y fallos que aún no conocemos. Nos encantaría recibir todos los comentarios posibles para saber dónde mejorar. Cualquier comentario es bienvenido en nuestros canales. No es un modelo perfecto, pero seguimos trabajando para mejorarlo. ¡Nos encantaría tu ayuda!

---

[^1]: Casi, porque Sibundoy-Translate-1.7B es un punto de partida que cualquiera puede ajustar para lo que necesite. Yo lo ajustaré para las necesidades concretas de mi lector RSS.
