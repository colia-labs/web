---
titulo: "Presentamos Sibundoy-Translate-1.7B"
nombre: "Sibundoy-Translate-1.7B"
entradilla: "Nuestro primer modelo traduce de inglés a español. Tiene 1.700 millones de parámetros, así que funciona en un equipo modesto."
fecha: 2026-12-01
etiqueta: modelo
portada: ../../../assets/sibundoy.png
portadaAlt: "Ilustración del valle de Sibundoy, en el Putumayo, con campos verdes y montañas con neblina"
portadaPie: "El valle de Sibundoy, en el Putumayo, Colombia. Ilustración."
banderaLugar: ["#1E7B34", "#F2D21B", "#FFFFFF"]
# Borrador: no se publica hasta que Rubén complete los TODO y cambie esto a false. La fecha también es provisional.
borrador: true
---

## Por qué un traductor

TODO: por qué lo hicimos, qué problema resuelve y para quién es. Dos o tres párrafos cortos.

## Qué es

| | |
|---|---|
| Modelo de partida | LFM3-1.7B, de Liquid AI (TODO: Base o Instruct) |
| Tarea | Traducción de inglés a español |
| Datos de entrenamiento | Unos 70.000 pares de frases de fuentes abiertas |
| Parámetros | 1.7B |
| Licencia | TODO |

## Qué tan bien traduce

Lo medimos frente a su modelo de partida con el mismo conjunto de prueba. TODO: nombre del conjunto de prueba y qué significa la puntuación, en una línea.

| Modelo | TODO: métrica | Velocidad |
|---|---|---|
| Sibundoy-Translate-1.7B | TODO | TODO tok/s |
| LFM3-1.7B | TODO | TODO tok/s |

Medido en TODO: equipo. tok/s son tokens por segundo; un token es un trozo de palabra.

## Pruébalo

El modelo está en Hugging Face, en `colia-labs/Sibundoy-Translate-1.7B`.

```sh
# TODO: comando o código para ejecutarlo
```

## Qué no hace bien

TODO: limitaciones conocidas. Tipos de texto, longitud, variantes del idioma. Con honestidad y en concreto.

## Por qué Sibundoy

El valle de Sibundoy está en el Putumayo, al sur de Colombia, en lo alto de los Andes. Es uno de esos lugares que merecen ser más conocidos.

Nuestros modelos llevan el nombre en honor a lugares así: hermosos, diversos y llenos de talento, aunque no siempre salgan en el mapa. Los que comparten lugar forman una familia, así que este es el primero de la familia Sibundoy.

## Qué sigue

TODO: próximos pasos del modelo.
